import { MetadataRoute } from "next";

const BASE_URL = "https://skol-robotics.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/blog",
    "/portfolio",
    "/contact",
    "/resources",
    "/sponsors",
    "/socials",
    "/history",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
