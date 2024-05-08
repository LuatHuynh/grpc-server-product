require('dotenv').config();

class Config {
  UUID_VERSION: '3' | '4' | '5' = '4';
}

export const config = new Config();
