<template>
    <form class="space-y-7">
        <div>
            <label for="email"></label>
            <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Business email*"
                class="w-full appearance-none rounded-md px-2 py-1 shadow-sm outline-none focus:ring-1 focus:ring-themePurple dark:bg-slate-700 dark:placeholder:text-white dark:focus:ring-themeBlue sm:min-w-[260px]"
            />
        </div>
        <UIButton
            class="w-full py-1 text-lg font-semibold sm:min-w-[260px]"
            type="submit"
            >Get in touch</UIButton
        >
    </form>
</template>
