
import type { NextApiRequest, NextApiResponse } from "next";
import { ProjectProps } from "@/interfaces";
import projects from "../../data/projects";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectProps[]>,
) {
  res.status(200).json( projects );
}
 
