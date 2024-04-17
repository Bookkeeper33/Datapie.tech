<template>
    <div class="flex-auto">
        <div
            class="bg-[url('/assets/images/office_sm.jpg')] bg-cover bg-center bg-no-repeat lg:bg-[url('/assets/images/office_md.jpg')]"
        >
            <div
                class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 md:flex md:items-center md:justify-end lg:h-screen lg:px-8"
            >
                <div
                    v-motion-fade-visible-once
                    class="prose prose-lg text-stone-100 ltr:sm:text-left rtl:sm:text-right"
                >
                    <h1 class="text-3xl font-extrabold sm:text-5xl">
                        Company overview
                    </h1>
                    <p class="mt-4 max-w-lg sm:text-xl/relaxed">
                        <UILogo /> is a company that specializes in Artificial
                        Intelligence, Machine Learning, and Data Science.
                    </p>
                    <p class="mt-4 max-w-lg sm:text-xl/relaxed">
                        We are passionate about creating modern solutions that
                        not only address today’s challenges but also propel your
                        business towards unprecedented success.
                    </p>
                </div>
            </div>
        </div>
        <div
            class="container mx-auto mt-10 pb-10 gap-10 px-4 sm:flex sm:flex-col md:gap-16 md:px-6"
        >
            <AboutStory />
            <AboutValues />
            <AboutTeam />
        </div>
    </div>
</template>
