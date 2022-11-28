/* eslint @typescript-eslint/no-var-requires: "off" */
require("dotenv").config();
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:9000/graphql",
  // documents: "src/**/*.tsx",
  generates: {
    "src/gql/graphql.ts": {
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        // "typescript-react-apollo",
      ],
    },
    // "./graphql.schema.json": {
    //   plugins: ["introspection"],
    // },
  },
};

export default config;
