import Vue from "vue";
import Router from "vue-router";
import * as Sentry from "@sentry/vue";
import App from "./App.vue";
import router from './router';
// tags, release , environemt, event.extra, event.user, transport, tags 
// add session replay config (index.html if possible)
// we want to add the following tags to all events after the Sentry SDK is initialized
// node version 18 (use with nvm to switch between versions)
// npm install
// npm run dev 

Vue.use(router);
Sentry.init({
  Vue,
  environment: "app",
  release: "v1.0.0",
  dsn: DSN,
  integrations: [
    Sentry.replayIntegration(),
    Sentry.browserTracingIntegration({ router }),
  ],

  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

Sentry.captureException("Error in Vue")

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");