import { MetadataRoute } from "next";

// NOTE: replace this with your actual deployed domain once you know it
// (e.g. https://skol-robotics.vercel.app)
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
