export const { JWT_SECRET = 'JWT_SECRET' } = process.env;
export const { DB_ADDRESS = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
// при проблеме с mongo указать вместо localhost ip адрес
/* при проблеме с версиями noda использовать команду
  NODE_OPTIONS=--openssl-legacy-provider && react-scripts start" */
