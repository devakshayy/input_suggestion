import Autocompelemine from "./Autocompelemine";
import AutocompleteExample from "./AutocompletDoc";
import Autocomplete from "./Autocomplete";

function App() {

  const suggestions = [
    // Frontend Frameworks
    'React',
    'Angular',
    'Vue.js',
    'Ember.js',
    'Backbone.js',
    'Svelte',
    'Solid.js',
    'Preact',
    'LitElement',
    'Alpine.js',

    // Backend Frameworks
    'Express.js',
    'Meteor.js',
    'Next.js',
    'Nuxt.js',
    'NestJS',
    'Koa.js',
    'Hapi.js',
    'Fastify',
    'AdonisJS',
    'Feathers.js',

    // Programming Languages
    'JavaScript',
    'Python',
    'Ruby',
    'Java',
    'C#',
    'C++',
    'Rust',
    'Go',
    'Swift',
    'Kotlin',

    // Databases
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'SQLite',
    'MariaDB',
    'Cassandra',
    'Redis',
    'CouchDB',
    'Firebase',
    'DynamoDB',

    // DevOps Tools
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Terraform',
    'Ansible',
    'Puppet',
    'Chef',
    'Vagrant',
    'CircleCI',
    'GitLab CI/CD',

    // Cloud Platforms
    'AWS',
    'Azure',
    'Google Cloud',
    'IBM Cloud',
    'Oracle Cloud',
    'Heroku',
    'Netlify',
    'Vercel',
    'DigitalOcean',
    'Linode',

    // Testing Frameworks
    // 'Jest',
    // 'Mocha',
    // 'Cypress',
    // 'Selenium',
    // 'Puppeteer',
    // 'Playwright',
    // 'Karma',
    // 'AVA',
    // 'TestCafe',
    // 'QUnit',

    // UI Libraries
    // 'Bootstrap',
    // 'Tailwind CSS',
    // 'Material-UI',
    // 'Ant Design',
    // 'Bulma',
    // 'Foundation',
    // 'Chakra UI',
    // 'Vuetify',
    // 'PrimeReact',
    // 'Metro 4',

    // Other Tools
    // 'Webpack',
    // 'Parcel',
    // 'Rollup',
    // 'Babel',
    // 'ESLint',
    // 'Prettier',
    // 'Storybook',
    // 'Figma',
    // 'Canva',
    // 'Sketch'
];


  return (
    <div>  
      {/* <Autocomplete suggestions={suggestions} /> */}
      {/* <AutocompleteExample suggestions={suggestions} /> */}
      <Autocompelemine suggestions={suggestions} />
    </div>
  );
}

export default App



