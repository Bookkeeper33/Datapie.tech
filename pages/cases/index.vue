<script lang="ts" setup>
    const { cases } = useSharedCases();
</script>
<template>
    <div class="flex-auto">
        <div class="container mx-auto space-y-10 px-4 pb-10 md:px-6">
            <div
                v-motion-fade-visible-once
                class="relative flex flex-col gap-10 lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:h-48 lg:after:w-96 lg:after:bg-[radial-gradient(#7354F2,transparent_2px)] lg:after:[background-size:25px_25px] dark:lg:after:bg-[radial-gradient(#47F75F,transparent_2px)]"
            >
                <div
                    class="prose prose-lg prose-slate flex flex-col space-y-2 dark:prose-invert prose-h2:mb-2 prose-h2:mt-10"
                >
                    <h2 class="text-3xl font-bold sm:text-5xl">
                        Client success stories
                    </h2>
                    <p>
                        We are proud to share some of the successful projects
                        that we have completed or are currently working on for
                        our clients.
                    </p>
                    <p>
                        These cases demonstrate our expertise and impact in
                        various industries and domains, such as retail,
                        e-commerce, fintech, pharma, etc.
                    </p>
                </div>
            </div>

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
