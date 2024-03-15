<script lang="ts" setup>
    const services = {
        title: "What we do",
        subLinks: [
            "AI Services",
            "Data Services",
            "Data Visualization",
            "Dashboard Development",
        ],
    };

    const about = {
        title: "About us",
        subLinks: ["Our Story", "Our Values", "Our Team"],
    };
</script>

<template>
    <nav>
        <ul
            class="flex-col gap-y-2 lg:flex lg:flex-row lg:items-center lg:gap-x-5 lg:rounded-full lg:px-4 lg:py-2 lg:text-lg lg:ring-1 lg:ring-gray-200 lg:dark:ring-gray-800"
        >
            <li>
                <HeaderNavPopOver
                    :nav-title="services.title"
                    :sub-links="services.subLinks"
                />
            </li>
            <li>Cases</li>
            <li>Blog</li>
            <li>
                <HeaderNavPopOver
                    :nav-title="about.title"
                    :sub-links="about.subLinks"
                />
            </li>
            <li>Contacts</li>
        </ul>
    </nav>
</template>

<style></style>
