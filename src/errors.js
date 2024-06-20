import Vue from "vue";
import * as Sentry from "@sentry/vue";

function initErrors(router, options = {}) {
    console.log('initErrors')
Sentry.init({
  Vue,
  dsn: "https://dc833b966ab24c74b407cc1005231e07@o4504514050326528.ingest.us.sentry.io/4504514051506176",
  integrations: [
    Sentry.browserTracingIntegration({ router }),
    Sentry.replayIntegration(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
}

export {
    initErrors
}