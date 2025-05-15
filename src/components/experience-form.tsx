"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash } from "lucide-react";
import type { Experience } from "@/types/resume";

interface ExperienceFormProps {
  experience: Experience[];
  onUpdate: (experience: Experience[]) => void;
}

export function ExperienceForm({ experience, onUpdate }: ExperienceFormProps) {
  const [newExperience, setNewExperience] = useState<Experience>({
    id: "",
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleAddExperience = () => {
    const id = crypto.randomUUID();
    const updatedExperience = [...experience, { ...newExperience, id }];
    onUpdate(updatedExperience);
    setNewExperience({
      id: "",
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleRemoveExperience = (id: string) => {
    const updatedExperience = experience.filter((exp) => exp.id !== id);
    onUpdate(updatedExperience);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewExperience({
      ...newExperience,
      [name]: value,
    });
  };

  return (
    <div className="space-y-6">
      {experience.length > 0 && (
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
      )}

      {experience.length > 0 && (
        <div className="space-y-4">
          {experience.map((exp) => (
            <Card key={exp.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">
                    {exp.position} at {exp.company}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveExperience(exp.id)}
                    className="h-8 w-8 text-destructive"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {exp.startDate} - {exp.endDate || "Present"} | {exp.location}
                </p>
                {exp.description && (
                  <p className="mt-2 text-sm">{exp.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-4">
        <h3 className="font-medium">Add Experience</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={newExperience.company}
              onChange={handleChange}
              placeholder="Meta AI"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              name="position"
              value={newExperience.position}
              onChange={handleChange}
              placeholder="Software Engineer"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={newExperience.location}
            onChange={handleChange}
            placeholder="San Francisco, CA (or Remote)"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              value={newExperience.startDate}
              onChange={handleChange}
              placeholder="Jan 2020"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              name="endDate"
              value={newExperience.endDate}
              onChange={handleChange}
              placeholder="Dec 2022 (or leave blank for present)"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={newExperience.description}
            onChange={handleChange}
            placeholder="Describe your responsibilities and achievements"
            rows={4}
          />
        </div>

        <Button
          onClick={handleAddExperience}
          className="w-full"
          disabled={
            !newExperience.company ||
            !newExperience.position ||
            !newExperience.startDate
          }
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>
    </div>
  );
}
