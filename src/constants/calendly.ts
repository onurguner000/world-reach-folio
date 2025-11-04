/**
 * Calendly Configuration
 * Centralized configuration for Calendly booking integration
 */

export const CALENDLY_URL = 'https://calendly.com/onurguner000/30min';

export const CALENDLY_EMBED_OPTIONS = {
  hideEventTypeDetails: '1',
  hideGdprBanner: '1',
} as const;

export const getCalendlyEmbedUrl = () => {
  const params = new URLSearchParams(CALENDLY_EMBED_OPTIONS);
  return `${CALENDLY_URL}?${params.toString()}`;
};
