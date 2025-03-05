import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://db9263ee94fd13642ff05a935c967cce@o4508845623738368.ingest.de.sentry.io/4508845626490960',

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
