import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  medical,
  plant,
  sdg,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  // roadmap1,
  // roadmap2,
  // roadmap3,
  // roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "/#about",
  },
  {
    id: "0",
    title: "Rules & Regulations",
    url: "/#rules",
  },
  {
    id: "1",
    title: "Timeline",
    url: "/#timeline",
  },
  {
    id: "2",
    title: "Prize",
    url: "/#pricing",
  },
  
  {
    id: "3",
    title: "Tracks",
    url: "/#tracks",
  },
  {
    id: "4",
    title: "Sponsors",
    url: "/#sponsor",
  },
  {
    id: "5",
    title: "Faq",
    url: "/#faq",
  },
  {
    id:"6",
    title:"Template",
    url:"https://docs.google.com/presentation/d/1ncZx_vVkLy6L7Ko3uHz9NRCbAAK_CaA0/edit?usp=sharing&ouid=107223231990873502845&rtpof=true&sd=true"
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const titlecompanyLogos = [yourlogo, yourlogo];

export const diamondcompanyLogos = [yourlogo, yourlogo, yourlogo];

export const goldcompanyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Ideation Period",
  "Offline Hackathon Experience",
  "Guest Speakers from Industry",
  "Cash Prizes, Goodies & More...",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// export const roadmap = [
//   {
//     id: "0",
//     title: "Voice recognition",
//     text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
//     date: "May 2023",
//     status: "done",
//     imageUrl: roadmap1,
//     colorful: true,
//   },
//   {
//     id: "1",
//     title: "Gamification",
//     text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
//     date: "May 2023",
//     status: "progress",
//     imageUrl: roadmap2,
//   },
//   {
//     id: "2",
//     title: "Chatbot customization",
//     text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
//     date: "May 2023",
//     status: "done",
//     imageUrl: roadmap3,
//   },
//   {
//     id: "3",
//     title: "Integration with APIs",
//     text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
//     date: "May 2023",
//     status: "progress",
//     imageUrl: roadmap4,
//   },
// ];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const seniorSecondaryPricing = [
  { 
    id: '2', 
    title: 'Second Place🥈', 
    description: 'Cancelled due to no applications', 
    price: '30k', 
    medal: '🥈' // Silver Medal Emoji 
  },
  { 
    id: '1', 
    title: 'First Place 🥇', 
    description: 'Cancelled due to no applications', 
    price: '50k', 
    medal: '🥇' // Gold Medal Emoji 
  },
  { 
    id: '3', 
    title: '  Third Place 🥉', 
    description: 'Cancelled due to no applications', 
    price: '20k', 
    medal: '🥉' // Bronze Medal Emoji 
  },
];


export const pricing = [
  {
    id: "0",
    title: "Agriculture 👨‍🌾 *",
    price: "1.5Lakh",
  },
  {
    id: "1",
    title: "Sustainable Development Goals 🏞️ *",
    price: "1.5Lakh",
  },
  {
    id: "2",
    title: "Health Care 🧬",
    price: "1.5Lakh",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Agriculture",
    text: "The aim is to empower farmers with innovative digital solutions that leverage IoT, Al, and ML to address their agriculture challenges.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: plant,
    light: true,
    url: "/#tracks",
  },
  {
    id: "1",
    title: "Healthcare",
    text: "The aim should be to focus on building an innovative solution addressing the challenges faced in the healthcare field that is effective, user-friendly, and is easily accessible to all people.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: medical,
    light: true,
    url: "/#tracks",
  },
  {
    id: "2",
    title: "Sustainable Development Goals",
    text: "The aim should be to focus on building an innovative solution addressing the challenges faced in achieving the Sustainable Development Goals (SDGs) by 2030.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: sdg,
    light: true,
    url: "/#tracks",
  }
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: discordBlack,
    url: "https://www.linkedin.com/in/evolumin/",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/evolum1n/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
