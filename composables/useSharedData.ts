
  export function useSharedData() {
    const data = useState('sharedData', () => ({
      services: {
        title: "Services",
        subLinks: [
          "AI Services",
          "Data Services",
          "Data Visualization",
          "Dashboard Development",
        ],
      },
      company: {
        title: "Company",
        subLinks: ["About us", "Cases", "Blog", "Contact us"],
      },
    }));
  
    return data;
  }
