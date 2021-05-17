import { AddressInfo } from 'net'
import { createServer } from './server.js'

const app = createServer()

try {
  await app.listen(3000)
} catch (error) {
  app.log.error(error)
  process.exit(1)
}