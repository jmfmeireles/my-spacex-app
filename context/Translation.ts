import { createContext } from 'react';

import { en } from '../locales/en';

const TranslationContext = createContext({
  t: en,
});

export default TranslationContext;
