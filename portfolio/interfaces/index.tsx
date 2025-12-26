

export type MediaType = "image" | "video";

export interface ProjectProps {
  id: number;
  title: string;
  category: string;
  mediaType: MediaType;
  thumbnail: string;
 media: string | string[];
  challenge: string;
  solution: string;
  services: string[];
}

