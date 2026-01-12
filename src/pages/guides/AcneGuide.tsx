import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Clock, Sparkles, ShieldCheck, Heart, AlertCircle, Pill, Droplets, Sun, Moon, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";

const sections = [
  { id: "understanding", label: "Understanding Acne" },
  { id: "treatments", label: "Treatments" },
  { id: "routine", label: "Your Routine" },
  { id: "prescription", label: "Prescription Help" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "action-plan", label: "12-Week Plan" },
  { id: "purging", label: "Purging vs Breakouts" },
  { id: "scars", label: "Scars & Marks" },
  { id: "layering", label: "Layering Actives" },
  { id: "emergency", label: "Emergency Treatment" },
  { id: "budget", label: "Budget Routines" },
  { id: "timeline", label: "Timeline" },
];

const AcneGuide = () => {
  const [activeSection, setActiveSection] = useState("understanding");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));
      
      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Acne Guide - Evidence-Based Treatment & Management",
    "description": "A comprehensive guide to understanding, treating, and managing acne with evidence-based approaches following UK clinical guidelines.",
    "url": "https://resknclinic.co.uk/guides/acne",
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "ReSKN Clinic"
    },
    "author": {
      "@type": "Organization",
      "name": "ReSKN Clinic"
    }
  };

  return (
    <>
      <SEO
        title="Complete Acne Guide | Evidence-Based Treatment | ReSKN Clinic"
        description="A comprehensive guide to understanding, treating, and managing acne. Learn about acne types, causes, NICE-recommended treatments, and build your evidence-based routine."
        keywords="acne guide, acne treatment UK, acne skincare routine, benzoyl peroxide, adapalene, retinoids, NICE guidelines acne, ReSKN Clinic"
        canonical="https://resknclinic.co.uk/guides/acne"
        structuredData={structuredData}
      />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-deep via-purple to-purple-light py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Link
              to="/guides"
              className="inline-flex items-center text-sm text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
              The Complete Acne Guide
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl">
              Evidence-based treatment following UK clinical guidelines. Everything you need to understand, treat, and manage your acne.
            </p>
            <p className="text-xs text-white/60 mt-3">
              Based on NICE NG198 & British Association of Dermatologists Guidelines
            </p>
          </div>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-1 py-3 min-w-max">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
                      activeSection === section.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-5xl py-12">
          <div className="space-y-16">
            
            {/* Section 1: Understanding Your Acne */}
            <section id="understanding" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Understanding Your Acne
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-4">What Causes Acne?</h3>
                  <p className="text-muted-foreground mb-4">
                    Acne develops when four key factors come together:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-lavender-light/50 border-l-4 border-purple rounded-r-lg p-4">
                      <h4 className="font-medium text-foreground mb-1">Excess sebum production</h4>
                      <p className="text-sm text-muted-foreground">Your skin produces too much oil, often triggered by hormones</p>
                    </div>
                    <div className="bg-lavender-light/50 border-l-4 border-purple-light rounded-r-lg p-4">
                      <h4 className="font-medium text-foreground mb-1">Blocked pores</h4>
                      <p className="text-sm text-muted-foreground">Dead skin cells don't shed properly and clog pores</p>
                    </div>
                    <div className="bg-lavender-light/50 border-l-4 border-lavender-glow rounded-r-lg p-4">
                      <h4 className="font-medium text-foreground mb-1">Bacteria (C. acnes)</h4>
                      <p className="text-sm text-muted-foreground">Bacteria multiply in clogged pores</p>
                    </div>
                    <div className="bg-blush/30 border-l-4 border-pink-300 rounded-r-lg p-4">
                      <h4 className="font-medium text-foreground mb-1">Inflammation</h4>
                      <p className="text-sm text-muted-foreground">Your body's immune response creates redness and swelling</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-4">Types of Acne Lesions</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Non-Inflammatory</h4>
                      <div className="space-y-2">
                        <div className="bg-muted/50 rounded-lg p-3 flex items-center gap-3">
                          <span className="bg-purple/15 text-purple-deep text-xs font-medium px-2.5 py-1 rounded-full">Blackheads</span>
                          <p className="text-sm text-muted-foreground">Open pores, appear dark due to oxidation</p>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 flex items-center gap-3">
                          <span className="bg-purple/15 text-purple-deep text-xs font-medium px-2.5 py-1 rounded-full">Whiteheads</span>
                          <p className="text-sm text-muted-foreground">Closed pores, small white bumps</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Inflammatory</h4>
                      <div className="space-y-2">
                        <div className="bg-blush/30 rounded-lg p-3 flex items-center gap-3">
                          <span className="bg-pink-100 text-pink-700 text-xs font-medium px-2.5 py-1 rounded-full">Papules</span>
                          <p className="text-sm text-muted-foreground">Small, red, tender bumps without pus</p>
                        </div>
                        <div className="bg-blush/30 rounded-lg p-3 flex items-center gap-3">
                          <span className="bg-pink-100 text-pink-700 text-xs font-medium px-2.5 py-1 rounded-full">Pustules</span>
                          <p className="text-sm text-muted-foreground">Red bumps with white/yellow pus</p>
                        </div>
                        <div className="bg-blush/30 rounded-lg p-3 flex items-center gap-3">
                          <span className="bg-pink-200 text-pink-800 text-xs font-medium px-2.5 py-1 rounded-full">Nodules</span>
                          <p className="text-sm text-muted-foreground">Large, painful lumps deep under skin</p>
                        </div>
                        <div className="bg-blush/30 rounded-lg p-3 flex items-center gap-3">
                          <span className="bg-pink-200 text-pink-800 text-xs font-medium px-2.5 py-1 rounded-full">Cysts</span>
                          <p className="text-sm text-muted-foreground">Large, pus-filled, highest scarring risk</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-4">Severity Classification</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-green-50/80 border border-green-200 rounded-xl p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Mild to Moderate</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Any number of blackheads/whiteheads</li>
                        <li>• Up to 34 papules/pustules</li>
                      </ul>
                    </div>
                    <div className="bg-red-50/80 border border-red-200 rounded-xl p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Moderate to Severe</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• 35+ inflammatory lesions</li>
                        <li>• Nodules or cysts present</li>
                        <li>• Significant scarring risk</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Evidence-Based Treatments */}
            <section id="treatments" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Evidence-Based Treatments
              </h2>
              <p className="text-muted-foreground mb-6">
                NICE-recommended treatments. Over-the-counter options can be very effective for mild-moderate acne.
              </p>

              <div className="space-y-4">
                {/* Benzoyl Peroxide */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="font-semibold text-foreground">Benzoyl Peroxide (2.5% - 10%)</h3>
                    <span className="bg-purple/10 text-purple-deep text-xs font-medium px-2.5 py-1 rounded-full">Gold Standard</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">How it works:</span> Kills acne bacteria, reduces inflammation</p>
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Best for:</span> Inflammatory acne (papules, pustules)</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Usage:</span> Start with 2.5%, apply once daily</p>
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Side effects:</span> Dryness, peeling (improves after 2-4 weeks)</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-amber-50/80 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800"><strong>Warning:</strong> Bleaches fabric - use white towels and pillowcases!</p>
                  </div>
                </div>

                {/* Adapalene */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="font-semibold text-foreground">Adapalene (Retinoid) 0.1%</h3>
                    <span className="bg-purple/10 text-purple-deep text-xs font-medium px-2.5 py-1 rounded-full">NICE Recommended</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">How it works:</span> Normalises skin cell turnover, prevents clogged pores</p>
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Best for:</span> All acne types, prevention, anti-ageing</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Usage:</span> Start 2-3x weekly at night, gradually increase</p>
                      <p className="text-muted-foreground"><span className="text-foreground font-medium">Side effects:</span> Dryness, redness (retinisation period)</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-red-50/80 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-800"><strong>Contraindicated in pregnancy.</strong> Use SPF daily.</p>
                  </div>
                </div>

                {/* Other treatments in a more compact grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-3">Salicylic Acid (BHA) 0.5-2%</h3>
                    <p className="text-sm text-muted-foreground mb-2"><span className="text-foreground font-medium">Works:</span> Exfoliates inside pores, dissolves oil</p>
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Best for:</span> Blackheads, whiteheads, oily skin</p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-3">Azelaic Acid 10-20%</h3>
                    <p className="text-sm text-muted-foreground mb-2"><span className="text-foreground font-medium">Works:</span> Antibacterial, reduces hyperpigmentation</p>
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Best for:</span> Inflammatory acne, dark marks, sensitive skin</p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-3">Niacinamide 2-10%</h3>
                    <p className="text-sm text-muted-foreground mb-2"><span className="text-foreground font-medium">Works:</span> Reduces sebum, anti-inflammatory</p>
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Best for:</span> All acne types, redness, oily skin</p>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-3">Alpha Hydroxy Acids</h3>
                    <p className="text-sm text-muted-foreground mb-2"><span className="text-foreground font-medium">Works:</span> Exfoliates surface, improves texture</p>
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Best for:</span> Texture, mild hyperpigmentation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Building Your Routine */}
            <section id="routine" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Building Your Evidence-Based Routine
              </h2>

              <div className="bg-lavender-light/50 rounded-xl p-5 mb-8">
                <h3 className="font-semibold text-foreground mb-3">NICE First-Line Approaches</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-card rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Mild-Moderate Acne</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Adapalene 0.1% + Benzoyl Peroxide 2.5%</li>
                      <li>• OR Benzoyl Peroxide + Azelaic Acid</li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Moderate-Severe Acne</h4>
                    <p className="text-sm text-muted-foreground">Consider consultation for prescription options</p>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-4">Morning & Evening Routines</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Sun className="w-5 h-5 text-amber-500" />
                    <h4 className="font-semibold text-foreground">Morning</h4>
                  </div>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="bg-amber-200 text-amber-800 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">1</span>
                      <span className="text-muted-foreground">Gentle cleanser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-amber-200 text-amber-800 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">2</span>
                      <span className="text-muted-foreground">Niacinamide serum (optional)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-amber-200 text-amber-800 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">3</span>
                      <span className="text-muted-foreground">Lightweight moisturiser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-amber-300 text-amber-800 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">4</span>
                      <span className="text-foreground font-medium">SPF 30+ (Essential!)</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Moon className="w-5 h-5 text-indigo-500" />
                    <h4 className="font-semibold text-foreground">Evening</h4>
                  </div>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="bg-indigo-200 text-indigo-800 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">1</span>
                      <span className="text-muted-foreground">Gentle cleanser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-indigo-200 text-indigo-800 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">2</span>
                      <span className="text-muted-foreground">Treatment (BP/adapalene/azelaic)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-indigo-200 text-indigo-800 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">3</span>
                      <span className="text-muted-foreground">Wait 10-15 minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="bg-indigo-200 text-indigo-800 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">4</span>
                      <span className="text-muted-foreground">Moisturiser</span>
                    </li>
                  </ol>
                </div>
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-4">Essential Tips (NICE Guidelines)</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { icon: Droplets, text: "Cleanse twice daily with gentle, fragrance-free cleanser" },
                  { icon: ShieldCheck, text: "Avoid oil-based products - look for 'non-comedogenic'" },
                  { icon: XCircle, text: "Don't pick or squeeze - increases scarring risk" },
                  { icon: Sparkles, text: "Remove makeup before bed with non-comedogenic products" },
                  { icon: Clock, text: "Be patient - treatments take 6-8 weeks minimum" },
                  { icon: Heart, text: "Use moisturiser even with oily skin" },
                ].map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-3 flex items-start gap-2">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: When to Seek Prescription Help */}
            <section id="prescription" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                When to Seek Prescription Help
              </h2>
              
              <p className="text-muted-foreground mb-6">
                OTC treatments work for many people, but sometimes prescription-strength options are necessary.
              </p>

              <div className="bg-red-50/60 border border-red-100 rounded-xl p-5 mb-6">
                <h3 className="font-semibold text-foreground mb-3">Consider professional consultation if:</h3>
                <ul className="space-y-3">
                  {[
                    "OTC treatments haven't worked after 12 weeks of consistent use",
                    "You have moderate-to-severe acne (35+ inflammatory lesions, nodules, or cysts)",
                    "You're developing scarring - early intervention prevents permanent marks",
                    "Acne is affecting your mental health",
                    "You suspect hormonal acne (jawline/chin breakouts, related to menstrual cycle)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-3">Prescription Options Available</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Prescription-strength retinoids (tretinoin, isotretinoin)",
                    "Oral antibiotics (lymecycline, doxycycline)",
                    "Hormonal treatments (COCP, spironolactone)",
                    "Isotretinoin (Roaccutane) for severe cases"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Pill className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5: Common Mistakes */}
            <section id="mistakes" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Common Acne Treatment Mistakes
              </h2>

              <div className="space-y-3">
                {[
                  {
                    title: "Giving Up Too Soon",
                    content: "Treatments take 6-8 weeks minimum to show improvement. Full results often take 12 weeks.",
                    color: "border-l-red-300 bg-red-50/50"
                  },
                  {
                    title: "Using Too Many Products at Once",
                    content: "Start ONE active at a time. Wait 4-6 weeks before adding another.",
                    color: "border-l-orange-300 bg-orange-50/50"
                  },
                  {
                    title: "Over-Cleansing",
                    content: "Washing more than twice daily or using harsh cleansers damages your skin barrier.",
                    color: "border-l-amber-300 bg-amber-50/50"
                  },
                  {
                    title: "Skipping Moisturiser",
                    content: "Dehydrated skin produces MORE oil. Use a lightweight, non-comedogenic moisturiser.",
                    color: "border-l-yellow-300 bg-yellow-50/50"
                  },
                  {
                    title: "Not Using SPF",
                    content: "If using retinoids or acids, SPF is NON-NEGOTIABLE. Use SPF 30+ daily.",
                    color: "border-l-lime-300 bg-lime-50/50"
                  },
                  {
                    title: "Picking and Squeezing",
                    content: "The fastest way to cause scarring. Use hydrocolloid patches instead.",
                    color: "border-l-green-300 bg-green-50/50"
                  },
                  {
                    title: "Using Antibiotics Alone",
                    content: "NICE recommends AGAINST antibiotic monotherapy. Always combine with topical treatments.",
                    color: "border-l-teal-300 bg-teal-50/50"
                  }
                ].map((mistake, index) => (
                  <div key={index} className={`border-l-4 ${mistake.color} rounded-r-lg p-4`}>
                    <h4 className="font-medium text-foreground mb-1">{index + 1}. {mistake.title}</h4>
                    <p className="text-sm text-muted-foreground">{mistake.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: 12-Week Action Plan */}
            <section id="action-plan" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Your 12-Week Action Plan
              </h2>

              <div className="space-y-4">
                {[
                  {
                    weeks: "Week 1-2",
                    title: "Foundation",
                    color: "from-purple-50 to-indigo-50 border-purple-100",
                    badge: "bg-purple text-white",
                    items: [
                      "Establish gentle cleansing routine (AM/PM)",
                      "Add non-comedogenic moisturiser",
                      "Start daily SPF 30+",
                      "Begin tracking your progress"
                    ]
                  },
                  {
                    weeks: "Week 3-4",
                    title: "Introduce First Active",
                    color: "from-blue-50 to-cyan-50 border-blue-100",
                    badge: "bg-blue-500 text-white",
                    items: [
                      "Choose ONE: benzoyl peroxide, azelaic acid, OR adapalene",
                      "Start slowly (2-3x per week if using retinoid)",
                      "Monitor for irritation"
                    ]
                  },
                  {
                    weeks: "Week 6-8",
                    title: "Assess Progress",
                    color: "from-teal-50 to-emerald-50 border-teal-100",
                    badge: "bg-teal-500 text-white",
                    items: [
                      "Review tracking logs - notice patterns?",
                      "Compare progress photos",
                      "If improving - continue!"
                    ]
                  },
                  {
                    weeks: "Week 12+",
                    title: "Maintenance",
                    color: "from-green-50 to-lime-50 border-green-100",
                    badge: "bg-green-500 text-white",
                    items: [
                      "If clear - continue maintenance routine",
                      "If not improved - seek prescription consultation",
                      "Keep using tracking tools"
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className={`bg-gradient-to-r ${phase.color} rounded-xl p-5 border`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`${phase.badge} font-bold px-3 py-1 rounded-lg text-xs`}>{phase.weeks}</span>
                      <h3 className="font-semibold text-foreground">{phase.title}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Purging vs Breakouts */}
            <section id="purging" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Purging vs. Bad Reactions
              </h2>

              <p className="text-muted-foreground mb-6">
                When starting retinoids or exfoliating acids, your skin often gets worse before it gets better. This is called "purging." But how do you know if it's a purge or a bad reaction?
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50/80 border border-green-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-green-800">Normal Purging</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>✓ Breakouts in usual problem areas</li>
                    <li>✓ Smaller spots that heal faster</li>
                    <li>✓ Improves after 4-8 weeks</li>
                    <li>✓ Only with cell-turnover products</li>
                    <li>✓ No unusual irritation or itching</li>
                  </ul>
                </div>

                <div className="bg-red-50/80 border border-red-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-red-800">Bad Reaction</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>✗ Breakouts in NEW areas</li>
                    <li>✗ Deeper, painful cysts</li>
                    <li>✗ Getting worse after 8+ weeks</li>
                    <li>✗ From hydrating/barrier products</li>
                    <li>✗ Itching, burning, rash, swelling</li>
                  </ul>
                </div>
              </div>

              <div className="bg-lavender-light/50 rounded-xl p-5 mb-6">
                <h3 className="font-semibold text-foreground mb-3">Purging Duration by Ingredient</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: "Retinoids", duration: "4-12 weeks" },
                    { name: "Benzoyl Peroxide", duration: "2-4 weeks" },
                    { name: "Salicylic Acid", duration: "2-3 weeks" },
                    { name: "Azelaic Acid", duration: "2-4 weeks" }
                  ].map((item, index) => (
                    <div key={index} className="bg-card rounded-lg p-3 text-center">
                      <p className="font-medium text-foreground text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-3">How to Minimise Purging</h3>
                <div className="space-y-2">
                  {[
                    "Start LOW, go SLOW: Begin with lower concentrations",
                    "Use gradually: Retinoids 2-3x weekly first, then increase",
                    "Buffer sensitive areas: Apply moisturiser BEFORE retinoid around eyes/mouth",
                    "Support your barrier: Gentle cleanser, moisturiser, SPF 30+",
                    "DON'T STOP: Unless bad reaction, push through!"
                  ].map((tip, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <span className="bg-purple/10 text-purple-deep font-bold text-xs px-2 py-0.5 rounded">TIP</span>
                      <span className="text-muted-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8: Treating Scars */}
            <section id="scars" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Treating Scars & Hyperpigmentation
              </h2>

              <p className="text-muted-foreground mb-6">
                After acne heals, you may be left with marks. Understanding the difference is crucial for effective treatment.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-pink-50/80 border-l-4 border-pink-400 rounded-r-lg p-4">
                  <h4 className="font-semibold text-pink-800 mb-2">PIE (Red/Pink Marks)</h4>
                  <p className="text-xs text-pink-700 mb-1"><strong>Cause:</strong> Damaged blood vessels</p>
                  <p className="text-xs text-pink-700 mb-1"><strong>Duration:</strong> 3-12 months</p>
                  <p className="text-xs text-pink-700"><strong>Treatment:</strong> Vitamin C, niacinamide, azelaic acid</p>
                </div>
                <div className="bg-amber-50/80 border-l-4 border-amber-500 rounded-r-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">PIH (Dark Marks)</h4>
                  <p className="text-xs text-amber-700 mb-1"><strong>Cause:</strong> Excess melanin</p>
                  <p className="text-xs text-amber-700 mb-1"><strong>Duration:</strong> 6-24 months</p>
                  <p className="text-xs text-amber-700"><strong>Treatment:</strong> Retinoids, azelaic acid, tranexamic acid</p>
                </div>
                <div className="bg-slate-50/80 border-l-4 border-slate-500 rounded-r-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Atrophic Scars</h4>
                  <p className="text-xs text-slate-700 mb-1"><strong>Types:</strong> Ice pick, boxcar, rolling</p>
                  <p className="text-xs text-slate-700 mb-1"><strong>Note:</strong> Cannot treat with topicals</p>
                  <p className="text-xs text-slate-700"><strong>Needs:</strong> Professional treatments</p>
                </div>
              </div>

              <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <Sun className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">CRITICAL: Daily SPF 30+ is ESSENTIAL</h4>
                    <p className="text-sm text-amber-700">UV exposure darkens existing marks and prevents fading. This is the MOST important step - nothing else will work without sun protection.</p>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-3">Evidence-Based Ingredients for PIH/PIE</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Niacinamide (2-5%)", desc: "Reduces melanin transfer. Use AM/PM. Improvement in 8-12 weeks." },
                  { name: "Vitamin C (10-20%)", desc: "Inhibits melanin production. Morning use with SPF." },
                  { name: "Azelaic Acid (10-20%)", desc: "Tyrosinase inhibitor. Great for sensitive skin." },
                  { name: "Retinoids", desc: "Gold standard for PIH. Start slowly, always use SPF." }
                ].map((item, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: How to Layer Actives */}
            <section id="layering" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                How to Layer Multiple Actives
              </h2>

              <p className="text-muted-foreground mb-6">
                Once your skin has adjusted to actives individually, you can combine them strategically. <strong>NEVER introduce multiple new actives at once.</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50/80 border border-green-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-green-800 text-sm">Can Combine</h3>
                  </div>
                  <ul className="space-y-1.5 text-xs text-green-700">
                    <li>• Niacinamide + almost anything</li>
                    <li>• Azelaic acid + retinoids (AM/PM)</li>
                    <li>• Benzoyl peroxide + niacinamide</li>
                    <li>• Salicylic acid + niacinamide</li>
                  </ul>
                </div>

                <div className="bg-yellow-50/80 border border-yellow-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <h3 className="font-semibold text-yellow-800 text-sm">Separate (AM/PM)</h3>
                  </div>
                  <ul className="space-y-1.5 text-xs text-yellow-700">
                    <li>• Vitamin C (AM) + Retinoids (PM)</li>
                    <li>• BP (PM) + Retinoids (different nights)</li>
                    <li>• AHA/BHA + Retinoids (alternate)</li>
                  </ul>
                </div>

                <div className="bg-red-50/80 border border-red-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-red-800 text-sm">Don't Combine</h3>
                  </div>
                  <ul className="space-y-1.5 text-xs text-red-700">
                    <li>• Vitamin C + Benzoyl peroxide</li>
                    <li>• Multiple strong actives if new to skincare</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-4">Sample Advanced Routine (After 3+ months)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="w-5 h-5 text-amber-500" />
                    <h4 className="font-semibold text-foreground">Morning</h4>
                  </div>
                  <ol className="space-y-1.5 text-sm text-muted-foreground">
                    <li>1. Gentle cleanser</li>
                    <li>2. Vitamin C or Azelaic Acid</li>
                    <li>3. Niacinamide (optional)</li>
                    <li>4. Moisturiser</li>
                    <li>5. SPF 30+</li>
                  </ol>
                </div>
                <div className="bg-indigo-50/60 rounded-xl p-5 border border-indigo-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Moon className="w-5 h-5 text-indigo-500" />
                    <h4 className="font-semibold text-foreground">Evening</h4>
                  </div>
                  <ol className="space-y-1.5 text-sm text-muted-foreground">
                    <li>1. Gentle cleanser</li>
                    <li>2. Wait 5 minutes</li>
                    <li>3. Retinoid OR Benzoyl peroxide</li>
                    <li>4. Wait 10-15 minutes</li>
                    <li>5. Moisturiser</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Section 10: Emergency Spot Treatment */}
            <section id="emergency" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Emergency Spot Treatment
              </h2>

              <p className="text-muted-foreground mb-6">
                Got an event tomorrow and a spot appeared? Here's what actually works.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50/80 border border-green-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <h3 className="font-semibold text-green-800">What WORKS</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-green-800">Hydrocolloid Patches</p>
                      <p className="text-xs text-green-700">Absorb fluid, protect from picking. Apply overnight.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Ice (10 min on, 10 off)</p>
                      <p className="text-xs text-green-700">Reduces inflammation. Repeat 2-3x.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Benzoyl Peroxide Spot Treatment</p>
                      <p className="text-xs text-green-700">Apply 2.5-5% directly to spot overnight.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Salicylic Acid Spot Treatment</p>
                      <p className="text-xs text-green-700">Apply 2% to spot. Best for whiteheads.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50/80 border border-red-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <h3 className="font-semibold text-red-800">What DOESN'T Work</h3>
                  </div>
                  <div className="space-y-1.5 text-sm text-red-700">
                    <p>❌ Toothpaste - Too irritating, causes burns</p>
                    <p>❌ Lemon juice - Burns skin, causes pigmentation</p>
                    <p>❌ Baking soda - Disrupts skin pH</p>
                    <p>❌ Tea tree oil undiluted - Severe irritation</p>
                    <p>❌ Steaming face - Worsens inflammation</p>
                    <p>❌ Picking/squeezing - Causes scarring</p>
                  </div>
                </div>
              </div>

              <div className="bg-lavender-light/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">Realistic Expectations</h3>
                <p className="text-sm text-muted-foreground">Nothing makes a spot disappear overnight. These methods reduce redness, size, and pain. Deep cystic spots need time - prevention is always better than emergency treatment.</p>
              </div>
            </section>

            {/* Section 11: Budget-Friendly Routines */}
            <section id="budget" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Budget-Friendly Routines (£20/month)
              </h2>

              <p className="text-muted-foreground mb-6">
                You don't need expensive products for effective acne treatment.
              </p>

              <div className="bg-green-50/60 rounded-xl p-5 border border-green-200 mb-6">
                <h3 className="font-semibold text-green-800 mb-4">Minimum Effective Routine</h3>
                <div className="space-y-2">
                  {[
                    { item: "Gentle Cleanser: Simple Refreshing Wash Gel (£4)", cost: "£2/mo" },
                    { item: "Treatment: Acnecide 5% Gel (£9-10)", cost: "£10/mo" },
                    { item: "Moisturiser: Simple Hydrating Light Moisturiser (£5)", cost: "£2.50/mo" },
                    { item: "SPF: Altruist SPF50 (£7/500ml)", cost: "£2/mo" }
                  ].map((product, index) => (
                    <div key={index} className="flex justify-between items-center text-sm bg-white/60 rounded-lg p-3">
                      <span className="text-muted-foreground">{product.item}</span>
                      <span className="text-green-700 font-medium">{product.cost}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center text-sm bg-green-100 rounded-lg p-3 mt-3">
                    <span className="font-semibold text-green-800">Total</span>
                    <span className="font-bold text-green-800">~£16.50/month</span>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-3">UK Shopping List</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                {[
                  { name: "Benzoyl Peroxide", items: ["Acnecide 5% (£9-10)", "Boots Acne Gel (£4-5)"] },
                  { name: "Adapalene", items: ["Differin 0.1% (£13-16)"] },
                  { name: "Azelaic Acid", items: ["The Ordinary 10% (£7)", "Skinoren 20% (£18-25)"] },
                  { name: "Niacinamide", items: ["The Ordinary 10% + Zinc (£5)"] },
                  { name: "Salicylic Acid", items: ["CeraVe SA Cleanser (£10)", "Paula's Choice 2% (£31)"] },
                  { name: "SPF", items: ["Altruist SPF50 (£7/500ml)", "Garnier UV Fluid (£8)"] }
                ].map((category, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">{category.name}</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {category.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-lavender-light/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">What You DON'T Need</h3>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="bg-card px-3 py-1 rounded-full">Toners</span>
                  <span className="bg-card px-3 py-1 rounded-full">Multiple serums</span>
                  <span className="bg-card px-3 py-1 rounded-full">Eye creams</span>
                  <span className="bg-card px-3 py-1 rounded-full">Expensive cleansers</span>
                  <span className="bg-card px-3 py-1 rounded-full">Face mists</span>
                  <span className="bg-card px-3 py-1 rounded-full">Sheet masks</span>
                </div>
              </div>
            </section>

            {/* Section 12: Realistic Timeline */}
            <section id="timeline" className="scroll-mt-32">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6 pb-3 border-b border-border">
                Realistic Expectations & Timeline
              </h2>

              <p className="text-muted-foreground mb-6">
                One of the biggest mistakes is unrealistic expectations about how quickly acne will clear.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-lavender-light/50">
                      <th className="text-left p-3 font-semibold text-foreground">Treatment</th>
                      <th className="text-left p-3 font-semibold text-foreground">Purging</th>
                      <th className="text-left p-3 font-semibold text-foreground">Improvement</th>
                      <th className="text-left p-3 font-semibold text-foreground">Full Results</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    {[
                      { treatment: "Benzoyl Peroxide", purge: "2-4 wks", improve: "6-8 wks", full: "12 wks" },
                      { treatment: "Adapalene/Retinoids", purge: "4-8 wks", improve: "8-12 wks", full: "16-24 wks" },
                      { treatment: "Azelaic Acid", purge: "1-2 wks", improve: "4-6 wks", full: "8-12 wks" },
                      { treatment: "PIE (red marks)", purge: "—", improve: "3-6 mo", full: "Up to 12 mo" },
                      { treatment: "PIH (dark marks)", purge: "—", improve: "6-12 mo", full: "Up to 24 mo" }
                    ].map((row, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-3 text-muted-foreground">{row.treatment}</td>
                        <td className="p-3 text-muted-foreground">{row.purge}</td>
                        <td className="p-3 text-muted-foreground">{row.improve}</td>
                        <td className="p-3 text-muted-foreground">{row.full}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-lavender-light/50 rounded-xl p-5 mb-6">
                <h3 className="font-semibold text-foreground mb-2">What "Clear" Means</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Not</strong> zero pimples forever</li>
                  <li>• 90%+ improvement from baseline</li>
                  <li>• Occasional spot (especially hormonal) is normal</li>
                  <li>• Manageable with maintenance routine</li>
                </ul>
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-3">Setting Realistic Goals</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { week: "Week 4", note: "Stick with it", color: "bg-red-50 border-red-100 text-red-800" },
                  { week: "Week 8", note: "Some improvement", color: "bg-orange-50 border-orange-100 text-orange-800" },
                  { week: "Week 12", note: "Noticeable difference", color: "bg-yellow-50 border-yellow-100 text-yellow-800" },
                  { week: "Month 6", note: "Significant improvement", color: "bg-lime-50 border-lime-100 text-lime-800" },
                  { week: "Ongoing", note: "Maintenance", color: "bg-green-50 border-green-100 text-green-800" }
                ].map((milestone, index) => (
                  <div key={index} className={`${milestone.color} border rounded-lg px-4 py-2 text-center`}>
                    <p className="font-bold text-sm">{milestone.week}</p>
                    <p className="text-xs">{milestone.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-br from-purple-deep via-purple to-purple-light rounded-2xl p-8 text-center text-white">
              <h2 className="font-serif text-2xl md:text-3xl mb-3">You've Got This! 💜</h2>
              <p className="text-white/90 mb-1">Clear skin is a journey, not a destination.</p>
              <p className="text-white/70 mb-6 text-sm">Be patient. Be consistent. Trust the process.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="lg" className="bg-white text-purple-deep hover:bg-white/90">
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/guides">View All Guides</Link>
                </Button>
              </div>

              <p className="text-white/50 text-xs mt-6">
                Based on NICE NG198 & BAD Guidelines © ReSKN Clinic 2025
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default AcneGuide;
