export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Gophr App, Inc",
    period: "January 2020 — Present",
    description: [
      "Leading development of microservices-based backend APIs for inventory management, user authentication, and shipment tracking using Node.js and PostgreSQL.",
      "Crafting frontend interfaces for Dispatch/Merchant Dashboard using React.js with Ant Design.",
      "Creating School Lunch System — a Next.js application enabling parents to order lunches from local restaurants, delivered by Gophr to schools.",
      "Contributing to Consumer App development using React Native, connecting local businesses with their community.",
    ],
  },
  {
    title: "Data Scientist / Product Manager",
    company: "China United Network Communications Group Co., Ltd",
    period: "April 2016 — November 2017",
    description: [
      "Led the Intelligent Transportation Analysis System (ITAS) — real-time analysis of mobile signaling data processing 3 GB/min throughput using Java, Hadoop, and Storm.",
      "Built the Thermal and Industrial Economic Platform (RTIEP) — a web service for clients including P&G, JD, Baidu, and Starbucks.",
      "Developed a Tourism big data SaaS application for population analytics and heat mapping.",
    ],
  },
  {
    title: "Data Scientist / Product Manager",
    company: "Expert Microsystems, Inc. (China)",
    period: "April 2012 — March 2016",
    description: [
      "Maintained and enhanced Prognostic and Health Management (PHM) application for electromechanical systems.",
      "Developed Real-time Diagnosis Platform (RDP) providing monitoring and diagnostics for industrial equipment.",
    ],
  },
];
