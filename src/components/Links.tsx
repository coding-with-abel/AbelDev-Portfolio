import { Reveal } from './Reveal'
import { Github, MessageCircle, Twitter, Mail, ArrowUpRight } from 'lucide-react'

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/coding-with-abel',
    icon: Github,
    description: 'Open source work and side projects.',
    color: 'bg-deep-900',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2349018901734',
    icon: MessageCircle,
    description: 'Chat with me directly for quick questions.',
    color: 'bg-[#25d366]',
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/defi_abel',
    icon: Twitter,
    description: 'Thoughts on tech, design, and building in public.',
    color: 'bg-deep-900',
  },
]

export function Links() {
  return (
    <section id="links" className="bg-background py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Connections
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight">
            Let's stay in touch.
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">
            Find me across the web, or send a message using the contact form below.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <Reveal key={link.label} delay={index * 0.08}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <span className={`grid h-10 w-10 place-items-center rounded-full text-primary-foreground shrink-0 ${link.color}`}>
                  <link.icon className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <h3 className="text-base font-semibold">{link.label}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
