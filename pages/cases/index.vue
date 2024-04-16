<script lang="ts" setup>
    const { cases } = useSharedCases();
</script>
<template>
    <div class="flex-auto">
        <div class="container mx-auto space-y-10 px-4 pb-10 md:px-6">
            <UISection>
                <h2 class="text-3xl font-bold sm:text-5xl">
                    Client success stories
                </h2>
                <p>
                    We are proud to share some of the successful projects that
                    we have completed or are currently working on for our
                    clients.
                </p>
                <p>
                    These cases demonstrate our expertise and impact in various
                    industries and domains, such as retail, e-commerce, fintech,
                    pharma, etc.
                </p>
            </UISection>

            <h3 class="text-3xl font-bold sm:text-5xl">Latest case studies</h3>
            <div
                class="grid justify-center gap-10 md:grid-cols-2 lg:grid-cols-3"
            >
                <NuxtLink
                    v-for="(data, index) in cases"
                    :key="index"
                    v-motion-slide-visible-once-bottom
                    :to="`/cases/${data.title.toLowerCase()}`"
                >
                    <CasesCaseCard :id="index" :data="data" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
