import { Response } from "@netlify/functions/dist/function/response";

export const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Max-Age": "2592000",
  "Access-Control-Allow-Credentials": "true",
};

/**
 *
 * @param body Response Message
 * @param param1 status code
 * @returns JSON
 */
function response(body: object, { status = 403 }): Response {
  return {
    statusCode: status,
    headers,
    body: JSON.stringify(body),
  };
}

export default response;
