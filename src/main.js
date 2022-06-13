import { createApp } from 'vue'
import App from './App.vue'
import * as Sentry from "@sentry/vue"
import { BrowserTracing } from "@sentry/tracing"

const app = createApp(App)

Sentry.init({
  app,
  dsn: "https://a067ce78f46d45de8ef67ba45385cad3@o1286624.ingest.sentry.io/6500629",
  integrations: [
    new BrowserTracing({
      // routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "dulanghai.github.io", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

app.mount('#app')
