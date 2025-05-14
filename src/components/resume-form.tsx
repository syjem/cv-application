"use client";

import { useState } from "react";
import { PersonalDetailsForm } from "./personal-details-form";
import { EducationForm } from "./education-form";
import { ExperienceForm } from "./experience-form";
import { SkillsForm } from "./skills-form";
import { ThemeSelector } from "./theme-selector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ResumeData } from "@/types/resume";

interface ResumeFormProps {
  resumeData: ResumeData;
  onUpdate: (data: ResumeData) => void;
}

export function ResumeForm({ resumeData, onUpdate }: ResumeFormProps) {
  const [activeTab, setActiveTab] = useState("personal");

  const updatePersonalDetails = (
    personalDetails: ResumeData["personalDetails"]
  ) => {
    onUpdate({
      ...resumeData,
      personalDetails,
    });
  };

  const updateEducation = (education: ResumeData["education"]) => {
    onUpdate({
      ...resumeData,
      education,
    });
  };

  const updateExperience = (experience: ResumeData["experience"]) => {
    onUpdate({
      ...resumeData,
      experience,
    });
  };

  const updateSkills = (skills: ResumeData["skills"]) => {
    onUpdate({
      ...resumeData,
      skills,
    });
  };

  const updateThemeColor = (themeColor: string) => {
    onUpdate({
      ...resumeData,
      themeColor,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <PersonalDetailsForm
            personalDetails={resumeData.personalDetails}
            onUpdate={updatePersonalDetails}
          />
        </TabsContent>

        <TabsContent value="education">
          <EducationForm
            education={resumeData.education}
            onUpdate={updateEducation}
          />
        </TabsContent>

        <TabsContent value="experience">
          <ExperienceForm
            experience={resumeData.experience}
            onUpdate={updateExperience}
          />
        </TabsContent>

        <TabsContent value="skills">
          <SkillsForm skills={resumeData.skills} onUpdate={updateSkills} />
        </TabsContent>

        <TabsContent value="theme">
          <ThemeSelector
            selectedColor={resumeData.themeColor}
            onColorChange={updateThemeColor}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
