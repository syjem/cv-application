"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash } from "lucide-react";
import type { Education } from "@/types/resume";

interface EducationFormProps {
  education: Education[];
  onUpdate: (education: Education[]) => void;
}

export function EducationForm({ education, onUpdate }: EducationFormProps) {
  const [newEducation, setNewEducation] = useState<Education>({
    id: "",
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleAddEducation = () => {
    const id = crypto.randomUUID();
    const updatedEducation = [...education, { ...newEducation, id }];
    onUpdate(updatedEducation);
    setNewEducation({
      id: "",
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleRemoveEducation = (id: string) => {
    const updatedEducation = education.filter((edu) => edu.id !== id);
    onUpdate(updatedEducation);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewEducation({
      ...newEducation,
      [name]: value,
    });
  };

  return (
    <div className="space-y-6">
      {education.length > 0 && (
        <h2 className="text-xl font-semibold mb-4">Education</h2>
      )}

      {education.length > 0 && (
        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{edu.institution}</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveEducation(edu.id)}
                    className="h-8 w-8 text-destructive"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium">
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </p>
                <p className="text-sm text-muted-foreground">
                  {edu.startDate} - {edu.endDate || "Present"}
                </p>
                {edu.description && (
                  <p className="mt-2 text-sm">{edu.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <h3 className="font-medium">Add Education</h3>

        <div className="space-y-2">
          <Label htmlFor="institution">Institution</Label>
          <Input
            id="institution"
            name="institution"
            value={newEducation.institution}
            onChange={handleChange}
            placeholder="University of the Philippines"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              name="degree"
              value={newEducation.degree}
              onChange={handleChange}
              placeholder="Bachelor of Science"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fieldOfStudy">Field of Study</Label>
            <Input
              id="fieldOfStudy"
              name="fieldOfStudy"
              value={newEducation.fieldOfStudy}
              onChange={handleChange}
              placeholder="Computer Science"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              value={newEducation.startDate}
              onChange={handleChange}
              placeholder="Sep 2018"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              name="endDate"
              value={newEducation.endDate}
              onChange={handleChange}
              placeholder="May 2022 (or leave blank for present)"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={newEducation.description}
            onChange={handleChange}
            placeholder="Relevant coursework, achievements, etc."
            rows={3}
          />
        </div>

        <Button
          onClick={handleAddEducation}
          className="w-full"
          disabled={
            !newEducation.institution ||
            !newEducation.degree ||
            !newEducation.startDate
          }
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </div>
    </div>
  );
}
