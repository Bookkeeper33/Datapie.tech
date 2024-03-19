<script setup lang="ts">
    const { services, company } = useSharedData().value;
</script>

<template>
    <footer
        class="bg-neutral-100 px-4 py-5 dark:bg-transparent dark:ring-1 dark:ring-gray-800 lg:pb-5 lg:pt-12"
    >
        <div class="container space-y-10 sm:mx-auto">
            <div class="grid gap-y-10 lg:grid-cols-3">
                <div
                    class="flex items-center gap-x-5 self-start sm:col-span-3 lg:col-span-1"
                >
                    <img class="h-12 w-12" src="assets/icons/logo.svg" />
                    <a href="#" class="text-xl font-bold lg:text-2xl">
                        Datapie<span
                            class="text-themePurple dark:text-themeGreen"
                            >.</span
                        >tech
                    </a>
                </div>
                <div class="flex gap-x-10 lg:justify-center">
                    <div class="w-full space-y-8 sm:w-auto">
                        <div class="">
                            <h3 class="text-lg font-semibold">
                                You have a new project?
                            </h3>
                            <h3 class="text-lg font-semibold">
                                or want to say hello...
                            </h3>
                        </div>
                        <FooterContact />
                    </div>
                </div>
                <div
                    class="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center lg:col-span-1 lg:items-start"
                >
                    <FooterList
                        :title="services.title"
                        :sub-links="services.subLinks"
                    />
                    <FooterList
                        :title="company.title"
                        :sub-links="company.subLinks"
                    />
                </div>
            </div>
            <div class="flex items-center justify-between">
                <FooterSocialLinks class="ml-2" />
                <UIDarkMode />
            </div>
        </div>
    </footer>
</template>
