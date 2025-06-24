
export const WorkExperience = {
        getWorkExpData() {
            return [
                {
                    id: '1',
                    abv: 'IBM',
                    company: 'IBM Canada, Ltd',
                    location: 'Calgary, Alberta, Canada',
                    position: 'Full Stack Web Developer',
                    from: 'Apr 2022',
                    to: 'Present',
                    description: [
                        "Expertise in SDLC, Java (8 / 11) /J2EE, Spring, SpringBoot, Hibernate, and Microservices.",
                        "Skilled in designing, implementing RESTful microservices from scratch using Spring Boot and Hibernate with SQL/MySQL.",
                        "Integrated with AWS RDS and deployed via Jenkins CI/CD pipelines, , version controlling (GIT, JFrog) and openShift deployments",
                        "Experienced with Maven / Gravel for dependency management and build automation.",
                        "Exposure to HTML5, CSS3, Bootstrap, NodeJS, React, Angular, and Font Awesome.",
                        "Agile/Scrum experience with daily standups and sprint planning.",
                        "Familiar with NetBeans, Eclipse, IntelliJ, VS Code, Git, Postman, and Teams."
                    ]
                },
                {
                    id: '2',
                    abv: 'TD Bank',
                    company: 'TD Bank (FDM Groups)',
                    location: 'Toronto, Ontario, Canada',
                    position: 'IT Consultant',
                    from: 'Aug 2020',
                    to: 'Apr 2022',
                    description: [
                        "Developed front-end components and supported back-end services.",
                        "Proficient in HTML5, CSS3, NPM, Node.js, Angular, TypeScript, JSON, and related technologies.",
                        "Experienced with Spring (Core, AOP, MVC, RESTful, Boot, Data JPA) frameworks.",
                        "Hands-on experience with Hibernate ORM for database interactions.",
                        "Skilled in writing Java Bean classes for Spring configuration.",
                        "Expertise in Agile and Scrum methodologies for software development.",
                        "Troubleshot bottlenecks, bugs, and ensured compatibility with new tools.",
                        "Assisted in documenting program reports, UTRs, and walkthroughs."
                    ]
                },
                {
                    id: '3',
                    abv: 'W.S.A.',
                    company: 'Web Solution Aly',
                    location: 'S.A.S. Nagar, Punjab, India',
                    position: 'Software Developer',
                    from: 'Dec 2014',
                    to: 'Sep 2016',
                    description: [
                        "Overhauled, prototyped, and designed a healthcare application.",
                        "Built the application using Java, NetBeans, and SQL.",
                        "Coordinated build-integration of efficient code.",
                        "Troubleshot front-end bugs and errors.",
                        "Automated daily tasks, reducing workload significantly.",
                        "Reduced crashes and improved productivity and user retention.",
                        "Completed assigned learning and training materials on time."
                    ]
                },
                {
                    id: '4',
                    abv: 'TCS',
                    company: 'CMC (TCS)',
                    location: 'Chandigarh, Chandigarh, India',
                    position: 'Software Developer (Internship)',
                    from: 'Jan 2014',
                    to: 'Jul 2014',
                    description: [
                        "Overhauled, prototyped, and designed a healthcare application.",
                        "Built the application using Java, NetBeans, and SQL.",
                        "Coordinated build-integration of efficient code.",
                        "Troubleshot front-end bugs and errors.",
                        "Automated daily tasks, reducing workload significantly.",
                        "Reduced crashes and improved productivity and user retention.",
                        "Completed assigned learning and training materials on time."
                    ]
                },
                {
                    id: '5',
                    abv: 'A.N.T. Ltd',
                    company: 'Alpha Net Technologies PVT LTD',
                    location: 'Chandigarh, Chandigarh, India',
                    position: 'Software Developer (Internship)',
                    from: 'May 2012',
                    to: 'Oct 2012',
                    description: [
                        "Developed and launched PL Evaluator, a Java-based GUI app for banks.",
                        "Automated background checks for loan approvals and reducing manual tasks.",
                        "Built using NetBeans IDE 7.1 and JDK 1.7.", 
                        "Managed 7 tables with 5 attributes in MySQL DBMS.",
                        "Documented progress and workflows using Jasper Reports.",
                        "Improved accuracy, efficiency, and expanded the client base."
                    ]
                },
            ];
        },

        getWorkExp() {
            return Promise.resolve(this.getWorkExpData());
        }
    };