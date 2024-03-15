<script lang="ts" setup>
    const props = defineProps<{ isOpen: boolean }>();
    defineEmits(["toggleNav"]);
</script>

<template>
    <ClientOnly>
        <button
            type="button"
            class="focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 ml-auto inline-flex flex-shrink-0 items-center gap-x-2 rounded-full p-2 text-sm font-medium text-gray-700 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white lg:hidden"
            aria-label="Close Menu"
            @click="$emit('toggleNav')"
        >
            <div class="w-5 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                    aria-hidden="true"
                    class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                    :class="{
                        'rotate-45': isOpen,
                        ' -translate-y-1.5': !isOpen,
                    }"
                ></span>
                <span
                    aria-hidden="true"
                    class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                    :class="{ 'opacity-0': isOpen }"
                ></span>
                <span
                    aria-hidden="true"
                    class="absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
                    :class="{
                        '-rotate-45': isOpen,
                        ' translate-y-1.5': !isOpen,
                    }"
                ></span>
            </div>
        </button>
    </ClientOnly>
</template>
