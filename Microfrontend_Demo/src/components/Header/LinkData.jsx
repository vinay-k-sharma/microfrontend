import { IoChevronDown } from "react-icons/io5";

export const Links = [
  {
    label: "Home",
    slug: "/",
  },
  {
    label: "About",
    slug: "/about",
  },
  {
    label: "Services",
    slug: "/services",
  },
  {
    label: "Portfolio",
    slug: "/portfolio",
  },
  {
    label: "Team",
    slug: "/team",
  },
  {
    label: "Blog",
    slug: "/blog",
  },
  {
    label: "Dropdown",
    icon: <IoChevronDown />,
    dropdown: [
      { label: "Dropdown1", slug: "/dropdown1" },   
      {
        label: "Deep Dropdown",
        icon: <IoChevronDown />,
        dropdown: [
          { label: "Sub Dropdown1", slug: "/sub-dropdown1" },
          { label: "Sub Dropdown2", slug: "/sub-dropdown2" },
          { label: "Sub Dropdown3", slug: "/sub-dropdown3" },
          { label: "Sub Dropdown4", slug: "/sub-dropdown4" },
          { label: "Sub Dropdown5", slug: "/sub-dropdown5" },
        ],
      },
      { label: "Dropdown2", slug: "/dropdown2" },
      { label: "Dropdown3", slug: "/dropdown3" },
      { label: "Dropdown4", slug: "/dropdown4" },
    ],
  },
  {
    label: "Contact",
    slug: "/contact",
  },
];
