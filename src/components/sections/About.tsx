'use client';

import Image from 'next/image';
import { Download, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillBar } from '@/components/ui/SkillBar';

export function About() {
    return (
        <section id='about' className='section-padding bg-subtle-bg'>
            <div className='container-section'>
                <AnimatedSection>
                    <SectionHeading title='About Me' subtitle='A passionate full-stack developer building modern web solutions' />
                </AnimatedSection>

                <div className='grid-two-col' style={{ alignItems: 'start' }}>
                    {/* Left: Profile */}
                    <AnimatedSection delay={0.2}>
                        <div className='profile-col'>
                            <div className='profile-pic'>
                                <Image src='/images/profile-pic-new.png' alt='Hairui Wang' fill className='object-cover' priority />
                            </div>

                            <div>
                                <h3 className='text-xl font-semibold text-text-primary' style={{ marginBottom: '1rem' }}>
                                    {profile.name}
                                </h3>
                                <p className='text-text-secondary leading-relaxed' style={{ marginBottom: '1.5rem' }}>
                                    {profile.bio}
                                </p>

                                <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }} className='text-sm text-text-secondary'>
                                    <p>
                                        <span className='font-medium text-text-primary'>Email:</span> {profile.email}
                                    </p>
                                    <p>
                                        <span className='font-medium text-text-primary'>Phone:</span> {profile.phone}
                                    </p>
                                    <p>
                                        <span className='font-medium text-text-primary'>Location:</span> {profile.location}
                                    </p>
                                </div>

                                <div className='btn-row'>
                                    <a
                                        href='#contact'
                                        className='flex-center bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-accent/25 transition-all'
                                        style={{ padding: '0.625rem 1.25rem', gap: '0.5rem', display: 'inline-flex' }}
                                    >
                                        <Mail className='h-4 w-4' />
                                        Contact Me
                                    </a>
                                    <a
                                        href='/Resume--Hairui Wang.pdf'
                                        target='_blank'
                                        className='border border-border text-text-primary rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors'
                                        style={{ padding: '0.625rem 1.25rem', gap: '0.5rem', display: 'inline-flex', alignItems: 'center' }}
                                    >
                                        <Download className='h-4 w-4' />
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right: Skills + Tech Stack */}
                    <AnimatedSection delay={0.4}>
                        <div>
                            <h3 className='text-lg font-semibold text-text-primary' style={{ marginBottom: '1.5rem' }}>
                                Skills
                            </h3>
                            {profile.skills.map((skill, i) => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
                            ))}

                            <h3 className='text-lg font-semibold text-text-primary' style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
                                Tech Stack
                            </h3>
                            <div>
                                {Object.entries(profile.techStack).map(([category, techs]) => (
                                    <div key={category} className='tech-stack-group'>
                                        <p className='text-sm font-medium text-text-secondary' style={{ marginBottom: '0.5rem' }}>
                                            {category}
                                        </p>
                                        <div className='tech-badges'>
                                            {techs.map(tech => (
                                                <span key={tech} className='text-xs font-medium rounded-full border border-accent/30 text-accent bg-accent/5' style={{ padding: '0.25rem 0.75rem' }}>
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
