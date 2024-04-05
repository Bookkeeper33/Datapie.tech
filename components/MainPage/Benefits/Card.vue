<script lang="ts" setup>
    defineProps<{ benefit: Content }>();
    
    const card = ref<HTMLElement | null>(null);
    const { x, y } = useMouse({
        target: card,
        type: "client",
        touch: false,
    });
    const { left, top } = useElementBounding(card);

    const glowX = computed(() => x.value - left.value);
    const glowY = computed(() => y.value - top.value);
    const cardStyle = computed(() => {
        return {
            "--glow-x": `${glowX.value}px`,
            "--glow-y": `${glowY.value}px`,
        };
    });
</script>

<template>
    <div
        ref="card"
        class="group card card-compact relative w-96 cursor-pointer overflow-hidden transition duration-100 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[2] before:rounded-[inherit] before:opacity-0 sm:p-[3px] lg:hover:bg-radial dark:lg:hover:bg-radial-dark"
        :style="cardStyle"
    >
        <div
            class="card-body z-0 rounded-[inherit] bg-themeGreen/50 *:opacity-80 *:transition *:duration-300 *:ease-in-out dark:bg-themePurple/80 group-hover:lg:*:opacity-100"
        >
            <Icon :name="benefit.img" size="3em" />
            <h2 class="card-title">
                {{ benefit.title }}
            </h2>
            <p class="text-base">
                {{ benefit.description }}
            </p>
        </div>
    </div>
</template>
