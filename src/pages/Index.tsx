import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, RefreshCw, Eye, Shield } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "One Link, Full Portfolio",
    desc: "Get a clean shareable page at clstr.in/your-name",
  },
  {
    icon: RefreshCw,
    title: "Auto-Updates",
    desc: "Edit your profile, your portfolio updates instantly",
  },
  {
    icon: Eye,
    title: "You Control Visibility",
    desc: "Choose which sections are shown or hidden",
  },
  {
    icon: Shield,
    title: "No Design Needed",
    desc: "Clstr generates your portfolio from your profile data",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 md:p-10 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Clstr
          </h1>
          <p className="text-white/50 text-base md:text-lg mb-8 leading-relaxed">
            Your profile becomes your portfolio.<br />
            One link. Always up to date.
          </p>

          <div className="space-y-4 text-left mb-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="p-2 bg-white/[0.06] rounded-lg shrink-0 mt-0.5">
                  <f.icon className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{f.title}</p>
                  <p className="text-white/40 text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            <Link to="/editor" className="block">
              <Button className="w-full bg-white/10 border border-white/15 text-white hover:bg-white/20 gap-2 h-11">
                Build Your Portfolio <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/portfolio/arjun-mehta" className="block">
              <Button
                variant="ghost"
                className="w-full text-white/40 hover:text-white/60 hover:bg-white/[0.04] h-11"
              >
                View Example Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-white/20 text-xs mt-6"
        >
          No sign-up required to preview.
        </motion.p>
      </div>
    </div>
  );
}
