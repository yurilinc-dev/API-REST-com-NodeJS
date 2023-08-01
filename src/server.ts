import fastify from 'fastify';
import crypto from 'node:crypto';
import { knex } from './database';


const app = fastify()

// GET, POST, PUT, PATCH, DELETE
// http://localhost:3333/hello

app.get('/hello', async () => {
  const transaction = await knex('transactions')
  .where('amount', 1000)
  .select('*')

  return transaction
});

app.listen({
  port: 3333
}).then(() => {
  const wordstring = 'HTTP Server.\nStatus: Running';
  console.log(wordstring + "\n\nTo pause the application, press 'Ctrl + C'.");
});
