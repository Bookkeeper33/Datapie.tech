<script setup lang="ts">
    const { services, company } = useSharedData().value;
</script>

<template>
    <footer
        class="px-4 py-10 ring-1 ring-zinc-800 dark:bg-transparent dark:ring-gray-800"
    >
        <div class="container space-y-10 sm:mx-auto">
            <div class="grid gap-y-10 lg:grid-cols-3">
                <div
                    class="row-start-1 flex flex-col justify-start gap-4 sm:col-span-2 sm:flex-row sm:items-center lg:col-span-1 lg:items-start"
                >
                    <FooterList
                        :category="services.category"
                        :navigation="services.navigation"
                    />
                    <FooterList
                        :category="company.category"
                        :navigation="company.navigation"
                    />
                </div>
                <div
                    class="flex items-center gap-x-5 self-center justify-self-center sm:col-span-3 lg:col-span-1"
                >
                    <img class="h-12 w-12" src="assets/icons/logo.svg" />
                    <NuxtLink to="/" class="text-xl font-bold lg:text-2xl">
                        Datapie<span
                            class="text-themePurple dark:text-themeGreen"
                            >.</span
                        >tech
                    </NuxtLink>
                    <UIDarkMode />
                </div>
                <div
                    class="row-start-2 space-y-3 sm:row-start-1 sm:justify-self-end lg:col-start-3"
                >
                    <FooterContact />
                    <FooterSocialLinks class="pt-2" />
                </div>
            </div>
        </div>
    </footer>
</template>
