// src/handler.ts
import { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: '👋 Hello from Lambda (local TypeScript)!',
      input: event,
    }),
  };
};
