import { Card } from "@/components/ui/card";

const RealEstateGallery = () => {
  // Sample gallery images - you can replace these with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      alt: "Modern living room interior"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      alt: "Contemporary living space"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      alt: "Exterior building view"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop",
      alt: "Glass building architecture"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      alt: "Modern workspace"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      alt: "Interior design"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      alt: "Property exterior"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      alt: "Real estate photography"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop",
      alt: "Architectural photography"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      alt: "Professional real estate photo"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      alt: "Property showcase"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      alt: "Real estate portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-brand-orange rounded-lg mb-4">
            <svg 
              className="w-8 h-8 text-brand-orange" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
        </div>

        <p className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
          At <span className="text-brand-orange font-semibold">NewDay</span>, we aim to help you showcase your property listings at their best with our professional Real Estate Photo Service. Our team of expert photographers, equipped with high-quality tools and creative techniques, is dedicated to capturing stunning images that will attract potential buyers and renters.
        </p>
        
        <p className="text-sm text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
          <span className="font-semibold">How do we do it?</span> We ensure you receive High-Quality Images - crisp, clear photos highlighting your property's best features. We capture beautiful compositions that enhance the appeal of your listings, whether Exterior or Interior, to showcase every detail of your property. Contact us to discuss and create plans uniquely Tailored to meet your specific needs and preferences.
        </p>
        
        <p className="text-sm text-muted-foreground">
          Enhance your real estate listings with NewDay.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            GALLERY
          </h2>
          <p className="text-brand-orange font-medium">
            Real Estate Photography
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstateGallery;