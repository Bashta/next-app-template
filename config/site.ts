export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "KRAAL Hotel",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Prices",
      href: "/prices",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Prices",
      href: "/prices",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    instagram: "https://instagram.com/your_instagram",
    docs: "/book",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
