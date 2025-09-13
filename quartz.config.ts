import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mikey's Notes",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "mpawlos.com",
    ignorePatterns: ["private", "templates", ".obsidian", "*_*", "**/Private"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Vast Shadow",
        body: "Lexend Deca",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#1b3128",
          lightgray: "#6B8A7A",
          gray: "#6B8A7A",
          darkgray: "#85AD98",
          dark: "#8BC1A5",
          secondary: "#79D2A4",
          tertiary: "#F0F2BD",
          highlight: "#234033",
          textHighlight: "#234033",
        },
        darkMode: {
          light: "#1b3128",
          lightgray: "#6B8A7A",
          gray: "#6B8A7A",
          darkgray: "#85AD98",
          dark: "#8BC1A5",
          secondary: "#79D2A4",
          tertiary: "#F0F2BD",
          highlight: "#234033",
          textHighlight: "#234033",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "monokai",
          dark: "monokai",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
