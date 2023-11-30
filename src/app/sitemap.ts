import { MetadataRoute } from "next"

const DOMAIN = "https://blogs.kartikdhawan.in"

const topPriorityBlogPaths = [
  {
    parentPath: "travel",
    path: "jibhi-jalori",
  },
]

const travelBlogPaths = [
  {
    parentPath: "travel",
    path: "shoja",
    priority: 0.9,
  },
  {
    parentPath: "travel",
    path: "ghosts-of-shoja",
  },
  {
    parentPath: "travel",
    path: "jodhpur",
  },
  {
    parentPath: "travel",
    path: "obscurity-of-kalga",
  },
  {
    parentPath: "travel",
    path: "labyrinth-of-jodhpur",
  },
]

const sitemapLinksForBlogs: MetadataRoute.Sitemap = [...travelBlogPaths].map(
  (item) => {
    return {
      url: `${DOMAIN}/${item.parentPath}/${item.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: item?.priority ?? 0.9,
    }
  },
)

const topPrioritySitemapLinks: MetadataRoute.Sitemap = [
  ...topPriorityBlogPaths,
].map((item) => {
  return {
    url: `${DOMAIN}/${item.parentPath}/${item.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }
})

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/travel`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sitemapLinksForBlogs,
    ...topPrioritySitemapLinks,
  ]
}
