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
          education: [
            {
              institution: 'Georgia Institute of Technology',
              location: 'Atlanta, GA',
              degree: 'B.S. in Computer Science',
              graduationDate: 'Aug. 2019 – Dec. 2023',
              details: ['GPA: 3.32', 'Zell Miller Scholar'],
            },
          ],
          workExperience: [
            {
              company: 'BlackRock',
              location: 'Atlanta, GA',
              jobTitle: 'Rotational Software Engineer',
              period: 'Aug. 2024 – Present',
              accomplishments: [
                'Migrated developer-only config files to our Azure cloud storage; routed sensitive credentials through a Spring Boot API',
                'Enabled config access for internal tools streamlining onboarding and handoffs between engineering and support teams',
                'Engineered a reusable filter management system in Angular for complex data grids across a micro-frontend architecture',
                'Enhanced product creation workflow screens and form error handling resulting in a smoother user experience',
                'Implemented RXJS solutions, resolving critical bugs, modernizing site styling, and added interactive user notifications',
              ],
            },
            {
              company: 'Verizon',
              location: 'Atlanta, GA',
              jobTitle: 'Sales Associate',
              period: 'Sept. 2023 – Feb. 2024',
              accomplishments: [
                'Consistently exceeded commission-based sales targets through strategic customer engagement and product expertise',
                'Led my regional training class in sales performance, setting benchmarks for revenue generation and client satisfaction',
                'Achieved 4 out of 5 key performance indicators during my first full quarter, demonstrating strong market understanding and effective sales strategies.',
              ],
            },
            {
              company: 'BlackRock',
              location: 'Atlanta, GA',
              jobTitle: 'Software Engineer Intern',
              period: 'June 2022 – Aug. 2022',
              accomplishments: [
                'Built system to represent legal agreements on the Ethereum blockchain and interact with them using Spring Boot',
                'Implemented Solidity smart contract to handle voting permissions, voting statuses, and agreement data storage',
                'Refactored existing UI APIs to retrieve agreement data and deploy new agreement contract instances on Ethereum',
              ],
            },
            {
              company: 'Carmax',
              location: 'Remote',
              jobTitle: 'Software Engineering Intern',
              period: 'June 2021 – Aug. 2021',
              accomplishments: [
                'Created a monitoring system for data mart load statuses, reducing daily troubleshooting time by 1 hour',
                'Built reports for data loads in PowerBI and implemented conditional report distribution based on current load times',
                'Resolved Adobe click data ingestion flaw that resulted in at least 1 major clog a week on databricks',
              ],
            },
          ],
          entrepreneurship: [
            {
              company: 'Pitch',
              location: 'Atlanta, GA',
              jobTitle: 'Founder',
              period: 'Nov. 2022 – Present',
              accomplishments: [
                'Launched innovative fantasy league app, leveraging stake management to boost fan engagement and competition',
                'Owned end-to-end product and engineering strategy — led MVP development, investor demos, and feature roadmap, securing seed funding',
                'Led production development with React Native and Supabase, optimizing data pipelines and UI/UX for user retention',
              ],
            },
          ],
          accolades: [
            {
              event: 'Clemson University MLH Hackathon',
              location: 'Clemson, SC',
              date: 'Jan. 2020',
              award: '1st Place',
              details: [
                'Built SmartStu.Space, an AI-driven songwriting assistant designed to help musicians overcome creative block',
                'Leveraged Python machine learning algorithms, including Markov chains, to generate original song lyrics',
                'Automated data collection from Genius and applied NLP and data analytics to drive creative content synthesis',
              ],
            },
          ],
          skills: {
            technical: [
              'Angular',
              'React Native',
              'Python',
              'Azure',
              'Java',
              'Spring Boot',
              'Supabase',
              'Solidity',
              'TypeScript',
              'PostgreSQL',
              'Tableau',
            ],
          },
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
              line: "An AI-powered music composition assistant that leverages natural language processing and machine learning to generate original song lyrics.",
              description: "The system analyzes patterns, themes, and stylistic elements from thousands of web-scraped songs via the Genius API to create contextually relevant and emotionally resonant lyrics that match artists' styles and preferences.",
              techStack: 'Python, AWS, Natural Language Processing, Machine Learning',
              myRole: 'Developer',
              accolades: ['1st Place at Clemson University MLH Hackathon – Creativity Award']
              },
              {
              title: 'Capgen.AI',
              line: "An innovative social media tool that harnesses Google Cloud Vision AI to automatically generate engaging Instagram captions.",
              description:"The app analyzes uploaded images for objects, scenes, emotions, and activities, then uses advanced natural language processing to craft contextually relevant, trending-style captions that boost engagement. Features include customizable tone settings, hashtag optimization, and multi-image batch processing.",
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
