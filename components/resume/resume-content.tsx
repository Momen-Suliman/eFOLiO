"use client";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ProfileHeader } from "./profile-header";
import { EducationSection } from "./education-section";
import { SkillsBar } from "./skills-bar";

export const ResumeContent = () => {
  return (
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
          The Official Transcript is provided per request. For more details,
          visit my other pages,{" "}
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
  );
};
