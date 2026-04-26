import { ProjectCard } from "@/components/projects/project-card";
import { FeaturedProjects } from "@/components/projects/featured-projects";
import { PageTitle } from "@/components/ui/page-title";
import { Metadata } from "next";

const titleOfPage: string = "Projects Portfolio";
const titleDesc: string =
  "Turning academic concepts into real-world applications";

export const metadata: Metadata = {
  title: titleOfPage,
  description: titleDesc, // This overrides the layout description for this page
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle title={titleOfPage} desc={titleDesc} />

      <FeaturedProjects />
      <ProjectCard />
    </div>
  );
}
