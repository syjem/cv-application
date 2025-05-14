"use client";

import type React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { PersonalDetails } from "@/types/resume";

interface PersonalDetailsFormProps {
  personalDetails: PersonalDetails;
  onUpdate: (details: PersonalDetails) => void;
}

export function PersonalDetailsForm({
  personalDetails,
  onUpdate,
}: PersonalDetailsFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onUpdate({
      ...personalDetails,
      [name]: value,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={personalDetails.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Professional Title</Label>
        <Input
          id="title"
          name="title"
          value={personalDetails.title}
          onChange={handleChange}
          placeholder="Software Engineer"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={personalDetails.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={personalDetails.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={personalDetails.address}
          onChange={handleChange}
          placeholder="123 Main St, City, State, ZIP"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          name="summary"
          value={personalDetails.summary}
          onChange={handleChange}
          placeholder="A brief summary of your professional background and skills"
          rows={4}
        />
      </div>
    </div>
  );
}
