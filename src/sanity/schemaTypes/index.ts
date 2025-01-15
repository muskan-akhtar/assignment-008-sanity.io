import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog' 
import { student } from './student'
import { teacher } from './teacher'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog ,student ,teacher],
} 
