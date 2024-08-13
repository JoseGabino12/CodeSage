// prismjs-custom.d.ts
declare module 'prismjs/components/prism-core' {
  interface LanguageDefinition {
    [key: string]: any;
  }

  export const languages: {
    [language: string]: LanguageDefinition;
  };

  export function highlight(
    code: string,
    grammar: LanguageDefinition,
  ): string;
}

/// <reference path="./path-to/prismjs-custom.d.ts" />