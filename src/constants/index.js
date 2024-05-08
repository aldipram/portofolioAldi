import {
    mobile,
    backend,
    fullStack,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    filterJS,
    weddingInvitation,
    hotel,
    threejs,
    imaginify,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Web Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: fullStack,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "HTML & CSS",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Agustus 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Javascript",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "September 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React JS",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Desember 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Next JS",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Februari 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Filter Search",
      description:
        "create a search filter feature for a Hajj Umrah Badal tour and travel package.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: filterJS,
      source_code_link: "https://github.com/aldipram/filterJS",
    },
    {
      name: "Wedding Invitation",
      description:
        "Simple wedding invitation created using React JS and Tailwind CSS.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: weddingInvitation,
      source_code_link: "https://wedding-shindy-ruhiyat.vercel.app/",
    },
    {
      name: "Hotel Management",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Next JS",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: hotel,
      source_code_link: "https://github.com/aldipram/hotel-management-Next.js",
    },
    {
      name: "Imaginify",
      description:
        "Application for changing image sizes, changing colors in images, deleting objects in images and removing backgrounds using AI.",
      tags: [
        {
          name: "Next JS",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: imaginify,
      source_code_link: "https://imaginify-by-aldi.vercel.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };