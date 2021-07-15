import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Atharva | Software Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Atharva Deshpande',
  subtitle: 'Software developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I originate from India and I have been doing software development for 4 years, I am proficient in both frontend and backend techlogies with experience in HTML, CSS, Python, Java and JavaScript.',
  paragraphTwo: 'I have worked with JavaScript frameworks like React and have database experience as well especially in SQL and PostgreSQL.',
  paragraphThree: 'Please check my resume below if interested.',
  resume: 'https://www.docfly.com/editor/6ac101886c85ccf5b37a/8l7ck27ewys-d72aab0d', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.JPG',
    title: 'E-Commerce Website',
    info: 'Developed a responsive website using ReactJS on a phone store with an attractive user interface.',
    info2: 'Implemented a fully functional cart with options to increase/decrease the quanity in cart, remove an item, clear cart with responsive cart receipt.',
    url: 'https://thymmz-ecommercereact.netlify.app/',
    repo: 'https://github.com/Thymmz/E-commerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.JPG',
    title: 'Food Donation Website',
    info: 'Developed a responsive website using HTML5, CSS3, and Bootstrap on food donation with an attractive user interface.',
    info2: 'Implemented a signup/login functionality with a pop-up modal form.',
    url: '',
    repo: 'https://github.com/Thymmz/Food-Donation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.JPG',
    title: 'Loan Prediction System',
    info: 'Developed a web-based loan prediction system using Python which was trained and tested with 918 total loan instances and used various machine learning classification algorithms to check the eligibility of the customer for a loan.',
    info2: 'Implemented various algorithms like Logistic Regression, Naïve Bayes, Decision Tree, Random Forest, and Support Vector Machine and selected the algorithm which gives the maximum accuracy.',
    url: '',
    repo: 'https://github.com/Thymmz/Loan-Prediction-System', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'atharva.deshpande228@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
  
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/atharva-deshpande-2208/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Thymmz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
