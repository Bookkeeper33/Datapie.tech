<script lang="ts" setup>
    defineProps<{ category: string; navigation: Navigation[] }>();
</script>

<template>
    <div>
        <h3 class="font-semibold">
            <p>{{ category }}</p>
        </h3>
        <ul class="mt-2 space-y-1">
            <li
                v-for="(nav, index) in navigation"
                :key="index"
                class="flex items-center space-x-2 transition active:translate-x-2 lg:hover:translate-x-2"
            >
                <Icon
                    class="text-themeGreen"
                    name="ic:outline-arrow-forward"
                    size="1.3em"
                />

                <NuxtLink
                    :to="
                        category === 'Services'
                            ? `/services/${nav.link}`
                            : nav.link
                    "
                    class="decoration-2 hover:underline"
                    >{{ nav.title }}</NuxtLink
                >
            </li>
        </ul>
    </div>
</template>
