
export const Projects = {
        getProjectsData() {
            return [
                {
                    id: '1',
                    title: 'Portfolio Website',
                    description: 'Built with HTML5, CSS3, JS, Bootstrap, and responsive design.',
                },
                {
                    id: '2',
                    title: 'Budgety',
                    description: 'Developed a budget app using HTML5, CSS3, JS, Bootstrap.'
                },
                {
                    id: '3',
                    title: 'CRM System',
                    description: 'Created a CRM using Java, SQL, Spring Boot, REST API, Hibernate, JPA.'
                },
                {
                    id: '4',
                    title: 'Mapty',
                    description: 'Built a workout tracker with JS, ES6, JDBC, and Spring Security.'
                },
                {
                    id: '5',
                    title: 'Forkify',
                    description: 'Developed a recipe search app using JS, AJAX, and ES6 modules.'
                }
            ];
        },

        getProjects() {
            return Promise.resolve(this.getProjectsData());
        }
    };