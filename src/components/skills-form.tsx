"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Plus, Code } from "lucide-react";
import type { Skill } from "@/types/resume";

interface SkillsFormProps {
  skills: Skill[];
  onUpdate: (skills: Skill[]) => void;
}

export function SkillsForm({ skills, onUpdate }: SkillsFormProps) {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;

    const id = crypto.randomUUID();
    const updatedSkills = [...skills, { id, name: newSkill.trim() }];
    onUpdate(updatedSkills);
    setNewSkill("");
  };

  const handleRemoveSkill = (id: string) => {
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    onUpdate(updatedSkills);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
          >
            <Code className="h-3.5 w-3.5" />
            <span>{skill.name}</span>
            <Button
              size="icon"
              variant="ghost"
              type="button"
              onClick={() => handleRemoveSkill(skill.id)}
              className="text-muted-foreground hover:text-foreground size-8"
            >
              <X className="h-3.5 w-3.5" />
              <span className="sr-only">Remove {skill.name}</span>
            </Button>
          </div>
        ))}
        {skills.length === 0 && (
          <p className="text-sm text-muted-foreground">Add your skills below</p>
        )}
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <Label htmlFor="newSkill" className="sr-only">
            Add Skill
          </Label>
          <Input
            id="newSkill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
          />
        </div>
        <Button
          type="button"
          onClick={handleAddSkill}
          disabled={!newSkill.trim()}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </div>
    </div>
  );
}
