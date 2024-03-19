<script lang="ts" setup>
    defineProps<{ title: string; subLinks: string[] }>();
</script>

<template>
    <div>
        <h3 class="font-semibold">
            <a href="#">{{ title }}</a>
        </h3>
        <ul class="mt-2 space-y-1">
            <li
                v-for="(link, index) in subLinks"
                :key="index"
                class="flex items-center space-x-2 transition hover:translate-x-2"
            >
                <Icon
                    class="text-themeGreen"
                    name="ic:outline-arrow-forward"
                    size="1.3em"
                />

                <a href="#" class="decoration-2 hover:underline">{{ link }}</a>
            </li>
        </ul>
    </div>
</template>
