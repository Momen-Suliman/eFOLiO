"use client";
import { PageTitle } from "@/components/ui/page-title";

const titleOfPage: string = "My Weather-App";
const titleDesc: string =
    "Fetch current weather conditions";

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <PageTitle title={titleOfPage} desc={titleDesc} />

            <p>Weather-App Components go in this page!</p>

            {/* 
    <WeatherAppSearch />
    <WeatherAppCard />
    <WeatherAppWeek /> 
    */}
        </div>
    );
}
