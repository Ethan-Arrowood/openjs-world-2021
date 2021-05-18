import { createServer } from './server'
import { PORT } from '../common/env'

async function run () {
  const app = createServer()

  try {
    await app.listen(PORT)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

run()