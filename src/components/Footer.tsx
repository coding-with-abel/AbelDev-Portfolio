export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/abel.png" alt="Abel logo" className="h-6 sm:h-7 w-auto" />
            <p className="text-sm font-display font-medium text-foreground">
              AbelDev
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AbelDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}