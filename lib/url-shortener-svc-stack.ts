import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as path from 'path';
import { Construct } from 'constructs';

export class UrlShortenerSvcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the DynamoDB table
    const table = new dynamodb.Table(this, 'urls-Table', {
      partitionKey: { name: 'shortUrl', type: dynamodb.AttributeType.STRING },
      tableName: 'urls-Table',
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      //removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    // Create the Lambda function for URL shortening
    const shortenerFunc = new lambda.Function(this, 'ShortenerFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'shortener')),
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // Create the API Gateway endpoint for URL shortening
    const shortenerApi = new apigateway.RestApi(this, 'ShortenerApi');
    const shortenerIntegration = new apigateway.LambdaIntegration(shortenerFunc);
    const shortenerResource = shortenerApi.root.addResource('shorten');
    shortenerResource.addMethod('POST', shortenerIntegration);

    // Grant the Lambda function permission to read and write to the DynamoDB table
    table.grantReadWriteData(shortenerFunc);

    // Create the Lambda function for URL redirection
    const redirectFunc = new lambda.Function(this, 'RedirectFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'redirect')),
      environment: {
        TABLE_NAME: table.tableName,
      },
    });

    // Create the API Gateway endpoint for URL redirection
    const redirectApi = new apigateway.RestApi(this, 'RedirectApi');
    const redirectIntegration = new apigateway.LambdaIntegration(redirectFunc);
    const redirectResource = redirectApi.root.addResource('{shortUrl}');
    redirectResource.addMethod('GET', redirectIntegration);

    // Grant the Lambda function permission to read from the DynamoDB table
    table.grantReadData(redirectFunc);
  }
}

const app = new cdk.App();
new UrlShortenerSvcStack(app, 'UrlShortenerSvcStack');
app.synth();
