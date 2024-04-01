<script lang="ts" setup>
    defineProps<{ benefit: Content }>();

    const card = ref<HTMLElement | null>(null);
    const { x, y } = useMouse({ target: card, type: "client" });
    const { left, top } = useElementBounding(card);
    const { width } = useWindowSize();
    const MIN_SCREEN_WIDTH = 1024;

    const glowX = computed(() => x.value - left.value);
    const glowY = computed(() => y.value - top.value);

    const cardStyle = computed(() => {
        if (width.value < MIN_SCREEN_WIDTH) {
            return {};
        } else {
            return {
                "--glow-x": `${glowX.value}px`,
                "--glow-y": `${glowY.value}px`,
            };
        }
    });
</script>

<template>
    <div
        ref="card"
        class="group card card-compact relative w-96 cursor-pointer overflow-hidden p-5 transition duration-100 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[2] before:rounded-[inherit] before:opacity-0 hover:bg-radial dark:hover:bg-radial-dark sm:p-[3px]"
        :style="cardStyle"
    >
        <div
            class="card-body z-0 rounded-[inherit] bg-themeGreen/50 *:opacity-80 *:transition *:duration-300 *:ease-in-out group-hover:*:opacity-100 dark:bg-themePurple/80"
        >
            <Icon :name="benefit.img" size="3em" />
            <h2 class="card-title">
                {{ benefit.title }}
            </h2>
            <p>
                {{ benefit.description }}
            </p>
        </div>
    </div>
</template>
