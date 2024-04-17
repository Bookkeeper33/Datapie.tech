<script lang="ts" setup>
    defineProps<{
        name: string;
        position: string;
        description: string;
        image: string;
    }>();
</script>
<template>
    <div href="#" class="group relative block h-[500px] bg-slate-800">
        <NuxtImg
            :alt="name"
            :src="image"
            class="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-50"
        />

        <div
            class="relative flex h-full flex-wrap justify-between p-4 sm:p-6 lg:p-8"
        >
            <div>
                <p
                    class="text-sm font-medium uppercase tracking-widest text-pink-500"
                >
                    {{ position }}
                </p>

                <p class="text-xl font-bold text-white sm:text-2xl">
                    {{ name }}
                </p>
            </div>

            <div class="prose prose-lg self-end">
                <div
                    class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <p class="text-sm text-white">
                        {{ description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
