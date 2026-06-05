export default {
  name: 'post',
  title: 'Статьи',
  type: 'document',
  fields: [
    { name: 'title', title: 'Заголовок', type: 'string', validation: R => R.required() },
    { name: 'slug', title: 'URL (slug)', type: 'slug', options: { source: 'title' }, validation: R => R.required() },
    {
      name: 'category',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'Вирусный контент', value: 'viral' },
          { title: 'Кейсы', value: 'cases' },
          { title: 'Инструменты', value: 'tools' },
          { title: 'Тренды', value: 'trends' },
        ],
      },
      validation: R => R.required(),
    },
    { name: 'publishedAt', title: 'Дата публикации', type: 'datetime', initialValue: () => new Date().toISOString() },
    { name: 'coverImage', title: 'Обложка', type: 'image', options: { hotspot: true } },
    { name: 'excerpt', title: 'Краткое описание', type: 'text', rows: 3 },
    {
      name: 'body',
      title: 'Контент статьи',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Обычный текст', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Цитата', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Жирный', value: 'strong' },
              { title: 'Курсив', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Ссылка',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                  { name: 'blank', type: 'boolean', title: 'Открыть в новой вкладке' },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'caption', type: 'string', title: 'Подпись к изображению' }],
        },
        {
          name: 'videoEmbed',
          title: 'Видео (ссылка)',
          type: 'object',
          fields: [
            { name: 'url', type: 'url', title: 'Ссылка на видео (YouTube, Rutube)' },
            { name: 'caption', type: 'string', title: 'Подпись' },
          ],
          preview: { select: { title: 'url' } },
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 },
        { name: 'ogImage', title: 'OG Image', type: 'image' },
      ],
    },
    {
      name: 'relatedPosts',
      title: 'Похожие статьи',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
  orderings: [{ title: 'По дате (новые)', name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
}
