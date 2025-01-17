/// <reference types="astro/client" />
// env.d.ts
/// <reference types="astro/client" />

interface ImportMetaEnv {
    // Variables de entorno públicas (accesibles en el cliente)
    readonly PUBLIC_EMAILJS_SERVICE_ID: string;
    readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
    readonly PUBLIC_EMAILJS_USER_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
