<script lang="ts" setup>
    const colorMode = useColorMode();

    const toggleTheme = () => {
        colorMode.preference =
            colorMode.preference === "dark" ? "light" : "dark";
    };
</script>

<template>
    <ClientOnly>
        <HeadlessSwitch
            class="focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex flex-shrink-0 items-center gap-x-1.5 rounded-full p-1.5 text-sm font-medium text-gray-700 hover:bg-zinc-200 hover:text-gray-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            @click="toggleTheme"
        >
            <span
                ><Icon
                    v-show="colorMode.preference === 'light'"
                    name="heroicons:sun-solid"
                    size="1.5em"
                />
                <Icon
                    v-show="colorMode.preference === 'dark'"
                    name="heroicons:moon"
                    size="1.5em"
                />
            </span>
        </HeadlessSwitch>
    </ClientOnly>
</template>
