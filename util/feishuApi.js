export const getEnvType = (url) => {
  const isDev = url.includes('localhost') || process?.env.NODE_ENV === 'development'
  const isBeta = url.includes('beta.promowantee.com')
  return isDev ?
    {
      name: 'dev',
      text: '本地环境',
      feiShuApi: 'https://open.feishu.cn/open-apis/bot/v2/hook/f3919f5c-75f2-4d15-b668-01e4e9d4cfa1'
    }  :
    isBeta ?
      {
        name: 'beta',
        text: '预发环境',
        feiShuApi: 'https://open.feishu.cn/open-apis/bot/v2/hook/f3919f5c-75f2-4d15-b668-01e4e9d4cfa1'
      } :
      {
        name: 'prod',
        text: '生产环境',
        feiShuApi: 'https://open.feishu.cn/open-apis/bot/v2/hook/fd50fc14-4fab-4305-aa28-a97c5be56ba4'
      }
}
