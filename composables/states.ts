export function useSharedData() {
    const data = useState("sharedData", () => ({
        services: {
            category: "Services",
            navigation: [
                { title: "AI Services", link: "ai" },
                { title: "Data Services", link: "data" },
                {
                    title: "Data Visualization",
                    link: "visualization",
                },
                {
                    title: "Dashboard Development",
                    link: "dashboard",
                },
            ],
        },
        company: {
            category: "Company",
            navigation: [
                { title: "Cases", link: "/cases" },
                { title: "Blog", link: "/blog" },
                { title: "About us", link: "/about" },
            ],
        },
    }));

    return data;
}
