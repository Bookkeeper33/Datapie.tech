<script lang="ts" setup>
    defineProps<{ services: NavData; company: NavData }>();
</script>

<template>
    <ul
        class="hidden lg:flex lg:flex-row lg:items-center lg:gap-x-5 lg:rounded-full lg:px-4 lg:py-2 lg:text-lg lg:ring-1 lg:ring-gray-800 dark:lg:ring-gray-400"
    >
        <li>
            <HeaderNavPopOver
                :category="services.category"
                :navigation="services.navigation"
            />
        </li>
        <li v-for="(nav, index) in company.navigation" :key="index">
            <NuxtLink :to="nav.link">{{ nav.title }}</NuxtLink>
        </li>
    </ul>
</template>
