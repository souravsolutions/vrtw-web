type FooterLink = {
  title: string;
  href: string;
};

const links: FooterLink[] = [
  { title: "animateicons", href: "https://www.animateicons.in/" },
];

const FooterSection = () => {
  return (
    <footer className='border-t bg-white py-12 dark:bg-transparent'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='flex flex-wrap items-center justify-between gap-6'>
          <span className='order-last block text-center text-sm text-muted-foreground md:order-first font-jetbrains'>
            {new Date().getFullYear()}
          </span>

          <nav className='order-first flex flex-wrap justify-center gap-6 text-sm md:order-last'>
            {links.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground transition-colors duration-150 hover:text-primary font-mono'
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
