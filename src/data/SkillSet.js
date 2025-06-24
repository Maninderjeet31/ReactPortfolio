
export const SkillSet = {
        getSkillSetData() {
            return [
                {
                    id: '1',
                    abv: 'Java / Spring',
                    title: 'Java & Spring Framework',
                    logo: './skills/java.png',
                    description: 'Adept in Java Core, Lambdas, Functional Interfaces, Streams, Spring (OOPs and Core, AOP, Web MVC, Boot, REST APIs, Security).'
                },
                {
                    id: '2',
                    abv: 'Microservices',
                    title: 'Microservices Architecture',
                    logo: './skills/microservice.png',
                    description: 'Adept in Java Core, Lambdas, Functional Interfaces, Streams, Spring (OOPs and Core, AOP, Web MVC, Boot, REST APIs, Security).'
                },
                {
                    id: '3',
                    abv: 'Distributed Systems',
                    title: 'Distributed Systems',
                    logo: './skills/dissys.png',
                    description: 'Hands on implementation experience with Service Registry, Netflix Eureka, Feign Client, Resilience4j, API Gateway, Circuit Breakers, Rate Limiters, etc.'
                },
                {
                    id: '4',
                    abv: 'M. Queue',
                    title: 'Messaging Queues',
                    logo: './skills/kafka.png',
                    description: 'MQ like Apache Kafka, Rabbit MQ.'
                },
                {
                    id: '5',
                    abv: 'Data-Management',
                    title: 'Data Management',
                    logo: './skills/dmgm.png',
                    description: 'Expertise in JPA, JDBC, and Java Web Apps on Tomcat (Servlets,JSP).'
                },
                {
                    id: '6',
                    abv: 'Testing',
                    title: 'Testing Framework',
                    logo: './skills/test.png',
                    description: 'Familiarity with testing frameworks like  jUnit, Mockito, Spring Security, and JWT Authentication.'
                },
                {
                    id: '7',
                    abv: 'Web Dev',
                    title: 'Web Development',
                    logo: './skills/webdev.png',
                    description: 'Skilled in HTML5, CSS3, JavaScript, XML, bootstrap and React.'
                },
                {
                    id: '8',
                    abv: 'DevOps',
                    title: 'DevOps & Tools',
                    logo: './skills/devops.png',
                    description: 'Proficient in Jenkins, BitBucket, Git, and SonarQube for CI/CD and code quality.'
                },
                {
                    id: '9',
                    abv: 'Cloud',
                    title: 'Cloud & Containerization',
                    logo: './skills/cloud.png',
                    description: 'Expanding knowledge in AWS (S3, EC2, Lambda, RDS) and Kubernetes.'
                },
                {
                    id: '10',
                    abv: 'Tools',
                    title: 'Software Tools',
                    logo: './skills/stools.png',
                    description: 'Proficient in Eclipse, VSC, IntelliJ, Adobe Acrobat, and Photoshop.'
                },
                {
                    id: '11',
                    abv: 'DB-Management',
                    title: 'Database Management',
                    logo: './skills/dbmgm.png',
                    description: 'Experience with SQL Server and MongoDB.'
                },
                {
                    id: '12',
                    abv: 'Agile',
                    title: 'Agile Methodologies',
                    logo: './skills/agile.png',
                    description: 'Familiar with Agile and Scrum software development practices.'
                },
                {
                    id: '13',
                    abv: 'OS',
                    title: 'Operating System',
                    logo: './skills/linux.png',
                    description: 'Experience with UNIX, Windows, MacOS, Linux.'
                },
                {
                    id: '14',
                    abv: 'Other',
                    title: 'Other Language',
                    logo: './skills/other.png',
                    description: 'Exposure to Mainframe COBOL language.'
                },
            ];
        },

        getSkillSet() {
            return Promise.resolve(this.getSkillSetData());
        }
    };