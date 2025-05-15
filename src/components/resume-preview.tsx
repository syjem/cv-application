import type { ResumeData } from "@/types/resume";
import { User, Briefcase, GraduationCap, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumePreviewProps {
  resumeData: ResumeData;
}

export function ResumePreview({ resumeData }: ResumePreviewProps) {
  const { personalDetails, education, experience, skills, themeColor } =
    resumeData;

  // Define theme color classes
  const getThemeClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "text-blue-600 border-blue-600";
      case "green":
        return "text-emerald-600 border-emerald-600";
      case "purple":
        return "text-purple-600 border-purple-600";
      case "red":
        return "text-rose-600 border-rose-600";
      case "gray":
        return "text-slate-600 border-slate-600";
      default:
        return "text-blue-600 border-blue-600";
    }
  };

  const themeClasses = getThemeClasses(themeColor || "blue");
  const iconClasses = `h-5 w-5 ${themeClasses}`;

  return (
    <div className="font-serif space-y-6">
      {/* Header */}
      <div className={cn("text-center pb-4")}>
        <h1 className={cn("text-2xl font-bold", themeClasses)}>
          {personalDetails.name}
        </h1>
        {personalDetails.title && (
          <p className="text-lg">{personalDetails.title}</p>
        )}

        <div className="flex flex-wrap justify-center gap-x-4 text-sm mt-2">
          {personalDetails.email && <span>{personalDetails.email}</span>}
          {personalDetails.phone && <span>{personalDetails.phone}</span>}
          {personalDetails.address && <span>{personalDetails.address}</span>}
        </div>
      </div>

      {/* Summary */}
      {personalDetails.summary && (
        <div>
          <h2
            className={cn(
              "text-lg font-bold mb-2 flex items-center gap-2",
              `border-b ${themeClasses}`
            )}
          >
            <User className={iconClasses} />
            Professional Summary
          </h2>
          <p>{personalDetails.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div>
          <h2
            className={cn(
              "text-lg font-bold mb-2 flex items-center gap-2",
              `border-b ${themeClasses}`
            )}
          >
            <Briefcase className={iconClasses} />
            Work Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.position}</h3>
                  <span className="text-sm">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="italic">{exp.company}</p>
                  <p className="text-sm">{exp.location}</p>
                </div>
                {exp.description && (
                  <p className="mt-1 text-sm">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div>
          <h2
            className={cn(
              "text-lg font-bold mb-2 flex items-center gap-2",
              `border-b ${themeClasses}`
            )}
          >
            <GraduationCap className={iconClasses} />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.institution}</h3>
                  <span className="text-sm">
                    {edu.startDate} - {edu.endDate || "Present"}
                  </span>
                </div>
                <p className="italic">
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </p>
                {edu.description && (
                  <p className="mt-1 text-sm">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div>
          <h2
            className={cn(
              "text-lg font-bold mb-2 flex items-center gap-2",
              `border-b ${themeClasses}`
            )}
          >
            <Code className={iconClasses} />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={cn(
                  "flex items-center gap-1 px-3 py-1 rounded-full text-sm",
                  themeColor === "blue" && "bg-blue-100 text-blue-800",
                  themeColor === "green" && "bg-emerald-100 text-emerald-800",
                  themeColor === "purple" && "bg-purple-100 text-purple-800",
                  themeColor === "red" && "bg-rose-100 text-rose-800",
                  themeColor === "gray" && "bg-slate-100 text-slate-800",
                  !themeColor && "bg-blue-100 text-blue-800"
                )}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!personalDetails.name &&
        !education.length &&
        !experience.length &&
        !skills.length && (
          <div className="text-center text-muted-foreground py-8 print:hidden">
            <p>Your resume preview will appear here.</p>
            <p>
              Start by adding your personal details, education, and work
              experience.
            </p>
          </div>
        )}
    </div>
  );
}
