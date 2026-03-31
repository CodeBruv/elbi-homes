import { motion } from "framer-motion";
import type { Property } from "@/data/properties";

const tagColors: Record<Property["tag"], string> = {
  Available: "bg-emerald-100 text-emerald-800",
  Premium: "bg-amber-100 text-amber-800",
  Affordable: "bg-sky-100 text-sky-800",
};

type Props = {
  property: Property;
  index: number;
  onClick: () => void;
};

const PropertyCard = ({ property, index, onClick }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-card hover-lift"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-card-foreground">{property.title}</h3>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[property.tag]}`}>
            {property.tag}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{property.shortDescription}</p>
      </div>
    </motion.article>
  );
};

export default PropertyCard;
