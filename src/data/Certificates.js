
export const Certificates = {
        getCertificatesData() {
            return [
                {
                    id: '1',
                    company: 'Microsoft',
                    title: 'Azure AZ-900 Certificate',
                    number: 'CDFZC8A574BE',
                    earnedOn: 'July 4, 2024',
                    to: '', 
                    logo: 'microsoft_logo.png'
                },
                {
                    id: '2',
                    company: 'AWS',
                    title: 'Cloud Practitioner Certificate',
                    number: '945b0a3c545642a3bae13f8751568ec3',
                    earnedOn: 'March 2, 2025',
                    to: 'March 2, 2028',
                    logo: 'aws_logo.png'
                }
            ];
        },

        getCertificates() {
            return Promise.resolve(this.getCertificatesData());
        }
    };