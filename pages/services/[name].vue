<script lang="ts" setup>
    const route = useRoute();
    definePageMeta({
        validate: async (route) => {
            return (
                typeof route.params.name === "string" &&
                /\bai\b|\bvisualization\b|\bdata\b|\bdashboard\b/gi.test(
                    route.params.name
                )
            );
        },
    });
    const obj = useServiceData(route.params.name);
</script>

<template>
    <div class="flex-auto">
        <template v-if="obj">
            <ServicesService :data="obj" />
        </template>
    </div>
</template>
