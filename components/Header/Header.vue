<script lang="ts" setup>
    const { width } = useWindowSize();
    const { services, company } = useSharedData().value;
    const isNavOpen = ref(false);
    const MAX_SCREEN_SIZE = 1024;

    const toggleBurger = () => {
        isNavOpen.value = !isNavOpen.value;
    };
</script>

<template>
    <header
        class="sticky left-0 top-0 isolate z-50 bg-gradient-to-br from-[#7354F2]/60 to-[#80F08B]/60 backdrop-blur dark:bg-none"
    >
        <div
            class="mx-auto px-4 py-5 lg:container md:px-7 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-10"
        >
            <div class="flex flex-1 items-center">
                <NuxtLink to="/" class="flex items-center gap-x-5">
                    <img class="h-12 w-12" src="assets/icons/logo.svg" />
                    <span class="text-2xl font-bold lg:text-3xl">
                        Datapie<span
                            class="text-themePurple dark:text-themeGreen"
                            >.</span
                        >tech
                    </span>
                </NuxtLink>
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
                        :company="company"
                    />
                    <HeaderBurgerNavigation
                        v-else
                        class="mt-7"
                        :is-nav-open="isNavOpen"
                        :services="services"
                    />
                </ClientOnly>
            </nav>
            <UIButton class="hidden p-2 px-4 lg:block"
                ><a href="mailto:datapie.tech@gmail.com"
                    >Get in touch</a
                ></UIButton
            >
        </div>
    </header>
</template>
