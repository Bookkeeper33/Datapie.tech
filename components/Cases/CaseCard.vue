<script lang="ts" setup>
    defineProps<{ data: Case; id: number }>();
</script>

<template>
    <div
        class="group card min-h-min max-w-md cursor-pointer gap-3 lg:hover:ring-2 lg:hover:ring-teal-400 dark:lg:hover:ring-themePurple"
    >
        <figure class="relative overflow-hidden bg-cover bg-no-repeat">
            <NuxtImg
                :src="data.image"
                fit="contain"
                class="w-full rounded-t-xl transition duration-300 ease-in-out lg:group-hover:scale-105"
            />
        </figure>
        <div class="body card space-y-3 px-2 pb-5">
            <div class="flex flex-wrap gap-2">
                <span
                    v-for="(tag, index) in data.tags"
                    :key="index"
                    class="badge badge-outline"
                    >{{ tag }}</span
                >
            </div>

            <h3 class="text-xl font-bold">{{ data.title }}</h3>
            <p>{{ data.label }}</p>
        </div>
    </div>
</template>
