"use client";
import { BentoFeatures } from "@/components/projects/efolio/feature-bentobox";
import { ProductHero } from "@/components/projects/efolio/product-hero";
import { QuickStart } from "@/components/projects/efolio/quick-start";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <ProductHero />
      <BentoFeatures />
      <QuickStart />
    </div>
  );
}
