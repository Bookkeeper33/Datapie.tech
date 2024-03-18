<script lang="ts" setup>
    defineProps<{ title: string; subLinks: string[] }>();
</script>

<template>
    <ClientOnly>
        <HeadlessPopover v-slot="{ open }" class="">
            <HeadlessPopoverButton
                class="focus:outline-none focus-visible:ring-0"
                >{{ title }}
                <Icon
                    name="heroicons:chevron-down"
                    class="transition"
                    :class="open ? 'rotate-180 transform' : ''"
            /></HeadlessPopoverButton>
            <Transition
                enter-active-class="transition duration-300 ease-in-out"
                enter-from-class="-translate-y-2 opacity-0"
                enter-to-class="-translate-y-0 opacity-100"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="translate-y-2 opacity-0"
            >
                <HeadlessPopoverPanel
                    class="absolute z-10 rounded-md bg-themePurple px-5 py-2 text-slate-100 shadow-lg lg:mt-3"
                >
                    <ul class="flex flex-col gap-y-2 font-normal">
                        <a
                            v-for="(link, index) of subLinks"
                            :key="index"
                            class="transition-colors hover:text-themeGreen"
                            href="#"
                        >
                            {{ link }}</a
                        >
                    </ul>
                </HeadlessPopoverPanel>
            </Transition>
        </HeadlessPopover>
    </ClientOnly>
</template>
