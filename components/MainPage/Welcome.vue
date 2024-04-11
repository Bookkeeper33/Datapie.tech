<template>
    <section
        id="welcome"
        class="relative before:absolute before:block before:h-full before:w-full before:bg-[url('assets/images/hero.png')] before:bg-cover before:bg-center before:opacity-60"
    >
        <div
            v-motion-slide-visible-once-top
            class="container relative z-10 mx-auto flex min-h-96 items-center justify-center px-4 py-10 lg:min-h-screen"
        >
            <div class="flex max-w-lg flex-col antialiased md:max-w-2xl">
                <h1
                    class="mb-2 text-clip text-center text-3xl font-bold sm:text-center md:text-5xl"
                >
                    Welcome to
                    <span
                        class="cursor-pointer transition active:text-themeGreen dark:active:text-themePurple lg:hover:text-themeGreen lg:dark:hover:text-themePurple"
                        >DataPie</span
                    ><span class="text-themePurple dark:text-themeGreen">.</span
                    ><span
                        class="cursor-pointer transition active:text-themeBlue lg:hover:text-themeBlue"
                        >tech</span
                    >,
                </h1>
                <p class="text-center text-xl font-bold md:text-3xl">
                    where innovation meets data excellence! 🚀
                </p>
                <p class="my-5 text-center font-medium">
                    As pioneers in the realms of Artificial Intelligence,
                    Machine Learning, and Data Science, we’re dedicated to
                    crafting modern solutions that not only address today’s
                    challenges but also propel your business towards
                    unprecedented success.
                </p>

                <UIButton class="mt-10 self-center px-16 py-3"
                    >Get started!</UIButton
                >
            </div>
        </div>
    </section>
</template>
