import { Metadata } from "next";
import { CourseCard } from "@/components/degree/course-card";
import { PageTitle } from "@/components/ui/page-title";

const titleOfPage: string = "Courses Taken";
const titleDesc: string = "A comprehensive overview of my academic coursework";

export const metadata: Metadata = {
  title: titleOfPage,
  description: titleDesc, // This overrides the layout description for this page
};

export default function DegreePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle title={titleOfPage} desc={titleDesc} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CourseCard />
      </div>
    </div>
  );
}
