"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { courses } from "@/data/courses";

export default function DegreePage() {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "A":
        return "bg-lime-500/10 text-lime-600 dark:text-lime-400 border-lime-500/20";
      case "A-":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      
      case "B+":
        return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20";
      case "B":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "B-":
        return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20";
      
      case "C":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const truncateDescription = (description: string, maxLength: number = 250) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + "...";
  };

  return (
  <div className="container mx-auto px-6 py-12">
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeIn" }}
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Courses Taken</h1>
        <p className="text-muted-foreground">A comprehensive overview of my academic coursework</p>
      </div>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeIn" }}
    >
      {courses.map((course) => (
        <Card key={course.id} className="shadow-lg flex flex-col overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
          <div className="relative h-48 w-full bg-muted">
            <Image
              src={course.image}
              alt={course.name}
              fill
              className="object-cover"
            />
          </div>

          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <CardTitle className="text-lg">{course.code}</CardTitle>
                <CardDescription className="text-primary">{course.name}</CardDescription>
              </div>
              <Badge className={getGradeColor(course.grade)} variant="outline">
                {course.grade}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground">
              {truncateDescription(course.description, 250)}
            </p>
          </CardContent>

          <CardFooter className="flex items-center justify-between border-t pt-4">
            <Badge variant="secondary" className="text-xs">
              {course.category}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {course.semester}
            </span>
          </CardFooter>
        </Card>
      ))}
    </motion.div>
  </div>
);
}
