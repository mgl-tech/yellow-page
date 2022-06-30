import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    css: [
        '@/assets/main.css',
        '@/assets/main.scss'

    ],
    modules: [
        /* ['@nuxtjs/google-analytics', { ua: 'X1234567' }], */
    ],

    srcDir: 'src/',
    typescript: {
        strict: true,
        shim: false,
    },

    // auto import components
    components: true,

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    }
})
