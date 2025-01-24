export interface CodeGenerationRequest {
    prompt: string;
    temperature?: number;
  }
  
  export interface AWSConfig {
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
  }