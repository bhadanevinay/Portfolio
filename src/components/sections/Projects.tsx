'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { PROJECTS } from '@/data/projects';
import { ProjectCard } from '../ui/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-20 bg-background border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="// 05 — FEATURED PROJECTS"
          title="SELECTED"
          highlight="WORK."
          description="High-impact web applications engineered with modern frontend architectures, real-time databases, and cloud services."
        />

        {/* Projects Editorial Layout with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
