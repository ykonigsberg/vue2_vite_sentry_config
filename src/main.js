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
// Sentry.init({
//   Vue,
//   environemt: "app",
//   Release: "v1.0.0",
//   dsn: "https://dc833b966ab24c74b407cc1005231e07@o4504514050326528.ingest.us.sentry.io/4504514051506176",
//   integrations: [
//     Sentry.replayIntegration(),
//     Sentry.browserTracingIntegration({ router }),
//   ],
//   // Session Replay
//   replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });
// const { replayIntegration, browserTracingIntegration } = await import("@sentry/browser");
// const clientOptions = {
//   ...Sentry.options,
//   dsn: "https://dc833b966ab24c74b407cc1005231e07@o4504514050326528.ingest.us.sentry.io/4504514051506176",
//   integrations: [
//     Sentry.replayIntegration(),
//     Sentry.browserTracingIntegration({ router }),
//   ],
//   replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0, 
// };
// // Sentry.addIntegration(replayIntegration())
// // Sentry.addIntegration(browserTracingIntegration({ router }))
// const client = new Sentry.BrowserClient(clientOptions);
// Sentry.getCurrentHub().bindClient(client);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");