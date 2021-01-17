const dev = {
  STRIPE_KEY: "pk_test_QZbLA32tn7Mp1xPJnZ10G9lH00uimP4IQ8",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1r5lwt1m6dgjs",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://x99r2sgxa8.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_FtJY5ROeF",
    APP_CLIENT_ID: "7penr1g1vuuaa4ita0mkad6l9h",
    IDENTITY_POOL_ID: "us-east-1:5c880b5b-e139-4a03-b47d-5834b92ec51b",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_QZbLA32tn7Mp1xPJnZ10G9lH00uimP4IQ8",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1pmxhzoiaznsw",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://oi3p58sts9.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_j1hQxnzJG",
    APP_CLIENT_ID: "q5ggoc13hq4t54o2gqo68rgt6",
    IDENTITY_POOL_ID: "us-east-1:9ef4c0fe-e491-406a-9001-481ed76dd8d9",
  },
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
