export interface Project {
  title: string;
  category: string;
  image: string;
  modalImage: string;
  description: string;
  details: string;
  link?: string;
  isMobile?: boolean;
}

export const projects: Project[] = [
  {
    title: "Gophr Web Tracking",
    category: "React Project",
    image: "/images/portfolio/web-tracking.png",
    modalImage: "/images/portfolio/modals/m-web-tracking.png",
    description: "Mobile-first delivery tracking app.",
    details:
      "A mobile-first delivery application with route management, GPS tracking, and signature/photo capture. Currently in testing and preparing to support hundreds of daily deliveries. Built with React.",
    isMobile: true,
  },
  {
    title: "GO-PILOT",
    category: "Flutter Project",
    image: "/images/portfolio/go-pilot.png",
    modalImage: "/images/portfolio/modals/m-go-pilot.png",
    description: "AI-powered load verification and compliance app.",
    details:
      "An AI-powered load verification and FMCSA compliance photo auditing app built in Flutter. Features all key UIs and workflows to streamline regulatory processes for the trucking industry.",
    isMobile: true,
  },
  {
    title: "Dashboard",
    category: "React Project",
    image: "/images/portfolio/dashboard.png",
    modalImage: "/images/portfolio/modals/m-dashboard.png",
    description: "Gophr merchant and dispatcher dashboard.",
    details:
      "A comprehensive dashboard for Gophr merchants and dispatchers. Features include order management, user management, inventory tracking, and real-time driver tracking. Built with React.js and Ant Design.",
  },
  {
    title: "School Lunch System",
    category: "Next.js Project",
    image: "/images/portfolio/school-lunch.png",
    modalImage: "/images/portfolio/modals/m-school-lunch.png",
    description: "School lunch ordering platform.",
    details:
      "A Next.js application that enables parents to order lunches from local restaurants, which are then delivered by Gophr drivers to schools. Features menu browsing, ordering, and delivery scheduling.",
  },
  {
    title: "API-Shipments",
    category: "Node.js Project",
    image: "/images/portfolio/api-shipment.jpeg",
    modalImage: "/images/portfolio/modals/m-api-shipment.jpeg",
    description: "Shipment management microservice.",
    details:
      "A Node.js microservice handling order placement, shipping fee calculation, route optimization, driver dispatch, and shipment history management. Built with Express.js and PostgreSQL.",
  },
  {
    title: "API-Users",
    category: "Node.js Project",
    image: "/images/portfolio/api-user.png",
    modalImage: "/images/portfolio/modals/m-api-user.png",
    description: "User management microservice.",
    details:
      "A Node.js microservice managing merchants, dispatchers, consumers, and drivers. Handles authentication, authorization, and user profile management.",
  },
  {
    title: "API-Inventories",
    category: "Node.js Project",
    image: "/images/portfolio/api-inventory.png",
    modalImage: "/images/portfolio/modals/m-api-inventory.png",
    description: "Inventory management microservice.",
    details:
      "A Node.js microservice for managing stores and their inventories. Handles product catalog, stock levels, and inventory updates.",
  },
  {
    title: "Gophr App",
    category: "React Native Project",
    image: "/images/portfolio/gophr-app.png",
    modalImage: "/images/portfolio/modals/m-gophr-app.png",
    description: "Consumer-facing mobile application.",
    details:
      "A React Native mobile app connecting local businesses with their community. Features product browsing, ordering, and delivery tracking.",
  },
  {
    title: "Population Heat Map",
    category: "JavaScript Project",
    image: "/images/portfolio/heat-map.png",
    modalImage: "/images/portfolio/modals/m-heat-map.png",
    description: "Real-time population analytics.",
    details:
      "A SaaS service displaying 3D real-time population heat maps and statistics based on mobile signaling data. Built with JavaScript and data visualization libraries.",
  },
];
