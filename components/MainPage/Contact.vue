<template>
    <section id="contact" class="bg-cover bg-center bg-no-repeat">
        <div
            class="container mx-auto flex min-h-96 flex-col justify-center gap-y-7 px-5 py-10 lg:px-0"
        >
            <div v-motion-slide-visible-once-bottom class="text-center">
                <h2 class="text-center text-3xl font-bold md:text-5xl">
                    Ready to start ?
                </h2>
            </div>
            <div
                v-motion-slide-visible-once-bottom
                class="isolate flex flex-col gap-y-10 rounded-xl bg-gradient-to-r from-red-400/15 via-violet-200/15 to-cyan-300/15 p-7 shadow-lg ring-1 ring-black/5 dark:from-themeGreen/15 dark:via-themeBlue/15 dark:to-themePurple/15 sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:justify-between"
            >
                <div class="lg:max-w-xl">
                    <p class="text-xl font-semibold">
                        Partner with us to unlock the true potential of your
                        data, harness the power of AI and ML, and propel your
                        business towards unparalleled success.
                    </p>
                </div>

                <div class="flex flex-col gap-y-7">
                    <p class="text-xl font-semibold">
                        Embark on a transformative journey with
                        <span
                            class="lg:cursor-pointer hover:lg:text-themeGreen dark:hover:lg:text-themePurple"
                            >DataPie</span
                        ><span class="text-themePurple dark:text-themeBlue"
                            >.</span
                        ><span class="lg:cursor-pointer hover:lg:text-themeBlue"
                            >tech</span
                        >!
                    </p>
                    <UIButton class="p-3 text-lg sm:px-5 sm:py-4"
                        ><a href="mailto:datapie.tech@gmail.com"
                            >Connect with us today!</a
                        ></UIButton
                    >
                </div>
            </div>
        </div>
    </section>
</template>
