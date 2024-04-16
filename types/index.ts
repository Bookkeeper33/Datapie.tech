type Navigation = {
    title: string;
    link: string;
};
type NavData = {
    category: string;
    navigation: Navigation[];
};

type Content = {
    id: number;
    title: string;
    description: string;
    img: string;
};

type Testimonial = {
    id: number;
    quote: string;
    author: string;
    occupation: string;
    rating: number;
    avatar: string;
};

type Service = {
    route: string;
    pageName: string;
    description: string;
    services: { title: string; serviceDescription: string; icon: string }[];
    projects?: { title: string; shortDesc: string; image: string }[];
};

type Case = {
    title: string;
    label: string;
    tags: string[];
    image: string;
    studies: { name: string; description: string }[];
};

type BlogPost = {
    title: string;
    tags: string[];
    date: Date;
};
