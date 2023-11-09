import {
    mobile,
    backend,
    creator,
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
    carrent,
    jobit,
    tripguide,
    threejs,
    rhodes,
    tutorme,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      title: "Online Tutor",
      company_name: "TutorMe",
      icon: tutorme,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Present",
      points: [
        "Provide one-on-one tutoring sessions in Computer Science Basics, Python, Java, C, Algebra, Geometry, and English.",
        "Focus on strengthening students' problem-solving skills to enable them to independently solve coding problems.",
        "Create and adapt personalized learning plans to suit individual student needs and learning styles.",
        "Foster a positive and supportive learning environment that builds students' confidence and motivation.",
      ],
    },
    {
      title: "Virtual Reality Student Research Fellow",
      company_name: "Rhodes College",
      icon: rhodes,
      iconBg: "#383E56",
      date: "May 2022 - May 2023",
      points: [
        "Received the Robert Allen Scott Award in Mathematics from Rhodes College which is granted to one rising senior to conduct computational research in the field of Mathematics and Computer Science.",
        "Built a VR game in Unity and C# scripting using assets made in Maya and Blender where users would attempt to pop balloons by throwing darts.",
        "Used the game with Meta Quest HMD and in Motion Capture technology to investigate the effect of VR-Based context priming on user experience.",
      ],
    },
    {
      title: "Computer Science Tutor",
      company_name: "Rhodes College",
      icon: rhodes,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - May 2023",
      points: [
        "Tutor approximately 20 students in Java and Python one-on-one weekly.",
        "Create customized lessons and individual help to ensure the best success for the student.",
        "Mentor younger students on course choices and study habits.",
      ],
    },
    {
      title: "HPC Student Research Fellow",
      company_name: "Rhodes College",
      icon: rhodes,
      iconBg: "#383E56",
      date: "May 2021 - Oct 2021",
      points: [
        "Completed coursework to learn programming in C and scripting in Bash to help set up the infrastructure for Lotus HPC System at Rhodes College.",
        "Participated in research on job scheduling optimization algorithms like job stealing by running test cases and contributing to research paper.",
        "Implemented a daemon that alerted cluster admins when CPU/GPUs reached a threshold temperatures.",
        "Implemented a daemon that shuts a node down if it reaches a critical temperature, and would shut down the entire cluster if necessary.",
        "Set up FortiClient VPN user access and wrote documentation for users to configure.",
        "Wrote general cluster usage documentation for Lotus",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };