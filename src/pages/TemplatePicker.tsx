import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "@/contexts/ProfileContext";
import { useNavigate } from "react-router-dom";
import { templates } from "@/data/templates";
import { TemplateId } from "@/types/profile";
import { Button } from "@/components/ui/button";
import { Check, Eye, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import MinimalTemplate from "@/components/templates/MinimalTemplate";
import ElianaTemplate from "@/components/templates/ElianaTemplate";
import TypefolioTemplate from "@/components/templates/TypefolioTemplate";
import GeekyTemplate from "@/components/templates/GeekyTemplate";

function TemplatePreview({ templateId, profile }: { templateId: TemplateId; profile: any }) {
  // Create a modified profile with the selected template for preview
  const previewProfile = {
    ...profile,
    settings: {
      ...profile.settings,
      template: templateId,
    },
  };

  switch (templateId) {
    case "eliana":
      return <ElianaTemplate profile={previewProfile} />;
    case "typefolio":
      return <TypefolioTemplate profile={previewProfile} />;
    case "geeky":
      return <GeekyTemplate profile={previewProfile} />;
    default:
      return <MinimalTemplate profile={previewProfile} />;
  }
}

export default function TemplatePicker() {
  const { profile, updateSettings } = useProfile();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<TemplateId>(profile.settings.template);
  const [previewingTemplate, setPreviewingTemplate] = useState<TemplateId | null>(null);

  const handleConfirm = () => {
    updateSettings({ template: selected });
    navigate(`/portfolio/${profile.settings.slug}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-4">
            <Link to="/editor">
              <Button variant="ghost" size="icon" className="text-white/50 hover:text-white hover:bg-white/10">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">Choose a Template</h1>
              <p className="text-white/50 text-sm mt-1">
                Preview templates before applying to your portfolio.
              </p>
            </div>
          </div>
          <Button
            onClick={handleConfirm}
            className="bg-white text-black hover:bg-white/90 gap-2 font-semibold w-full sm:w-auto"
          >
            <Check className="w-4 h-4" /> Apply Template
          </Button>
        </motion.div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {templates.map((t, i) => {
            const isSelected = selected === t.id;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelected(t.id)}
                className={`relative cursor-pointer rounded-2xl border-2 transition-all overflow-hidden group ${
                  isSelected
                    ? "border-white bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/30"
                }`}
              >
                {/* Preview thumbnail area */}
                <div className="h-40 sm:h-48 bg-gradient-to-br from-white/[0.04] to-white/[0.02] flex items-center justify-center relative overflow-hidden">
                  {t.thumbnail ? (
                    <img 
                      src={t.thumbnail} 
                      alt={`${t.name} template preview`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-white/10">{t.name[0]}</span>
                  )}
                  
                  {/* Hover overlay with preview button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewingTemplate(t.id);
                      }}
                      variant="ghost"
                      className="text-white border border-white/30 hover:bg-white/20 gap-2"
                    >
                      <Eye className="w-4 h-4" /> Preview with My Data
                    </Button>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{t.name}</h3>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                    )}
                  </div>
                  <p className="text-white/40 text-xs sm:text-sm mt-1">{t.description}</p>
                  {t.id === profile.settings.template && (
                    <span className="inline-block mt-3 text-xs px-2 py-0.5 rounded bg-white/10 text-white/50">
                      Current
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Preview Modal - Now renders the actual template component */}
      <AnimatePresence>
        {previewingTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setPreviewingTemplate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl h-[90vh] bg-white rounded-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="absolute top-4 right-4 z-20">
                <Button
                  onClick={() => setPreviewingTemplate(null)}
                  variant="ghost"
                  size="icon"
                  className="bg-black/50 text-white hover:bg-black/70 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Template name badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  {templates.find(t => t.id === previewingTemplate)?.name} Template
                </span>
              </div>

              {/* Apply button */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <Button
                  onClick={() => {
                    setSelected(previewingTemplate);
                    updateSettings({ template: previewingTemplate });
                    setPreviewingTemplate(null);
                  }}
                  className="bg-black text-white hover:bg-black/80 gap-2 shadow-lg"
                >
                  <Check className="w-4 h-4" /> Use This Template
                </Button>
              </div>

              {/* Scrollable template preview */}
              <div className="h-full overflow-y-auto">
                <TemplatePreview templateId={previewingTemplate} profile={profile} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
