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
            "I'm a Rotational Software Engineer at BlackRock, where I build AI-powered internal tooling and work across platform infrastructure and product engineering for one of the world's largest asset managers.",
            "I'm also the founder of Pitch, a sports prediction market app — I've led a team of 3 engineers from MVP to 150+ users and raised $150k in seed funding.",
            "I studied Computer Science at Georgia Tech with a concentration in Artificial Intelligence and Human-Computer Interaction, and I have a soft spot for entrepreneurship and hands-on problem-solving, in code and outside of it (see Hobbies.txt).",
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
              degree: 'B.S. in Computer Science, Concentration in Artificial Intelligence and Human-Computer Interaction',
              graduationDate: 'Aug. 2019 – Dec. 2023',
              details: ['GPA: 3.32', 'Zell Miller Scholar', 'OMED Challenge Scholar'],
            },
          ],
          workExperience: [
            {
              company: 'BlackRock',
              location: 'Atlanta, GA',
              jobTitle: 'Rotational Software Engineer',
              period: 'Aug. 2024 – Present',
              categories: [
                {
                  name: 'AI & Internal Tooling',
                  accomplishments: [
                    "Built a meeting-intelligence workflow inside BlackRock's AI agent that ingests transcripts, grounds them against the codebase and open tickets, automates follow-up tickets, and generates role-specific summaries tailored to SWE, Product, and QA stakeholders",
                    'Automated Spark observability reporting by transforming raw Cloudera telemetry into a prioritized, filterable report surfacing the worst-performing and most-frequently-failing jobs — now the standing input to weekly engineering triage',
                  ],
                },
                {
                  name: 'Platform & Infrastructure',
                  accomplishments: [
                    'Led a cloud migration and Hadoop workload optimization effort that eliminated $500K in infrastructure spend in 6 months, using Python automation and Cloudera Observability benchmarking to identify and re-tune expensive jobs',
                    'Ran weekly Spark performance reviews with 8 application teams, diagnosing inefficient job configurations and resource misallocation across a 16-node cluster and driving remediation with each owning team',
                  ],
                },
                {
                  name: 'Product Engineering',
                  accomplishments: [
                    'Embedded with the Private Markets team to replace a manual SSH-and-document-upload onboarding process: ran discovery with the ops users, shipped a React + Spring Boot tool on Azure with a cloud-backed API, and migrated 150 dependent nightly jobs onto the new system with no interruption to production — cutting onboarding turnaround by 6 hrs per client',
                    'Shipped features into Aladdin Wealth (React) used by 30+ clients: new securities views, tables, and stability fixes prioritized from direct client-service team feedback',
                  ],
                },
              ],
            },
            {
              company: 'BlackRock',
              location: 'Atlanta, GA',
              jobTitle: 'Software Engineer Intern',
              period: 'June 2022 – Aug. 2022',
              accomplishments: [
                'Built a system to represent legal agreements on the Ethereum blockchain using Spring Boot and Solidity contracts',
                'Refactored existing UI APIs to retrieve agreement data and deploy new contract instances on Ethereum',
              ],
            },
            {
              company: 'Tempus Ex Machina',
              location: 'Atlanta, GA',
              jobTitle: 'Product Manager',
              period: 'Aug. 2021 – Feb. 2023',
              accomplishments: [
                'Facilitated season-long machine learning play-by-play data collection for the NFL and PAC-12 via the Statim application',
                'Contributed to the implementation of upgrades and modifications to the application during the inaugural season',
              ],
            },
            {
              company: 'Carmax',
              location: 'Remote',
              jobTitle: 'Software Engineer Intern',
              period: 'June 2021 – Aug. 2021',
              accomplishments: [
                'Built a monitoring system for data mart load statuses that cut daily troubleshooting by an hour, visualized with PowerBI and shared via conditional distribution that routed alerts based on live load times',
                'Diagnosed and fixed a flaw in Adobe clickstream ingestion that was clogging Databricks pipelines at least once a week, eliminating a recurring source of data-team firefighting',
              ],
            },
          ],
          entrepreneurship: [
            {
              company: 'Pitch',
              location: 'Atlanta, GA',
              jobTitle: 'Founder',
              period: 'Nov. 2022 – June 2025',
              accomplishments: [
                'Built and launched a sports prediction market (React Native, Supabase) to 150+ users, with a stake-management system',
                'Led a team of 3 engineers; architected live sports data pipelines and iterated UI/UX against retention data',
                'Raised $150k in seed funding — ran investor demos, conducted user interviews, and shipped directly against customer feedback',
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
            aiAgents: ['LLM application development', 'Agent orchestration', 'RAG', 'Evals', 'MCP'],
            languages: ['Python', 'TypeScript', 'JavaScript', 'Java', 'Solidity', 'SQL'],
            frameworks: ['React Native', 'Angular', 'Azure', 'Databricks', 'Hadoop', 'Spring Boot', 'Supabase'],
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
              line: 'A sports prediction market app that grew to 150+ users and raised $150k in seed funding.',
              description:
                'A stake-management system built for fan engagement and competitive interaction, backed by live sports data pipelines. Led a team of 3 engineers from MVP through investor demos and production launch, iterating UI/UX against retention data.',
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
            { name: 'Python', progress: 90 },
            { name: 'TypeScript / JavaScript', progress: 85 },
            { name: 'React Native', progress: 85 },
            { name: 'Angular', progress: 85 },
            { name: 'Java', progress: 80 },
            { name: 'SQL', progress: 80 },
            { name: 'Spring Boot', progress: 75 },
            { name: 'Azure', progress: 75 },
            { name: 'Databricks', progress: 75 },
            { name: 'LLM / Agent Development (RAG, MCP, Evals)', progress: 75 },
            { name: 'Hadoop', progress: 70 },
            { name: 'Solidity', progress: 70 },
          ],
          certificates: [
            'Google Data Analytics',
            'Associate SQL Analyst – Databricks Academy',
            'Databricks Lakehouse Platform Accreditation',
            'Microsoft Azure Fundamentals',
          ],
          roles: {
            'Product Manager (PM)': [
              'Owned end-to-end product and engineering strategy for Pitch, a sports prediction market, from MVP through 150+ users',
              'Ran investor demos and user interviews that helped secure $150k in seed funding',
              'Balanced user needs with business goals across the product roadmap',
            ],
            'Business Analyst (BA)': [
              'Led analytics and performance tracking for Pitch, translating data insights into actionable strategies',
              'Supported financial modeling and investment analysis during the seed fundraise',
              'Developed and monitored KPIs to evaluate product success',
            ],
            'Software Engineer (SWE)': [
              'Led a team of 3 engineers building Pitch in React Native and Supabase',
              'Architected live sports data pipelines and iterated UI/UX against retention data',
              'At BlackRock, built AI agent workflows, Spark observability tooling, and client-facing product features',
            ],
          },
          soft: 'Analytical Thinking, Entrepreneurship, Creative Problem Solving, Leadership, Teamwork',
        },
      },
      {
        id: 'hobbies',
        name: 'Hobbies.txt',
        icon: 'drvspace_7',
        content: {
          intro: "What I'm up to outside of tech — photos and videos coming soon.",
          items: [
            { name: 'Sailing', media: [] },
            { name: 'Golf', detail: '12 Handicap', media: [] },
            { name: 'Kickboxing', media: [] },
            { name: 'Sim Racing + Karting', media: [] },
            { name: "Texas Hold'em", media: [] },
            { name: 'Ceramics', media: [] },
            { name: 'Vinyasa Yoga', media: [] },
          ],
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to hire me or collaborate on a project, just email me at ',
          email: 'cdavis339@gatech.edu',
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
