
export const EducationData = {
        getEducationData() {
            return [
                {
                    id: '1',
                    abv: 'MSc',
                    degree: 'Master of Science',
                    domain: 'Computer Science',
                    school: 'Concordia University',
                    address: 'Montreal, QB, CA',
                    duration: '2018 - 2020',
                    logo: 'Grad.png'
                },
                {
                    id: '2',
                    abv: 'B.Tech',
                    degree: 'Bachelor of Technology',
                    domain: 'Information Technology',
                    school: 'S.U.S.C.E.T, Punjab Technical University',
                    address: 'S.A.S. Nagar, Punjab, IN',
                    duration: '2010 - 2014',
                    logo: 'Bach.png'
                }
            ];
        },

        getEducation() {
            return Promise.resolve(this.getEducationData());
        }
    };