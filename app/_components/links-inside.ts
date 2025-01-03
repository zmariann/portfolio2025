export interface Link {
  name: string;
  href: string;
}

export const linksDesktop: Link[] = [
  { name: "ABOUT", href: "/portfolio/about" },
  { name: "PROJECTS", href: "/portfolio/projects" },
  { name: "CONTACT", href: "/portfolio/contact" },
];

export const homeMobile: Link = { name: "HOME", href: "/portfolio" };
export const linksMobile: Link[] = [homeMobile].concat(linksDesktop);

export const linksProjects: Link[] = [
  { name: "Videos", href: "/portfolio/projects/videos" },
  { name: "Photography", href: "/portfolio/projects/photography" },
];

export const linkPortfolio: Link[] = [{ name: "ABOUT", href: "/portfolio" }];

export const linksPhoto: Link[] = [
  { name: "Rosa", href: "/portfolio/projects/photography/rosa" },
  { name: "People", href: "/portfolio/projects/photography/people" },
  { name: "Products", href: "/portfolio/projects/photography/products" },
  { name: "Coralized", href: "/portfolio/projects/photography/coralized" },
  { name: "Pigments", href: "/portfolio/projects/photography/pigments" },
  { name: "Event", href: "/portfolio/projects/photography/event" },
];

// links for production:

const html: string = ".html";

function appendHtmlToHrefInPlace(links: Link[]): void {
  links.forEach((link) => {
    link.href += html;
  });
}

appendHtmlToHrefInPlace(linksDesktop);
appendHtmlToHrefInPlace(linksProjects);
appendHtmlToHrefInPlace(linkPortfolio);
appendHtmlToHrefInPlace(linksPhoto);

homeMobile.href += html;

