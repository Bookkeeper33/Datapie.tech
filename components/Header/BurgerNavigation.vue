<script lang="ts" setup>
    defineProps<{ isNavOpen: boolean; services: NavData }>();
</script>

<template>
    <Transition
        enter-active-class="transition duration-500 ease-in-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-500 ease-in-out"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
    >
        <div v-show="isNavOpen" class="flex flex-col gap-5">
            <ul
                class="flex flex-col border-b border-b-slate-900 *:border-t *:border-t-slate-900 *:py-2 dark:border-stone-200 *:dark:border-stone-200 lg:hidden"
            >
                <li class="flex flex-col gap-2 text-center">
                    <HeaderNavDisclosure
                        :category="services.category"
                        :navigation="services.navigation"
                    />
                </li>
                <li><NuxtLink to="/cases">Cases</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li><NuxtLink to="/about">About us</NuxtLink></li>
            </ul>
            <UIButton class="p-2"
                ><a href="mailto:datapie.tech@gmail.com"
                    >Get in touch</a
                ></UIButton
            >
        </div>
    </Transition>
</template>
