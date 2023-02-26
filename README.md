URL Shortener Service
This is a URL shortener service that is built using AWS CDK, Lambda functions, API Gateway, and DynamoDB. The service takes a long URL as an input and generates a short URL that can be used to redirect to the original URL.

Prerequisites
Before you can run this project, you need to have the following software installed on your computer:

Node.js (version 16.x or later)
AWS CLI
Installation
To install this project, you need to follow these steps:

Clone the repository to your local machine:
git clone https://github.com/your-username/url-shortener-service.git
Install the dependencies:
cd url-shortener-service
npm install
Deploying the Stack
To deploy the stack, you need to run the following command:
npm run cdk deploy
This command uses AWS CDK to create the necessary resources, including a DynamoDB table, two Lambda functions, and two API Gateway endpoints. The resources are defined in the UrlShortenerSvcStack.ts file.

The stack creates two Lambda functions, one for URL shortening and one for URL redirection. The shortener function takes a long URL as an input and generates a short URL that can be used to redirect to the original URL. The redirect function takes a short URL as an input and redirects to the original URL.

curl -X POST -H "Content-Type: application/json" -d '{"longUrl": "https://example.com/very/long/url/that/needs/to/be/shortened"}' https://api.example.com/shorten
This command sends a POST request to the shorten endpoint with a JSON payload that contains the longUrl parameter. The command should return a JSON response that contains the short URL.
Removing the Stack
To remove the stack, you need to run the following command:
npm run cdk destroy
This command removes all the resources created by the stack, including the DynamoDB table, the Lambda functions, and the API Gateway endpoints.

Dependencies
This project depends on the following npm packages:

aws-cdk-lib: The AWS CDK library for defining infrastructure as code.
aws-sdk: The AWS SDK for accessing AWS services.
shortid: A library for generating short, unique, non-sequential IDs.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
