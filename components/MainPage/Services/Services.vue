<script setup lang="ts">
    const { width } = useWindowSize();
    const MAX_SCREEN_SIZE = 640;

    const services = ref([
        {
            id: 0,
            title: "Predictive Analytics",
            description: `We use advanced statistical and machine learning
                            techniques to forecast future trends, events, and
                            outcomes based on your historical and current data.
                            We help you to anticipate customer behavior, demand
                            patterns, market fluctuations, and more.`,
            img: "/predictive.png",
        },
        {
            id: 1,
            title: "Machine Learning Models",
            description: `We build and deploy custom machine learning models
                            that can learn from your data and perform various
                            tasks, such as classification, regression,
                            clustering, recommendation, etc. We help you to
                            automate processes, improve accuracy, and discover
                            new opportunities.`,
            img: "/ai.png",
        },
        {
            id: 2,
            title: "Data-Driven Strategies",
            description: `We design and implement data-driven strategies that
                            can help you to achieve your business goals and
                            objectives. We help you to define your key
                            performance indicators, measure your progress, and
                            optimize your actions.`,
            img: "/data.png",
        },
    ]);
</script>

<template>
    <section id="services" class="py-10">
        <div v-motion-slide-visible-once-top class="px-4 py-10 sm:p-0">
            <h2
                class="mb-5 text-center text-3xl font-bold sm:mb-10 lg:text-5xl"
            >
                What we do ?
            </h2>

            <ClientOnly>
                <MainPageServicesTabs
                    v-if="width >= MAX_SCREEN_SIZE"
                    :services="services"
                />
                <MainPageServicesSwiper v-else :services="services" />
            </ClientOnly>
        </div>
    </section>
</template>
