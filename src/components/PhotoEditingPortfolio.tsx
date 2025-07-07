import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import beforeBrightness from "@/assets/before-brightness.jpg";
import afterBrightness from "@/assets/after-brightness.jpg";
import beforeColor from "@/assets/before-color.jpg";
import afterColor from "@/assets/after-color.jpg";

const PhotoEditingPortfolio = () => {
  const [activeTab, setActiveTab] = useState("Photo Editing");
  const services = [
    "Photo Editing",
    "Virtual Staging", 
    "Real Estate Video Editing",
    "Day To Dusk",
    "Item Removal",
    "Panorama Stitching",
    "Portrait Retouching",
    "Floor Plan"
  ];

  const portfolioData = {
    "Photo Editing": [
      {
        title: "Brightness & Contrast Adjustment",
        beforeImage: beforeBrightness,
        afterImage: afterBrightness
      },
      {
        title: "Color Correction", 
        beforeImage: beforeColor,
        afterImage: afterColor
      },
      {
        title: "Lens Distortion Correction",
        beforeImage: beforeBrightness,
        afterImage: afterBrightness
      },
      {
        title: "Lens Spot Removal",
        beforeImage: beforeColor,
        afterImage: afterColor
      }
    ],
    "Virtual Staging": [
      {
        title: "Furniture Addition",
        beforeImage: beforeBrightness,
        afterImage: afterBrightness
      },
      {
        title: "Room Styling", 
        beforeImage: beforeColor,
        afterImage: afterColor
      }
    ],
    "Day To Dusk": [
      {
        title: "Twilight Conversion",
        beforeImage: beforeBrightness,
        afterImage: afterBrightness
      },
      {
        title: "Evening Ambiance", 
        beforeImage: beforeColor,
        afterImage: afterColor
      }
    ],
    "Item Removal": [
      {
        title: "Object Removal",
        beforeImage: beforeBrightness,
        afterImage: afterBrightness
      },
      {
        title: "Clutter Cleanup", 
        beforeImage: beforeColor,
        afterImage: afterColor
      }
    ]
  };

  const currentPortfolio = portfolioData[activeTab as keyof typeof portfolioData] || portfolioData["Photo Editing"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          <span className="text-brand-orange">NewDay</span> is a real estate photo editing team based in Vietnam.
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
          We offer photographers a comprehensive suite of services, including Image Enhancement, day-to-dusk conversions, 
          Twilight edits, Virtual Staging, and Floor Plans. Our goal is to help photographers save time and grow their businesses 
          by providing High-Quality Photo and Video Editing Services and professional services.
        </p>
        <p className="text-muted-foreground mb-2">
          You have an order and don't have time to edit everything by yourself, we are always ready to help.
        </p>
        <Button variant="cta" size="lg" className="mb-8">
          Place Order
        </Button>
        <p className="text-sm text-muted-foreground">
          Our samples are available in the Outstanding Service. We welcome your feedback and encourage you to contact us today for a free trial.
        </p>
      </div>

      {/* Services Navigation */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {services.map((service) => (
            <Button
              key={service}
              variant={activeTab === service ? "nav" : "outline"}
              className={activeTab === service ? "" : "hover:bg-brand-orange hover:text-white hover:border-brand-orange"}
              onClick={() => setActiveTab(service)}
            >
              {service}
            </Button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-12">
          {currentPortfolio.map((item, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-center text-foreground">
                {item.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={item.beforeImage} 
                      alt="Before" 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
                </Card>
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={item.afterImage} 
                      alt="After" 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoEditingPortfolio;