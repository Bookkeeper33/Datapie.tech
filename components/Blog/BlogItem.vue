<script lang="ts" setup>
    defineProps<{ post: BlogPost }>();
</script>

<template>
    <div
        class="group cursor-pointer rounded-xl bg-gradient-to-r from-themeGreen via-themeBlue to-themePurple p-0.5 shadow-xl transition lg:relative lg:z-[1] lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:right-0 lg:before:top-0 lg:before:-z-[1] lg:before:rounded-xl lg:before:bg-gradient-to-b lg:before:opacity-0 lg:before:transition-opacity lg:before:duration-500 lg:before:ease-linear lg:hover:shadow-sm lg:before:hover:opacity-100"
    >
        <div
            class="h-full rounded-[10px] bg-blue-300 p-4 !pt-10 dark:bg-slate-900 sm:p-6"
        >
            <time
                :datetime="post.date.toDateString()"
                class="text-xs text-gray-500 dark:text-gray-400"
            >
                {{ post.date.toDateString() }}
            </time>

            <a href="#">
                <h3
                    class="mt-0.5 text-lg font-medium text-gray-900 dark:text-white"
                >
                    {{ post.title }}
                </h3>
            </a>

            <div class="flex items-end justify-between">
                <div class="mt-4 flex flex-wrap gap-1">
                    <span
                        v-for="(tag, index) in post.tags"
                        :key="index"
                        class="whitespace-nowrap rounded-full bg-themeGreen px-2.5 py-0.5 text-xs text-slate-600 dark:bg-purple-600 dark:text-purple-100"
                    >
                        {{ tag }}
                    </span>
                </div>
                <Icon
                    name="heroicons-outline:arrow-narrow-right"
                    size="2em"
                    class="flex-shrink-0 text-themePurple lg:opacity-0 lg:transition lg:duration-300 lg:ease-linear lg:group-hover:scale-125 lg:group-hover:opacity-100"
                />
            </div>
        </div>
    </div>
</template>
