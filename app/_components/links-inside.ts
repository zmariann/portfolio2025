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


// links for production:
/*
const html: string = ".html";

function appendHtmlToHrefInPlace(links: Link[]): void {
  links.forEach((link) => {
    link.href += html;
  });
}

appendHtmlToHrefInPlace(linksDesktop);
appendHtmlToHrefInPlace(linksProjects);
appendHtmlToHrefInPlace(linkPortfolio);

homeMobile.href += html;
*/
