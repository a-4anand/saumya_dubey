import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Qorivara Life Sciences",
    short_name: "Qorivara",
    description:
      "Practical QA, GMP, documentation and quality-system support for regulated manufacturers.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F3E9",
    theme_color: "#123C32",
    icons: [
      {
        src: "/brand/qorivara/04-favicon/qorivara-favicon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/brand/qorivara/04-favicon/qorivara-favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/brand/qorivara/04-favicon/qorivara-favicon-1024x1024.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
