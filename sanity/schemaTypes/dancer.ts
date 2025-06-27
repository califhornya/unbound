// studio/schemas/dancer.ts
import { defineField, defineType } from 'sanity';

export const dancerType = defineType({
  name: 'dancer',
  title: 'Dancer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});