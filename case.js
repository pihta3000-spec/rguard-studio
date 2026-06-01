export default {
  name: 'case',
  title: 'Кейсы',
  type: 'document',
  fields: [
    { name: 'title', title: 'Название', type: 'string', validation: R => R.required() },
    { name: 'slug', title: 'URL (slug)', type: 'slug', options: { source: 'title' }, validation: R => R.required() },
    {
      name: 'service',
      title: 'Категория',
      type: 'string',
      options: {
        list: [
          { title: 'Вирусные видеоролики', value: 'viral' },
          { title: 'Продюсирование и СММ', value: 'production' },
          { title: 'Корпоративные фильмы', value: 'corporate' },
          { title: 'ИИ контент', value: 'ai-content' },
        ],
      },
    },
    { name: 'accent', title: 'Тег / акцент', type: 'string' },
    { name: 'shortText', title: 'Краткое описание', type: 'text', rows: 3 },
    { name: 'task', title: 'Задача', type: 'text', rows: 3 },
    { name: 'solution', title: 'Решение', type: 'text', rows: 3 },
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
      name: 'links',
      title: 'Ссылки на видео',
      type: 'array',
      of: [{ type: 'url' }],
    },
    {
      name: 'whatWorked',
      title: 'Что сработало',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    { name: 'featured', title: 'Показывать на главной', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Порядок отображения', type: 'number' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'service' },
  },
}
