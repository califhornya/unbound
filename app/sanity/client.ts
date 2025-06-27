import { createClient } from "next-sanity";
import { projectId } from "@/sanity/env";
import { dataset } from "@/sanity/env";
import { apiVersion } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});