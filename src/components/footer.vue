<script lang="ts" setup>
</script>
<template>
    <div class="bg-stone-600 ">
        <div class="container mx-auto py-4 flex justify-between items-center ">
            <div class="w-full  text-white">
                <div class="">
                    <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2  justify-start">
                        <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="160" height="57" viewBox="0 0 160 57">
                                <defs>
                                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%"
                                        viewBox="0 0 197 70">
                                        <image height="70" xlink:href="~/assets/mgl-logo.svg" />
                                    </pattern>
                                </defs>
                                <rect id="ETI-Logo" width="160" height="57" fill="url(#pattern)" />
                            </svg>
                            <p class="opacity-60">Inner MGL.</p>
                            <div class="opacity-60 pt-2">
                                <p>© 2020 mgl.tech .</p>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/5 flex flex-col space-y-4">
                            <a class="opacity-60">About Us</a>
                            <a class="opacity-60">Responsibilities</a>
                            <a class="opacity-60">Out Services</a>
                            <nuxt-link to="/about" class="opacity-60">Contact</nuxt-link>
                        </div>
                        <div class="w-full sm:w-1/5 flex flex-col space-y-4">
                            <a class="opacity-60">Disclaimer</a>
                            <a class="opacity-60">Testimonials</a>
                            <a class="opacity-60">Privacy Policy</a>
                            <a class="opacity-60">Terms of Service</a>
                        </div>
                        <div class="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                            <div class="flex flex-row space-x-4">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-google"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
</style>