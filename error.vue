<script setup lang="ts">
    import type { NuxtError } from "#app";

    defineProps({
        error: Object as () => NuxtError,
    });

    const handleError = () => clearError({ redirect: "/" });
</script>

<template>
    <div class="grid min-h-dvh place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div class="space-y-5 text-center dark:text-white">
            <h1 class="text-7xl sm:text-9xl">
                Oops<span class="text-themeGreen">!</span>
            </h1>
            <template v-if="error?.statusCode === 404">
                <p class="text-5xl font-semibold text-indigo-600">404</p>
                <h1
                    class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                >
                    Page not found
                </h1>
                <p class="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
            </template>
            <template v-else>
                <p class="text-3xl">
                    <strong>{{ error?.message }}</strong>
                </p>
                <p class="text-base sm:text-xl">
                    It looks like something broke.
                </p>
                <p class="text-base sm:text-xl">Sorry about that.</p>
            </template>
            <div class="mt-10 flex items-center justify-center">
                <UIButton
                    class="rounded-2xl px-7 py-4 text-lg font-semibold sm:px-10 sm:py-6"
                    @click="handleError"
                    >BACK TO HOMEPAGE</UIButton
                >
            </div>
        </div>
    </div>
</template>
