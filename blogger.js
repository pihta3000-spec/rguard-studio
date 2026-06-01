export default {
  name: 'blogger',
  title: 'Блогеры',
  type: 'document',
  fields: [
    { name: 'name', title: 'Имя', type: 'string', validation: R => R.required() },
    { name: 'slug', title: 'URL (slug)', type: 'slug', options: { source: 'name' }, validation: R => R.required() },
    { name: 'desc', title: 'Короткое описание (для карточки)', type: 'text', rows: 2 },
    { name: 'bio', title: 'Полное био', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'photos',
      title: 'Фотографии',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'showreel',
      title: 'Шоурил (ссылка на видео)',
      type: 'url',
    },
    {
      name: 'metrics',
      title: 'Метрики',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Значение', type: 'string' },
          { name: 'label', title: 'Подпись', type: 'string' },
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    },
    {
      name: 'socials',
      title: 'Социальные сети',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Название (TikTok, YouTube…)', type: 'string' },
          { name: 'url', title: 'Ссылка', type: 'url' },
        ],
        preview: { select: { title: 'label', subtitle: 'url' } },
      }],
    },
    {
      name: 'specializations',
      title: 'Специализации',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    { name: 'order', title: 'Порядок отображения', type: 'number' },
  ],
  preview: {
    select: { title: 'name', subtitle: 'desc', media: 'photos.0' },
  },
}
