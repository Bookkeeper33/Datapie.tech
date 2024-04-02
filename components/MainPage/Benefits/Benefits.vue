<script setup lang="ts">
    const benefits = ref([
        {
            id: 0,
            title: "Expertise",
            description: `
                We have a team of seasoned professionals who have extensive knowledge and skills in AI, ML, and Data Science.
                We are always up to date with the latest developments and innovations in the field,
                and we apply them to our solutions.
            `,
            img: "ph:user-circle-gear",
        },
        {
            id: 1,
            title: "Quality",
            description: `
                We deliver high-quality solutions that meet or exceed your expectations.
                We follow the best practices and standards in the industry,
                and we ensure that our solutions are robust, reliable, and secure.
            `,
            img: "mdi:shield-check",
        },
        {
            id: 2,
            title: "Impact",
            description: `
                We create solutions that have a positive and lasting impact on your business.
                We help you to improve your performance, efficiency, and profitability,
                as well as to gain a competitive edge in the market
            `,
            img: "grommet-icons:impact",
        },
        {
            id: 3,
            title: "Satisfaction",
            description: `
                We value your satisfaction and feedback. We work closely with you to understand your needs and preferences,
                and we provide you with personalized and flexible solutions.
                We are always available and responsive to your queries and requests.
            `,
            img: "mdi:account-heart-outline",
        },
    ]);
</script>

<template>
    <section
        id="benefits"
        class="relative flex flex-col justify-center gap-y-10 py-10 before:absolute before:block before:h-full before:w-full before:bg-[url('assets/images/gradient.png')] before:bg-cover before:bg-center before:opacity-60 sm:min-h-dvh"
    >
        <div class="container relative z-20 mx-auto px-5">
            <div class="text-center">
                <h2 class="mb-5 text-3xl font-bold lg:text-5xl">
                    Why choose us ?
                </h2>
                <p
                    class="font-semibold text-gray-800 dark:text-white sm:text-lg"
                >
                    We are not just another data company. We are your trusted
                    partner in your data-driven journey.
                </p>
                <p
                    class="font-semibold text-gray-800 dark:text-white sm:text-lg"
                >
                    Here are some of the reasons why you should choose us:
                </p>
            </div>
        </div>

        <div class="flex flex-wrap justify-center gap-10 px-5 lg:mt-10">
            <MainPageBenefitsCard
                v-for="benefit in benefits"
                ref="itemsRef"
                :key="benefit.id"
                :benefit="benefit"
            />
        </div>
    </section>
</template>
