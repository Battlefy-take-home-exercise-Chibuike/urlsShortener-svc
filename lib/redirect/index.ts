import { DynamoDB } from 'aws-sdk';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME;

export async function handler(event: any) {
  const shortUrl = event.pathParameters.shortUrl;

  // Retrieve the long URL from the DynamoDB table based on the short URL
  const result = await dynamoDb
    .get({
      TableName: "urls-Table",
      Key: {
        shortUrl: shortUrl,
      },
    })
    .promise();

  if (!result.Item) {
    // Return a 404 error if the short URL was not found in the table
    return {
      statusCode: 404,
      body: 'Not found',
    };
  }

  // Redirect the user to the long URL
  return {
    statusCode: 302,
    headers: {
      Location: result.Item.longUrl,
    },
  };
}
