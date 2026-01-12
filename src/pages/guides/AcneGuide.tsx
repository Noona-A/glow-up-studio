import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const AcneGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Acne Guide",
    "description": "A comprehensive guide to understanding, treating, and managing acne with evidence-based approaches.",
    "url": "https://resknclinic.co.uk/guides/acne",
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "ReSKN Clinic"
    }
  };

  return (
    <>
      <SEO
        title="Acne Guide | ReSKN Clinic"
        description="A comprehensive guide to understanding, treating, and managing acne. Learn about acne types, causes, and evidence-based treatment approaches."
        keywords="acne guide, acne treatment, acne skincare, acne routine, ReSKN Clinic"
        canonical="https://resknclinic.co.uk/guides/acne"
        structuredData={structuredData}
      />
      <div className="pt-16 pb-16">
        {/* Hero Section */}
        <div className="bg-section-gradient py-16 mb-12">
          <div className="container mx-auto px-4">
            <Link
              to="/guides"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              The Complete Acne Guide
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Everything you need to know about understanding, treating, and managing acne.
            </p>
          </div>
        </div>

        {/* Content Placeholder */}
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-center py-12">
              Guide content coming soon. We'll work on this together.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground mb-6">
              Ready to tackle your acne with professional guidance?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="btn-luxury text-primary-foreground">
                <Link to="/booking">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/guides">View All Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcneGuide;
