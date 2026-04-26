import { PageTitle } from "@/components/ui/page-title";
import { LeetcodesContent } from "@/components/leetcodes/leetcode-content";
import { Metadata } from "next";

const titleOfPage: string = "LeetCode Problems";
const titleDesc: string = "My collection of solved algorithmic problems";

export const metadata: Metadata = {
  title: titleOfPage,
  description: titleDesc, // This overrides the layout description for this page
};

export default function LeetcodesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle title={titleOfPage} desc={titleDesc} />

      <LeetcodesContent />
    </div>
  );
}
