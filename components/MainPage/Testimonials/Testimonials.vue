<script lang="ts" setup>
    const testimonials = ref([
        {
            id: 0,
            quote: `
                  DataPie.tech has been a great partner for us.
                  They helped us to develop a machine learning model
                  that can predict customer churn and retention.
                  This has enabled us to improve our customer loyalty and retention rates,
                  and to increase our revenue.
                  `,
            author: "John Smith",
            occupation: "CEO of ABC Inc.",
            rating: 4,
            avatar: "/bald.png",
        },
        {
            id: 1,
            quote: `
                  We are very impressed with the quality and speed of DataPie.tech’s services.
                  They provided us with a comprehensive data analysis and visualization solution
                  that helped us to gain valuable insights into our data.
                  They also gave us actionable recommendations on how to improve
                  our data quality and management.
                  `,
            author: "Jane Doe",
            occupation: "Director of XYZ Ltd.",
            rating: 5,
            avatar: "/ceo.png",
        },
        {
            id: 2,
            quote: `
                  DataPie.tech is a very professional and reliable company.
                  They designed and implemented a data-driven strategy
                  that helped us to achieve our goals and objectives.
                  They also provided us with regular reports and feedback on our progress and performance.
                  They are always ready to help and support us whenever we need them.
                  `,
            author: "Michael Lee",
            occupation: "Manager of PQR Co.",
            rating: 5,
            avatar: "/chief.png",
        },
    ]);

    const swiper = ref();

    onMounted(() => {
        const params = {
            initialSlide: 1,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 2,
                },
            },
            effect: "coverflow",
            coverflowEffect: {
                rotate: 10,
                slideShadows: false,
                depth: 0,
                modifier: 2,
                stretch: 20,
                scale: 0.9,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            speed: 700,
        };

        Object.assign(swiper.value, params);
        swiper.value.initialize();
    });

    register();
</script>

<template>
    <section
        id="testimonials"
        class="bg-[url('/assets/images/gradient.png')] bg-cover bg-center"
    >
        <div
            v-motion-slide-visible-once-bottom
            class="px-5 py-5 sm:px-0 sm:py-10"
        >
            <h2 class="text-center text-3xl font-bold md:text-5xl">
                What They Say ?
            </h2>
            <p class="mt-3 text-center text-lg font-semibold">
                Don’t just take our word for it. Hear what our clients have to
                say about us:
            </p>
            <swiper-container
                ref="swiper"
                v-motion-slide-visible-once-bottom
                init="false"
                class="mt-10 h-auto sm:mt-20"
            >
                <swiper-slide
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                    class="flex flex-col items-center"
                >
                    <MainPageTestimonialsTestimonial
                        :testimonial="testimonial"
                    />
                </swiper-slide>
            </swiper-container>
        </div>
    </section>
</template>
