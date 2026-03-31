import { useState } from "react";
import { motion } from "framer-motion";
import { properties, type Property } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";

const PropertiesSection = () => {
  const [selected, setSelected] = useState<Property | null>(null);

  return (
    <>
      <section id="homes" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl mb-4">Curated Properties</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Each home is hand-selected for quality, location, and timeless appeal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {properties.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} onClick={() => setSelected(p)} />
            ))}
          </div>
        </div>
      </section>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default PropertiesSection;
