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

export function useSharedServices() {
    const services = useState("sharedServices", () => [
        {
            route: "ai",
            pageName: "AI Services",
            description: `
        At DataPie.tech, we offer a range of products and services that can help you to harness
        the power of data, AI, and ML. Whether you need to forecast future trends, automate processes, or
        discover new opportunities, we have the solutions for you.
        `,
            services: [
                {
                    title: "AI Strategy Development",
                    serviceDescription: `
                We help you to define your AI vision and goals, and to design a roadmap for achieving them.
                We assess your current data and AI capabilities, identify the gaps and opportunities,
                and recommend the best solutions for your business needs.
                `,
                    icon: "material-symbols:strategy",
                },
                {
                    title: "AI Implementation and Integration",
                    serviceDescription: `
                We help you to implement and integrate the AI solutions that match your business objectives and requirements.
                We ensure that the AI solutions are compatible with your existing systems and processes,
                and that they are secure, reliable, and scalable.
                `,
                    icon: "material-symbols:integration-instructions-outline-sharp",
                },
                {
                    title: "Custom AI Development",
                    serviceDescription: `
                We help you to develop custom AI solutions that are tailored to your specific challenges and use cases.
                We use the latest technologies and frameworks to build and deploy AI solutions that can perform various tasks,
                such as classification, regression, clustering, recommendation, etc.
                `,
                    icon: "carbon:area-custom",
                },
                {
                    title: "AI Talent Acquisition and Training",
                    serviceDescription: `We help you to acquire and train the AI talent that you need to succeed in your AI journey.
                We provide you with the best AI experts and professionals, and we also offer training and coaching programs
                to upskill your existing staff and teams.`,
                    icon: "oui:training",
                },
                {
                    title: "AI Risk Assessment",
                    serviceDescription: `We help you to assess and mitigate the risks and challenges associated with AI adoption and implementation. 
                    We help you to comply with the ethical, legal, and regulatory standards, 
                    and to ensure the quality, reliability, and security of your AI solutions.`,
                    icon: "grommet-icons:risk",
                },
            ],
            projects: [
                {
                    title: "Object Detection and Image Recognition",
                    shortDesc: `We help you to detect and recognize objects and images in your data, 
                such as faces, logos, products, etc. We help you to enhance your image processing and analysis capabilities, 
                and to improve your customer experience and engagement.`,
                    image: "vision.jfif",
                },
                {
                    title: "Natural Language Processing (NLP)",
                    shortDesc: `We help you to process and analyze natural language data, such as text, speech, or audio. 
                    We help you to extract information, insights, and sentiments from your data, 
                    and to generate natural language outputs, such as summaries, captions, or responses.`,
                    image: "nlp.jfif",
                },
                {
                    title: "Speech Recognition",
                    shortDesc: `We help you to recognize and transcribe speech data, such as voice commands, conversations, 
                    or audio recordings. We help you to improve your voice-based interactions and services, 
                    and to increase your accessibility and convenience.`,
                    image: "speech.jfif",
                },
                {
                    title: "Anomaly Detection",
                    shortDesc: `We help you to detect and identify anomalies and outliers in your data, 
                    such as fraud, errors, or defects. We help you to prevent and reduce losses, damages, and risks, 
                    and to improve your quality and performance.`,
                    image: "anomaly.jfif",
                },
                {
                    title: "Recommender Systems",
                    shortDesc: `We help you to provide personalized and relevant recommendations to your customers or users, 
                    based on their preferences, behavior, or feedback. 
                    We help you to increase your customer satisfaction, loyalty, and retention, 
                    and to boost your sales and revenue.`,
                    image: "recommender.jfif",
                },
                {
                    title: "Generative Models",
                    shortDesc: `We help you to generate new and realistic data, such as images, text, or audio, 
                    based on your existing data or inputs. We help you to augment your data 
                    and enhance your creativity and innovation.`,
                    image: "gen_models.jfif",
                },
                {
                    title: "Time-Series Forecasting",
                    shortDesc: `We help you to forecast future values or events based on your historical and current data, 
                    such as sales, demand, or weather. We help you to anticipate and plan for the future, 
                    and to optimize your decisions and actions.`,
                    image: "forecasting.jfif",
                },
                {
                    title: "Reinforcement Learning",
                    shortDesc: `We help you to create and train agents that can learn from their own actions and feedback, 
                    and that can optimize their behavior and performance. We help you to solve complex and dynamic problems, 
                    and to achieve your goals and objectives.`,
                    image: "learning.jfif",
                },
            ],
        },
        {
            route: "data",
            pageName: "Data Services",
            description: `
        We provide end-to-end data services, from data pipeline design and implementation to data visualization
        and dashboard development. We can help you to manage, process, and analyze your data,
        and to gain valuable insights and intelligence from your data. Our data services include:
        `,
            services: [
                {
                    title: "Data Pipeline Design and Implementation",
                    serviceDescription: `
                We help you to design and implement data pipelines that can collect, store, and process your data,
                from various sources and formats, such as structured, unstructured, or streaming data.
                We help you to ensure the quality, reliability, and security of your data pipelines,
                and to optimize their performance and efficiency.
                `,
                    icon: "icon-park-outline:data-screen",
                },
                {
                    title: "Data Modeling and Architecture",
                    serviceDescription: `
                We help you to model and architect your data, and to define the structure, relationships,
                and rules of your data. We help you to ensure the consistency, integrity,
                and validity of your data, and to facilitate your data analysis and reporting.
                `,
                    icon: "carbon:data-unreal",
                },
                {
                    title: "Data Integration and Migration",
                    serviceDescription: `
                We help you to integrate and migrate your data, from different sources and systems,
                such as databases, applications, or cloud platforms.
                We help you to ensure the compatibility, accuracy, and completeness of your data,
                and to minimize the risks and costs of data integration and migration.
                `,
                    icon: "icon-park-twotone:data-display",
                },
                {
                    title: "Data Warehousing and Storage",
                    serviceDescription: `
                We help you to warehouse and store your data, and to provide a centralized and unified view of your data.
                We help you to ensure the availability, accessibility, and security of your data,
                and to optimize your data storage and retrieval.
                `,
                    icon: "icon-park-outline:cloud-storage",
                },
                {
                    title: "Data Governance and Security",
                    serviceDescription: `
                We help you to govern and secure your data, and to comply with the ethical, legal, and regulatory standards.
                We help you to define and implement the policies, procedures,
                and roles for your data management and usage,
                and to protect your data from unauthorized access, modification, or loss.
                `,
                    icon: "healthicons:health-data-security",
                },
                {
                    title: "Big Data Processing and Analysis",
                    serviceDescription: `
                We help you to process and analyze your big data, and to handle the volume, velocity,
                and variety of your data. We use the latest tools and frameworks,
                such as Spark, Hadoop, or Google Big Query, to perform various tasks,
                such as data cleansing, transformation, aggregation, or mining.
                `,
                    icon: "icon-park-outline:analysis",
                },
                {
                    title: "Real-Time Data Processing and Analysis",
                    serviceDescription: `
                We help you to process and analyze your real-time data, and to handle the streaming
                and dynamic nature of your data. We use the latest tools
                and frameworks, such as Kafka, Storm, or Flink, to perform various tasks,
                such as data ingestion, filtering, enrichment, or aggregation.
                `,
                    icon: "ep:data-analysis",
                },
                {
                    title: "Cloud Migration and Optimization:",
                    serviceDescription: `
                We help you to migrate and optimize your data and applications to the cloud,
                and to leverage the benefits of cloud computing, such as scalability, flexibility,
                and cost-effectiveness. We help you to choose the best cloud platform
                and service for your needs, such as AWS, Azure, or Google Cloud,
                and to ensure the security, reliability, and performance of your cloud solutions.
                `,
                    icon: "uil:cloud-database-tree",
                },
            ],
        },
        {
            route: "visualization",
            pageName: "Data Visualization",
            description: `
        We provide data visualization services,
        to help you to present and communicate your data and insights in a clear and compelling way.
        Our data visualization services include
        `,
            services: [
                {
                    title: "Data Visualization",
                    serviceDescription: `
                We help you to visualize your data, and to create charts, graphs, maps, or other visual elements,
                that can help you to understand and interpret your data.
                We use the latest tools and frameworks, such as Tableau, Power BI, or D3.js, to create stunning and effective data visualizations,
                that can highlight the patterns, trends, and outliers in your data.
                `,
                    icon: "carbon:data-view",
                },
                {
                    title: "Data Modeling and Analysis",
                    serviceDescription: `
                We help you to model and analyze your data, and to perform various tasks,
                such as data cleansing, transformation, aggregation, or mining.
                We help you to prepare your data for visualization and dashboard development,
                and to ensure the quality, reliability, and validity of your data.
                `,
                    icon: "fluent-mdl2:modeling-view",
                },
            ],
        },
        {
            route: "dashboard",
            pageName: "Dashboard Development",
            description: `
        We provide dashboard development services,
        to help you to present and communicate your data and insights in a clear and compelling way.
        We can help you to create interactive and dynamic dashboards,
        that can help you to monitor, explore, and share your data and insights.
        Our  dashboard development services include:
        `,
            services: [
                {
                    title: "Dashboard Development",
                    serviceDescription: `
                We help you to develop dashboards, and to create interactive and dynamic interfaces,
                that can help you to monitor and control your data and insights.
                We use the latest tools and frameworks, such as Tableau, Power BI, or Dash,
                to create user-friendly and customizable dashboards,
                that can display the key performance indicators, metrics,
                and alerts for your data and insights.
                `,
                    icon: "mdi:view-dashboard-edit-outline",
                },
                {
                    title: "Business Process Automation",
                    serviceDescription: `
                We help you to automate your business processes, and to create workflows, scripts, or bots,
                that can help you to perform various tasks, such as data collection, processing, analysis, or reporting.
                We help you to improve your efficiency, productivity,
                and accuracy, and to reduce your manual work and errors.
                `,
                    icon: "carbon:business-processes",
                },
            ],
        },
    ]);
    const findService = (rt: any) =>
        services.value.find((obj) => obj.route === rt);

    return { services, findService };
}

export function useSharedCases() {
    const cases = useState("sharedCases", () => [
        {
            title: "Curtsy",
            label: "Personalized Clothing Recommendations",
            tags: ["E-commerce", "Recommender Systems"],
            image: "curtsy.png",
            studies: [
                {
                    name: "Challenge",
                    description: `Our client, Curtsy, is a clothing reselling platform that connects buyers and sellers of secondhand clothes.
                                            They wanted to provide personalized shopping experiences to their customers, by matching their preferences
                                            with the right products from their diverse and dynamic inventory.`,
                },
                {
                    name: "Solution",
                    description: `Our client, Curtsy, is a clothing reselling platform that connects buyers and sellers of secondhand clothes.
                                            They wanted to provide personalized shopping experiences to their customers, by matching their preferences
                                            with the right products from their diverse and dynamic inventory.`,
                },
                {
                    name: "Outcome",
                    description: `Our personalized clothing recommendations solution enhanced the customer’s
                                        shopping experience and increased their satisfaction and loyalty.
                                        Our algorithm helped our client achieve a significant boost in user engagement,
                                        conversion rates, and customer retention by two to three-digit numbers.`,
                },
            ],
        },
        {
            title: "Unilever",
            label: "Data Insights from Diverse Sources",
            tags: ["Data Analytics", "Data Visualization", "E-commerce"],
            image: "unilever.png",
            studies: [
                {
                    name: "Challenge",
                    description: `Our client, Unilever, is a multinational consumer goods company that owns a portfolio of diverse
                                        and geographically dispersed brands. They wanted to gain data insights from various sources,
                                        such as e-commerce data, Google Analytics events, loyalty programs, and product reviews and quizzes.
                                        They faced challenges in integrating, analyzing, and reporting their data across multiple brands and regions.`,
                },
                {
                    name: "Solution",
                    description: `We built a series of dashboard solutions using Tableau,
                                        a data visualization tool. These dashboards tracked the most important key performance indicators
                                        and their trends for each brand and region, such as sales, revenue, market share, customer satisfaction, etc.
                                        We also built a series of predictive models using machine learning techniques, to address specific problems
                                        in customer relationship management, such as retention, lifetime value estimation,
                                        and attribution models for marketing channels.`,
                },
                {
                    name: "Outcome",
                    description: `Our solutions enabled our client to target specific customer segments, improve the performance
                                        of their marketing campaigns, suggest site redesigns,
                                        and gain valuable insights into their customers’ behavior.
                                        We witnessed strong customer growth and retention based on the implementation of
                                        our recommendations by different brands. In addition, we were also able to standardize reporting across
                                        multiple brands of the client and helped them to make better-informed decisions, resulting in improved performance.`,
                },
            ],
        },
        {
            title: "OpenPay",
            label: "Data Lake and Data Warehouse Development",
            tags: [
                "Data Warehousing",
                "Data Pipeline Design",
                "Data Processing and Analysis",
                "Fintech",
            ],
            image: "openpay.png",
            studies: [
                {
                    name: "Challenge",
                    description: `Our client, OpenPay, is a fintech company that operates in multiple international locations.
                                        They wanted to build a data lake and a data warehouse from their dispersed data sources,
                                        to support the growth of their operations and customer base. They faced difficulties in collecting, storing,
                                        and processing their data, from various sources and formats, such as structured, unstructured, or streaming data.`,
                },
                {
                    name: "Solution",
                    description: `We built a data lake on AWS, a cloud computing platform, and leveraged various services,
                                        such as AWS Glue, AWS DMS, S3, Redshift, and selected the most suitable data connectors.
                                        A data lake is a centralized repository that can store and process any type or size of data.
                                        We used AWS Glue and AWS DMS to extract, transform, and load (ETL) the data from different sources and systems,
                                        such as databases, applications, or cloud platforms. We used S3 to store the data in a secure and scalable way.
                                        We used Redshift to create a data warehouse, which is a relational database that can extract data
                                        from the data lake and generate automated reports. We used Power BI, a business intelligence tool,
                                        to create the reports that measured user-related KPIs across different geographical units, such as user acquisition,
                                        retention, activity, etc. We shared these reports with various users throughout the organization, such as managers,
                                        analysts, or marketers.`,
                },
                {
                    name: "Outcome",
                    description: `Our approach and services improved the client’s decision-making process, increased efficiency,
                                        and provided better customer insights.The client acquired a fully functioning data lake and data warehouse
                                        that met their reporting needs, standardized and unified key customer metrics,
                                        and provided better business performance insights for top management..`,
                },
            ],
        },
        {
            title: "PharmID",
            label: "Drug Identification and Verification",
            tags: ["Pharmacy", "Image Recognition", "Anomaly Detection"],
            image: "pharmid.png",
            studies: [
                {
                    name: "Challenge",
                    description: `Our client, PharmID, is a company that provides drug identification
                                        and verification services to pharmacies, hospitals, and law enforcement agencies.
                                        They wanted to improve their accuracy and efficiency in identifying and verifying drugs,
                                        especially in cases of counterfeit or adulterated drugs.`,
                },
                {
                    name: "Solution",
                    description: `We developed a drug identification and verification system that uses image recognition
                                        and machine learning techniques. Our system can scan and analyze the images of drugs, such as pills, capsules,
                                        or tablets, and compare them with a database of verified drugs.
                                        Our system can also detect and flag any anomalies or discrepancies in the drugs,
                                        such as shape, color, size, or markings.`,
                },
                {
                    name: "Outcome",
                    description: ` Our drug identification and verification system improved the client’s ability to identify and verify drugs,
                                        and to prevent and reduce the risks of counterfeit or adulterated drugs.
                                        Our system helped the client achieve a high level of accuracy and efficiency,
                                        and to provide reliable and timely services to their customers and partners.`,
                },
            ],
        },
        {
            title: "Metagenics",
            label: "Personalized Nutrition and Wellness",
            tags: [
                "Healthcare",
                "Recommender Systems",
                "Natural Language Processing",
            ],
            image: "metagenics.png",
            studies: [
                {
                    name: "Challenge",
                    description: `Our client, Metagenics, is a company that provides personalized nutrition and
                                        wellness solutions to individuals and healthcare practitioners.
                                        They wanted to create a data-driven platform that can provide customized recommendations
                                        and interventions based on each individual’s health goals, needs, and preferences.`,
                },
                {
                    name: "Solution",
                    description: `We created a data-driven platform that uses natural language processing and machine learning techniques.
                                        Our platform can collect and analyze various types of data from each individual,
                                        such as medical history, lifestyle, diet, symptoms, or feedback.
                                        Our platform can also generate natural language outputs, such as personalized reports, suggestions, or plans,
                                        that can help each individual achieve their health goals and improve their wellness.`,
                },
                {
                    name: "Outcome",
                    description: `Our data-driven platform enhanced the client’s ability to provide personalized nutrition
                                        and wellness solutions to their customers and partners. Our platform helped the client achieve
                                        a high level of customer satisfaction, loyalty, and retention, and to boost their sales and revenue.`,
                },
            ],
        },
        {
            title: "Sleep Score",
            label: "Sleep Quality Monitoring and Improvement",
            tags: [
                "Healthcare",
                "Time-Series Forecasting",
                "Generative Models",
            ],
            image: "sleep_score.png",
            studies: [
                {
                    name: "Challenge",
                    description: `Our client, Sleep Score, is a company that provides sleep quality monitoring 
                                    and improvement solutions to individuals and organizations. They wanted to improve their
                                    accuracy and reliability in measuring and analyzing sleep quality, 
                                    and to provide actionable insights and feedback to their users.`,
                },
                {
                    name: "Solution",
                    description: `We improved the client’s sleep quality monitoring and improvement system 
                                    that uses sound and movement sensors and machine learning techniques. 
                                    Our system can track and record various aspects of sleep quality, such as duration, stages, cycles, 
                                    or interruptions. Our system can also provide real-time feedback and suggestions, 
                                    such as optimal bedtime, wake-up time, or environmental conditions, to help users improve their sleep quality.`,
                },
                {
                    name: "Outcome",
                    description: `Our sleep quality monitoring and improvement system improved the client’s ability 
                                    to measure and analyze sleep quality, and to provide actionable insights and feedback to their users. 
                                    Our system helped the client achieve a high level of user engagement, satisfaction, and loyalty, 
                                    and to improve their health and well-being.`,
                },
            ],
        },
    ]);

    const findCase = (company: any) => {
        return cases.value.find(
            (item) => item.title.toLocaleLowerCase() === company
        );
    };

    return { cases, findCase };
}
