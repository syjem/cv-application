"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const themeColors = [
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Purple", value: "purple" },
  { name: "Red", value: "red" },
  { name: "Gray", value: "gray" },
];

interface ThemeSelectorProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export function ThemeSelector({
  selectedColor,
  onColorChange,
}: ThemeSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Theme Color</h2>

      <RadioGroup
        value={selectedColor}
        onValueChange={onColorChange}
        className="flex flex-wrap gap-3"
      >
        {themeColors.map((color) => (
          <div key={color.value} className="flex items-center space-x-2">
            <RadioGroupItem
              value={color.value}
              id={`color-${color.value}`}
              className="sr-only"
            />
            <Label
              htmlFor={`color-${color.value}`}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full cursor-pointer ring-2 ring-offset-2",
                selectedColor === color.value
                  ? "ring-black"
                  : "ring-transparent",
                color.value === "blue" && "bg-blue-600",
                color.value === "green" && "bg-emerald-600",
                color.value === "purple" && "bg-purple-600",
                color.value === "red" && "bg-rose-600",
                color.value === "gray" && "bg-slate-600"
              )}
            >
              <span className="sr-only">{color.name}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
