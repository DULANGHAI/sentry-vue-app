import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSentry from 'vite-plugin-sentry'

/*
	Configure sentry plugin
*/
const sentryConfig = {
  url: 'https://sentry.io',
  authToken: '2f79c9f453764ca6b2e3c8632a57553285c0dc4ae3ab479ca6be00df057ed687',
  org: 'du-test',
  project: 'javascript-vue',
  release: '1.0',
  deploy: {
    env: 'production'
  },
  setCommits: {
    auto: true
  },
  sourceMaps: {
    include: ['./docs/assets'],
    ignore: ['node_modules'],
    urlPrefix: '~/assets'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sentry-vue-app/',
  plugins: [vue(), viteSentry(sentryConfig)],
  build: {
    outDir: 'docs',
    sourcemap: true,
  }
})
