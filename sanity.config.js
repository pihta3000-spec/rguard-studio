import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas/index.js'

export default defineConfig({
  name: 'rguard',
  title: 'RGUARD CMS',
  projectId: 'y9ptramm',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
