/* eslint-disable prefer-destructuring */

/**
 * @note 👀 ⚠️ 👀  "prefer-destructuring" must remain disabled and unused 👀 ⚠️ 👀
 * @external https://vercel.com/docs/environment-variables
 * @external https://vercel.com/docs/environment-variables#system-environment-variables
 * @external https://vercel.com/docs/projects/environment-variables
 *
 * @description Survey Variables which we create specific `instances` of
 * based on the Vercel deployment type.
 */

// Vercel deployment(s) only ~ https://vercel.com/docs/projects/environment-variables
export const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV || 'staging';
export const VERCEL_REF = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF;
export const VERCEL_SHA = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA;
export const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;

// Generic to NodeJS
export const NODE_ENV = process.env.NODE_ENV || 'development';

// Basic checks...
export const IS_BROWSER = typeof window !== 'undefined';
export const IS_DEVELOPMENT = NODE_ENV === 'development';
export const IS_PRODUCTION = NODE_ENV === 'production';
export const IS_PRODUCTION_ENV = VERCEL_ENV === 'production';
export const IS_TEST = NODE_ENV === 'test';

// Application settings
export const GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS || '__unavailable__'; // prettier-ignore
export const GOOGLE_TAG_MANAGER = process.env.GOOGLE_TAG_MANAGER || '__unavailable__'; // prettier-ignore
export const GRAPHCMS_TOKEN = process.env.GRAPHCMS_TOKEN || '__unavailable__';
export const GRAPHCMS_URL = process.env.GRAPHCMS_URL || '__unavailable__';

/**
 * ⚠️ Vercel does not account for domain names in NEXT_PUBLIC_VERCEL_URL ⚠️
 */
export const CLIENT_URL = process.env.CLIENT_URL
  ? process.env.CLIENT_URL
  : `https://${VERCEL_URL}`;
