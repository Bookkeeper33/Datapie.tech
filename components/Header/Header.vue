<script lang="ts" setup>
    const isNavOpen = ref(false);
    const { width } = useWindowSize();
    const MAX_SCREEN_SIZE = 1024;

    const services: NavData = {
        title: "What we do",
        subLinks: [
            "AI Services",
            "Data Services",
            "Data Visualization",
            "Dashboard Development",
        ],
    };
    const about: NavData = {
        title: "About us",
        subLinks: ["Our Story", "Our Values", "Our Team"],
    };
    const toggleBurger = () => {
        isNavOpen.value = !isNavOpen.value;
    };
</script>

<template>
    <header>
        <div
            class="mx-auto flex flex-col gap-y-10 px-4 py-5 lg:container md:px-7 md:py-5 lg:flex-row lg:items-center lg:justify-between"
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
                <HeaderNavigation
                    v-if="width >= MAX_SCREEN_SIZE"
                    :services="services"
                    :about="about"
                />
                <HeaderBurgerNavigation
                    v-else
                    :is-nav-open="isNavOpen"
                    :services="services"
                    :about="about"
                />
            </nav>
        </div>
    </header>
</template>
