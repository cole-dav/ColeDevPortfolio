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
            "Jackpot removes the bounds of rosters, drafts, salary caps, and rules of existing fantasy games. Instead, we introduce an intuitive system consisting of shares, dividends,and an exchange.",
            "Objective:",
            'Create a portfolio of the best fantasy performers of the season for the highest payout',
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
              jobTitle: 'Software Engineering Intern',
              company: 'BlackRock',
              location: 'Atlanta',
              period: 'JUNE 2022 – AUG 2022',
              accomplishments: [
                'Built system to represent legal agreements on the Ethereum blockchain and interact with them using Spring Boot',
                'Implemented Solidity smart contract to handle voting permissions, voting statuses, and agreement data storage',
                'Refactored existing UI APIs to retrieve agreement data and deploy new agreement contract instances on Ethereum',
              ],
            },
            {
              jobTitle: 'Statim Operator Manager',
              company: 'Tempus Ex Machina',
              location: 'Atlanta',
              period: 'AUG 2021 - PRESENT',
              accomplishments: [
                'Facilitated season long play-by-play data collection for the NFL and PAC-12 via Statim application',
                'Contributed to implementation of upgrades and modifications to the application during the inaugural season',
                'Responsible for setup of office data feed on game days and assisting operators through technical difficulties ',
                'Reported bugs and suggested new features to the dev. team for quality assurance and user-experience upgrades',
              ],
            },
            {
              jobTitle: 'Software Engineering Intern',
              company: 'Carmax',
              location: 'Remote',
              period: 'JUNE 2021 – AUG 2021',
              accomplishments: [
                'Created a monitoring system for data mart load statuses that saved 1hr in daily troubleshooting ',
                'Built reports for data loads in PowerBI and implemented conditional report distribution based on current load times',
                'Resolved Adobe click data ingestion flaw that resulted in at least 1 major clog a week on databricks',
              ],
            },
          ],
          education: [
            {
              credit: 'Bachelor in Computer Science',
              place: 'Georgia Institute of Technology',
              gpa: '3.32/4.0 GPA',
              period: 'AUG 2019 - JULY 2023',
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
              title: 'Jackpot ',
              description:
                'Jackpot is a sports consumption revolution ',
              techStack: 'React Native, Supabase',
              myRole: 'Founder',
              // url: 'https://pitch.com/public/ccc225dd-fe63-43b5-aa44-ddd1121add0b',
              // repo: 'https://github.com/cole-dav',
            },
            
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Java',
              progress: 90,
            },
            {
              name: 'SQL',
              progress: 80,
            },
            {
              name: 'Python',
              progress: 80,
            },
            {
              name: 'React',
              progress: 80,
            },
            {
              name: 'Solidity',
              progress: 80,
            },
            {
              name: 'AWS/Azure',
              progress: 70,
            },
            {
              name: 'Databricks',
              progress: 70,
            },
          ],
          soft: 'Analytical Thinking, Entrepreneurship, Creative Problem Solving, Leadership, Teamwork ',
        },
      },
      // {
      //   id: 'PeterResume',
      //   name: 'PeterResume.txt',
      //   icon: 'notepad_2',
      //   content: {
      //     resumeLink:
      //       'https://docs.google.com/document/d/1Wp9BQQXdWX_MHDb_Beq70eJDQGPXU9PC1Q50EK--VrY/export?format=pdf',
      //     workExperience: [
      //       {
      //         jobTitle: 'Investment Banking Summer Analyst',
      //         company: 'Citigroup (NYSE: C)',
      //         location: 'New York',
      //         period: 'JUNE 2023 – AUG 2023',
      //         accomplishments: [
      //           'Incoming Investment Banking summer analyst for GSP Financing and Securitization',
                
      //         ],
      //       },
      //       {
      //         jobTitle: 'Statim Operator',
      //         company: 'Tempus Ex Machina',
      //         location: 'Atlanta',
      //         period: 'AUG 2021 - PRESENT',
      //         accomplishments: [
      //           'Facilitated season long play-by-play data collection for the NFL and PAC-12 via Statim application',
      //           'Contributed to implementation of upgrades and modifications to the application during the inaugural season',
      //           'Responsible for setup of office data feed on game days and assisting operators through technical difficulties ',
      //           'Reported bugs and suggested new features to the dev. team for quality assurance and user-experience upgrades',
      //         ],
      //       },
      //       {
      //         jobTitle: 'Corporate Finance Summer Analyst',
      //         company: 'VICI Properties',
      //         location: 'New York',
      //         period: 'JUNE 2022 – AUG 2022',
      //         accomplishments: [
      //           'Analyzed and summarized the $17.2bn acquisition of MGM Growth Properties by VICI Properties',
      //           'Created a model to estimate & compare WACC of competing REITs accounting for new Fed rates',
      //           'Authored a white paper on an emerging experiential industry and presented opportunities to managment',
      //         ],
      //       },
      //     ],
      //     education: [
      //       {
      //         credit: 'BS and MS in Economics',
      //         place: 'Georgia Institute of Technology',
      //         gpa: '3.5/4.0 GPA',
      //         period: 'AUG 2019 - JULY 2024',
      //       },
      //     ],
      //   },
      // },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to hire me or collaberate on a project, just email me at ',
          email: 'dc@gatech.edu',
          socialText: 'Or you can reach me out through social media:',
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
            {
              name: 'FaTwitter',
              link: 'https://twitter.com/jackpotcole',
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
