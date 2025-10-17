
'use server';

import { configureGenkit } from '@genkit-ai/core';
import { googleAI } from '@genkit-ai/google-genai';
import { genkit } from 'genkit';

configureGenkit({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
});

export { genkit as ai };
