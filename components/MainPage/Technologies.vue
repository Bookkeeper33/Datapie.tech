<script lang="ts" setup>
    const swiper = ref();
    const technologies = ref([
        "devicon-plain:googlecloud-wordmark",
        "devicon-plain:pytorch-wordmark",
        "devicon-plain:apachespark-wordmark",
        "simple-icons:splunk",
        "devicon-plain:scikitlearn",
        "devicon-plain:azure-wordmark",
        "devicon-plain:keras-wordmark",
        "devicon-plain:numpy-wordmark",
    ]);

    onMounted(() => {
        const params = {
            grabCursor: true,
            breakpointsBase: "window",
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                720: {
                    slidesPerView: 2,
                },
                320: {
                    slidesPerView: 1,
                },
            },
            speed: 500,
            loop: true,
        };

        Object.assign(swiper.value, params);
        swiper.value.initialize();
    });

    register();
</script>

<template>
    <section id="technologies" class="space-y-5 px-5">
        <h2 class="text-center text-xl font-bold sm:text-2xl">
            Our ML and data solutions are powered by the following technologies
        </h2>
        <swiper-container ref="swiper" init="false" class="">
            <swiper-slide
                v-for="(tech, index) in technologies"
                :key="index"
                class="flex items-center justify-center"
            >
                <Icon
                    :name="tech"
                    size="10em"
                    class="text-gray-900 dark:text-themePurple"
                />
            </swiper-slide>
        </swiper-container>
    </section>
</template>
