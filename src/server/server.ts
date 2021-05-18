import fastify from 'fastify'
import { Type, Static } from '@sinclair/typebox'

import { UserSchema } from '../common/schemas'

const AddUserSchema = Type.Object({
  user: UserSchema
})

type AddUserSchema = Static<typeof AddUserSchema>;

export function createServer () {
  const server = fastify({ logger: true })

  server.post<{ Body: AddUserSchema }>(
    '/add-user',
    { schema: { body: AddUserSchema } },
    async (request, response) => {
      const { body: { user } } = request
      server.log.info(user)
      const dbResponse = await Promise.resolve({ message: `User ${user.id} added successfully!`})
      response.send(JSON.stringify(dbResponse))
    }
  )

  return server
}