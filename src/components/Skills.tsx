import { Reveal } from './Reveal'
import { Code2, Server, Wrench, } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Next.js'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'REST APIs', 'PostgreSQL', 'Flask', 'JWT', 'Git'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['GitHub', 'Figma', 'VS Code', 'Postman', 'Cloudinary', 'Vercel'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-background py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Expertise
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight">
            Skills & tools.
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">
            A blend of frontend craft, backend depth, and design sensibility that helps me ship complete products.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <Reveal key={category.title} delay={categoryIndex * 0.1}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold font-display text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Reveal key={skill} delay={categoryIndex * 0.1 + skillIndex * 0.03}>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-secondary border border-border text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors">
                          {skill}
                        </span>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}