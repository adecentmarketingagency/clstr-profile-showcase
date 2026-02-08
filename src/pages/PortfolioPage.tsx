import { useProfile } from "@/contexts/ProfileContext";
import { useParams } from "react-router-dom";
import MinimalTemplate from "@/components/templates/MinimalTemplate";
import ElianaTemplate from "@/components/templates/ElianaTemplate";
import TypefolioTemplate from "@/components/templates/TypefolioTemplate";
import GeekyTemplate from "@/components/templates/GeekyTemplate";

export default function PortfolioPage() {
  const { profile } = useProfile();
  const { slug } = useParams();

  if (!profile.settings.isLive) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white/40">This portfolio is currently hidden.</p>
      </div>
    );
  }

  switch (profile.settings.template) {
    case "eliana":
      return <ElianaTemplate profile={profile} />;
    case "typefolio":
      return <TypefolioTemplate profile={profile} />;
    case "geeky":
      return <GeekyTemplate profile={profile} />;
    default:
      return <MinimalTemplate profile={profile} />;
  }
}
