// utils/configLoader.ts
import fs from 'fs';
import path from 'path';

interface Config {
  baseUrl: string;
  validUsername: string;
  validPassword: string;
  invalidUsername: string;
  invalidPassword: string;
}

export function loadConfig(): Config {
  const env = process.env.ENV || 'production'; // Default to 'development' if ENV is not set
  const configPath = path.join(__dirname, `../config/${env}.json`);

  if (!fs.existsSync(configPath)) {
    throw new Error(`Config file not found for environment: ${env}`);
  }

  return JSON.parse(fs.readFileSync(configPath, 'utf8')) as Config;
}