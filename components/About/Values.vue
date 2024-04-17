<script lang="ts" setup>
    const values = ref([
        {
            name: "Excellence",
            description: `We strive to deliver high-quality solutions that meet or exceed your expectations. 
            We follow the best practices and standards in the industry, 
            and we ensure that our solutions are robust, reliable, and secure.`,
        },
        {
            name: "Innovation",
            description: `We thrive on exploring the latest advancements in technology and incorporating them into our solutions. 
            By staying ahead of the curve, we ensure that your business is equipped with the most modern tools 
            to drive continuous growth and revenue.`,
        },
        {
            name: "Impact",
            description: ` We create solutions that have a positive and lasting impact on your business.
            We help you to improve your performance, efficiency, and profitability, 
            as well as to gain a competitive edge in the market.`,
        },
        {
            name: "Value",
            description: `We are not only about tech, but about the business value through the data insights and our tech approaches. 
            We tailor our solutions to meet your unique business needs, providing scalable and efficient solutions 
            that elevate your organization to new heights.`,
        },
        {
            name: "Satisfaction",
            description: ` We value your satisfaction and feedback. We work closely with you to understand your needs and preferences, and we provide you with personalized and flexible solutions. We are always available and responsive to your queries and requests.`,
        },
    ]);
</script>

<template>
    <div class="space-y-7">
        <div v-motion-slide-visible-once-bottom class="prose prose-lg">
            <h2 class="text-2xl font-bold tracking-tighter sm:text-4xl">
                Our Values
            </h2>
            <p>
                At DataPie.tech, we are guided by the following core values and
                principles:
            </p>
        </div>
        <ul class="grid list-none gap-12 md:gap-14 lg:grid-cols-2">
            <li
                v-for="(value, index) in values"
                :key="index"
                v-motion-slide-visible-once-bottom
                class="prose prose-lg"
            >
                <Icon
                    name="pepicons-pop:fire-circle-filled"
                    size="1.5em"
                    class="mr-5 inline-block dark:text-themeGreen"
                />
                <span
                    class="font-medium underline decoration-wavy decoration-from-font underline-offset-4"
                    >{{ value.name }}</span
                >
                <p class="mt-5">
                    {{ value.description }}
                </p>
            </li>
        </ul>
    </div>
</template>
