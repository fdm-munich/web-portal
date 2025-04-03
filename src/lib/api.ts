import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "./api/v1"; // generated by openapi-typescript

const fetchClient = createFetchClient<paths>( {
  baseUrl : "http://localhost:3000/api",
} );

export const $api = createClient( fetchClient );
