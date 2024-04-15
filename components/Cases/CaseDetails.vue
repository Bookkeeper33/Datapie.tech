<script setup lang="ts">
    const route = useRoute();
    const capitalize = ref(
        route.params.company[0].toUpperCase() + route.params.company.slice(1)
    );
    defineProps<{ data: Case }>();
</script>

<template>
    <div class="container mx-auto px-4 pb-10 pt-2 md:px-6">
        <div class="text-md breadcrumbs">
            <ul>
                <li>
                    <NuxtLink
                        to="/"
                        class="transition hover:text-themeGreen dark:hover:text-themePurple"
                        >Datapie.tech</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink
                        to="/cases"
                        class="transition hover:text-themeGreen dark:hover:text-themePurple"
                        >Cases</NuxtLink
                    >
                </li>
                <li class="">
                    {{ capitalize }}
                </li>
            </ul>
        </div>
        <div
            v-motion-fade-visible-once
            class="flex flex-col gap-20 md:gap-14 lg:gap-24"
        >
            <div
                class="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:justify-center"
            >
                <div
                    class="prose prose-lg flex flex-col space-y-2 dark:prose-invert prose-h2:mb-2 prose-h2:mt-10"
                >
                    <div
                        class="inline-block select-none self-start rounded-r-lg bg-themeGreen px-3 py-1 text-sm shadow-md dark:bg-themePurple"
                    >
                        Case Study
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold sm:text-5xl">
                            {{ data.title }}
                        </h2>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="(tag, index) in data.tags"
                            :key="index"
                            class="badge badge-outline cursor-pointer select-none font-bold transition lg:hover:border-none lg:hover:ring-2 lg:hover:ring-themeGreen"
                            >{{ tag }}</span
                        >
                    </div>
                </div>
                <div
                    class="relative overflow-hidden rounded-xl bg-cover bg-no-repeat"
                >
                    <NuxtImg
                        :src="data.image"
                        class="h-full w-full rounded-xl transition duration-300 ease-in-out lg:hover:scale-105"
                    />
                </div>
            </div>

            <div
                class="grid justify-center gap-10 md:gap-16 lg:grid-cols-2 xl:grid-cols-3"
            >
                <div
                    v-for="(study, index) in data.studies"
                    :key="index"
                    v-motion-slide-visible-once-bottom
                    class="prose prose-lg flex flex-col gap-2 dark:prose-invert"
                >
                    <h3 class="text-center text-2xl font-bold">
                        {{ study.name }}
                    </h3>
                    <div
                        class="card card-compact cursor-pointer shadow-md transition duration-300 ease-in-out md:card-normal dark:shadow-neutral/30 lg:hover:scale-105 lg:hover:shadow-2xl"
                    >
                        <div
                            class="card-body glass rounded-md bg-gradient-to-tr from-red-400/30 via-violet-200/30 to-cyan-300/30"
                        >
                            <p>
                                {{ study.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
