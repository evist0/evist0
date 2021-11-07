module.exports = {
  types: [
    {value: 'ci', name: 'ci: Настройка CI'},
    {value: 'docs', name: 'docs: Обновление документации'},
    {value: 'feat', name: 'feat: Добавление новых фич'},
    {value: 'fix', name: 'fix: Исправление ошибок'},
    {value: 'refactor', name: 'refactor: Правки кода без исправления ошибок или добавления новых функций'},
    {value: 'style', name: 'style: Правки по кодстайлу'},
    {value: 'test', name: 'test: Добавление тестов'}
  ],
  scopes: [
    {name: 'repo'},
    {name: 'api'},
    {name: 'backoffice'},
    {name: 'blog'},
    {name: 'components'},
  ],
  messages: {
    type: 'Какие изменения вы вносите?\n',
    scope: 'Выберите ОБЛАСТЬ, которую вы изменили (опционально):\n',
    subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n',
    body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
    footer: 'Место для мета данных (тикетов, ссылок и остального):\n',
    confirmCommit: 'Вас устраивает получившийся коммит?'
  },
  allowBreakingChanges: false,
  footerPrefix: 'META:',
  subjectLimit: 72
};