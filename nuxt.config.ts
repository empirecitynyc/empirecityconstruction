// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    'nuxt-studio'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://empirecityconstruction.vercel.app/',
    title: 'Nuxt Docs Template',
    description: 'A website for showing off our work',
    full: {
      title: 'Empire City Construction',
      description: 'This is the full documentation for Empire City Construction.'
    },
    sections: [
      {
        title: 'About',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/about%' }
        ]
      },
      {
        title: 'Services',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/services%' }
        ]
      }
    ]
  },

  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',
    
    // GitHub repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // only GitHub is currently supported
      owner: 'empirecitynyc', // your GitHub username or organization
      repo: 'empirecityconstruction', // your repository name
      branch: 'main', // the branch to commit to (default: main)
      rootDir: '' // optional: if your Nuxt app is in a subdirectory (default: '')
    }
  }
})
