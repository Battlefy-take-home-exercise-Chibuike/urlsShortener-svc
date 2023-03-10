# URL Shortener Service
This is a URL shortener service that is built using AWS CDK, Lambda functions, API Gateway, and DynamoDB. The service takes a long URL as an input and generates a short URL that can be used to redirect to the original URL.

![Capture](https://user-images.githubusercontent.com/126279861/221706370-f1927c18-0362-4dfa-afae-d7709b2b040f.PNG)

## Prerequisites
Before you can run this project, you need to have the following software installed on your computer:

+ Node.js (version 19.x or later)
+ AWS CLI installation
+ Setup local AWS authentication and Authorisation using: aws configure

## To install this project, you need to follow these steps:

### Clone the repository to your local machine:
```
git clone https://github.com/Battlefy-take-home-exercise-Chibuike/urlsShortener-svc.git
```

## Install the dependencies:
+ cd  urlsShortener-service
```
npm install
```

## Deploying the Stack
### To deploy the stack, you need to run the following command:
```
npm run cdk deploy
```
This command uses AWS CDK to create the necessary resources, including a DynamoDB table, two Lambda functions, and two API Gateway endpoints. The resources are defined in the UrlShortenerSvcStack.ts file.
The stack creates two Lambda functions, one for URL shortening and one for URL redirection. The shortener function takes a long URL as an input and generates a short URL that can be used to redirect to the original URL. The redirect function takes a short URL as an input and redirects to the original URL.

## To remove the stack, you need to run the following command:
```
npm run cdk destroy
```
This command removes all the resources created by the stack, including the DynamoDB table, the Lambda functions, and the API Gateway endpoints.

## Dependencies
### This project depends on the following npm packages:

+ aws-cdk-lib: The AWS CDK library for defining infrastructure as code.
+ aws-sdk: The AWS SDK for accessing AWS services.
+ shortid: A library for generating short, unique, non-sequential IDs.

The cdk.json file tells the CDK Toolkit how to execute your app.

## Useful commands

+ ```npm run build```   compile typescript to js
+ ```npm run watch```   watch for changes and compile
+ ```npm run test```    perform the jest unit tests
+ ```cdk deploy```      deploy this stack to your default AWS account/region
+ ```dk diff```       compare deployed stack with current state
+ ```cdk synth```       emits the synthesized CloudFormation template (cdk-synth-output.yaml is the template for the service in this project)

##  To accommodate for a high surge of requests, up to 9000 parallel requests, there are a few steps that you can take:
+ Increase the provisioned capacity of the DynamoDB table - You can increase the read and write capacity of the DynamoDB table to handle more concurrent requests. You can do this either manually or automatically using DynamoDB auto-scaling. With auto-scaling, you can configure DynamoDB to automatically adjust the capacity based on the traffic to your application.
+ Use API Gateway caching - You can enable caching in API Gateway to reduce the number of requests that reach your Lambda function. API Gateway caching can help reduce latency and improve the performance of your API.
+ Use CloudFront as a content delivery network (CDN). This can reduce the load on your API Gateway and Lambda function.

