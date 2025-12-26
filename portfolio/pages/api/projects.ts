
import type { NextApiRequest, NextApiResponse } from "next";
import { ProjectProps } from "@/interfaces";

const projects: ProjectProps[] = [
      {
    id: 1,
    title: "Light House Renewable Energy",
    category: "Brand Identity",
    mediaType: "image",
    media: [
      "/assets/projects/lighthouse-1.jpg",
      "/assets/projects/lighthouse-2.jpg",
      "/assets/projects/lighthouse-3.jpg",
    ],
    thumbnail: "/assets/Project1.jpeg",
    challenge:
      "To create a modern, high-contrast visual identity for a green energy provider that stands out in the renewable energy market.",
    solution:
      "I designed a minimalist logo mark that combines the concepts of 'Light' and 'Power.' I utilized a Solar Yellow, White, and Black color palette to represent solar energy, clarity, and professional strength.",
    services: ["Logo Design", "Brand Identity", "Visual Strategy"],
  },
  {
    id: 2,
    title: "Ebi’s Fragrance Social Media Flyer",
    category: "Product Promotional Design",
    mediaType: "image",
    media: "",
    thumbnail: "/assets/Project2.jpeg",
    challenge:
      "To create a visually captivating social media advertisement for a fragrance brand that communicates luxury, variety, and immediate call-to-action.",
    solution:
      "I utilized a monochromatic purple color scheme to evoke a sense of elegance and luxury, ensuring the brand's core message—'Elevate Your Presence'—was the central focus. Structured layout highlights contact info and a clear 'Order Now' call-to-action.",
    services: ["Promotional Flyer Design", "Visual Hierarchy", "Product Branding"],
  },
  {
    id: 3,
    title: "Chrysolite Liquid Soap Product Flyer",
    category: "Product Branding & Informational Design",
    mediaType: "image",
    thumbnail: "/assets/Project3.jpeg",
    media: "/assets/projects/chrysolite.jpg",
    challenge:
      "To design an informative and refreshing promotional flyer for a multipurpose cleaning product that highlights its natural ingredients and various use cases.",
    solution:
      "I used a vibrant green and white color palette to symbolize cleanliness and nature. The product uses were organized into a check-marked list for quick readability, supported by circular action imagery.",
    services: [
      "Layout Design",
      "Product Marketing",
      "Information Architecture",
    ],
  },
  {
    id: 4,
    title: "Light House Renewable Energy",
    category: "Brand Identity",
    mediaType: "image",
    thumbnail: "/assets/Project4.jpeg",
    media: "/assets/projects/lighthouse.jpg",
    challenge:
      "To create a modern, high-contrast visual identity for a green energy provider.",
    solution:
      "I designed a minimalist logo combining the ideas of light and power, using a Solar Yellow, White, and Black palette for clarity and strength.",
    services: ["Logo Design", "Brand Identity", "Visual Strategy"],
  },
  {
    id: 5,
    title: "Seasonal Brand Engagement Flyer (November Series)",
    category: "Social Media Engagement & Typography",
    mediaType: "image",
    thumbnail: "/assets/Project5.jpeg",
    media: "/assets/projects/november.jpg",
    challenge:
      "To design a striking new-month announcement that drives engagement.",
    solution:
      "A high-contrast red, white, and black palette paired with bold typography ensured immediate visibility in busy social feeds.",
    services: ["Content Creation", "Typography", "Social Media Strategy"],
  },
  {
    id: 6,
    title: `Wizzy’s Graphics "Happy New Week" Brand Spotlight`,
    category: "Personal Branding & Digital Illustration",
    mediaType: "image",
    thumbnail: "/assets/Project6.jpeg",
    media: "/assets/projects/newweek.jpg",
    challenge:
      "To create a personalized brand message that builds audience connection.",
    solution:
      "A vibrant orange and green palette combined with digital illustration effects showcased advanced photo retouching and layout skills.",
    services: ["Personal Branding", "Photo Retouching", "Social Media Design"],
  },
  {
    id: 7,
    title: `"Welcome to August" Seasonal Engagement Flyer`,
    category: "Visual Texture & Atmospheric Design",
    mediaType: "image",
    thumbnail: "/assets/Project7.jpeg",
    media: "/assets/projects/august.jpg",
    challenge:
      "To create a premium seasonal greeting with a divine, sophisticated feel.",
    solution:
      "Deep purple gradients, geometric overlays, and layered serif typography created depth and elegance.",
    services: ["Graphic Design", "Digital Illustration", "Textual Hierarchy"],
  },
  {
    id: 8,
    title: `FUPRE "Welcome Back to Campus" Campaign`,
    category: "Educational & Institutional Branding",
    mediaType: "image",
    thumbnail: "/assets/Project8.jpeg",
    media: "/assets/projects/fupre.jpg",
    challenge:
      "To design an engaging welcome flyer while integrating institutional branding.",
    solution:
      "A maroon and white palette and split-screen layout balanced portrait photography with motivational messaging.",
    services: [
      "Institutional Branding",
      "Portrait Integration",
      "Layout Design",
    ],
  },
  {
    id: 9,
    title: `December "Final Chapter" Campaign`,
    category: "Thematic Seasonal Branding",
    mediaType: "image",
    thumbnail: "/assets/Project9.jpeg",
    media: "/assets/projects/december.jpg",
    challenge:
      "To design a festive campaign that captures holiday energy.",
    solution:
      "Snowy backgrounds with red, green, and gold accents created a celebratory and professional seasonal look.",
    services: ["Seasonal Marketing", "Color Theory", "Social Media Content Design"],
  },
  {
    id: 10,
    title: `"Happy Sunday" Inspirational Series`,
    category: "Inspirational Social Media Content",
    mediaType: "image",
    thumbnail: "/assets/Project10.jpeg",
    media: "/assets/projects/sunday.jpg",
    challenge:
      "To create a peaceful and spiritually uplifting social media post.",
    solution:
      "Soft imagery and calm color choices framed the scripture as the focal point.",
    services: ["Digital Layout", "Typography", "Social Media Engagement"],
  },
  {
    id: 11,
    title: `"Happy Sunday" Animated Scriptural Series`,
    category: "Spiritual Motion & Ambient Design",
    mediaType: "video",
    thumbnail: "/assets/projects/sunday-animated-thumb.jpg",
    media: "/assets/projects/sunday-animated.mp4",
    challenge:
      "To transform a peaceful scriptural message into a living experience.",
    solution:
      "Subtle light rays and floating text animations added depth without distraction.",
    services: ["2D Animation", "Ambient Motion Design", "Social Media Engagement"],
  },
  {
    id: 12,
    title: `December "Final Chapter" Animated Campaign`,
    category: "Animated Seasonal Motion Graphics",
    mediaType: "video",
    thumbnail: "/assets/projects/december-animated-thumb.jpg",
    media: "/assets/projects/december-animated.mp4",
    challenge:
      "To create an immersive animated holiday campaign.",
    solution:
      "Falling snow, animated typography, and gentle motion brought the festive story to life.",
    services: ["Motion Graphics", "Video Editing", "Festive Brand Storytelling"],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectProps[]>,
) {
  res.status(200).json( projects );
}
