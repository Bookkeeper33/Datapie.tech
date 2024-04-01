<script lang="ts" setup>
    defineProps<{ services: Content[] }>();
</script>

<template>
    <HeadlessTabGroup>
        <HeadlessTabList
            class="flex justify-center gap-x-10 border-b-2 border-b-gray-600"
        >
            <HeadlessTab
                v-for="service in services"
                v-slot="{ selected }"
                :key="service.id"
                as="template"
            >
                <button
                    class="px-4 py-2 text-base outline-none lg:text-xl"
                    :class="{
                        'relative z-50 scale-105 from-red-400 via-violet-200 to-cyan-300 font-bold transition-all duration-300 ease-in-out after:absolute after:-bottom-[0.1em] after:left-0  after:h-1  after:w-full after:rounded-md after:bg-gradient-to-r dark:from-themeGreen dark:via-themeBlue dark:to-themePurple dark:text-themeGreen':
                            selected,
                    }"
                >
                    {{ service.title }}
                </button>
            </HeadlessTab>
        </HeadlessTabList>
        <HeadlessTabPanels class="relative">
            <TransitionGroup
                enter-active-class="transition-opacity duration-1000 ease"
                enter-from-class="opacity-10"
                leave-active-class="absolute transition-opacity duration-1000 ease "
                leave-to-class="opacity-10"
            >
                <HeadlessTabPanel
                    v-for="service in services"
                    :key="service.id"
                    v-slot="{ selected }"
                >
                    <div
                        class="flex min-h-dvh bg-cover bg-center bg-no-repeat"
                        :style="{ backgroundImage: `url('${service.img}')` }"
                    >
                        <Transition
                            appear
                            enter-active-class="transition ease duration-1000"
                            enter-from-class="-translate-x-1/2"
                            enter-to-class="translate-x-0"
                        >
                            <div
                                v-show="selected"
                                class="glass flex w-2/5 flex-col items-center justify-center gap-y-5 text-pretty px-5"
                            >
                                <div class="max-w-md text-stone-50">
                                    <h2
                                        class="mb-2 text-lg font-semibold lg:text-2xl"
                                    >
                                        {{ service.title }}
                                    </h2>
                                    <p class="text-sm lg:text-base">
                                        {{ service.description }}
                                    </p>

                                    <UIButton class="mt-10 px-10 py-3"
                                        >Learn more</UIButton
                                    >
                                </div>
                            </div>
                        </Transition>
                    </div>
                </HeadlessTabPanel>
            </TransitionGroup>
        </HeadlessTabPanels>
    </HeadlessTabGroup>
</template>
