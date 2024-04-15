<script setup lang="ts">
    const route = useRoute();
    const { findCase } = useSharedCases();
    const caseDetail = ref(findCase(route.params.company));
</script>
<template>
    <div
        class="flex-auto bg-[url('assets/images/hero.png')] bg-cover bg-fixed bg-center"
    >
        <template v-if="caseDetail">
            <CasesCaseDetails :data="caseDetail" />
        </template>
    </div>
</template>
