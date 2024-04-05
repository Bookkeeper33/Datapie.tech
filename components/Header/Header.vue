<script lang="ts" setup>
    const { width } = useWindowSize();
    const { services } = useSharedData().value;
    const isVisible = useIntersection();
    const isNavOpen = ref(false);
    const MAX_SCREEN_SIZE = 1024;

    const toggleBurger = () => {
        isNavOpen.value = !isNavOpen.value;
    };
</script>

<template>
    <header
        class="sticky left-0 top-0 z-50 transition-all duration-300 ease-linear"
        :class="{
            'glass bg-themeBlue/50 shadow-md transition-all duration-300 ease-linear dark:bg-[#0b0b0b]/70':
                !isVisible,
        }"
    >
        <div
            class="mx-auto px-4 py-5 lg:container md:px-7 lg:flex lg:flex-row lg:items-center lg:justify-between"
        >
            <div class="flex flex-1 items-center">
                <div class="flex items-center gap-x-5">
                    <img class="h-12 w-12" src="assets/icons/logo.svg" />
                    <a href="#" class="text-2xl font-bold lg:text-3xl">
                        Datapie<span
                            class="text-themePurple dark:text-themeGreen"
                            >.</span
                        >tech
                    </a>
                </div>
                <HeaderBurgerMenu
                    :is-open="isNavOpen"
                    @toggle-nav="toggleBurger"
                />
            </div>
            <nav>
                <ClientOnly>
                    <HeaderNavigation
                        v-if="width >= MAX_SCREEN_SIZE"
                        :services="services"
                    />
                    <HeaderBurgerNavigation
                        v-else
                        class="mt-7"
                        :is-nav-open="isNavOpen"
                        :services="services"
                    />
                </ClientOnly>
            </nav>
        </div>
    </header>
</template>
