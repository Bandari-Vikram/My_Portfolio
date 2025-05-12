
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Gallery, Camera, Aperture } from "lucide-react";

const PhotoGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All", icon: <Gallery className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Camera className="w-5 h-5" /> },
    { id: "events", label: "Events", icon: <Aperture className="w-5 h-5" /> },
  ];

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Working on laptop",
      category: "projects",
      title: "AI Development"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Code on laptop",
      category: "projects",
      title: "Java Projects"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Circuit board",
      category: "projects",
      title: "Hardware Integration"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Java programming",
      category: "projects",
      title: "DSA Implementation"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Using laptop",
      category: "events",
      title: "Hackathon"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Laptop on table",
      category: "events",
      title: "Team Collaboration"
    },
  ];

  const filteredPhotos = activeCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient mb-4">Photo Gallery</h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-purple to-neon-teal rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A visual journey through my projects, events, and technical adventures
          </p>
        </div>

        {/* Category filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-dark-lighter/50 backdrop-blur-sm rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center px-4 py-2 rounded-full transition-all",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-neon-purple to-neon-teal text-white shadow-lg"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                <span className="mr-2">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] glass-card border border-white/10 hover:neon-shadow-md transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <img
                src={photo.src}
                alt={photo.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <h3 className="text-xl font-bold text-white">{photo.title}</h3>
                <p className="text-sm text-white/90">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
