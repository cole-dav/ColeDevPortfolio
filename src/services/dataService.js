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
          items: [
            {
              name: 'Sailing',
              large: true,
              media: [
                { type: 'image', src: '/hobbies/sailing.jpg', caption: 'On the water with the crew' },
              ],
            },
            {
              name: 'Golf',
              detail: '12 Handicap',
              media: [
                { type: 'video', src: '/hobbies/golf.mp4', caption: 'Sinking a putt' },
              ],
            },
            {
              name: 'Ceramics',
              media: [
                { type: 'video', src: '/hobbies/ceramics.mp4', caption: 'Some of my pottery' },
              ],
            },
            { name: 'Kickboxing', media: [] },
            { name: 'Sim Racing + Karting', media: [], hidePlaceholder: true },
            { name: "Texas Hold'em", media: [], hidePlaceholder: true },
            { name: 'Vinyasa Yoga', media: [], hidePlaceholder: true },
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
    recipes: [
      {
        id: 'brownies',
        title: 'Brownies',
        type: 'flowchart',
        prep: ['Butter and flour an 8x8-in pan', 'Preheat oven to 350°F (170°C)'],
        rows: [
          '4 oz (115 g) unsalted butter',
          '1 cup (200 g) sugar',
          '1/4 tsp (2.5 mL) vanilla extract',
          '1 shot (4 Tbs; 60 mL) fresh brewed espresso or very strong coffee',
          '2 large (100 g) eggs',
          '1/2 cup (80 g) all-purpose flour',
          "1/3 cup (80 g) Hershey's cocoa powder",
          '1/4 tsp (1.3 g) baking soda',
          '1/4 tsp (1.5 g) table salt',
        ],
        columns: [
          { label: 'melt', groups: [[0, 1]] },
          { label: 'mix', groups: [[1, 3]] },
          { label: 'mix', groups: [[0, 5]] },
          { label: 'fold in', groups: [[0, 9]] },
        ],
        result: 'bake\n350°F (170°C)\n30 to 40 min',
      },
      {
        id: 'rib-rub',
        title: 'Rib Rub & Ribs',
        type: 'card',
        ingredients: [
          '8 tbsp smoked paprika',
          '6 tbsp brown sugar',
          '3 tbsp Kosher salt',
          '2 tbsp black pepper, freshly ground',
          '1 tbsp ground cumin',
          '1 tbsp mustard powder',
          '1 tbsp garlic powder',
          '1 tbsp onion powder',
          '1/4 tsp hot cayenne pepper',
        ],
        steps: [
          'Rub the ribs with the spice mix, wrap in foil, and cook at 275°F for 2 hours.',
          'Add butter, coke, and sugar to the foil and reseal.',
          'Cook at 350°F for 1 hour.',
          'Remove the ribs from the foil.',
          'Coat in sauce and broil until charred.',
        ],
      },
      {
        id: 'villainous-mac-and-cheeze',
        title: 'Villainous Mac & Cheeze',
        type: 'card',
        ingredients: [
          '5 cups cooked macaroni (approx. 4 cups uncooked)',
          '1 stick butter',
          '1 cup bread crumbs',
          '1/2 tsp salt',
          '1/2 tsp pepper',
          '1 tbls sugar',
          'One minced fresh garlic clove',
          '2 cups milk',
          '1 8 oz package Colby/Monterey Jack cheese',
          '4 cups shredded cheddar cheese',
        ],
        steps: [
          'Cook the macaroni until done as usual, adding the sugar and garlic to the water. Do not overcook it. Drain in a strainer.',
          'Place macaroni, butter, salt, pepper, milk, Colby/Jack cheese, and 3 cups of the cheddar in a pot; boil slow. Add bread crumbs.',
          'Cover everything with aluminum foil and cook for 45 minutes at 350 degrees.',
          'Uncover and add the extra cup of cheddar across the top. Bake uncovered for another 15 minutes.',
        ],
        note: '"Macaroni and Cheese is an ol\' time classic but Villainous Mac & Cheeze was concocted by wifey about three years ago. It took a couple years to perfect and you must follow the recipe exactly or else. Now Villainous Mac & Cheeze has become an MF family favorite, perfect for any holiday or special meal… enjoy and don\'t forget your potholderz…" —MF the Super Villain',
      },
      {
        id: 'sausage-ditalini',
        title: 'Creamy Sausage Ditalini Pasta',
        type: 'card',
        ingredients: [
          '2 1/4 cups uncooked ditalini pasta',
          "1 lb Neese's sausage (spicy Italian sausage works too)",
          '3 1/2 cups broth (beef bone broth or any broth works)',
          '4-5 cloves garlic, minced',
          '3 tbsp butter',
          '1/3 cup grated Parmesan (or measure with your heart)',
          '1/2 cup heavy cream',
          'Fresh parsley & pepper to taste',
        ],
      },
      {
        id: 'overnight-oats',
        title: 'Overnight Oats',
        type: 'card',
        ingredients: [
          { text: '2 tbsp porridge oats (rolled)', link: 'https://www.thedoctorskitchen.com/learn/oats-are-they-a-healthy-breakfast' },
          { text: '2 tbsp flaxseed (linseed)', link: 'https://www.thedoctorskitchen.com/learn/flaxseeds-tiny-seeds-with-big-health-benefits' },
          '1 tbsp shelled hemp seeds',
          { text: '1 tbsp chia seeds', link: 'https://www.thedoctorskitchen.com/learn/what-are-chia-seeds-good-for' },
          '2 tbsp whey protein powder (unflavoured)',
          '1 tbsp raw cacao powder',
          '1 tbsp peanut butter',
          '1 tbsp maple syrup',
          '5-6¾ fl oz milk (dairy)',
        ],
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

  getRecipes() {
    return this._data.recipes;
  }
}
