type MenuItem = {
  id: string;
  label: string;
  path: string;
};

export const menuItems: MenuItem[] = [
  { id: "home", label: "Home", path: "/" },
  { id: "solutions", label: "Solutions", path: "/solutions" },
  { id: "blog", label: "Blog", path: "/blog" },
  { id: "contact", label: "Contact", path: "/contact" },
];
