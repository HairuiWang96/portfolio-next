"use client";

import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";

export function About() {
  return (
    <section id="about" className="section-padding bg-subtle-bg">
      <div className="container-section">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="A passionate full-stack developer building modern web solutions"
          />
        </AnimatedSection>

        <div className="grid-two-col items-start">
          {/* Left: Profile */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-accent/20">
                <Image
                  src="/images/profile-pic-new.png"
                  alt="Hairui Wang"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-4 text-center md:text-left">
                  {profile.name}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {profile.bio}
                </p>

                <div className="grid grid-cols-1 gap-3 text-sm text-text-secondary mb-6">
                  <p>
                    <span className="font-medium text-text-primary">Email:</span>{" "}
                    {profile.email}
                  </p>
                  <p>
                    <span className="font-medium text-text-primary">Phone:</span>{" "}
                    {profile.phone}
                  </p>
                  <p>
                    <span className="font-medium text-text-primary">Location:</span>{" "}
                    {profile.location}
                  </p>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-accent/25 transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    Hire Me
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-primary rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Skills + Tech Stack */}
          <AnimatedSection delay={0.4}>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-6">
                Skills
              </h3>
              {profile.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 0.1}
                />
              ))}

              <h3 className="text-lg font-semibold text-text-primary mt-10 mb-4">
                Tech Stack
              </h3>
              <div className="space-y-4">
                {Object.entries(profile.techStack).map(([category, techs]) => (
                  <div key={category}>
                    <p className="text-sm font-medium text-text-secondary mb-2">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-accent/30 text-accent bg-accent/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
