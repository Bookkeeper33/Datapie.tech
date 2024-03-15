<script lang="ts" setup>
    interface State {
        screenWidth: undefined | number;
        isMenuOpen: boolean;
    }

    const state: State = reactive({
        screenWidth: undefined,
        isMenuOpen: false,
    });

    onMounted(() => {
        window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", handleResize);
    });

    const updateScreenWidth = () => {
        const MAX_SCREEN_SIZE = 1024;
        const newVal = window.innerWidth;

        if (newVal > MAX_SCREEN_SIZE) {
            state.isMenuOpen = false;
        }
        state.screenWidth = newVal;
    };

    const handleResize = () => {
        updateScreenWidth();
    };

    const toggleBurger = () => {
        state.isMenuOpen = !state.isMenuOpen;
    };
</script>

<template>
    <header>
        <div
            class="mx-auto flex flex-col gap-y-4 px-2 py-5 lg:container md:px-7 md:py-5 lg:flex-row lg:items-center lg:justify-between"
        >
            <div class="flex flex-1 items-center">
                <div class="flex items-center gap-x-5">
                    <img class="h-12 w-12" src="assets/icons/logo.svg" />
                    <a class="text-2xl font-bold lg:text-3xl">
                        Datapie<span
                            class="text-themePurple dark:text-themeGreen"
                            >.</span
                        >tech
                    </a>
                </div>
                <HeaderBurgerMenu
                    :is-open="state.isMenuOpen"
                    @toggle-nav="toggleBurger"
                />
            </div>
            <HeaderNavigation
                :class="{ hidden: !state.isMenuOpen }"
                class="lg:flex"
            />
        </div>
    </header>
</template>
