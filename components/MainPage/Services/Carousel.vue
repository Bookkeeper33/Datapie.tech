<script lang="ts" setup>
    defineProps<{ services: Service[] }>();
    const myCarousel = ref();
</script>

<template>
    <Carousel
        ref="myCarousel"
        :services="services"
        class="flex flex-col gap-y-5"
    >
        <Slide
            v-for="service in services"
            :key="service.id"
            class="flex flex-col gap-y-5"
        >
            <NuxtImg class="rounded-t-xl" :src="service.img" fit="cover" />
            <div class="text-left">
                <h2 class="text-lg font-bold">{{ service.title }}</h2>
                <p class="text-sm">{{ service.description }}</p>
                <UIButton class="mt-5 w-full py-2">Learn more</UIButton>
            </div>
        </Slide>

        <template #addons="{ currentSlide }">
            <ul class="flex justify-center gap-x-5">
                <li v-for="(service, index) in services" :key="service.id">
                    <button
                        :class="{
                            'bg-gradient-to-r from-red-400 via-violet-200 to-cyan-300 dark:from-themeGreen dark:via-themeBlue dark:to-themePurple':
                                index === currentSlide,
                            'bg-slate-200': index !== currentSlide,
                        }"
                        class="h-3 w-3 rounded-lg"
                        @click="() => myCarousel.slideTo(index)"
                    ></button>
                </li>
            </ul>
        </template>
    </Carousel>
</template>
