import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './posttype'
import { danceProjectType } from './danceproject'
import { dancerType } from './dancer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, danceProjectType, dancerType],
}
