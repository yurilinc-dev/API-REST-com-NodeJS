import fastify from 'fastify'
import { knex } from './database'
const app = fastify()

// GET, POST, PUT, PATCH, DELETE
// http://localhost:3333/hello

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})
app.listen({
    port: 3333,
  })
  .then(() => {
    const wordstring = 'HTTP Server.\nStatus: Running'
    console.log(wordstring + "\n\nTo pause the application, press 'Ctrl + C'.")
  })
