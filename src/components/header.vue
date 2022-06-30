<script lang="ts" setup>
</script>
<template>
    <div>
        <div>
            <div class="bg-white shadow-lg rounded-t-none ">
                <div class="container mx-auto py-4 flex justify-between items-center">
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40"
                            height="40" viewBox="0 0 40 40">
                            <defs>
                                <pattern id="pattern-h" preserveAspectRatio="none" width="100%" height="100%"
                                    viewBox="0 0 35 35">
                                    <image height="35" xlink:href="~/assets/mgl-logo.svg" />
                                </pattern>
                            </defs>
                            <rect id="ETI-Logo" width="35" height="35" fill="url(#pattern-h)" />
                        </svg>
                        <h1 class="text-2xl font-bold text-gray-500">
                            <nuxt-link to="/">数字工</nuxt-link>
                        </h1>
                    </div>

                    <div class="flex space-x-10">
                        <div class="flex items-center space-x-2">
                            <span>
                            </span>
                        </div>
                     <!--    <div class="flex items-center space-x-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </span>
                            <span class="">
                                <nuxt-link to="/timeline">时间线</nuxt-link>
                            </span>
                        </div> -->
                        <div class="flex items-center space-x-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </span>
                            <span class=""><a href="https://123456789.blog" target="_blank">博客</a></span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </span>
                            <span class="">团队</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
</style>