import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact <span className="text-brand-orange">NewDay</span> Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to enhance your real estate photos? Get in touch with us for a free trial and experience our professional editing services.
          </p>
        </div>

        {/* Contact Form */}
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Place Your Order</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input type="email" placeholder="your@email.com" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input placeholder="(optional)" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Type *
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                  <option>Photo Editing</option>
                  <option>Virtual Staging</option>
                  <option>Real Estate Video Editing</option>
                  <option>Day To Dusk</option>
                  <option>Item Removal</option>
                  <option>Panorama Stitching</option>
                  <option>Portrait Retouching</option>
                  <option>Floor Plan</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Number of Photos
              </label>
              <Input type="number" placeholder="How many photos need editing?" />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Details *
              </label>
              <Textarea 
                placeholder="Please describe your project requirements, timeline, and any specific instructions..."
                rows={5}
              />
            </div>

            <div className="flex gap-4">
              <Button variant="cta" className="flex-1">
                Submit Order Request
              </Button>
              <Button variant="outline" className="px-8">
                Request Free Trial
              </Button>
            </div>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center">
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">contact@newday.com</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
            <p className="text-muted-foreground">Within 24 hours</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">Vietnam</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;