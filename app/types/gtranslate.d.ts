export {};

declare global {
  interface Window {
    gtranslateSettings?: {
      default_language: string;
      native_language_names: boolean;
      detect_browser_language: boolean;
      url_structure: string;
      wrapper_selector: string;
      languages: string[];
    };
    doGTranslate?: (langPair: string) => void;
  }
}
