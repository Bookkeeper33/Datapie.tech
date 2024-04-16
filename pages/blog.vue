<script lang="ts" setup>
    const blogPosts = ref([
        {
            title: "How to Build a Data-Driven Culture in Your Organization",
            tags: [
                "Data Culture Development",
                "Organizational Transformation",
                "Data-Driven Decision Making",
            ],
            date: new Date(),
        },
        {
            title: "The Benefits and Challenges of Reinforcement Learning",
            tags: ["Reinforcement Learning"],
            date: new Date(),
        },
        {
            title: "How to Use Natural Language Processing for Text Summarization",
            tags: ["NLP", "Summarization Strategies"],
            date: new Date(),
        },
        {
            title: "The Future of AI and ML in Healthcare",
            tags: ["Healthcare AI Trends", "Machine Learning ", "Healthcare"],

            date: new Date(),
        },
        {
            title: "How to Choose the Best Data Visualization Tool for Your Needs",
            tags: ["Data Visualization"],
            date: new Date(),
        },
    ]);
</script>
<template>
    <div class="flex-auto">
        <div class="container mx-auto space-y-10 px-4 pb-10 md:px-6">
            <UISection v-motion-fade-visible-once>
                <h2 class="text-3xl font-bold sm:text-5xl">
                    Datapie<span class="text-themePurple dark:text-themeGreen"
                        >.</span
                    >tech blog
                </h2>
                <p>
                    Welcome to our blog, where we share our insights, opinions,
                    and knowledge on various topics related to AI, ML, and Data
                    Science. You can also find our latest news, events, or
                    achievements here.
                </p>
                <p>
                    We hope you enjoy reading our blog and learn something new
                    from it. Feel free to leave your comments or questions, and
                    we will get back to you as soon as possible.
                </p>
            </UISection>
            <div class="flex flex-col gap-5">
                <h3 class="text-3xl font-bold sm:text-5xl">Latest blogs</h3>

                <div class="flex flex-col gap-5 lg:grid-cols-2 xl:grid-cols-3">
                    <BlogItem
                        v-for="(post, index) in blogPosts"
                        :key="index"
                        v-motion-slide-visible-once-bottom
                        :post="post"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
