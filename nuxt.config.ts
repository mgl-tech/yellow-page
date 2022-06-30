import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
     // meta
     meta: {
        title: '数字工 - MGL.TECH',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: '数字工, 博客系统，博客模板，cms,内容管理',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
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

    base: "/assets/",
    assetsDir: "assets",
    runtimeConfig: {
        apiKey: '',// Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
        "app": {
            "baseURL": "/",
            "buildAssetsDir": "/assets/",
            "cdnURL": ""
        }
    },
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
