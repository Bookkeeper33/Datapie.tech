<template>
    <Transition
        enter-active-class="transition duration-500 ease-in-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-500 ease-in-out"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
    >
        <ul
            v-show="isNavOpen"
            class="flex flex-col border-b *:border-t *:py-2 lg:hidden"
        >
            <li class="flex flex-col gap-2 text-center">
                <HeaderNavDisclosure
                    :title="services.title"
                    :sub-links="services.subLinks"
                />
            </li>
            <li>Cases</li>
            <li>Blog</li>
            <li class="flex flex-col gap-y-2 text-center">
                <HeaderNavDisclosure
                    :title="about.title"
                    :sub-links="about.subLinks"
                />
            </li>
            <li>Contacts</li>
        </ul>
    </Transition>
</template>

<script lang="ts" setup>
    defineProps<{ isNavOpen: boolean; services: NavData; about: NavData }>();
</script>

<style></style>
