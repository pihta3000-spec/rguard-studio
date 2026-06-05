export default {
  name: 'industry',
  title: 'Отраслевые решения',
  type: 'document',
  fields: [
    { name: 'title', title: 'Название отрасли', type: 'string', validation: R => R.required() },
    { name: 'slug', title: 'URL (slug)', type: 'slug', options: { source: 'title' }, validation: R => R.required() },
    { name: 'icon', title: 'Иконка (emoji или символ)', type: 'string' },
    { name: 'coverImage', title: 'Обложка', type: 'image', options: { hotspot: true } },
    { name: 'shortDesc', title: 'Краткое описание (для карточки)', type: 'text', rows: 2 },
    {
      name: 'body',
      title: 'Основной контент',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Обычный текст', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
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
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
            ],
          },
        },
        { type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'linkedServices',
      title: 'Связанные услуги',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Название услуги', type: 'string' },
          { name: 'pageId', title: 'ID страницы на сайте', type: 'string', description: 'viral, production, corporate, ai-content, scripts, concepts, events' },
          { name: 'description', title: 'Описание для этой отрасли', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'title', subtitle: 'pageId' } },
      }],
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
    { name: 'order', title: 'Порядок отображения', type: 'number' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'shortDesc', media: 'coverImage' },
  },
}
