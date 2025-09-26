//Tezro Website Images
import tezro1 from "../assets/tezro1.png";
import tezro2 from "../assets/tezro2.png";
import tezro3 from "../assets/tezro3.png";
//Rifaah Website Images
import rifaah1 from "../assets/rifaah1.png";
import rifaah2 from "../assets/rifaah2.png";
import rifaah3 from "../assets/rifaah3.png";
import rifaah4 from "../assets/rifaah4.png";
//OrderSytem Images
import orderSystem1 from "../assets/order-system-1.png";
import orderSystem2 from "../assets/order-system-2.png";
import orderSystem3 from "../assets/order-system-3.png";
// RouteTracking Images
// import routeTracking1 from "../assets/route-tracking-1.png";
// import routeTracking2 from "../assets/route-tracking-2.png";
// Portfolio Images
import portfolio1 from "../assets/portfolio-1.png";

const projectsData = [
    {
        id: "tezro-website",
        images: [tezro1, tezro2, tezro3],
        title: "Tezro Website",
        shortDesc: "A professional business website built with WordPress and Elementor.",
        fullDesc:
            "Tezro.pk is a modern business website designed to represent our company’s digital presence. It is built on WordPress using Elementor for flexibility and responsiveness. The website is optimized for SEO, mobile-friendly, and provides detailed information about products, services, and contact options. It also integrates caching, analytics, and essential plugins for performance.",
        tech: ["WordPress", "Elementor", "PHP", "MySQL", "SEO Optimization"],
        demo: "https://tezro.pk",
    },
    {
        id: "rifaah-website",
        images: [rifaah1, rifaah2, rifaah3, rifaah4],
        title: "Rifaah Website",
        shortDesc: "A professional business website built with WordPress and Elementor.",
        fullDesc:
            "Tezro.pk is a modern business website designed to represent our company’s digital presence. It is built on WordPress using Elementor for flexibility and responsiveness. The website is optimized for SEO, mobile-friendly, and provides detailed information about products, services, and contact options. It also integrates caching, analytics, and essential plugins for performance.",
        tech: ["WordPress", "Elementor", "PHP", "MySQL", "SEO Optimization"],
        demo: "https://rifaah.org",
    },
  {
        id: "order-system",
        images: [orderSystem1, orderSystem2, orderSystem3],
        title: "Order-System",
        shortDesc: "A complex full-fledged Order System built with React, CSS Modules and Firebase.",
        fullDesc:
            "This project is a complete order management system with role-based dashboards (Dealer, Sales Officer, RSM, Logistic Manager, Boss). It supports order placement, approval flow, PDF/XLSX exports, and real-time updates with Firebase.",
        tech: ["React", "Firebase", "CSS Modules", "JSX"],
        github: "https://github.com/ShaibeeOfficial/TezroOrderSystem",
    },
    {
        id: "route-tracking",
        images: [
            //   require("../assets/route-tracking-1.png"),
            //   require("../assets/route-tracking-2.png"),
        ],
        title: "Route Tracking App",
        shortDesc: "A React Native App where students can track their University Bus in real-time.",
        fullDesc:
            "The app allows students to see the live location of their bus using Google Maps API. It supports real-time GPS tracking, authentication, and push notifications.",
        tech: ["React Native", "CLI", "Google Maps API", "Firebase"],
        github: "https://github.com/ShaibeeOfficial/route-tracking",
    },
    {
        id: "portfolio",
        images: [portfolio1],
        title: "Portfolio Website",
        shortDesc: "A modern Portfolio Website showcasing my skills, projects, and contact information.",
        fullDesc:
            "This portfolio is fully responsive across devices. It highlights my skills, projects, and achievements with a clean UI. Built from scratch with React and CSS Modules.",
        tech: ["React", "CSS Modules", "Responsive Design"],
        github: "#",
    },
];

export default projectsData;
