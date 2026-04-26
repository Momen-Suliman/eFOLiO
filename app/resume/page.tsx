import { ProfileHeader } from "@/components/resume/profile-header";
import { EducationSection } from "@/components/resume/education-section";
import { SkillsBar } from "@/components/resume/skills-bar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PageTitle } from "@/components/ui/page-title";
import { Metadata } from "next";

const titleOfPage: string = "Personal Profile";
const titleDesc: string = "A detailed overview of my academic journey";

export const metadata: Metadata = {
  title: titleOfPage,
  description: titleDesc, // This overrides the layout description for this page
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle title={titleOfPage} desc={titleDesc} />

      <Card className="shadow-lg flex flex-col p-5 bg-linear-to-b from-transparent/50 via-transparent/50 to-card/50 overflow-hidden transition-all">
        <ProfileHeader />
        <CardContent className="p-0 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <EducationSection />
            <SkillsBar />
          </div>
        </CardContent>

        <CardFooter className="p-0 border-0 mt-10 cursor-default">
          <p className="text-xs text-muted-foreground text-center w-full">
            For more details, visit our other pages{" "}
            <a href="/degree" className="text-primary hover:underline">
              Degree
            </a>
            ,{" "}
            <a href="/projects" className="text-primary hover:underline">
              Projects
            </a>{" "}
            and{" "}
            <a href="/leetcodes" className="text-primary hover:underline">
              LeetCodes.
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
