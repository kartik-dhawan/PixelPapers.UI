import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow:
        process.env.NEXT_PUBLIC_ENVIRONMENT === "prod"
          ? ["/api/", "/not-found.tsx"]
          : "/",
    },
    sitemap: "https://kartikdhawan.in/sitemap.xml",
  }
}
