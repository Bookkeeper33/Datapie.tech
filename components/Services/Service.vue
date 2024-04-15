<script lang="ts" setup>
    defineProps<{ data: Service }>();
</script>

<template>
    <div
        class="lg:relative lg:before:absolute lg:before:block lg:before:h-full lg:before:w-full lg:before:bg-[url('/assets/images/abstraction.png')] lg:before:bg-cover lg:before:bg-center lg:before:opacity-60"
    >
        <div
            class="container relative z-10 mx-auto flex min-h-dvh flex-col gap-10 px-4 py-10 md:gap-20 md:px-6"
        >
            <div v-motion-fade-visible-once class="space-y-4 self-start">
                <div class="prose space-y-5 dark:prose-invert">
                    <h2
                        class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    >
                        {{ data.pageName }}
                    </h2>
                    <p
                        class="mx-auto max-w-[800px] md:text-base/relaxed lg:text-lg/relaxed"
                    >
                        {{ data.description }}
                    </p>
                </div>
            </div>
            <h2
                v-motion-fade-visible-once
                class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
                {{ data.pageName }} includes
            </h2>
            <div class="flex flex-wrap gap-6 md:gap-10">
                <div
                    v-for="(service, index) in data.services"
                    :key="index"
                    v-motion-slide-visible-once-bottom
                    class="prose prose-lg flex flex-col items-start space-y-2 prose-p:prose-base dark:prose-invert prose-h3:font-bold lg:max-w-md"
                >
                    <div class="flex items-center justify-center">
                        <Icon
                            :name="service.icon"
                            size="5em"
                            class="text-slate-800 dark:text-themeGreen"
                        />
                    </div>
                    <div class="space-y-2 antialiased">
                        <h3 class="text-xl font-bold">{{ service.title }}</h3>
                        <p class="text-sm">
                            {{ service.serviceDescription }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <template v-if="data.projects">
        <div
            class="grid items-center justify-center gap-4 px-4 py-14 text-center md:px-6 lg:gap-10"
        >
            <div
                v-motion-slide-visible-once-bottom
                class="prose prose-xl mx-auto space-y-3 antialiased dark:prose-invert md:prose-p:text-xl/relaxed lg:prose-p:text-base/relaxed"
            >
                <h2 class="text-3xl font-bold tracking-tighter">
                    Featured Projects
                </h2>
                <p class="text-base lg:mx-auto">
                    Discover the amazing things of our AI services:
                </p>
            </div>
            <div class="flex flex-wrap justify-center gap-10">
                <div
                    v-for="(project, index) in data.projects"
                    :key="index"
                    v-motion-slide-visible-once-bottom
                    class="card card-compact isolate max-w-md rounded-xl bg-white/15 antialiased shadow-lg ring-1 ring-black/5"
                >
                    <figure class="max-h-60">
                        <NuxtImg
                            :src="project.image"
                            :alt="project.title"
                            loading="lazy"
                        />
                    </figure>
                    <div
                        class="card-body prose prose-xl text-left prose-p:prose-base dark:prose-invert"
                    >
                        <h3 class="card-title">{{ project.title }}</h3>
                        <p>{{ project.shortDesc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>
