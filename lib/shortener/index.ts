import { DynamoDB } from 'aws-sdk';
import * as shortid from 'shortid';

const dynamoDb = new DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME;

export async function handler(event: any) {
  const longUrl = event.body.longUrl;

  // Generate a random short string using the `shortid` library
  const shortUrl = shortid.generate();

  // Store the long URL and short URL in the DynamoDB table
  await dynamoDb
    .put({
      TableName: "urls-Table",
      Item: {
        shortUrl: shortUrl,
        longUrl: longUrl,
      },
    })
    .promise();

  return { shortUrl: shortUrl };
}
