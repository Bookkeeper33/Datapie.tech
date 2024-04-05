<script lang="ts" setup>
    defineProps<{ testimonial: Testimonial }>();
</script>
<template>
    <div
        class="card isolate rounded-xl bg-white/15 shadow-lg ring-1 ring-black/5 sm:max-w-lg lg:max-w-xl"
    >
        <figure
            class="card-body items-center justify-center gap-5 text-pretty antialiased"
        >
            <blockquote class="flex flex-col gap-3">
                <Icon
                    name="icomoon-free:quotes-left"
                    size="1.5em"
                    class="text-slate-800 dark:text-themeGreen"
                />
                <p
                    class="text-lg text-gray-900 dark:text-white sm:text-xl lg:text-2xl"
                >
                    {{ testimonial.quote }}
                </p>
                <Icon
                    class="self-end text-slate-800 dark:text-themeGreen"
                    name="icomoon-free:quotes-right"
                    size="1.5em"
                />
            </blockquote>
            <div class="mb-2 flex items-center text-amber-500">
                <Icon
                    v-for="(_, index) in testimonial.rating"
                    :key="index"
                    name="mdi:star"
                    size="2em"
                />
            </div>
            <figcaption class="mt-2 flex items-center space-x-3">
                <div class="avatar">
                    <div class="w-12 rounded-full md:w-20">
                        <NuxtImg
                            :src="testimonial.avatar"
                            :alt="testimonial.author"
                        />
                    </div>
                </div>
                <div
                    class="flex items-center divide-x-2 divide-gray-800 dark:divide-gray-700 rtl:divide-x-reverse"
                >
                    <cite class="pe-3 text-base font-bold md:text-lg">{{
                        testimonial.author
                    }}</cite>
                    <cite
                        class="ps-3 text-sm font-semibold text-slate-800 dark:text-gray-300"
                        >{{ testimonial.occupation }}</cite
                    >
                </div>
            </figcaption>
        </figure>
    </div>
</template>
