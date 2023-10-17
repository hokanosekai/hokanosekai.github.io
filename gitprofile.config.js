// gitprofile.config.js

const config = {
  github: {
    username: 'Hokanosekai', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['hokanosekai', 'hokanosekai.github.io', 'express-ejs-template', 'mini_projet'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
  //  linkedin: 'ariful-alam',
  //  twitter: 'arif_szn',
  //  mastodon: 'arifszn@mastodon.social',
  //  facebook: '',
  //  instagram: '',
  //  youtube: '', // example: 'pewdiepie'
  //  dribbble: '',
  //  behance: '',
  //  medium: 'arifszn',
  //  dev: 'arifszn',
  //  stackoverflow: '', // example: '1/jeff-atwood'
  //  skype: '',
  //  telegram: '',
  //  website: 'https://arifszn.com',
  //  phone: '',
  //  email: 'arifulalamszn@gmail.com',
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Tailwind',
    'C',
    'Asm',
  ],
  /* experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    }
  ],*/
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  /* education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],*/

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'UnivHackOn CTF',
      description:
        'Organisation d\'un CTF pour les étudiants de l\'université de la Rochelle',
      imageUrl: 'https://hokanosekai.github.io/uhoctf_logo.png',
      link: 'https://github.com/UnivHackOn',
    },
    {
      title: 'Wordus',
      description: 
        'Jeu multijoueur de frappe de clavier. (groupe de 6)',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://wordus.xyz',
    }
  ],
  // Display blog posts from your medium or dev account. (Optional)
  /* blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },*/
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
