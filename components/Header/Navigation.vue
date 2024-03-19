<script lang="ts" setup>
    defineProps<{ services: NavData }>();
</script>

<template>
    <ul
        class="hidden lg:flex lg:flex-row lg:items-center lg:gap-x-5 lg:rounded-full lg:px-4 lg:py-2 lg:text-lg lg:ring-1 lg:ring-gray-200 lg:dark:ring-gray-800"
    >
        <li>
            <HeaderNavPopOver
                :title="services.title"
                :sub-links="services.subLinks"
            />
        </li>
        <li>Cases</li>
        <li>Blog</li>
        <li>About us</li>
        <li>Contacts</li>
    </ul>
</template>
