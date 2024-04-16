<template>
    <div
        v-motion-fade-visible-once
        class="relative flex flex-col gap-10 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:h-48 lg:after:w-96 lg:after:bg-[radial-gradient(#7354F2,transparent_2px)] lg:after:[background-size:25px_25px] dark:lg:after:bg-[radial-gradient(#47F75F,transparent_2px)]"
    >
        <div
            class="prose prose-lg flex flex-col space-y-2 dark:prose-invert prose-h2:mb-2 prose-h2:mt-10"
        >
            <slot></slot>
        </div>
    </div>
</template>
