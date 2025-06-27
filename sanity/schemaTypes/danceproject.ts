// studio/schemas/danceProject.ts
import { defineField, defineType } from 'sanity';

export const danceProjectType = defineType({
  name: 'danceProject',
  title: 'Dance Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      type: 'string',
      title: 'Year',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
    }),
    defineField({
      name: 'videoUrl',
      type: 'url',
      title: 'Video URL',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'dancers',
      type: 'array',
      title: 'Dancers',
      of: [{ type: 'reference', to: [{ type: 'dancer' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      year: 'year',
    },
    prepare(selection) {
      const { title, media, year } = selection;
      return {
        title,
        media,
        subtitle: year,
      };
    },
  },
});