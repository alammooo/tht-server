declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production';
      readonly PORT: string;
      readonly JWT_SECRET: string;
    }
  }
}

export {};
