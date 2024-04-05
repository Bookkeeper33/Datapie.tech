<script lang="ts" setup>
    defineProps<{ services: Content[] }>();
    const swiper = ref();
    const pagination = ref();

    onMounted(() => {
        const params = {
            speed: 1000,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                clickable: true,
                bulletClass: "h-3 w-3 rounded-lg bg-slate-200",
                bulletActiveClass:
                    "bg-gradient-to-r from-red-400 via-violet-200 to-cyan-300 dark:from-themeGreen dark:via-themeBlue dark:to-themePurple",
                type: "bullets",
                el: pagination.value,
            },
            loop: true,
        };

        Object.assign(swiper.value, params);
        swiper.value.initialize();
    });


    register();
</script>

<template>
    <swiper-container ref="swiper" :init="false">
        <swiper-slide
            v-for="service in services"
            :key="service.id"
            class="flex flex-col items-center"
        >
            <NuxtImg class="rounded-t-xl" :src="service.img" fit="cover" />
            <div class="mt-5 justify-self-center">
                <h2 class="text-lg font-bold">{{ service.title }}</h2>
                <p class="select-none text-sm">{{ service.description }}</p>
                <UIButton class="mt-5 w-full py-2">Learn more</UIButton>
            </div>
        </swiper-slide>
    </swiper-container>
    <ul ref="pagination" class="my-5 flex justify-center gap-x-5"></ul>
</template>
