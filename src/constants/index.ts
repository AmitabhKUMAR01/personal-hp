import { img12, img60, img160, img250 } from '@/assets/about';
import * as yup from 'yup';
import {
  Account_box,
  Android_logo,
  Apple_logo,
  Change_history,
  Chat_logo,
  Check_circle,
  Edit,
  Equalizer_FILL,
  Group_Add,
  Language,
  Location,
  Mail,
  MicroSoft,
  Movie,
  Settings,
  Shopping,
  Stadia,
} from '@/assets/icons';

import {
  Adaptabilitysvg,
  Agilitysvg,
  Consistencysvg,
  Transparencysvg,
} from '@/assets/ChooseUsImages';
import {
  Adobe,
  android,
  angular,
  django,
  flask,
  flutter,
  java,
  javascript,
  laravel,
  linux,
  mongodb,
  nextjs,
  nodejs,
  php,
  postgres,
  python,
  reactjs,
  scss,
  sql,
  swift,
  tailwind,
  typescript,
} from '@/assets/FrameworkSlider';
import {
  designer,
  evantiti,
  flymusandan,
  marbha,
  sallim,
  stimaboda,
  traineffect,
} from '@/assets/InventoryCardImages';
import {
  appD,
  branding,
  crm,
  dialer,
  digitalmarketing,
  softwareD,
  webD,
} from '@/assets/OurServiceSliderImages';
import {
  AppDesign,
  Approval,
  Coding,
  Deployment,
  Gathering,
  OffersBranding,
  OffersCustomMobileApp,
  OffersCustomWeb,
  OffersDialers,
  OffersDigital,
  OffersSoftwareDev,
  Proposal,
  Quality,
  Review,
  StaticWebsite,
  Wireframe,
} from '@/assets/services';
import {
  Designer,
  Evantati,
  FlyMusandam,
  GiftLiv,
  GlamKorea,
  JosilaProduct,
  LawyerApp,
  Marhbha,
  MeeDate,
  Nuzest,
  Order360,
  OrientCompany,
  Sallim,
  StimaBoda,
  Train365,
  TrainEffective,
  VenBridge,
  CastleCorp,
  CBDPro,
} from '@/assets/work/index';
// import AWSBenefits from '@/assets/blog img/AWS.jpg';
// import { blogimg } from '@/assets/blog_img/index';

export interface FormValues {
  platforms: { label: string; icon: string }[];
  category: { label: string; icon: string }[];
  design: { label: string; icon: string }[];
  pages: { label: string; icon: string }[];
  authentication: { label: string; icon: string }[];
  security: { label: string; icon: string }[];
  addons: { label: string; icon: string }[];
  database: { label: string; icon: string }[];
  management: { label: string; icon: string }[];
  services: { label: string; icon: string }[];
  finalInfo: string;
  fullName: string;
  email: string;
  phone: string;
  terms: boolean;
}

export const countryOptions = [
  { name: 'India', code: '+91', flag: 'https://flagcdn.com/w40/in.png' },
  { name: 'USA', code: '+1', flag: 'https://flagcdn.com/w40/us.png' },
  { name: 'UK', code: '+44', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'Canada', code: '+1', flag: 'https://flagcdn.com/w40/ca.png' },
  { name: 'Australia', code: '+61', flag: 'https://flagcdn.com/w40/au.png' },
  { name: 'Germany', code: '+49', flag: 'https://flagcdn.com/w40/de.png' },
  { name: 'France', code: '+33', flag: 'https://flagcdn.com/w40/fr.png' },
  { name: 'Japan', code: '+81', flag: 'https://flagcdn.com/w40/jp.png' },
  { name: 'Brazil', code: '+55', flag: 'https://flagcdn.com/w40/br.png' },
];

export const steps = [
  {
    id: 1,
    name: 'Platform',
    field: 'platforms',
    question: 'Which platform will the app be built on?',
    subtext: '( You can select multiple options below! )',
  },
  {
    id: 2,
    name: 'Category',
    field: 'category',
    question: 'Choose a category',
    subtext: '',
  },
  {
    id: 3,
    name: 'Design',
    field: 'design',
    question: 'What would your UI theme be?',
    subtext: '',
  },
  {
    id: 4,
    name: 'Pages',
    field: 'pages',
    question: 'How many approximate number of screens will your app have?',
    subtext: '',
  },
  {
    id: 5,
    name: 'Authentication',
    field: 'authentication',
    question: 'How will your users sign up and login into the app?',
    subtext: '',
  },
  {
    id: 6,
    name: 'Security',
    field: 'security',
    question: 'How do you wish to secure your app?',
    subtext: '',
  },
  {
    id: 7,
    name: 'Addons',
    field: 'addons',
    question: 'Which 3rd party services do you need to integrate with?',
    subtext: '',
  },
  {
    id: 8,
    name: 'Database',
    field: 'database',
    question: 'Where do you want to save your application data ?',
    subtext: '',
  },
  {
    id: 9,
    name: 'Management',
    field: 'management',
    question: 'Which administration features do you need?',
    subtext: '',
  },
  {
    id: 10,
    name: 'Services',
    field: 'services',
    question: 'Which other features will you have in your app?',
    subtext: '',
  },
  {
    id: 11,
    name: 'final',
    field: 'final',
    question: '',
    subtext: '',
  },
];

export type OptionsType = Partial<
  Record<keyof FormValues, { label: string; icon: string }[]>
>;

export const option: OptionsType = {
  platforms: [
    { label: 'Android', icon: Android_logo.src },
    { label: 'Website', icon: MicroSoft.src },
    { label: 'iOS', icon: Apple_logo.src },
    { label: 'Hybrid', icon: Language.src },
  ],
  category: [
    { label: 'Food', icon: Location.src },
    { label: 'Sports', icon: Check_circle.src },
    { label: 'E-commerce', icon: Check_circle.src },
    { label: 'Delivery', icon: Check_circle.src },
    { label: 'Healthcare', icon: Check_circle.src },
    { label: 'IoT', icon: Check_circle.src },
    { label: 'Hospitality', icon: Check_circle.src },
    { label: 'Activity Tracking', icon: Check_circle.src },
    { label: 'Saas', icon: Check_circle.src },
    { label: 'Education', icon: Check_circle.src },
    { label: 'OTT Platform', icon: Check_circle.src },
    { label: 'E-Learning', icon: Check_circle.src },
    { label: 'Logistics', icon: Check_circle.src },
    { label: 'Booking App', icon: Check_circle.src },
    { label: 'Media & Events', icon: Check_circle.src },
    { label: 'Others', icon: Check_circle.src },
  ],
  design: [
    { label: 'Stock or Template UI', icon: Language.src },
    { label: 'Custom Branded UI', icon: Settings.src },
    { label: 'Animated UI', icon: Change_history.src },
    { label: 'Game Animations', icon: Stadia.src },
  ],
  pages: [
    { label: '1-6', icon: Check_circle.src },
    { label: '7-12', icon: Check_circle.src },
    { label: '13-20', icon: Check_circle.src },
    { label: 'Hybrid', icon: Check_circle.src },
  ],
  authentication: [
    { label: 'Email Id & Password', icon: Mail.src },
    { label: 'Via Social Networks', icon: Group_Add.src },
    { label: 'Using 2 Step Authorization', icon: Check_circle.src },
    { label: 'No Sign Up Required', icon: Chat_logo.src },
  ],
  security: [
    { label: 'Security Not Important', icon: Check_circle.src },
    { label: 'Basic Security Measures', icon: Check_circle.src },
    { label: 'Encrypted Communication', icon: Check_circle.src },
    { label: 'Complete Protection', icon: Check_circle.src },
  ],
  addons: [
    { label: 'Social Networks', icon: Check_circle.src },
    { label: 'Location', icon: Location.src },
    { label: 'Media', icon: Movie.src },
    { label: 'eCommerce', icon: Shopping.src },
  ],
  database: [
    { label: 'A new database', icon: Check_circle.src },
    { label: 'An Existing Database', icon: Check_circle.src },
    { label: 'Cloud Database', icon: Check_circle.src },
    { label: 'I am not sure', icon: Check_circle.src },
  ],
  management: [
    { label: 'User Management', icon: Account_box.src },
    { label: 'Content Management', icon: Edit.src },
    { label: 'Reporting and Analytics', icon: Equalizer_FILL.src },
    { label: 'Notification Control', icon: Check_circle.src },
  ],
  services: [
    { label: 'Activity feeds or user walls', icon: Check_circle.src },
    { label: 'In-app purchases', icon: Check_circle.src },
    { label: 'Shopping Cart', icon: Check_circle.src },
    { label: 'Search', icon: Check_circle.src },
    { label: 'Referral system', icon: Check_circle.src },
    { label: 'Chatting', icon: Check_circle.src },
    { label: 'Rating & Review (Yelp)', icon: Check_circle.src },
    { label: 'Integration', icon: Check_circle.src },
  ],
};

export const formSchema = yup.object({
  platforms: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  category: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  design: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  pages: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  authentication: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  security: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  addons: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  database: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  management: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  services: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        icon: yup.string().required(),
      })
    )
    .min(1, 'Please select at least one')
    .default([])
    .required(),
  finalInfo: yup.string().required('Please provide additional details.'),
  fullName: yup.string().required('Full Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .required('Phone number is required'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required(),
});

export const InsightData = [
  {
    // imgUrl: aboutImage,
    textContent:
      'In this digital era, every industry is making use of technological advances to grow their business, regardless of its type or size. If you are looking for a company that can become your digital partner and help you on the software front, you’ve come to the right place. HangingPanda started its journey with the ultimate aim of becoming a leading digital solution provider. With an extensive team of innovative and passionate people, we’ve come quite far on this journey. Presently, we are offering services like website development, dialer software, CRM services, UI/UX design, mobile app development, and many more. Just name it, and we have a solution for it. With a customer-centric approach and using state-of-the-art technologies, we manage to deliver reliable, stable, and faster results. We’ve worked with a large number of clients from different industry verticals. Customer satisfaction is our topmost priority, and this is one thing that makes us the top app and website development company.',
  },
];

export const companyData = [
  {
    // image: aboutPartner,
    msg: 'If you want to automate your business processes and grow profitability, HangingPanda’s comprehensive software services are your best bet. This is a one-stop solution for all your technical requirements. We have an in-house team of experts to provide you with the different software services using cutting-edge technologies. With our skilled team of professionals, we take great pride in claiming ourselves as one of the best app and website development companies. HangingPanda offers everything you need to transform your idea into a fully-functional product or service.',
  },
];

export const boxData = [
  {
    id: 1,
    image: img160,
    nums: 160,
    text: 'Project completed',
  },
  {
    id: 2,
    image: img12,
    nums: 12,
    text: 'Years Of Experience',
  },
  {
    id: 3,
    image: img250,
    nums: 250,
    text: 'Worldwide Clients',
  },
  {
    id: 4,
    image: img60,
    nums: 60,
    text: 'HangingPanda Team',
  },
];

import { Arrow } from '@/assets/button';
export const CarrerArrow = [{ name: 'arrow', imageUrl: Arrow }];

export const assetBaseUrl = 'https://hp.thepandasolutions.com/websiteAssets/';

export const apiBaseUrl = 'https://hpapi.hangingpanda.com/API';

import {
  exp,
  jobDesc,
  opening,
  packages,
  requirement,
  responsibility,
} from '@/assets/carrerDetails';
export const CareerDetailsImages = [
  {
    imageUrl: exp,
    name: 'experience',
  },
  {
    imageUrl: jobDesc,
    name: 'Description',
  },
  {
    imageUrl: opening,
    name: 'Opening',
  },
  {
    imageUrl: packages,
    name: 'packages',
  },
  {
    imageUrl: requirement,
    name: 'Requirements',
  },
  {
    imageUrl: responsibility,
    name: 'Responsibility',
  },
];

export const careerImages = [
  {
    id: 1,
    image:
      'https://hp.thepandasolutions.com/websiteAssets/career/CareerBusiness1.webp',
    alt: 'img main',
  },
  {
    id: 2,
    image:
      'https://hp.thepandasolutions.com/websiteAssets/career/CareerBusiness2.webp',
    alt: 'img main',
  },
  {
    id: 3,
    image:
      'https://hp.thepandasolutions.com/websiteAssets/career/CareerBusiness3.webp',
    alt: 'img main',
  },
  {
    id: 4,
    image:
      'https://hp.thepandasolutions.com/websiteAssets/career/CareerBusiness4.webp',
    alt: 'img main',
  },
];

export const FrameworkImages = [
  {
    imageUrl: javascript,
    name: 'JavaScript',
  },

  {
    imageUrl: django,
    name: 'Django',
  },
  {
    imageUrl: scss,
    name: 'SASS',
  },
  {
    imageUrl: angular,
    name: 'Angular',
  },
  {
    imageUrl: reactjs,
    name: 'React',
  },
  {
    imageUrl: mongodb,
    name: 'Mongo DB',
  },
  {
    imageUrl: postgres,
    name: 'Postgres',
  },
  {
    imageUrl: nextjs,
    name: 'Next JS',
  },
  {
    imageUrl: flask,
    name: 'Flask',
  },
  {
    imageUrl: java,
    name: 'Java',
  },
  {
    imageUrl: sql,
    name: 'SQL',
  },
  {
    imageUrl: nodejs,
    name: 'Node JS',
  },
  {
    imageUrl: flutter,
    name: 'Flutter',
  },
  {
    imageUrl: php,
    name: 'PHP',
  },
  {
    imageUrl: tailwind,
    name: 'Tailwind',
  },
  {
    imageUrl: laravel,
    name: 'Laravel',
  },
  {
    imageUrl: python,
    name: 'Python',
  },
  {
    imageUrl: android,
    name: 'Android',
  },
  {
    imageUrl: Adobe,
    name: 'Adobe XD',
  },
  {
    imageUrl: linux,
    name: 'Linux',
  },
  {
    imageUrl: swift,
    name: 'Swift',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
  },
];

export const OurServiceSliderData = [
  {
    img: appD,
    heading: 'App Development',
    para: 'We will create mobile apps (iOS and Android) that are secure, high-performing, user-friendly, and most importantly, cater to the specific needs of your business.',
    //   button: "View more",
  },
  {
    img: softwareD,
    heading: 'Software Development',
    para: 'Came up with a new idea and want to obtain real business value from it? With our production-ready custom software development services, transform your idea into reality.',
    //   button: "View more",
  },
  {
    img: webD,
    heading: 'Web Designing & Development',
    para: 'Grow your business with us and take it to the next level of success! We are offering feature-rich web solutions to make your life easier.',
    //   button: "View more",
  },
  {
    img: dialer,
    heading: 'Dialer Software',
    para: 'Deliver your daily calling commitments with our powerful dialer software, ‘Voice Panda’. It is the perfect solution for your business communication needs.',
    //   button: "View more",
  },
  {
    img: branding,
    heading: 'Branding & Design',
    para: 'We help you to make your brand stand out among others in the market and grab the attention of your audience with our branding and design services.',
    //   button: "View more",
  },
  {
    img: digitalmarketing,
    heading: 'Digital Marketing',
    para: 'HangingPanda will help you expand the digital reach of your business and achieve a higher ROI with a conversion focused approach.',
    //   button: "View more",
  },
  {
    img: crm,
    heading: 'CRM Software',
    para: "Manage all your company's relationships and interactions with customers and potential customers with our efficient CRM software services.",
    //   button: "View more",
  },
];

export const inventoryData = [
  {
    img: marbha,
    title: 'Marhba',
    // text: 'Marhaba is a non-conventional digital banking platform that provides interest-free banking for Muslims. This allows users to conduct their transactions in line with Islamic principles. By using a neat and clean design for the website, we made sure that the visitors have a smooth, hassle-free browsing experience.',
    Downloads: '150',
  },

  {
    img: designer,
    title: 'Designer App',
    // text: 'This is one of our best projects delivered in the fashion industry. Here, users can come and explore the latest collection by famous fashion designers and find the outfit they’ve been looking for. All the products are divided into several categories depending on gender and age. One can also search a particular designer and browse his/her entire collection.',
    Downloads: '75',
  },
  {
    img: traineffect,
    title: 'Train Effective Football Academy',
    // text: `This soccer training app is one of the most comprehensive learning platforms for aspiring soccer players. Using this user-friendly mobile application, one can experience professional academy-like soccer training without having to step out of their home. This focuses on several aspects such as technique, tactical knowledge, fitness and mentality.`,
    Downloads: '50',
  },
  {
    img: stimaboda,
    title: 'STIMA BODA',
    // text: `STIMA Boda App makes your electric rides easy : save everyday with your electric motorcycle with no constraints. Swap your battery anywhere in your city in 1 minute. No charging time, no range limit !
    //   `,
    Downloads: '60',
  },
  {
    img: evantiti,
    title: 'Evantati Gift App',
    // text: `Your online gift shop is now at your fingertips. Now choose flowers, cakes, unique personalized and handmade gifts right from your mobile. Evantati Gift App  is home to a hand-curated collection segmented into different categories for easy selection. Evantati vision is to create an enhanced gifting ecosystem and provide a one-stop solution.`,
    Downloads: '50',
  },
  {
    img: flymusandan,
    title: 'Fly Musandam',
    // text: `Book a private Jet instantly on this platform. Curly Airline proudly raises the bar and exceeds the standards for luxury and corporate private jet charter services. Fly Musandam pride to offer a professional service.`,
    Downloads: '55',
  },
  {
    img: sallim,
    title: 'Sallim App',
    // text: `This is a mobile application designed to ensure a smooth process for giving appointments to patients and scheduling consultations. This app eliminates the need to store bulky patient records on paper. Using this, appointments can be provided online and doctors will be able to update all the relevant information after examining the patient.
    //   `,
    Downloads: '80',
  },
];

export const ChooseUsData = [
  {
    icon: Consistencysvg,
    title: 'Consistency',
    cardpara:
      'We understand your passion for your work. You would surely want to keep watching it grow, so this is why you will get regular status updates from us on everything.',
  },
  {
    icon: Adaptabilitysvg,
    title: 'Adaptability',
    cardpara:
      'Our team is well-versed in a wide array of technologies and tools, but we also keep upgrading ourselves constantly. This is how we never miss out on anything new.',
  },
  {
    icon: Agilitysvg,
    title: 'Transparency',
    cardpara:
      ' While we work on your digital product, you will always find yourself a part of the process. This way, we will use your perspective to produce an even better result.',
  },
  {
    icon: Transparencysvg,
    title: 'Agility',
    cardpara:
      'We use agile development methodologies to ensure that we always get the result you want. Faster turnaround time and a lot of flexibility are things that make us different.',
  },
];

// types/services.ts
export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  image: string;
}

export interface ProcessStep {
  image: string;
  heading: string;
  number: string;
  containerColor: string;
  numberColor: string;
}

export interface ServiceCategory {
  appD: ServiceItem[];
  offers: {
    title: string;
    description: string;
    image: string;
  };
  developmentProcess: {
    heading: string;
    title: ProcessStep[];
  };
}

export interface ServicesData {
  [key: string]: ServiceCategory;
}

export const servicesData: ServicesData = {
  appDevelopment: {
    appD: [
      {
        id: '1',
        title: 'Mobile App',
        subtitle: 'Development Company',
        description:
          'Want to get a mobile application tailor-made to your requirements? We are offering a complete cycle of application design, integration and management. Whether you need a customer oriented application or have some other requirements, just name it and we will deliver. From conceptualization to implementation, everything is done in such a way that you always have complete control over the process.Our team has expertise in providing solutions that meet all your market needs and empower the identity of your brand. This enables us to produce fully-fledged, stable, and scalable mobile applications. With us, delight your users by offering them an expressive and feature-rich mobile application.',
        buttonText: 'Start New Project',
        image:
          'https://hp.thepandasolutions.com/websiteAssets/mobile-development/MobileAppDevelopmentCompany.webp', // Place your image in public/images folder
      },
      {
        id: '2',
        title: 'Best Mobile App Development ',
        subtitle: 'Get A Superior Mobile Application!',
        description:
          'Want to get a mobile application tailor-made to your requirements? We are offering a complete cycle of application design, integration and management. Whether you need a customer oriented application or have some other requirements, just name it and we will deliver. From conceptualization to implementation, everything is done in such a way that you always have complete control over the process.Our team has expertise in providing solutions that meet all your market needs and empower the identity of your brand. This enables us to produce fully-fledged, stable, and scalable mobile applications. With us, delight your users by offering them an expressive and feature-rich mobile application.',
        buttonText: '',
        image:
          'https://hp.thepandasolutions.com/websiteAssets/mobile-development/BestMobileAppDevelopment.webp', // Place your image in public/images folder
      },
      {
        id: '3',
        title: 'Android Application Development ',
        subtitle: 'Experience Transformation With Us!',
        description:
          'Do you need a robust Android application that can help your business to grow exponentially? Do not worry as you’ve come to the right place. With a highly skilled workforce, we will help you to get ahead of your competitors. Our team will provide expandable and high performing android apps that are perfect to meet all your demands.To make you always feel like a part of the entire process, we offer complete transparency throughout the development process. This way you are well aware of the progress of your application and will give some recommendations from time to time , if required. Your contribution helps us to make the application even better.',
        buttonText: '',
        image:
          '	https://hp.thepandasolutions.com/websiteAssets/mobile-development/AndroidApplicationDevelopment.webp', // Place your image in public/images folder
      },
      {
        id: '4',
        title: 'Iphone Application Development',
        subtitle: 'Get An Engaging and Fully-functional iOS App!',
        description:
          'Stand out in the competitive market with a customized iOS app for your business. A reliable app that is packed with amazing features and solves overarching business challenges can open endless opportunities for your business. We have worked with businesses across all major industries and niches. This gave us a clear understanding of business needs of different industries.We provide fully-functional and great looking applications that encompass the complete range of iOS devices. With our user-focused approach, we try to help our clients build better mobile relationships with their audiences. From solution design to delivery and regular maintenance, we take care of everything! ',
        buttonText: '',
        image:
          'https://hp.thepandasolutions.com/websiteAssets/mobile-development/IphoneApplicationDevelopment.webp', // Place your image in public/images folder
      },
      {
        id: '5',
        title: 'Ipad Application Development',
        subtitle: 'We Help You to Streamline Your Business!',
        description:
          'iPads hold a dominant position in the gadgets market. With an ever-increasing demand for iPads, applications made specifically for them are also high in demand. We are offering robust applications for every type of business. With our customized iPad app development services, you can take your business to new heights.We have a team of strategists, app designers and growth hackers who are capable of delivering the best of app solutions across diverse business needs. HangingPanda provides you apps that have exceptional interface, flawless features and seamless user experience. All the apps developed by us meet Apple’s stringent guidelines.',
        buttonText: '',
        image:
          '	https://hp.thepandasolutions.com/websiteAssets/mobile-development/IpadApplicationDevelopment.webp', // Place your image in public/images folder
      },

      {
        id: '6',
        title: 'Mobile App Design',
        subtitle: 'We Craft User-intuitive Mobile App Designs!',
        description:
          'What is better than a mobile app with a design representing your concept effortlessly! HangingPanda offers reliable mobile app design services that amplify your user engagement. We take great pride in creating astounding designs that provide enriched user experience to your customers. Our team comes up with designs that address specific needs and goals of your business.We conduct extensive market research before starting out. It is important to keep the user preference always first. This helps us to acquire an in-depth understanding of user behavior and attitude of your potential customers. Our designs also convey the benefits of your offerings to your target audience.',
        buttonText: '',
        image:
          'https://hp.thepandasolutions.com/websiteAssets/mobile-development/MobileAppDesign.webp', // Place your image in public/images folder
      },
      {
        id: '7',
        title: 'Mobile App Marketing',
        subtitle: 'Increase Organic Downloads for Your App!',
        description:
          'The role of mobile applications in making a business successful is no secret. If you have a scalable and full-functional mobile app, it will serve as a powerful business asset. Creating a good app is easy but the main challenge is to reach the users and convince them to download your applications and retain them. Using an appropriate marketing strategy will surely help.HangingPanda offers reliable mobile app marketing services. Our team will help you to leave the competitors behind and reach the top rankings. Every business has different requirements so the same marketing strategy cannot work for all. First of all, we figure out what interests your audience the most and then decide what strategy will work for you.',
        buttonText: '',
        image:
          '	https://hp.thepandasolutions.com/websiteAssets/mobile-development/MobileAppMarketing.webp', // Place your image in public/images folder
      },
    ],
    offers: {
      title:
        'We Offer Custom Mobile App Development Company across all platforms',
      description:
        'Stand out in the competitive market with a customized iOS app for your business. A reliable app that is packed with amazing features and solves overarching business challenges can open endless opportunities for your business. We have worked with businesses across all major industries and niches. This gave us a clear understanding of business needs of different industries.We provide fully-functional and great looking applications that encompass the complete range of iOS devices. With our user-focused approach, we try to help our clients build better mobile relationships with their audiences. From solution design to delivery and regular maintenance, we take care of everything!',
      image: OffersCustomMobileApp.src,
    },
    developmentProcess: {
      heading: 'Our Mobile App Development Process',
      title: [
        {
          image: Gathering.src,
          heading: 'Requirement Gathering',
          number: '01',
          containerColor: '#e6eef6',
          numberColor: '#3374b9',
        },
        {
          image: Proposal.src,
          heading: 'Submitting Our Proposal',
          number: '02',
          containerColor: '#fef3e4',
          numberColor: '#f69f29',
        },
        {
          image: Wireframe.src,
          heading: 'Wireframe Design',
          number: '03',
          containerColor: '#e0f5f1',
          numberColor: '#37ae8e',
        },
        {
          image: Approval.src,
          heading: 'Client Approval',
          number: '04',
          containerColor: '#e5f5fb',
          numberColor: '#40b2e4',
        },
        {
          image: AppDesign.src,
          heading: 'App Design',
          number: '05',
          containerColor: '#feeee5',
          numberColor: '#f5742a',
        },
        {
          image: Coding.src,
          heading: 'Coding',
          number: '06',
          containerColor: '#feebf0',
          numberColor: '#f65882',
        },
        {
          image: Review.src,
          heading: 'Review & Improvements',
          number: '07',
          containerColor: '#f1e8f3',
          numberColor: '#8f3f9b',
        },
        {
          image: Quality.src,
          heading: 'Quality Assurance',
          number: '08',
          containerColor: '#e0f2f5',
          numberColor: '#3b9eb3',
        },
        {
          image: Deployment.src,
          heading: 'Deployment',
          number: '09',
          containerColor: '#efe7fb',
          numberColor: '#8045dc',
        },
      ],
    },
  },
  softwareDevelopement: {
    appD: [
      {
        id: '1',
        title: 'Software',
        subtitle: 'Development Company',
        description:
          'Looking for a way to get more relevant and converting leads for your business? Google Adwords allows you to target your customers in the most effective way. Whether you want to make your existing Ads campaign better or set up a new one from the scratch, we do it all. We will help with every aspect of your Google Adwords campaign management. Our experts create a complete action plan to deliver the best results .AdWords is so widely used, it has become synonymous with the term ‘paid search’. We understand what all it takes to run a successful Google ad campaign. Our expertise in creating cost-effective and profitable ad campaigns will benefit you in a way that no other can. Every action we take is backed by detailed research so the chances of success are high.',
        buttonText: 'Start New Project',
        image:
          '	https://www.hangingpanda.com/assets/SoftwareDevelopmentCompany.29b05daf6273de8cc995.jpg', // Place your image in public/images folder
      },
    ],
    offers: {
      title:
        'We Offer Custom Software Development Company across all platforms',
      description:
        'To stand out among others, you need a highly interactive website that effectively responds to the requirements of users to dominate the software industry. a software development allows you to add a wide range of content including images, videos, text etc. If your business demands you to keep posting some content every now and then, it is the best solution for you. These websites are interactive and visually appealing without looking clumsy. The most excellent part about software development is that they will be simply reorganized and maintained whenever you need. They are also appreciated widely for the high scalability they offer. Frequent content updates make your website a preferable choice for different search engines. Don’t wait any longer and give shape to your ideas!',
      image: OffersSoftwareDev.src,
    },
    developmentProcess: {
      heading: 'Our Mobile App Development Process',
      title: [
        {
          image: Gathering.src,
          heading: 'Requirement Gathering',
          number: '01',
          containerColor: '#e6eef6',
          numberColor: '#3374b9',
        },
        {
          image: Proposal.src,
          heading: 'Submitting Our Proposal',
          number: '02',
          containerColor: '#fef3e4',
          numberColor: '#f69f29',
        },
        {
          image: Wireframe.src,
          heading: 'Wireframe Design',
          number: '03',
          containerColor: '#e0f5f1',
          numberColor: '#37ae8e',
        },
        {
          image: Approval.src,
          heading: 'Client Approval',
          number: '04',
          containerColor: '#e5f5fb',
          numberColor: '#40b2e4',
        },
        {
          image: AppDesign.src,
          heading: 'App Design',
          number: '05',
          containerColor: '#feeee5',
          numberColor: '#f5742a',
        },
        {
          image: Coding.src,
          heading: 'Coding',
          number: '06',
          containerColor: '#feebf0',
          numberColor: '#f65882',
        },
        {
          image: Review.src,
          heading: 'Review & Improvements',
          number: '07',
          containerColor: '#f1e8f3',
          numberColor: '#8f3f9b',
        },
        {
          image: Quality.src,
          heading: 'Quality Assurance',
          number: '08',
          containerColor: '#e0f2f5',
          numberColor: '#3b9eb3',
        },
        {
          image: Deployment.src,
          heading: 'Deployment',
          number: '09',
          containerColor: '#efe7fb',
          numberColor: '#8045dc',
        },
      ],
    },
  },
  webDesignDevelopement: {
    appD: [
      {
        id: '1',
        title: 'Web Design',
        subtitle: 'Development Company',
        description:
          'To stand out among others, you need a highly interactive website that effectively responds to the requirements of users to dominate the World Wide Web. a dynamic website allows you to add a wide range of content including images, videos, text etc. If your business demands you to keep posting some content every now and then, it is the best solution for you. These websites are interactive and visually appealing without looking clumsy.The most excellent part about dynamic websites is that they can be simply reorganized and maintained whenever you need. They are also appreciated widely for the high scalability they offer. Frequent content updates make your website a preferable choice for different search engines. Don’t wait any longer and give shape to your ideas!',
        buttonText: 'Start New Project',
        image:
          '	https://www.hangingpanda.com/assets/Websitedevelopment.5b71eb04a69e631dd09c.jpg', // Place your image in public/images folder
      },
      {
        id: '2',
        title: 'Static Website',
        subtitle: 'Creativity! Innovation! Imagination!',
        description:
          'Want to create a strong and evident online presence for your business to make it grow? A well-designed user-friendly static website is all you need to showcase your brand and its offerings in the most effective yet economical way. A creative and appealing static website is the best way to explain the goals and objectives of your business.Static websites are very much in demand because they are very easy to manage and cost-effective. They also bear the capability of attracting massive traffic. One of the best things about these websites is, they are very lite as they are created using fewer scripts and HTML codings. Reach out to us for static website design and development services at affordable prices.',
        buttonText: '',
        image: StaticWebsite.src, // Place your image in public/images folder
      },
      {
        id: '3',
        title: 'Dynamic Website ',
        subtitle: 'Skyrocket Your Business with a Dynamic Website!',
        description:
          'To stand out among others, you need a highly interactive website that effectively responds to the requirements of users to dominate the World Wide Web. a dynamic website allows you to add a wide range of content including images, videos, text etc. If your business demands you to keep posting some content every now and then, it is the best solution for you. These websites are interactive and visually appealing without looking clumsy.The most excellent part about dynamic websites is that they can be simply reorganized and maintained whenever you need. They are also appreciated widely for the high scalability they offer. Frequent content updates make your website a preferable choice for different search engines. Don’t wait any longer and give shape to your ideas!',
        buttonText: '',
        image:
          '	https://www.hangingpanda.com/assets/DynamicWebsite.475ac43e468eb6a0dde0.jpg', // Place your image in public/images folder
      },
      {
        id: '4',
        title: 'Magento Web Development',
        subtitle: 'Take Your Online Store to the Next Level!',
        description:
          'Want to create an ecommerce store that is highly versatile and flexible with high functionalities and more control over the look? With a wide array of powerful features and tools, Magento is the best option for this. We will provide you with customized e-commerce solutions using Magento and its extensions. Your e-commerce store will be stacked with features to captivate your target audience.Our team of highly skilled magento developers perform in-depth research before starting out. Once they have a clear understanding of all your requirements, they move forward with theme design to make your store more appealing. By integrating the most suitable features as per your business requirements and target audience, we make sure you get what you wanted in the first place!',
        buttonText: '',
        image:
          'https://www.hangingpanda.com/assets/MagentoWebDevelopment.8c341e265f6e5013f912.jpg', // Place your image in public/images folder
      },
      {
        id: '5',
        title: 'Wordpress Web development',
        subtitle: 'We Help you to Emerge As a Powerful Brand!',
        description:
          'Want to create a website that is convincing enough to create a loyal user base for you? WordPress is the best platform to create enticing websites that can captivate the audience. Currently, more than 30 percent of all the existing websites are being powered by WordPress. This gives a clear idea about the popularity of this website building platform. is a one-stop solution for all your WordPress development needs. Our team has years of experience in developing WordPress websites that are highly-performing and completely secured. Either you want to set up your own blog or create a feature-rich business website, we’ve got your back!',
        buttonText: '',
        image:
          '	https://www.hangingpanda.com/assets/WordpressWebdevelopment.864cf647d7365b73286d.jpg', // Place your image in public/images folder
      },

      {
        id: '6',
        title: 'Angular JS development',
        subtitle: 'We Deliver Cutting-edge and Feature-rich Applications!',
        description:
          'Every business needs innovative, high-performing and robust applications that can meet all the business needs. In the field of app development, AngularJS has gained huge traction over the time. And the reason behind this is very simple, it eliminates unnecessary code and ensures that the applications are lighter and much faster.We work hand in hand with our clients to meet their expectations. Our team also makes sure that you are always in the loop. With your involvement in every step, we deliver web applications that work smoothly across all internal and external devices. Our services speak of dedication as we try hard to turn your ideas into a full-functional feature-packed application.',
        buttonText: '',
        image:
          'https://www.hangingpanda.com/assets/AngularJSdevelopment.af5fba0b7d3062cae637.jpg', // Place your image in public/images folder
      },
      {
        id: '7',
        title: 'PHP MVC',
        subtitle: 'Smart PHP solutions  for you!',
        description:
          'An interactive website that has appealing design and amazing features can help in visitor retention like nothing. PHP is a suitable platform to create websites that tend to receive a great number of visitors day after day. Usage of PHP MVC has been growing considerably for all kinds of web and software applications.HangingPanda offers all kinds of PHP development services catering to the needs of our clients. Our team has comprehensive experience and knowledge in developing PHP MVC-based solutions. We will assure you about delivering unparalleled solutions with high quality as customer satisfaction is our topmost priority.',
        buttonText: '',
        image:
          '	https://www.hangingpanda.com/assets/phpmvcLogo.624f61ff2cac120afd7a.jpg', // Place your image in public/images folder
      },
    ],
    offers: {
      title:
        'We Offer Custom Web Design Development Company across all platforms',
      description:
        'The most excellent part about dynamic websites is that they can be simply reorganized and maintained whenever you need. They are also appreciated widely for the high scalability they offer. Frequent content updates make your website a preferable choice for different search engines. Don’t wait any longer and give shape to your ideas!',
      image: OffersCustomWeb.src,
    },
    developmentProcess: {
      heading: 'Our Mobile App Development Process',
      title: [
        {
          image: Gathering.src,
          heading: 'Requirement Gathering',
          number: '01',
          containerColor: '#e6eef6',
          numberColor: '#3374b9',
        },
        {
          image: Proposal.src,
          heading: 'Submitting Our Proposal',
          number: '02',
          containerColor: '#fef3e4',
          numberColor: '#f69f29',
        },
        {
          image: Wireframe.src,
          heading: 'Wireframe Design',
          number: '03',
          containerColor: '#e0f5f1',
          numberColor: '#37ae8e',
        },
        {
          image: Approval.src,
          heading: 'Client Approval',
          number: '04',
          containerColor: '#e5f5fb',
          numberColor: '#40b2e4',
        },
        {
          image: AppDesign.src,
          heading: 'App Design',
          number: '05',
          containerColor: '#feeee5',
          numberColor: '#f5742a',
        },
        {
          image: Coding.src,
          heading: 'Coding',
          number: '06',
          containerColor: '#feebf0',
          numberColor: '#f65882',
        },
        {
          image: Review.src,
          heading: 'Review & Improvements',
          number: '07',
          containerColor: '#f1e8f3',
          numberColor: '#8f3f9b',
        },
        {
          image: Quality.src,
          heading: 'Quality Assurance',
          number: '08',
          containerColor: '#e0f2f5',
          numberColor: '#3b9eb3',
        },
        {
          image: Deployment.src,
          heading: 'Deployment',
          number: '09',
          containerColor: '#efe7fb',
          numberColor: '#8045dc',
        },
      ],
    },
  },
  brandingDesign: {
    appD: [
      {
        id: '1',
        title: 'Branding Design',
        subtitle: 'Development Company',
        description:
          'With web and innovation overriding, businesses have completely changed their promoting techniques. Creating an engaging and eye-catching image is more effective rather than using any other way. With a creative and appealing banner design, you can step up your brand and improve click proportions to your website.Our team has expertise in creating sophisticated banner designs. Whether you have an important event upcoming or a product launch scheduled, be ready to grab the attention of the market with an appealing banner with us. We design our creatives in such a way that they portray your brand’s identity in the most appropriate manner.',
        buttonText: 'Start New Project',
        image:
          'https://www.hangingpanda.com/assets/LogoSection1.e5c56a84235a2c1c40f7.png', // Place your image in public/images folder
      },
      {
        id: '2',
        title: 'Logo Design ',
        subtitle: 'Let Your Logo Speak!',
        description:
          'After focusing on the core operations of the business are you struggling to turn into a credible brand? Not anymore! Get a unique logo crafted that represents your business idea. We deploy our creative excellence in creating powerful core visualization. With enough time spent understanding the business and identifying key points we deliver a powerful logo design.We have been bringing brands to life with vibrant design for quite some time now. Over the time, our team has created great looking logo designs for clients across industries. This explains our understanding of different industry verticals. Just explain what your requirements are and it back while we deliver your creatives.',
        buttonText: '',
        image:
          'https://www.hangingpanda.com/assets/logodesign.a8de13c9cbdd99aa9966.jpg', // Place your image in public/images folder
      },
      {
        id: '3',
        title: 'Banner Design',
        subtitle: 'Get A Creative Banner Design!',
        description:
          'With web and innovation overriding, businesses have completely changed their promoting techniques. Creating an engaging and eye-catching image is more effective rather than using any other way. With a creative and appealing banner design, you can step up your brand and improve click proportions to your website.Our team has expertise in creating sophisticated banner designs. Whether you have an important event upcoming or a product launch scheduled, be ready to grab the attention of the market with an appealing banner with us. We design our creatives in such a way that they portray your brand’s identity in the most appropriate manner.',
        buttonText: '',
        image:
          'https://www.hangingpanda.com/assets/bannerdesign.ab4ea66c218073615ea1.jpg', // Place your image in public/images folder
      },
      {
        id: '4',
        title: 'Graphic Design',
        subtitle: 'Get Strikingly Impressive Graphic Design!',
        description:
          'An attractive interface and vibrant design will grab the users’ attention like nothing can. We believe that you can deliver your message in a better way through visuals.Our team understands that one shoe does not fit all and the same goes with websites also. So we take our time to figure what will work best for you and then create a customized plan to action for your business.We cater to the designing needs of your growing business! Our graphic designers are passionate about changing mindsets by innovating new methodologies to create the right brand mix. They are highly-skilled in industry-specific designing and use latest designing tools. So we will ensure you will get the desired outcome delivered to you well in time!',
        buttonText: '',
        image:
          '	https://www.hangingpanda.com/assets/graphicdesign.fd5811bfbac2300f22f7.jpg', // Place your image in public/images folder
      },
      {
        id: '5',
        title: 'Video Production',
        subtitle: 'More Views, Clicks and Sales!',
        description:
          'Using an engaging video to promote a brand, it is possible to boost the conversion rate by 75% and increase the revenue by 45%. It is high-time when we get rid of our traditional ways of communicating with our prospects. Video marketing is another term for catching up with the current era! Animated branding videos not only get your message across, but also give the extra little push! Videos definitely hold the power to grab the attention of your customers and keep them engaged. Our team will help you to set up a suitable video marketing campaign for your business needs. This way you can meet your potential customers on platforms where they already have an existence. So do not wait and let your business make a big impact. ',
        buttonText: '',
        image:
          'https://www.hangingpanda.com/assets/videoproduction.587c29ecec7c5dbabac7.jpg', // Place your image in public/images folder
      },

      {
        id: '6',
        title: 'UI/ UX Design',
        subtitle: 'We Provide Innovative Yet Innovative Designs!',
        description:
          'For every website, achieving an intuitive user experience is the top-most priority. We will help you to build a user journey for your website that provides a superior digital experience. Our team tries to keep them simple and refreshing as we believe in sticking to basics. They do their research and brainstorm to understand your requirements. This helps us to execute everything strategically and come up with a design that matches your expectations.We follow the best processes recognized in industry to create impressive UI/UX designs. We adhere to delivery timelines, and provide you with an end product that outstrips the competition. To execute each UI and UX project, our aim is simple, deliver what the customer wants. We offer elegant digital solutions to all your needs.',
        image:
          '	https://www.hangingpanda.com/assets/uiuxdesign.946cade778840aad9c59.jpg', // Place your image in public/images folder
      },
      {
        id: '7',
        title: 'Graphic Design',
        subtitle: 'Get Strikingly Impressive Graphic Design!',
        description:
          'An attractive interface and vibrant design will grab the users’ attention like nothing can. We believe that you can deliver your message in a better way through visuals.Our team understands that one shoe does not fit all and the same goes with websites also. So we take our time to figure what will work best for you and then create a customized plan to action for your business.We cater to the designing needs of your growing business! Our graphic designers are passionate about changing mindsets by innovating new methodologies to create the right brand mix. They are highly-skilled in industry-specific designing and use latest designing tools. So we will ensure you will get the desired outcome delivered to you well in time! ',
        buttonText: '',
        image:
          '	https://www.hangingpanda.com/assets/graphicdesign.fd5811bfbac2300f22f7.jpg', // Place your image in public/images folder
      },
    ],
    offers: {
      title:
        'We Offer Custom Branding and Design Development Company across all platforms',
      description:
        'An impressive brand image can invite tons of your prospects to come and connect with your business. We give our best to create an individual identity of your business with our wide range of services such as logo design, banner design, graphic design, video production and UI/UX design. HangingPanda understands what wonders an appealing logo or website layout can do to your business.Our team of skilled designers puts a lot of effort to give you something that represents what you do. We try to understand your mindset and deliver what you are looking for. Our clients are the key to our success so we work closely with your ideas by allowing you to express your likes and dislikes until you get the final outcome.',
      image: OffersBranding.src,
    },
    developmentProcess: {
      heading: 'Our Mobile App Development Process',
      title: [
        {
          image: Gathering.src,
          heading: 'Requirement Gathering',
          number: '01',
          containerColor: '#e6eef6',
          numberColor: '#3374b9',
        },
        {
          image: Proposal.src,
          heading: 'Submitting Our Proposal',
          number: '02',
          containerColor: '#fef3e4',
          numberColor: '#f69f29',
        },
        {
          image: Wireframe.src,
          heading: 'Wireframe Design',
          number: '03',
          containerColor: '#e0f5f1',
          numberColor: '#37ae8e',
        },
        {
          image: Approval.src,
          heading: 'Client Approval',
          number: '04',
          containerColor: '#e5f5fb',
          numberColor: '#40b2e4',
        },
        {
          image: AppDesign.src,
          heading: 'App Design',
          number: '05',
          containerColor: '#feeee5',
          numberColor: '#f5742a',
        },
        {
          image: Coding.src,
          heading: 'Coding',
          number: '06',
          containerColor: '#feebf0',
          numberColor: '#f65882',
        },
        {
          image: Review.src,
          heading: 'Review & Improvements',
          number: '07',
          containerColor: '#f1e8f3',
          numberColor: '#8f3f9b',
        },
        {
          image: Quality.src,
          heading: 'Quality Assurance',
          number: '08',
          containerColor: '#e0f2f5',
          numberColor: '#3b9eb3',
        },
        {
          image: Deployment.src,
          heading: 'Deployment',
          number: '09',
          containerColor: '#efe7fb',
          numberColor: '#8045dc',
        },
      ],
    },
  },
  digitalMarketing: {
    appD: [
      {
        id: '1',
        title: 'Digital',
        subtitle: 'Development Company',
        description:
          'Looking for a way to get more relevant and converting leads for your business? Google Adwords allows you to target your customers in the most effective way. Whether you want to make your existing Ads campaign better or set up a new one from the scratch, we do it all. We will help with every aspect of your Google Adwords campaign management. Our experts create a complete action plan to deliver the best results .AdWords is so widely used, it has become synonymous with the term ‘paid search’. We understand what all it takes to run a successful Google ad campaign. Our expertise in creating cost-effective and profitable ad campaigns will benefit you in a way that no other can. Every action we take is backed by detailed research so the chances of success are high.',
        buttonText: 'Start New Project',
        image:
          '	https://www.hangingpanda.com/assets/Digital-development-section-1.2cc5f369c2f2709f089b.jpg', // Place your image in public/images folder
      },
      {
        id: '2',
        title: 'Search Engine Optimization',
        subtitle: 'Make Your Brand Stand Out!',
        description:
          'If you do it the right way, Search Engine Optimization will help you to generate a huge amount of organic traffic. With our innovative SEO solutions you can optimize your website in such a way that it gains a high ranking on search engines like Google, Yahoo, Bing. We gain an in-depth understanding of your business and its target first and then a suitable strategy is created.To build your brand and maximize its reach, effective strategies are required. Our experience with different types of businesses gives us a wider range of approaches that we will use to strengthen your digital presence. With the right approaches used at the right time, you will definitely leave your mark.',
        buttonText: '',
        image:
          '	https://www.hangingpanda.com/assets/Search-engine-optimization.d68fa9b30c170539c4ee.jpg', // Place your image in public/images folder
      },
      {
        id: '3',
        title: 'Paid Media Marketing ',
        subtitle: '',
        description:
          'In digital marketing, paid media is an essential as it allows you to instantly grab the attention of your target audience. It reduces your efforts significantly because you are making an appearance where your potential customers are already spending a good amount of time. This way you will reach the ones that may never have discovered you on their own.Paid media marketing is one of the quickest ways to drive traffic. It will open the door of endless opportunities for your business. It is a proven method to expand your brand reach, get more clicks, and generate more traffic in such a small amount of time and with almost no effort. ',
        buttonText: '',
        image:
          'https://www.hangingpanda.com/assets/paidmedia.5e69311281c3d3a583a2.jpg', // Place your image in public/images folder
      },
      {
        id: '4',
        title: 'Google Adwords',
        subtitle: '',
        description:
          'Looking for a way to get more relevant and converting leads for your business? Google Adwords allows you to target your customers in the most effective way. Whether you want to make your existing Ads campaign better or set up a new one from the scratch, we do it all. We will help with every aspect of your Google Adwords campaign management. Our experts create a complete action plan to deliver the best results AdWords is so widely used, it has become synonymous with the term ‘paid search’. We understand what all it takes to run a successful Google ad campaign. Our expertise in creating cost-effective and profitable ad campaigns will benefit you in a way that no other can. Every action we take is backed by detailed research so the chances of success are high. ',
        buttonText: '',
        image:
          '	https://www.hangingpanda.com/assets/google_adwords.b2ee00cc669df8e0e9cb.jpg', // Place your image in public/images folder
      },
      {
        id: '5',
        title: 'Marketing Strategy',
        subtitle: '',
        description:
          'A successful marketing strategy is the first thing you need to make your business grow. With a clear understanding of your market and potential customers will give you endless opportunities. And it is not just about the growth of your brand. A foolproof strategy will also minimize the risk, build your reputation and create a loyal client base.To increase the popularity of your business among the customers, we provide you with a comprehensive marketing plan. This way you will achieve better performance and long-term sustainable growth. We understand the basics of your business, its market and use our expertise to create a marketing plan you can rely on.',
        buttonText: '',
        image:
          '	https://www.hangingpanda.com/assets/marketing-strategy.a905148551f1d3ae4ca5.jpg', // Place your image in public/images folder
      },

      {
        id: '6',
        title: 'Social Media Optimization',
        subtitle: 'Shape Your Brand With Us!',
        description:
          'In this digital era, almost everyone has a social media presence. So if you want your brand to catch people’s eye, there is no better way than using social media. SEO is definitely helpful in gaining customers but SMO is one step further. Social media allows you to stay ahead of your competition by increasing the brand image and user base. We offer comprehensive Social Media Optimization services to give you maximum benefits. This way you will leave a larger footprint online. It works in a similar way like word-of-mouth advertising. With HangingPanda, you can set up a perfect marketing campaign for your brand at a much lower cost. ',
        buttonText: '',
        image:
          'https://www.hangingpanda.com/assets/smo.66b4039c44c38e69bafc.jpg', // Place your image in public/images folder
      },
      {
        id: '7',
        title: 'Lead Generation',
        subtitle: 'Grow Your Business Daily!',
        description:
          'Capture more leads without putting any extra effort! Our lead generation specialists will help you close more deals and open exciting sales opportunities. We put a lot of focus, time, and effort into really understanding what your company goals are and what your ideal customer profile is. It allows us to build a custom lead generation strategy suitable for your business.We generate enough leads for your business to boost its conversions and route them to your team. Our experts work as your extended team and think of your business as their own. Just let us know what kind of customer you want and what are your targets, we guarantee providing the desired relevant leads.',
        buttonText: '',
        image:
          'https://www.hangingpanda.com/assets/lead-generation.a80d974c9733419e0e29.jpg', // Place your image in public/images folder
      },
    ],
    offers: {
      title: 'We Offer Custom Digital Development Company across all platforms',
      description:
        'Within a short span of time, we have worked with various big and small businesses and enhanced their digital presence. From conceptualization to final-stage execution, every step is well-analyzed so that there is no scope of something going wrong. We create different digital marketing strategies for different businesses based upon their requirements and goals.HangingPanda is on a mission to deliver transformational growth to all its clients. If you are concerned about your brand’s digital performance then reach out to us. With innovative and quality digital marketing services, we ensure that you will meet your marketing objectives and achieve the growth you have always wanted.',
      image: OffersDigital.src,
    },
    developmentProcess: {
      heading: 'Our Mobile App Development Process',
      title: [
        {
          image: Gathering.src,
          heading: 'Requirement Gathering',
          number: '01',
          containerColor: '#e6eef6',
          numberColor: '#3374b9',
        },
        {
          image: Proposal.src,
          heading: 'Submitting Our Proposal',
          number: '02',
          containerColor: '#fef3e4',
          numberColor: '#f69f29',
        },
        {
          image: Wireframe.src,
          heading: 'Wireframe Design',
          number: '03',
          containerColor: '#e0f5f1',
          numberColor: '#37ae8e',
        },
        {
          image: Approval.src,
          heading: 'Client Approval',
          number: '04',
          containerColor: '#e5f5fb',
          numberColor: '#40b2e4',
        },
        {
          image: AppDesign.src,
          heading: 'App Design',
          number: '05',
          containerColor: '#feeee5',
          numberColor: '#f5742a',
        },
        {
          image: Coding.src,
          heading: 'Coding',
          number: '06',
          containerColor: '#feebf0',
          numberColor: '#f65882',
        },
        {
          image: Review.src,
          heading: 'Review & Improvements',
          number: '07',
          containerColor: '#f1e8f3',
          numberColor: '#8f3f9b',
        },
        {
          image: Quality.src,
          heading: 'Quality Assurance',
          number: '08',
          containerColor: '#e0f2f5',
          numberColor: '#3b9eb3',
        },
        {
          image: Deployment.src,
          heading: 'Deployment',
          number: '09',
          containerColor: '#efe7fb',
          numberColor: '#8045dc',
        },
      ],
    },
  },
  dialerSoftware: {
    appD: [
      {
        id: '1',
        title: 'Dialer',
        subtitle: 'Development Company',
        description:
          'Want to save a significant amount of time for your agents? Getting an automatic dialer is the best way to do this. This allows you to connect a customer to a live agent once the call has been patched up at the customer end. This leads to high productivity and efficiency. You will also be able to assign calls to different agents, depending on certain conditions.An auto dialer will fetch contacts from the database and automatically dial them depending upon the status of the last call. By automating the calling process an unlimited number of customers can be contacted in less time.',
        buttonText: 'Start New Project',
        image:
          'https://www.hangingpanda.com/assets/Dialer-Development-1.81b16f41f2203ea91e8a.jpg', // Place your image in public/images folder
      },
    ],
    offers: {
      title: 'We Offer Custom Dialer Development Company across all platforms',
      description:
        'Boost your business communication and increase productivity with our Dialer Software Services. We help you to cut down on manpower by supercharging your outbound calling. Our team brainstorms to understand all your requirements before getting on the action. And this way we take away some of the biggest pain points of traditional systems.Our aim is to help businesses streamline and bring efficiency to their voice communication. If you are looking for a reliable solution to get your dialer software, you’ve come to the right place. HangingPanda promises to deliver the best quality solution at an affordable price and well in time.',

      image: OffersDialers.src,
    },
    developmentProcess: {
      heading: 'Our Mobile App Development Process',
      title: [
        {
          image: Gathering.src,
          heading: 'Requirement Gathering',
          number: '01',
          containerColor: '#e6eef6',
          numberColor: '#3374b9',
        },
        {
          image: Proposal.src,
          heading: 'Submitting Our Proposal',
          number: '02',
          containerColor: '#fef3e4',
          numberColor: '#f69f29',
        },
        {
          image: Wireframe.src,
          heading: 'Wireframe Design',
          number: '03',
          containerColor: '#e0f5f1',
          numberColor: '#37ae8e',
        },
        {
          image: Approval.src,
          heading: 'Client Approval',
          number: '04',
          containerColor: '#e5f5fb',
          numberColor: '#40b2e4',
        },
        {
          image: AppDesign.src,
          heading: 'App Design',
          number: '05',
          containerColor: '#feeee5',
          numberColor: '#f5742a',
        },
        {
          image: Coding.src,
          heading: 'Coding',
          number: '06',
          containerColor: '#feebf0',
          numberColor: '#f65882',
        },
        {
          image: Review.src,
          heading: 'Review & Improvements',
          number: '07',
          containerColor: '#f1e8f3',
          numberColor: '#8f3f9b',
        },
        {
          image: Quality.src,
          heading: 'Quality Assurance',
          number: '08',
          containerColor: '#e0f2f5',
          numberColor: '#3b9eb3',
        },
        {
          image: Deployment.src,
          heading: 'Deployment',
          number: '09',
          containerColor: '#efe7fb',
          numberColor: '#8045dc',
        },
      ],
    },
  },
};

export const bloghomedata = [
  //   {
  //     id: 1,
  //     img: "https://www.digitug.com/wp-content/uploads/2020/02/Website-Lead-Generation-New-Thumbnail.jpg",
  //     name: "HangingPanda",
  //     date: "September 11, 2021",
  //     text: "Lead Generation Ideas for Your Website that actually work!",
  //     author: "HangingPanda",
  //     cardContent:
  //       "Lead generation can be simply defined as the process of gathering information about customers who have shown some interest in the product or service you are offering. This is an important part of the sales funnel for every business, regardless of its type or size. Lead generation helps businesses understand how many peopl",

  //   },
  {
    id: 2,
    img: 'https://blog.adobe.com/en/publish/2021/08/31/media_1649ebc3fbbce0df508081913819d491fc3f7c7a9.png?width=750&format=png&optimize=medium',
    name: 'HangingPanda',
    date: 'September 11, 2021',
    text: 'Why App Developers Love AWS - Amazon Web Services',
    author: 'HangingPanda',
    cardContent:
      'In today’s times, the digital market has become fiercely competitive. With new technologies being introduced every day, the entire landscape has changed drastically. There are so many new development trends that are gaining traction and becoming popular among app developers. Amazon Web Services, or AWS,',
  },
  {
    id: 3,
    img: 'https://img.freepik.com/free-photo/blank-international-think-students-hipster_1134-1433.jpg?w=1480&t=st=1678787669~exp=1678788269~hmac=e727bd2e7ad4f841efe5cd001284ba744b6e8498efe4e60c3b33a5cb82938f03',
    name: 'HangingPanda',
    date: 'September 11, 2021',
    text: 'How A Website Can Shape Your Business Growth?',
    author: 'HangingPanda',
    cardContent:
      'A good website works for your online business in the same way that a very nice storefront does. It can make a significantly positive impact on your business. There are a lot of things that your website can help you with. Some of them are',
  },
  {
    id: 4,
    img: 'https://images.yourstory.com/cs/1/5cdee9503f1011e9b2c2f7c8c458f616/why-having-a-website-is-important-for-business-1590227987625.jpg?w=752&fm=auto&ar=2:1&mode=crop&crop=faces',
    name: 'HangingPanda',
    date: 'September 11, 2021',
    text: 'What is the Importance of a Website for Your Business?',
    author: 'HangingPanda',
    cardContent:
      'In today’s digital world, most of the customers look for the information online that can help them to make the right decision about a product or service that they are going to get',
  },
];
// bolg constant data
import AWSBenefits from '@/assets/blog_img/AWS.jpg';
import { blogimg } from '@/assets/blog_img/index';
import { india, info, skype, usa, whatsapp } from '@/assets/Contact';
export const factorsdata = [
  {
    id: 1,
    // img: assetBaseUrl + "home/blog2img.webp",
    img: '',
    name: 'HangingPanda',
    date: 'September 11, 2021',
    text: 'Lead Generation Ideas for Your Website that actually work!',
    author: 'HangingPanda',
    cardContent:
      'Lead generation can be simply defined as the process of gathering information about customers who have shown some interest in the product or service you are offering. This is an important part of the sales funnel for every business, regardless of its type or size. Lead generation helps businesses understand how many peopl',
    content: `<meta content="text/html; charset=utf-8"http-equiv=Content-Type><meta content="Microsoft Word 15 (filtered)"name=Generator><style>@font-face{font-family:"Cambria Math";panose-1:2 4 5 3 5 4 6 3 2 4}@font-face{font-family:Montserrat}div.MsoNormal,li.MsoNormal,p.MsoNormal{margin:0;line-height:115%;font-size:11pt;font-family:Arial,sans-serif}.MsoChpDefault{font-family:Arial,sans-serif}.MsoPapDefault{line-height:115%}@page WordSection1{size:8.5in 11in;margin:1in 1in 1in 1in}div.WordSection1{page:WordSection1}</style><body lang=EN-US style=word-wrap:break-word><div class=WordSection1><p class=MsoNormal><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><span lang=EN style=font-family:Montserrat;color:#252525;line-height:170%>Lead generation can be simply defined as the process of gathering information about customers who have shown some interest in the product or service you are offering. This is an important part of the sales funnel for every business, regardless of its type or size. Lead generation helps businesses understand how many people are interested in their offering, and these people can turn into customers at some point of time.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><span lang=EN style=font-family:Montserrat;color:#252525;line-height:170%>Generally, websites use a web form to collect such information from the users visiting the page. However, there are a few other ways to generate leads that are known to be more effective. Let’s have a look at some of those lead generation ideas:</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><b><span lang=EN style=font-size:14pt;line-height:115%;font-family:Montserrat;color:#252525>Create a Prominent CTA</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><span lang=EN style=font-family:Montserrat;color:#252525;line-height:170%>No matter how important your message is, it should never go anywhere close to scaring a user off. It is always best to have a visible and aesthetically appealing CTA, which definitely results in more leads. You can create a sense of urgency in the message you are delivering to your customer, but it should never indicate that something unfavourable will happen if they don’t contact you right away. So, always refrain from using such a call to action.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><b><span lang=EN style=font-size:14pt;line-height:115%;font-family:Montserrat;color:#252525>Share Success Stories</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><span lang=EN style=font-family:Montserrat;color:#252525;line-height:170%>People enjoy hearing about the experiences of those who have achieved success. If you want to add some real value to your content and grab the attention of users, there can be no better idea than this. All you need to do is reach out to a subject-matter expert. This person can be anyone from the same industry as yours. He or she can talk about anything relevant, like some industry insights, their journey to success, or something else. At the end of this section, you can ask the website visitors to leave their details to receive such updates in the future.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><b><span lang=EN style=font-size:14pt;line-height:115%;font-family:Montserrat;color:#252525>Provide Information</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><span lang=EN style=font-family:Montserrat;color:#252525;line-height:170%>Another good option is providing your potential customers with information they might be looking for. This information can be in the form of a video, blog, or anything else, depending on their preferences. This is a great way to boost the engagement rate of your website as well. Once a user finishes reading the blog or watching the video, you can prompt them with a CTA or a conventional lead form.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><b><span lang=EN style=font-size:14pt;line-height:115%;font-family:Montserrat;color:#252525>Create an Interactive Quiz</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><span lang=EN style=font-family:Montserrat;color:#252525;line-height:170%>Quizzes are real fun, and they are also a great way to interact with the visitors to your web page. You can give them a quiz based on their interests. This will not only allow you to learn more about them, but it will also give you a chance to subtly request their contact information. Once they complete the quiz, you can ask them to enter their contact details, like an email address, with which the results of the quiz will be shared.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0><span lang=EN style=font-family:Montserrat;color:#252525;line-height:170%>Lead generation is an important aspect of every business, and it can take your website to new heights of success if done right! If you need any help with anything else related to your website, feel free to reach out to us!</span><p class=MsoNormal><span lang=EN style=font-family:Montserrat></span><p class=MsoNormal><span lang=EN style=font-family:Montserrat></span><p><span>&nbsp;</span></p></div>`,
  },
  {
    id: 2,
    // img: assetBaseUrl + "home/blog2img.webp",
    img: '',
    name: 'HangingPanda',
    date: 'September 11, 2021',
    text: 'Why App Developers Love AWS - Amazon Web Services',
    author: 'HangingPanda',
    cardContent:
      'In today’s times, the digital market has become fiercely competitive. With new technologies being introduced every day, the entire landscape has changed drastically. There are so many new development trends that are gaining traction and becoming popular among app developers. Amazon Web Services, or AWS,',
    content: `<div class=WordSection1><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>In today’s times, the digital market has become fiercely competitive. With new technologies being introduced every day, the entire landscape has changed drastically. There are so many new development trends that are gaining traction and becoming popular among app developers. Amazon Web Services, or AWS, is one of those new and trendy technologies that more and more app developers are inclining towards.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>Let’s dive deeper and discuss what AWS is and why it is dominating the current digital scenario:</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:14pt;line-height:150%;font-family:Montserrat;color:#252525>A Closer Look</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>In the simplest words, AWS provides app developers with an on-demand cloud computing platform. This comprehensive platform can be used for building secure and scalable mobile and web applications. AWS also allows app developers to purchase any resources required for building an app on a subscription basis. Being the powerful toolchain that AWS is, it also helps to create and manage all the essential services for a mobile app.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:14pt;line-height:150%;font-family:Montserrat;color:#252525>Benefits</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:14pt;line-height:150%;font-family:Montserrat;color:#252525><img height=90% class"aws-benefit-image" id=image1.jpg src="${AWSBenefits.src}" width=90%></span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>The following are some of the benefits of using Amazon Web Services for mobile and web app development:</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:12pt;line-height:150%;font-family:Montserrat;color:#252525>Easy to Use</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>In order to be able to host an application or website on AWS, one doesn’t need to be tech-savvy. A person without in-depth technical knowledge can use the service and host a SaaS-based application.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:12pt;line-height:150%;font-family:Montserrat;color:#252525>Flexible</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>Another advantage of using AWS for app development is that it offers a great amount of flexibility. From choosing the operating system of your preference to selecting a programming language, AWS offers a lot. Basically, you will get a virtual environment that you need in order to use any software.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:12pt;line-height:150%;font-family:Montserrat;color:#252525>Easy Migration</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>Due to the better flexibility AWS offers, the migration process is very easy. Here, you also get different options for a different configuration.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:12pt;line-height:150%;font-family:Montserrat;color:#252525>Reliability</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>Whether you are developing a mobile app or a website, a reliable platform is all you need. Since AWS is the pillar technology of the e-commerce giant Amazon, you can rest assured about any such factors. It provides you with an infrastructure that is scalable and reliable, at the same time.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:12pt;line-height:150%;font-family:Montserrat;color:#252525>Better Performance</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>Who doesn’t want their application to be high-performing, right! Amazon Web Services gives you exactly what you want. Yes, you read it right! AWS helps you build robust and fast applications that can perform just as you expect them to.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:12pt;line-height:150%;font-family:Montserrat;color:#252525>Security</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>AWS is one of the most secure platforms available for building and maintaining mobile and web applications. The reason behind this is that they use an end-to-end networking model for their infrastructure. So, while using AWS, you can rest assured about the security of your customers’ important data.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><b><span lang=EN style=font-size:12pt;line-height:150%;font-family:Montserrat;color:#252525>Cost-Effectiveness</span></b><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>If you want to build a feature-rich and functional mobile or web application without going overboard with the budget, then AWS can be your best bet. All you need to pay for is the computational power, and that too is a very nominal amount. This is why it proves to be a cost-effective option in the long run.</span><p class=MsoNormal style=margin-top:12pt;margin-right:0;margin-bottom:12pt;margin-left:0;line-height:150%><span lang=EN style=font-family:Montserrat;color:#252525>By now, you must have got a fair idea of why AWS is becoming popular among app developers. If you are also looking for mobile app development services, you can reach out to us!</span><p><span>&nbsp;</span></p></div>`,
  },
  {
    id: 3,
    // img: assetBaseUrl + "home/blog2img.webp",
    img: '',
    name: 'HangingPanda',
    date: 'September 11, 2021',
    text: 'How A Website Can Shape Your Business Growth?',
    author: 'HangingPanda',
    cardContent:
      'A good website works for your online business in the same way that a very nice storefront does. It can make a significantly positive impact on your business. There are a lot of things that your website can help you with. Some of them are',
    content: `<div class=WordSection1><p class=MsoNormal><span lang=EN>A good website works for your online business in the same way that a very nice storefront does. It can make a significantly positive impact on your business. There are a lot of things that your website can help you with. Some of them are:</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>Communicating with your audience</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>Provide a clear idea about your product or service</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>Reach out to potential customers</span></p><p class=MsoNormal><span lang=EN>&nbsp;</span></p><p class=MsoNormal><span lang=EN>But most importantly the website should be made in a way that it represents your brand in a more clear way. If your website does not provide what your visitors might be looking for then it can even kill your existing business. You cannot make the mistake of thinking that any website will do. It has to be according to your customers’ requirements. </span></p><p class=MsoNormal><span lang=EN>&nbsp;</span></p><p class=MsoNormal><b><span class=sub-title lang=EN>Benefits of a Having a Website:</span></b></p><p class=MsoNormal><span lang=EN>Here we have compiled a list of different benefits of having a great website.</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>If you have a solid online presence that it can open endless possibilities for your business to succeed.</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>It helps you to provide detailed information to your customers about your offerings. This way they will get to know more about you and your product or service.</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>Your business website can become a way of sharing any news about your business with your customers. It is an easy way of doing so.</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>With the help of your website your customers can find you very easilyover the internet. Your information will be available for them on a few simple clicks.</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>You can become more prompt when it comes to providing responses to yourcustomers’ queries and issues.</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>Website of any business serves as a platform for contacting the people who are running it. This is a place where your customers will be able to findall your contact details in one place.</span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>No more additional advertising cost. What is the point in spending afortune on publishing advertisements. Your website can serve as the bestplatform to put your advertisement. </span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>Building a website that represents your brand idea helps you stand outamong all. You can get experimental and find ways to make yourself differentfrom your competitors. </span></p><p class=MsoNormal style='margin-left:.5in;text-indent:-.25in'><span lang=EN>●<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span lang=EN>Above all a great website will undoubtedly increase your credibilityamong the users very much. </span></p><p class=MsoNormal><span lang=EN>&nbsp;</span></p><p class=MsoNormal><span lang=EN>By now you must have realized how important it   is for a business to have a nice looking and fully functional website. Are yousomeone who is not familiar with the <b>website development process? </b>If yesthen you have come to the right place as HangingPanda is the <b>Best WebsiteDesign Company</b>. We will take care of all the aspects of <b>WebsiteDevelopment and Design. </b>We are just a call away. You can contact us to knowabout <b>Website Development Cost </b>or for further queries. </span></p><p><span>&nbsp;</span></p></div>`,
  },
  {
    id: 4,
    // img: assetBaseUrl + "home/blog2img.webp",
    img: '',
    name: 'HangingPanda',
    date: 'September 11, 2021',
    text: 'What is the Importance of a Website for Your Business?',
    author: 'HangingPanda',
    cardContent:
      'In today’s digital world, most of the customers look for the information online that can help them to make the right decision about a product or service that they are going to get',
    content: `<div class=WordSection1><p class=MsoNormal><b><span lang=EN style=font-size:14pt;line-height:115%></span></b><p class=MsoNormal><span lang=EN>In today’s digital world, most of the customers look for the information online that can help them to make the right decision about a product or service that they are going to get. This means, every business needs to have a solid digital presence if it wants to succeed. Having a great website to represent your brand idea can help you to achieve a higher conversion rate without a doubt. In short, a professional website is a must have if you want to get recognition in the modern marketplace.</span><p class=MsoNormal><b><span lang=EN></span></b><p class=MsoNormal><b><span lang=EN>What Benefits Your Business Will Get?</span></b><p class=MsoNormal><span lang=EN>With a digital presence for your business, you will be able to focus on all the important aspects of the marketing strategy that you have picked for your business. This way, you get to know your targeted audience and potential customers better than ever. It is basically the backbone of your business in the online world. Your website helps you with a plenty of things like:</span><p class=MsoNormal><span lang=EN></span><p class=MsoNormal style=margin-left:.5in;text-indent:-.25in><span lang=EN>●<span style='font:7pt "Times New Roman"'></span></span><span lang=EN>Taking care of the communication between you and your audience</span><p class=MsoNormal style=margin-left:.5in;text-indent:-.25in><span lang=EN>●<span style='font:7pt "Times New Roman"'></span></span><span lang=EN>Give the visitors information about you and your product/services.</span><p class=MsoNormal style=margin-left:.5in;text-indent:-.25in><span lang=EN>●<span style='font:7pt "Times New Roman"'></span></span><span lang=EN>Represents your brand more clearly.</span><p class=MsoNormal><span lang=EN></span><p class=MsoNormal><span lang=EN>And the list does not end here. In short, creating a website for your business gives your endless possibilities. This way, your chances become higher than ever to convert more.</span><p class=MsoNormal><span lang=EN></span><p class=MsoNormal><span lang=EN>Your digital presence makes it very easy for your targeted audience to read up about you. They will get to know who you are and how you work. Once they get their initial doubts cleared, chances are high that they will come back to you and purchase the product or service that you have to offer.</span><p class=MsoNormal><span lang=EN></span><p class=MsoNormal><span lang=EN>One more great thing about having a website representing your brand is, you invest only once and it will create a presence for the brand forever. It is not similar to other advertising methods that you must have used for your business. In those ways, you have to pay some amount and it will benefit you for a limited time period. And then you will have to start all over. This aspect makes having a website even more interesting.</span><p class=MsoNormal><span lang=EN></span><p class=MsoNormal><span lang=EN>By now you must have realized how a website can benefit your business. Now if you have decided to get one too then there is no need to make searches like ‘<b>best website development for business</b>’. You have come to the right place as <b>HangingPanda is the best IT services provider.</b> If you are in the process of creating an online store and want to benefit your <b>business with the Magento website </b>then also we can help<b>.</b> We can also help you with <b>Website Development </b>as our team has expert web developers with vast experience. You can contact us anytime. We are just a call away.</span><p><span>&nbsp;</span></p></div>`,
  },
].map((val, index) => {
  if (blogimg[index] && blogimg[index].img) {
    val.img = blogimg[index].img;
  }
  return val;
});
// banner commponent data
import {
  homebanner,
  Blogbanner,
  Aboutbanner,
  Careerbanner,
  Contactbanner,
  Portfoliobanner,
  App_development,
  Software_development,
  Web_design,
  digital_marketing,
  dialer_marketing,
} from '@/assets/banner_img/index';
export const bannerData = [
  {
    data: 'home',
    heading: 'Turn Your Dreams Into Reality With Our Digital Solutions',
    backgroundImage: homebanner,

    bannerSubTitle:
      'HangingPanda is a global leader in modern business innovation. We encourage you to dream big and provide them with comprehensive solutions designed specifically to meet your visual and performance needs.',
    showButton: false,
  },
  {
    data: 'about',
    heading: 'About Us',
    backgroundImage: Aboutbanner,

    bannerSubTitle:
      'Unlock success with our comprehensive digital solutions !!',
    showButton: true,
    link: '#about',
  },
  {
    data: 'our-work',
    heading: 'Some Of Our Finest Work',
    backgroundImage: Portfoliobanner,

    bannerSubTitle:
      'Our work is living proof of our passion for technology and design. We are shaping the technological horizon and creating a new future. Some of our delivered project for apps and websites.',
    showButton: true,
    link: '#our-work',
  },
  {
    data: 'blog',
    heading: 'Read stories, tips, and our opinions on everything',
    backgroundImage: Blogbanner,

    bannerSubTitle:
      'Get updated with the latest trends in technology and know how your business can benefit from these technologies.',
    showButton: true,
    link: '#blog',
  },
  {
    data: 'career',
    heading:
      'Come, Join The HangingPanda Team And Explore Exceptional Opportunities',
    backgroundImage: Careerbanner,

    bannerSubTitle: '',
    showButton: false,
  },
  {
    data: 'contact',
    heading: 'Contact Us',
    backgroundImage: Contactbanner,

    bannerSubTitle: '',
    showButton: false,
  },
  {
    data: 'calculator',
    heading: 'Looking To Build An App ?',
    backgroundImage: Contactbanner,

    bannerSubTitle: 'Find out how much it will cost in different regions!.',
  },
  {
    data: 'services/appDevelopment',
    heading: 'Mobile App Development',
    backgroundImage: App_development,

    bannerSubTitle:
      'Develop next-gen android and iOS apps that are quality tested for perfection with future-forward iOS application development services.',
    showButton: true,
  },
  {
    data: 'services/softwareDevelopement',
    heading: 'Software Development',
    backgroundImage: Software_development,

    bannerSubTitle:
      'Develop next-gen iOS apps that are quality tested for perfection with future-forward iOS application development services.',
    showButton: true,
  },
  {
    data: 'services/webDesignDevelopement',
    heading: 'Website development',
    backgroundImage: Web_design,

    bannerSubTitle:
      'Our Website Builder Helps Bring Your Unique Vision To Life — No Code Experience Required. Easily Create A Website That Promotes Your Brand Online With Pre-Set Themes and Layouts.',
    showButton: true,
  },
  {
    data: 'services/brandingDesign',
    heading: 'Branding & Design',
    backgroundImage: Software_development,

    bannerSubTitle: 'Get A Creative Banner Design!',
    showButton: true,
  },
  {
    data: 'services/digitalMarketing',
    heading: 'Digital Marketing',
    backgroundImage: digital_marketing,

    bannerSubTitle:
      'Gain market share and boost your business ROI with our 360° approach to digital marketing.',
    showButton: true,
  },
  {
    data: 'services/dialerSoftware',
    heading: 'Dialer Software',
    backgroundImage: dialer_marketing,

    bannerSubTitle:
      'Dialers are software that change modem configurations to dial high cost toll numbers or request payment for access to specific content.',
    showButton: true,
  },
];
// navbar constant data
export const menudata = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICES' },
  { name: 'OUR WORK', path: '/our-work' },
  { name: 'BLOGS', path: '/blog' },
  { name: 'CAREERS', path: '/career' },
  { name: 'CONTACT US', path: '/contact' },
];
// footer constant data
export const data = [
  ['Our Company', 'Career', 'Privacy Policy', 'Cookies Policy'],
  [
    'Designer App',
    'Train Effective',
    'MeeDate',
    'Stima Boda',
    'Fly Musandam',
    'Sallim',
    'GiftLiv',
  ],
  [
    'Mobile App Development',
    'Software Development',
    'Branding & Design',
    'Digital Marketing',
    'Web Design & Development',
    'Dialer Software',
  ],
];
// navbar lottei data used for svg
import {
  appdevelopment,
  aplication,
  Design,
  Marketing,
  software_development,
  web_design,
} from '@/assets/services_img/index';
import {
  appdevelopmentanimation,
  brandinganimation,
  daileranimation,
  digitalanimation,
  softwaredeveloperanimation,
  webdeveloperanimation,
} from '@/assets/lottie/index';
export const servicesMenuData = [
  {
    name: 'App Development',
    link: '/services/appDevelopment',
    icon: appdevelopment,
    animatedIcon: appdevelopmentanimation,
    animation: false,
  },
  {
    name: 'Software Development',
    link: '/services/softwareDevelopement',
    icon: software_development,
    animatedIcon: softwaredeveloperanimation,
    animation: false,
  },
  {
    name: 'Web Design & Development',
    link: '/services/webDesignDevelopement',
    icon: web_design,
    animatedIcon: webdeveloperanimation,
    animation: false,
  },
  {
    name: 'Branding & Design',
    link: '/services/brandingDesign',
    icon: Design,
    animatedIcon: brandinganimation,
    animation: false,
  },
  {
    name: 'Digital Marketing',
    link: '/services/digitalMarketing',
    icon: Marketing,
    animatedIcon: digitalanimation,
    animation: false,
  },
  {
    name: 'Dialer Software',
    link: '/services/dialerSoftware',
    icon: aplication,
    animatedIcon: daileranimation,
    animation: false,
  },
];
export const CookiesPolicyData = [
  {
    Header: 'Effective Date: 20-July-2023',

    headerDescription:
      'This Cookie Usage Policy ("Policy") explains how our we uses cookies on our website. By visiting and using our website, you agree to the use of cookies as described in this Policy.',
  },
  {
    Header: 'What are cookies?',

    headerDescription:
      'Cookies are small text files that are placed on your device (computer, smartphone, tablet, etc.) when you visit a website. They are widely used to enhance your browsing experience, enable certain functionality, and collect information about how you interact with websites.',
  },
  { para: 'Types of cookies we use:' },
  {
    heading: 'Essential Cookies',
    description:
      'These cookies are necessary for the functioning of our website and cannot be switched off in our systems. They enable core features such as secure logins, shopping cart functionality, and access to secure areas of the website. You may disable these cookies by changing your browser settings, but it may affect the performance and functionality of the website.',
  },
  {
    heading: 'Analytical and Performance Cookies',
    description:
      'We use these cookies to collect information about how visitors use our website, such as which pages are visited most often, how visitors navigate the site, and if they encounter any errors. This information helps us analyze and improve the performance and usability of our website. These cookies do not collect any personally identifiable information. By using our website, you consent to the processing of data about you by these cookies.',
  },
  {
    heading: 'Functionality Cookies',
    description:
      'These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices (e.g., language, region) to provide you with a more personalized experience. They may also be used to provide certain features or services you have requested, such as enabling social media sharing. Disabling these cookies may result in less personalized functionality but will not affect the basic functionality of the website.',
  },
  {
    heading: 'Advertising and Targeting Cookies',
    description:
      "We may use these cookies to deliver relevant advertisements and promotional content based on your interests and browsing history. They are usually placed by third-party advertising networks and advertisers. These cookies collect data about your online activity and may track your browsing across different websites. You have the option to opt-out of targeted advertising by managing your cookie preferences or through the advertising networks' opt-out mechanisms.",
  },

  {
    title: 'Managing and Controlling Cookies:',
    descriptions:
      "Most web browsers allow you to manage your cookie preferences. You can typically set your browser to accept or reject cookies, or to notify you when a cookie is being placed. Please note that if you choose to disable cookies, certain features or functionality of our website may be limited or unavailable.You can also delete cookies that have already been placed on your device. The method for managing and deleting cookies varies depending on your browser and device. Please refer to your browser's help menu or documentation for instructions.",
  },

  {
    title: 'Changes to this Policy:',
    descriptions:
      'We may update this Cookie Usage Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Policy periodically to stay informed about how we use cookies. The updated version of this Policy will be effective upon posting.',
  },
];

export const PrivacyPolicyData = [
  {
    Header: 'Effective Date: 20-July-2023',
    headerDescription:
      'At HangingPanda Private Limited, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect the information you provide to us when you access or use our website and related services.',
  },
  {
    heading: '1. Information We Collect',
    sections: [
      {
        title: '1.1 Personal Information',
        description:
          'We may collect personal information directly from you when you voluntarily provide it to us, such as when you fill out forms on our website, subscribe to our newsletters, or contact us through our communication channels. The types of personal information we may collect include, but are not limited to:',
        list: [
          'Your name.',
          'Contact information (email address, phone number, address).',
          'Payment and billing information.',
        ],
      },
      {
        title: '1.2 Usage Data',
        description:
          "We may also collect non-personal information about your interactions with our website and services. This may include your IP address, browser type, operating system, device information, pages visited, and other usage data. We use this information to analyze trends, administer the website, track users' movements, and gather demographic information for aggregate use.",
      },
    ],
  },
  {
    heading: '2. Use of Information',
    sections: [
      {
        title: '2.1 Personal Information',
        description: 'We use your personal information to:',
        list: [
          'Provide and improve our services, including customizing your user experience.',
          'Respond to your inquiries, requests, or feedback.',
          'Process transactions and deliver products or services you have requested.',
          'Send you administrative information, such as updates, security alerts, and confirmations.',
          'Send you marketing communications, newsletters, and promotional materials (if you have opted in to receive such communications).',
          'Carry out our obligations and enforce our rights arising from any agreements between you and us.',
          'Comply with legal requirements or protect our rights, property, or safety.',
        ],
      },
      {
        title: '2.2 Usage Data',
        description:
          "We use usage data to analyze and improve our website's functionality, performance, and content, as well as to personalize and enhance your user experience.",
      },
    ],
  },
  {
    heading: '3. Information Sharing',
    description:
      'We may share your personal information in the following circumstances:',
    list: [
      'With trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided that they agree to keep your information confidential and use it only for the purposes we specify.',
      'With our affiliated companies and subsidiaries, but only for the purposes outlined in this Privacy Policy.',
      'If required by law or as necessary to protect our legal rights, comply with a judicial proceeding, court order, or legal process served on our website.',
      'In connection with a corporate transaction, such as a merger, acquisition, or sale of assets, where personal information may be transferred as part of the transaction.',
    ],
    note: 'We do not sell, rent, or trade your personal information to third parties for their own marketing purposes.',
  },
  {
    heading: '4. Data Security',
    description:
      'We implement appropriate technical and organizational measures to safeguard the personal information we collect and store. However, please note that no data transmission over the internet or storage system is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.',
  },
  {
    heading: '5. Your Rights and Choices',
    description:
      'You have certain rights regarding the personal information we hold about you. You may:',
    list: [
      'Access, update, or correct your personal information by contacting us directly.',
      'Opt out of receiving marketing communications from us by following the unsubscribe instructions provided in the communication or by contacting us.',
      'Request the deletion of your personal information, subject to legal or contractual obligations.',
    ],
  },
  {
    heading: '6. Third-Party Websites',
    description:
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of those websites before providing any personal information.',
  },
  {
    heading: '7. Updates to this Privacy Policy',
    description:
      "We may update this Privacy Policy from time to time. The updated version will be posted on our website with a revised 'Effective Date.' We encourage you to review this Privacy Policy periodically for any changes.",
  },
];
export const ImagesArray = [
  {
    title: 'DesignerApp',
    image: Designer,
    description:
      'This is one of our best projects delivered in the fashion industry. Here, users can come and explore the latest collection by famous fashion designers and find the outfit they’ve been looking for. All the products are divided into several categories depending on gender and age. One can also search a particular designer and browse his/her entire collection',
  },
  {
    title: 'Train Effective Football Acadamy',
    image: TrainEffective,
    description:
      'This soccer training app is one of the most comprehensive learning platforms for aspiring soccer players. Using this user-friendly mobile application, one can experience professional academy-like soccer training without having to step out of their home. This focuses on several aspects such as technique, tactical knowledge, fitness and mentality.',
  },
  {
    title: 'StimaBoda- Electric Vehicle Swapping Station App & Operator App',
    image: StimaBoda,
    description:
      'StimaBoda App makes your electric rides easy : save everyday with your electric motorcycle with no constraints. Swap your battery anywhere in your city in 1 minute. No charging time, no range limit !',
  },
  {
    title: 'Eventati Gift App',
    image: Evantati,
    description:
      'Your online gift shop is now at your fingertips. Now choose flowers, cakes, unique personalized and handmade gifts right from your mobile. Evantati Gift App is home to a hand-curated collection segmented into different categories for easy selection. Evantati vision is to create an enhanced gifting ecosystem and provide a one-stop solution',
  },
  {
    title: 'Fly Musandam',
    image: FlyMusandam,
    description:
      'Book a private Jet instantly on this platform. Curly Airline proudly raises the bar and exceeds the standards for luxury and corporate private jet charter services. Fly Musandam pride to offer a professional service.',
  },
  {
    title: 'Sallim App - Medical Doctor App for Internal Operational treatment',
    image: Sallim,
    description:
      'This is a mobile application designed to ensure a smooth process for giving appointments to patients and scheduling consultations. This app eliminates the need to store bulky patient records on paper. Using this, appointments can be provided online and doctors will be able to update all the relevant information after examining the patient',
  },
  {
    title: 'Orient Company',
    image: OrientCompany,
    description:
      'Orient Company is committed to the consistent pursuit of excellence and continuous dedication in improving its business to provide clients with products, services that fully comply with their requirements. OC is a registered company for contracting and procurement with several government agencies, non-governmental organizations and major defense contractors working in war zone and NGO missions through most volatile of the world. It is a professional firm specialized in the fields of General Trading, Safety Tools & Materials, I.T. Solutions, Advertising, Interior Designing, Printing and Designing',
  },
  {
    title: 'Order 365',
    image: Order360,
    description:
      'Order365 Food is the ultimate app for ordering food online. With our easy-to-use app, you can browse menus from your favorite restaurants, place orders, and have your food delivered right to your doorstep. With Order365 Food, you can discover new restaurants and cuisines, browse menus, and customize your order to your exact specifications. ',
  },
  {
    title: 'TIME 365 Lite- Automate Time Tracking & Recognition Employee App',
    image: Train365,
    description:
      'Automate time tracking and recognition with an easy mobile app, time365, you could simply verify yourself by face rec, NFC, BLE and Click. It includes GPS location, digital time log, and more. No more signatures! No more Manual attendance records! No more Complications! No training is needed and No more Hardware Terminals. Mark your Company attendance with the most advanced time Attendance App.',
  },
  {
    title: 'Marhba',
    image: Marhbha,
    description:
      'Marhaba is a non-conventional digital banking platform that provides interest-free banking for Muslims. This allows users to conduct their transactions in line with Islamic principles. By using a neat and clean design for the website, we make sure that the visitors have a smooth, hassle-free browsing experience.',
  },
  {
    title: 'Lawyer App',
    image: LawyerApp,
    description:
      "Looking for a reliable and efficient way to book appointments with lawyers? Lawyer Appointment Booking app! With our easy-to-use app, you can browse a list of highly qualified and experienced lawyers in your area, and book an appointment with just a few taps. Whether you need legal advice for a personal matter,or you're seeking legal represe..",
  },
  {
    title: 'MeeDate',
    image: MeeDate,
    description:
      'MeeDate is the ultimate app for booking appointments with personal meeting specialists. With our user-friendly app, you can quickly and easily find professionals who can help you achieve your personal goals and schedule appointments that fit your busy lifestyle. Whether you need a life coach, a therapist, or a personal trainer, MeeDate has yo..',
  },
  {
    title: 'Nuzest',
    image: Nuzest,
    description:
      'Nuzest is one of the major suppliers for nutritional diet products. On this website, they offer articles about different things. Their blog also includes some delicious recipes as well. If someone wants to make a purchase of their products then they redirect them to the region specific Nuzest store as well.',
  },
  {
    title: 'GiftLiv',
    image: GiftLiv,
    description:
      'Looking for the perfect gift but not sure what to get? Look no further than the Gift app! Our app makes gift-giving a breeze with a wide variety of options to choose from. With GiftLiv, you can browse and select from thousands of gift ideas, including popular items, unique and creative gifts, and personalized options. You can even filter by..',
  },
  {
    title: 'CastleCorp',
    image: CastleCorp,
    description:
      'We help forge and polish an online and offline brand identity so that its consumers identify and relate to the brand. Through a holistic approach based on research, inbound marketing and other elements we provide solutions for your business.',
  },
  {
    title: 'Gleam Korea',
    image: GlamKorea,
    description:
      'Gleam Korea is an online store for korean beauty and skincare products. It is one of the leading global beauty distributors that link beauty brands and customers directly. This website contains their entire range of products divided in several categories. Their range includes products from all the popular korean beauty brands. We used a clean and r..',
  },
  {
    title: 'CBD Oil and CBD Wellness Product',
    image: CBDPro,
    description:
      'If you are looking for a one-stop store for all your CBD products then this is the place for you. This online shopping website offers a wide range of CBD Oil and CBD wellness products. The clean design of the website helps the visitors to find what they are actually looking for. And all the products are divided in their relevant category so that th..',
  },
  {
    title: 'Joslia Exports',
    image: JosilaProduct,
    description:
      'We help forge and polish an online and offline brand identity so that its consumers identify and relate to the brand.Through a holistic approach based on research, inbound marketing and other elements we provide solutions for your business.',
  },
  {
    title: 'VenBridge',
    image: VenBridge,
    description:
      'They help businesses or individuals by providing them with the credit facility to meet their needs. For this they combine multiple assets. They encourage tech companies to partner with them and accelerate the overall growth. This way, businesses can get their required working capital without giving away any equity.',
  },
];
export const options = [
  { value: '01', label: 'Website design' },
  { value: '02', label: 'App development' },
  { value: '03', label: 'CRM design' },
  { value: '04', label: 'Graphic design' },
  { value: '05', label: 'UI/UX design' },
  { value: '06', label: 'Other' },
];

//------------ CONTACT CARD-------------------//

export const contacts = [
  { icon: india, type: 'tel', value: '+91-9311675528' },
  { icon: usa, type: 'tel', value: '+1 (410) 692-8715' },
  { icon: whatsapp, type: 'tel', value: '+91-9311675528' },
  { icon: info, type: 'mailto', value: 'hr@hangingpanda.com' },
  { icon: skype, type: 'mailto', value: 'hr@hangingpanda.com' },
];

export const addresses = [
  {
    icon: india,
    text: 'HangingPanda Pvt. Ltd. B-64, B Block, Sector 63, Noida, Uttar Pradesh, India, 201301',
  },
  {
    icon: usa,
    text: 'HangingPanda Pvt. Ltd. 444 Alaska Avenue Suite #BTD615 Torrance, CA 90503 USA',
  },
];

// ---------------------//
