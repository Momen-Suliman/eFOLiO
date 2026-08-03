import { ResumeContent } from "@/components/resume/resume-content";
import { PageTitle } from "@/components/ui/page-title";
import { Metadata } from "next";

const titleOfPage: string = "Personal Profile";
const titleDesc: string = "A detailed overview of my academic journey";

export const metadata: Metadata = {
  title: titleOfPage,
  description: titleDesc,
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle title={titleOfPage} desc={titleDesc} />
      <ResumeContent />
    </div>
  );
}
