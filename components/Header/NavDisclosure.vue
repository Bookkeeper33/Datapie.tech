<script lang="ts" setup>
    defineProps<{ category: string; navigation: Navigation[] }>();
</script>

<template>
    <HeadlessDisclosure v-slot="{ open }">
        <HeadlessDisclosureButton class="flex items-center justify-between"
            >{{ category }}
            <Icon
                name="heroicons:chevron-down"
                class="transition"
                :class="open ? 'rotate-180 transform' : ''"
        /></HeadlessDisclosureButton>
        <Transition
            enter-active-class="transition duration-300 ease-in-out"
            enter-from-class="-translate-y-2 opacity-0"
            enter-to-class="-translate-y-0 opacity-100"
            leave-active-class="transition duration-300 ease-in-out"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-2 opacity-0"
        >
            <HeadlessDisclosurePanel>
                <ul
                    class="flex flex-col items-start gap-y-1 py-2 dark:text-stone-100"
                >
                    <NuxtLink
                        v-for="(nav, index) of navigation"
                        :key="index"
                        class="transition-colors active:text-themeGreen"
                        :to="`/services/${nav.link}`"
                    >
                        {{ nav.title }}</NuxtLink
                    >
                </ul>
            </HeadlessDisclosurePanel>
        </Transition>
    </HeadlessDisclosure>
</template>
