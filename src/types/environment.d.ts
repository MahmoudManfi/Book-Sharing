declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      MONGO_URI_LOCAL: string;
      NODE_ENV: 'development' | 'production' | 'test';
      PORT?: number;
      MAIN_ADMIN_ID: string;
    }
  }
}

export {};
