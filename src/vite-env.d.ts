/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Clé Web3Forms — sans elle le formulaire de contact ne peut rien envoyer. */
  readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
