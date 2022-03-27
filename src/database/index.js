import { knex } from 'knex'
import knexfile from '../../knexfile.cjs'

const knex = knexfile(knexfile.development)

export { knex }