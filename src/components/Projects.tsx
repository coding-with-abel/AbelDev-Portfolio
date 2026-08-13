import { Reveal } from './Reveal'

const projects = [
  {
    id: 'jelegs-real-estate',
    title: 'Jelegs Real Estate CMS',
    description:
      'A full-stack content management system for property management. Features a role-based admin dashboard, real-time property listings, image optimization with Cloudinary, and SEO-ready public pages. Built for scalability and performance.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    gradient: 'from-primary/20 to-deep-900',
    link: 'https://jelegsrealestate.com',
    image: '/images/jelegs-screenshot.png',
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Platform',
    description:
      'A complete food delivery application with user authentication, restaurant browsing, real-time order placement, and Stripe payment integration. Includes an admin panel for restaurant management, menu customization, and order tracking. Full-stack implementation with secure user sessions and order history.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'CSS'],
    gradient: 'from-accent/20 to-deep-900',
    link: 'https://github.com/coding-with-abel/Food-Delivery-Website',
    image: '/images/food-delivery-screenshot.png',
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking Interface',
    description:
      'A responsive hotel booking interface showcasing frontend design and UX. Features a date range picker for availability, room search and filtering, and a complete checkout flow. Built to demonstrate intuitive user experience and modern UI/UX principles.',
    tags: ['React', 'CSS', 'UI/UX'],
    gradient: 'from-soft-blue/20 to-deep-900',
    link: 'https://github.com/coding-with-abel/hotel-booking',
    image: '/images/hotel-booking-screenshot.png',
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-deep-fade px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 sm:mb-16">
            <div className="space-y-2">
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Selected Works
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-hero tracking-tight">
                Projects
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.1}
              className={index === 1 ? 'md:mt-12' : ''}
            >
              <a
                href={project.link || '#'}
                target={project.link ? '_blank' : undefined}
                rel={project.link ? 'noopener noreferrer' : undefined}
                className="group block relative overflow-hidden rounded-3xl bg-deep-900/50 border border-deep-700 hover:border-primary/50 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`}
                    />
                  )}
                </div>
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-hero group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-hero-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-lg bg-deep-800/50 border border-deep-700 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}