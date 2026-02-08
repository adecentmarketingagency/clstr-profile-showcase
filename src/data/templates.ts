import { TemplateInfo } from "@/types/profile";
import templateMinimal from "@/assets/template-minimal.jpg";
import templateEliana from "@/assets/template-eliana.jpg";
import templateTypefolio from "@/assets/template-typefolio.jpg";
import templateGeeky from "@/assets/template-geeky.jpg";

export const templates: TemplateInfo[] = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean, dark theme with a focus on content. The default Clstr look.",
    previewUrl: "",
    thumbnail: templateMinimal,
  },
  {
    id: "eliana",
    name: "Eliana",
    description: "Warm, personal portfolio with gradient accents and a friendly hero section.",
    previewUrl: "",
    thumbnail: templateEliana,
  },
  {
    id: "typefolio",
    name: "Typefolio",
    description: "Bold typography, scenic banner and a professional card-based layout.",
    previewUrl: "",
    thumbnail: templateTypefolio,
  },
  {
    id: "geeky",
    name: "Geeky",
    description: "Developer-focused blog style with a playful, tech-forward aesthetic.",
    previewUrl: "",
    thumbnail: templateGeeky,
  },
];
