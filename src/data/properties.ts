import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export type Property = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tag: "Available" | "Premium" | "Affordable";
  price: string;
  features: string[];
};

export const properties: Property[] = [
  {
    id: "1",
    title: "Skyline Penthouse",
    shortDescription: "Luxury living with panoramic city views and floor-to-ceiling windows.",
    fullDescription: "Experience the pinnacle of urban luxury in this stunning penthouse suite. Floor-to-ceiling windows frame breathtaking panoramic views of the city skyline. The open-concept living space features premium hardwood flooring, a chef's kitchen with top-tier appliances, and a private terrace perfect for entertaining.",
    image: property1,
    tag: "Premium",
    price: "£100,000",
    features: ["4 Bedrooms", "3 Bathrooms", "Private Terrace", "Smart Home", "24/7 Security"],
  },
  {
    id: "2",
    title: "Oakwood Family Estate",
    shortDescription: "Spacious brick-front home with a manicured lawn and modern interiors.",
    fullDescription: "This beautifully crafted family estate sits on a generous lot with a lush, manicured lawn. The warm brick exterior leads into a thoughtfully designed interior with open living spaces, a gourmet kitchen, and cozy bedrooms. Perfect for families seeking comfort and elegance.",
    image: property2,
    tag: "Available",
    price: "£52,000",
    features: ["5 Bedrooms", "4 Bathrooms", "2-Car Garage", "Garden", "Fireplace"],
  },
  {
    id: "3",
    title: "Horizon Rooftop Villa",
    shortDescription: "Exclusive rooftop villa with an infinity pool and sunset views.",
    fullDescription: "Perched atop the city, this exclusive rooftop villa offers an unparalleled lifestyle. The infinity pool stretches toward the horizon, framing golden sunsets every evening. Inside, the space balances modern minimalism with warm hot textures, creating an atmosphere of refined tranquility.",
    image: property3,
    tag: "Premium",
    price: "£137,000",
    features: ["3 Bedrooms", "Infinity Pool", "Rooftop Lounge", "Concierge", "Gym Access"],
  },
  {
    id: "4",
    title: "The Ember Townhouse",
    shortDescription: "Contemporary townhouse with warm interiors and a welcoming atmosphere.",
    fullDescription: "The Ember Townhouse blends contemporary architecture with inviting warmth. Large windows flood the interior with natural light during the day, while carefully placed lighting creates a cozy ambiance at night. The multi-level layout offers privacy and flexibility for modern living.",
    image: property4,
    tag: "Affordable",
    price: "£34,000",
    features: ["3 Bedrooms", "2 Bathrooms", "Balcony", "Parking", "Landscaped Entry"],
  },
  {
    id: "5",
    title: "Villa Serena",
    shortDescription: "Mediterranean-style villa with a private pool and lush gardens.",
    fullDescription: "Villa Serena is a Mediterranean masterpiece set among lush tropical gardens. The terracotta-roofed residence features expansive living areas that flow seamlessly to the outdoor pool and entertainment spaces. Every detail reflects a commitment to timeless elegance and relaxed luxury.",
    image: property5,
    tag: "Premium",
    price: "£175,000",
    features: ["6 Bedrooms", "Swimming Pool", "Staff Quarters", "Tennis Court", "Wine Cellar"],
  },
  {
    id: "6",
    title: "The Foundry Loft",
    shortDescription: "Industrial-chic loft with exposed brick, high ceilings, and character.",
    fullDescription: "This converted warehouse loft celebrates its industrial heritage with soaring ceilings, exposed brick walls, and original architectural details. The open floor plan is flooded with natural light from oversized arched windows, creating a dramatic living space that's equal parts gallery and home.",
    image: property6,
    tag: "Available",
    price: "£42,000",
    features: ["2 Bedrooms", "High Ceilings", "Open Plan", "Original Details", "Rooftop Access"],
  },
];
