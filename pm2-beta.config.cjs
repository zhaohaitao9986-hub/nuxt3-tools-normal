module.exports = {
    apps: [
      {
        name: '/nuxt3',
        exec_mode: 'cluster',
        instances: 'max',
        cwd: '/nuxt3',
        port: '6001',
        script: './.output/server/index.mjs',
      },
    ],
  }