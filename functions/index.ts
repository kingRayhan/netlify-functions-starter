import { Handler } from "@netlify/functions";
import response from "../helpers/response";

require("dotenv").config();

export const handler: Handler = async (event, context) => {
  return response(
    {
      message: "Test function working",
      "env.APP_NAME": process.env.APP_NAME,
    },
    { status: 200 }
  );
};
