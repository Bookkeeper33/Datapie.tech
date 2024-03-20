<template>
    <h3 class="border-b border-b-gray-800 text-lg font-semibold">Contacts:</h3>
    <div class="flex flex-col gap-y-1 text-lg ">
        <span class="flex items-center gap-x-1">
            <Icon
                name="material-symbols-light:stacked-email-outline-sharp"
                size="1.3em"
            />
            <a
                class="decoration-2 underline-offset-4 transition active:underline lg:hover:underline"
                href="mailto:datapie.tech@gmail.com"
                >datapie.tech@gmail.com</a
            >
        </span>
        <span class="flex items-center gap-x-1">
            <Icon name="mdi:phone" size="1.3em" />
            <a
                class="decoration-2 underline-offset-4 transition active:underline lg:hover:underline"
                href="tel:+380 44 123 4567"
                >+380 44 123 4567</a
            >
        </span>
    </div>
</template>
