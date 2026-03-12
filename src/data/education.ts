export interface Education {
  degree: string;
  school: string;
  field: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: "Master of Science",
    school: "McNeese State University",
    field: "Mathematics with Computer Science Concentration",
    period: "January 2018 — December 2019",
  },
  {
    degree: "Master of Engineering",
    school: "Beihang University",
    field: "Thermal Energy and Power Engineering",
    period: "September 2009 — March 2012",
  },
  {
    degree: "Bachelor of Engineering",
    school: "Tianjin University",
    field: "Thermal Energy and Power Engineering",
    period: "September 2005 — June 2009",
  },
];
