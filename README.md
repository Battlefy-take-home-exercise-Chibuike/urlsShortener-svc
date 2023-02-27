# h1 URL Shortener Service
This is a URL shortener service that is built using AWS CDK, Lambda functions, API Gateway, and DynamoDB. The service takes a long URL as an input and generates a short URL that can be used to redirect to the original URL.

## h2 Prerequisites
Before you can run this project, you need to have the following software installed on your computer:

+ Node.js (version 19.x or later)
+ AWS CLI installation
+ Setup local AWS authentication and Authorisation using: aws configure

## h2 To install this project, you need to follow these steps:

### h3 Clone the repository to your local machine:
```
git clone https://github.com/Battlefy-take-home-exercise-Chibuike/urlsShortener-service.git
```

## h2 Install the dependencies:
+ cd  urlsShortener-service
```
npm install
```

## h2 Deploying the Stack
### h3 To deploy the stack, you need to run the following command:
```
npm run cdk deploy
```
This command uses AWS CDK to create the necessary resources, including a DynamoDB table, two Lambda functions, and two API Gateway endpoints. The resources are defined in the UrlShortenerSvcStack.ts file.
The stack creates two Lambda functions, one for URL shortening and one for URL redirection. The shortener function takes a long URL as an input and generates a short URL that can be used to redirect to the original URL. The redirect function takes a short URL as an input and redirects to the original URL.

## h2 To remove the stack, you need to run the following command:
``
npm run cdk destroy
```
This command removes all the resources created by the stack, including the DynamoDB table, the Lambda functions, and the API Gateway endpoints.

## h2 Dependencies
### h3 This project depends on the following npm packages:

+ aws-cdk-lib: The AWS CDK library for defining infrastructure as code.
+ aws-sdk: The AWS SDK for accessing AWS services.
+ shortid: A library for generating short, unique, non-sequential IDs.

**The `cdk.json` file tells the CDK Toolkit how to execute your app.**

## h2 Useful commands

+ npm run build`   compile typescript to js
+ npm run watch`   watch for changes and compile
+ npm run test`    perform the jest unit tests
+ cdk deploy`      deploy this stack to your default AWS account/region
+ dk diff`        compare deployed stack with current state
+ cdk synth`       emits the synthesized CloudFormation template
