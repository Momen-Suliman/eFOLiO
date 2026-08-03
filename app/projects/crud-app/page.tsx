"use client";
import { PageTitle } from "@/components/ui/page-title";

const titleOfPage: string = "Crud-App";
const titleDesc: string =
  "A Ruby on Rails and React (Vite) student management system";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <PageTitle title={titleOfPage} desc={titleDesc} />

      <p>Crud-app Components go in this page!</p>

      {/* 
        <CrudAppSearch />
        <CrudAppList />
        <CrudAppStudentProfile /> 
        */}
    </div>
  );
}
