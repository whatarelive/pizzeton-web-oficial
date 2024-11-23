/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly ASTRO_DB_REMOTE_URL: string;
    readonly ASTRO_DB_APP_TOKEN: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}