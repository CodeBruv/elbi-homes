import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Property } from "@/data/properties";

type Props = {
  property: Property | null;
  onClose: () => void;
};

const tagColors: Record<Property["tag"], string> = {
  Available: "bg-emerald-100 text-emerald-800",
  Premium: "bg-amber-100 text-amber-800",
  Affordable: "bg-sky-100 text-sky-800",
};

const PropertyModal = ({ property, onClose }: Props) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (property) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [property, handleKeyDown]);

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 bg-background rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            style={{ boxShadow: "var(--shadow-modal)" }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[property.tag]}`}>
                  {property.tag}
                </span>
                <span className="text-sm font-semibold text-primary">{property.price}</span>
              </div>

              <h2 className="text-2xl md:text-3xl mb-3">{property.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{property.fullDescription}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {property.features.map((f) => (
                  <span key={f} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">
                    {f}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="inline-block w-full text-center bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Book Inspection
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PropertyModal;
