<script lang="ts" setup>
    const team = ref([
        {
            name: "Andrii Volkov",
            position: "Data Science Management Consultant",
            description: `He provides consulting services focused on management
            of projects and data teams with a spectrum of start-ups and established companies in the Silicon Valley, USA. His tasks include project management and consulting for data science projects,
            advice on creating advanced data science models and analyses, translating data-backed insights into actionable recommendations
            for the clients’ executive teams and helping to identify opportunities for enhancing clients’ products
            and services with data science.`,
            image: "andrii.jpg",
        },
        {
            name: "Oleksandr Pustovyi",
            position: "Data and BI engineer",
            description: `He has over 7 years of experience in Data & BI engineering,
            Big Data analytics, and Data Science. He is skilled in Python, SQL, Google Big Query,
            and various tools/frameworks including Spark, JUPYTER, Airflow.
            He is proficient in building and enhancing data collection procedures, and conducting root cause analysis.`,
            image: "olexandr.jpg",
        },
        {
            name: "Anatolii Shemet",
            position: "Chief Operational Officer",
            description: `He leads operations and growth initiatives for our company.
            He directs a team of marketers, PR, business development, HR, and recruitment professionals,
            guiding them as a mentor and building robust partnerships within Ukraine and globally.
            He also keeps up with the latest market trends and industry developments, ensuring that our operations
            and strategies remain contemporary and competitive..`,
            image: "tolik.jpg",
        },
    ]);
    const swiper = ref();

    onMounted(() => {
        const params = {
            slidesPerView: 1,
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                },
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
            speed: 700,
            a11y: true,
            autoHeight: true,
            grabCursor: true,
            roundLengths: true,
        };

        Object.assign(swiper.value, params);
        swiper.value.initialize();
    });

    register();
</script>
<template>
    <div class="space-y-10">
        <div v-motion-slide-visible-once-bottom class="prose prose-lg">
            <h2 class="text-2xl font-bold tracking-tighter sm:text-4xl">
                Meet the Team
            </h2>
            <p>
                We have a team of seasoned professionals who have extensive
                knowledge and skills in AI, ML, and Data Science. Meet our
                founders and leaders:
            </p>
        </div>
        <swiper-container
            ref="swiper"
            v-motion-slide-visible-once-bottom
            init="false"
        >
            <swiper-slide v-for="(member, index) in team" :key="index">
                <AboutTeamMember v-bind="member" />
            </swiper-slide>
        </swiper-container>
    </div>
</template>
