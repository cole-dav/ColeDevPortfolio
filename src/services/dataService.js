export default class DataService {
  _data = {
    projectRepo: 'https://github.com/cole-dav/JackpotAlpha',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "I am a software engineer with a passion for entrepreneurship and innovative problem-solving.",
            "As the founder of a pioneering sports app, I have led cross-functional teams to deliver impactful features and drive user engagement.",
            "With a background in computer science from Georgia Tech, I have experience in full-stack development, blockchain technologies, and product management.",
          ],
        },
      },
      {
        id: 'ColeResume',
        name: 'ColeResume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://docs.google.com/document/d/1_p-cuDf27i5g3dFtYcN1cgRSEwmD9yreALwTdZdXzwk/export?format=pdf',
          workExperience: [
            {
              jobTitle: 'Software Engineer I',
              company: 'BlackRock',
              location: 'Atlanta, GA',
              period: 'Aug 2024 – Present',
              accomplishments: [
                'Working as a full-stack developer in Angular, building micro front-ends supporting $4 trillion worth of ETFs',
              ],
            },
            {
              jobTitle: 'Founder',
              company: 'Pitch',
              location: 'Atlanta, GA',
              period: 'Nov 2022 – Present',
              accomplishments: [
                'Led full-stack development, integrating databases, optimizing data pipelines, and enhancing UI/UX',
                'Directed a team of 4 engineers and designers, achieving sprint goals and delivering impactful features on schedule',
                'Innovated a fantasy league platform utilizing stake management to enhance fan engagement and competitive interaction',
              ],
            },
            {
              jobTitle: 'Software Engineering Intern',
              company: 'BlackRock',
              location: 'Atlanta, GA',
              period: 'June 2022 – Aug 2022',
              accomplishments: [
                'Built a system to represent legal agreements on the Ethereum blockchain using Spring Boot',
                'Implemented Solidity smart contracts for voting permissions, statuses, and agreement data storage',
                'Refactored UI APIs to deploy new agreement contract instances on Ethereum',
              ],
            },
            {
              jobTitle: 'Statim Operator Manager',
              company: 'Tempus Ex Machina',
              location: 'Atlanta, GA',
              period: 'Aug 2021 – Present',
              accomplishments: [
                'Facilitated machine learning play-by-play data collection for the NFL and PAC-12 via Statim application',
                'Contributed to application upgrades during the inaugural season',
                'Reported bugs and suggested features for quality assurance and UX improvements',
                'Assisted operators with technical difficulties on game days',
              ],
            },
            {
              jobTitle: 'Software Engineering Intern',
              company: 'Carmax',
              location: 'Remote',
              period: 'June 2021 – Aug 2021',
              accomplishments: [
                'Created a monitoring system for data mart load statuses, reducing troubleshooting time by 1 hour daily',
                'Built PowerBI reports for data loads with conditional distribution based on load times',
                'Resolved Adobe click data ingestion issues causing weekly clogs on Databricks',
              ],
            },
            {
              jobTitle: 'Catering Manager',
              company: 'Cabakis Catering',
              location: 'Dacula, GA',
              period: 'April 2018 – Aug 2020',
              accomplishments: [
                'Led a team of servers and staff during events and preparation days',
                'Ensured successful contract fulfillment with consistent client satisfaction',
                'Customized services based on client needs for repeat business',
              ],
            },
          ],
          education: [
            {
              credit: 'B.S. in Computer Science',
              place: 'Georgia Institute of Technology',
              gpa: '3.32/4.0 GPA',
              period: 'Aug 2019 – Dec 2023',
              accolades: ['Zell Miller Scholar'],
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'Pitch',
              description:
                'An innovative fantasy sports platform utilizing stake management to enhance fan engagement and competitive interaction.',
              techStack: 'React Native, Supabase',
              myRole: 'Founder',
            },
            {
              title: 'SmartStu.Space',
              description: "An AI-powered music composition assistant that leverages natural language processing and machine learning to generate original song lyrics. The system analyzes patterns, themes, and stylistic elements from thousands of web-scraped songs via the Genius API to create contextually relevant and emotionally resonant lyrics that match artists' styles and preferences.",
              techStack: 'Python, AWS, Natural Language Processing, Machine Learning',
              myRole: 'Developer',
              accolades: ['1st Place at Clemson University MLH Hackathon – Creativity Award']
              },
              {
              title: 'Capgen.AI',
              description: "An innovative social media tool that harnesses Google Cloud Vision AI to automatically generate engaging Instagram captions. The app analyzes uploaded images for objects, scenes, emotions, and activities, then uses advanced natural language processing to craft contextually relevant, trending-style captions that boost engagement. Features include customizable tone settings, hashtag optimization, and multi-image batch processing.",
              techStack: 'Python, AWS, Google Cloud Vision AI, Natural Language Processing',
              myRole: 'Developer',
              accolades: ['3st Place at Univeristy of Florida MLH Hackathon']
              }
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            { name: 'Java', progress: 90 },
            { name: 'Python', progress: 90 },
            { name: 'React Native', progress: 85 },
            { name: 'Angular', progress: 85 },
            { name: 'Solidity', progress: 75 },
            { name: 'Spring Boot', progress: 75 },
            { name: 'Azure', progress: 75 },
            { name: 'Postgres', progress: 70 },
            { name: 'Databricks', progress: 70 },
            { name: 'Tableau', progress: 70 },
            { name: 'MATLAB', progress: 70 },
          ],
          certificates: [
            'Google Data Analytics',
            'Associate SQL Analyst – Databricks Academy',
            'Databricks Lakehouse Platform Accreditation',
            'Microsoft Azure Fundamentals',
          ],
          roles: {
            'Product Manager (PM)': [
              'Oversaw strategy, roadmap, and execution of a sports app, balancing user needs with business goals',
              'Collaborated cross-functionally to align product vision with engineering execution',
              'Conducted market analysis and user research to inform product decisions',
            ],
            'Business Analyst (BA)': [
              'Led analytics and performance tracking for a sports app, translating data insights into actionable strategies',
              'Managed financial modeling and investment analysis, aiding in raising significant funding',
              'Developed and monitored KPIs to evaluate product success',
            ],
            'Software Engineer (SWE)': [
              'Architected and developed system infrastructure for a sports app',
              'Collaborated with an international team to implement agile development practices',
              'Implemented automation tools and monitoring systems to enhance performance',
            ],
          },
          soft: 'Analytical Thinking, Entrepreneurship, Creative Problem Solving, Leadership, Teamwork',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to hire me or collaborate on a project, just email me at ',
          email: 'dc@gatech.edu',
          socialText: 'Or you can reach me through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/cole-davis-1aba39189/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/cole-dav',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/coledavis._/',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
