import { existsSync } from 'node:fs'
import { loadEnvFile } from 'node:process'
import env from 'env-var'

if (existsSync('.env'))
  loadEnvFile('.env')

export default {
  mode: env.get('NODE_ENV').default('production').asString(),
}
