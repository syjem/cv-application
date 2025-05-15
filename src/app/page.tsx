"use client";

import { useState } from "react";
import { ResumeForm } from "@/components/resume-form";
import { ResumePreview } from "@/components/resume-preview";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import type { ResumeData } from "@/types/resume";

export default function ResumePage() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalDetails: {
      name: "",
      email: "",
      phone: "",
      address: "",
      title: "",
      summary: "",
    },
    education: [],
    experience: [],
    skills: [],
    themeColor: "blue",
  });

  const handleUpdateResume = (newData: ResumeData) => {
    setResumeData(newData);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 print:hidden">
          <ResumeForm resumeData={resumeData} onUpdate={handleUpdateResume} />
        </div>

        <div className="w-full lg:w-1/2 print:w-full">
          <div className="flex justify-between items-center mb-4 print:hidden">
            <h2 className="text-xl font-semibold">Preview</h2>
            <Button onClick={handlePrint} className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>
          <div className="rounded-lg p-8 bg-white">
            <ResumePreview resumeData={resumeData} />
          </div>
        </div>
      </div>
    </main>
  );
}
