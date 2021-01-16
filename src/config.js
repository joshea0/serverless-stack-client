const config = {
  STRIPE_KEY: "pk_test_QZbLA32tn7Mp1xPJnZ10G9lH00uimP4IQ8",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "joshea-serverless-stack-notes",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://oi3p58sts9.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_CrqQLKhYM",
    APP_CLIENT_ID: "5qn1f1pg17pao59bq2sjei1i8r",
    IDENTITY_POOL_ID: "us-west-2:e7552a1f-bb6d-4a3d-aa1b-56eae342098f",
  },
};

export default config;
