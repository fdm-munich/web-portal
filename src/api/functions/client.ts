import createReactQueryClient from "openapi-react-query";
import createFetchClient from "openapi-fetch";
import type { paths } from "@/generated/functions/v1";

const client = createFetchClient<paths>(
  {
    baseUrl : "http://localhost:3000/api"
  }
);

export const functionClient = createReactQueryClient( client );
