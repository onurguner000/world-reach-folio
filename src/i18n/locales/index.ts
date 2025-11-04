/**
 * Centralized Language Management
 * All language translations exported from a single point
 */

import { en } from './en';
import { tr } from './tr';
import { zh } from './zh';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { ar } from './ar';

export { en, tr, zh, de, es, fr, ar };

export type SupportedLanguages = 'en' | 'tr' | 'zh' | 'de' | 'es' | 'fr' | 'ar';
