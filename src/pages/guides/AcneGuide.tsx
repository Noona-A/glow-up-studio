import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Clock, Sparkles, ShieldCheck, Heart, AlertCircle, Pill, Droplets, Sun, Moon } from "lucide-react";
import SEO from "@/components/SEO";

const AcneGuide = () => {
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
      <div className="pt-16 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-deep via-purple to-purple-light py-16 mb-12">
          <div className="container mx-auto px-4">
            <Link
              to="/guides"
              className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              The Complete Acne Guide
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Evidence-based treatment following UK clinical guidelines. Everything you need to understand, treat, and manage your acne.
            </p>
            <p className="text-sm text-white/70 mt-4">
              Based on NICE NG198 & British Association of Dermatologists Guidelines
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="container mx-auto px-4 max-w-4xl mb-16">
          <div className="bg-lavender-light rounded-2xl p-6 md:p-8">
            <h2 className="font-serif text-2xl text-foreground mb-6">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-purple-deep mb-3">Clinical Foundations</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#understanding" className="text-muted-foreground hover:text-primary transition-colors">Understanding Your Acne</a></li>
                  <li><a href="#treatments" className="text-muted-foreground hover:text-primary transition-colors">Evidence-Based Treatments</a></li>
                  <li><a href="#routine" className="text-muted-foreground hover:text-primary transition-colors">Building Your Routine</a></li>
                  <li><a href="#prescription" className="text-muted-foreground hover:text-primary transition-colors">When to Seek Prescription Help</a></li>
                  <li><a href="#mistakes" className="text-muted-foreground hover:text-primary transition-colors">Common Mistakes</a></li>
                  <li><a href="#action-plan" className="text-muted-foreground hover:text-primary transition-colors">Your 12-Week Action Plan</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-deep mb-3">Practical Solutions</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#purging" className="text-muted-foreground hover:text-primary transition-colors">Purging vs Breakouts</a></li>
                  <li><a href="#scars" className="text-muted-foreground hover:text-primary transition-colors">Treating Scars & Dark Marks</a></li>
                  <li><a href="#layering" className="text-muted-foreground hover:text-primary transition-colors">How to Layer Actives</a></li>
                  <li><a href="#emergency" className="text-muted-foreground hover:text-primary transition-colors">Emergency Spot Treatment</a></li>
                  <li><a href="#budget" className="text-muted-foreground hover:text-primary transition-colors">Budget-Friendly Routines</a></li>
                  <li><a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">Realistic Expectations</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          
          {/* Section 1: Understanding Your Acne */}
          <section id="understanding">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Understanding Your Acne</h2>
            </div>
            
            <h3 className="font-serif text-xl text-purple-deep mb-4">What Causes Acne?</h3>
            <p className="text-muted-foreground mb-6">
              Acne develops when four key factors come together:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-lavender-light border-l-4 border-purple rounded-r-xl p-5">
                <h4 className="font-semibold text-foreground mb-2">Excess sebum (oil) production</h4>
                <p className="text-sm text-muted-foreground">Your skin produces too much oil, often triggered by hormones</p>
              </div>
              <div className="bg-lavender-light border-l-4 border-purple-light rounded-r-xl p-5">
                <h4 className="font-semibold text-foreground mb-2">Blocked pores (hyperkeratosis)</h4>
                <p className="text-sm text-muted-foreground">Dead skin cells don't shed properly and clog pores</p>
              </div>
              <div className="bg-lavender-light border-l-4 border-lavender-glow rounded-r-xl p-5">
                <h4 className="font-semibold text-foreground mb-2">Bacteria (C. acnes)</h4>
                <p className="text-sm text-muted-foreground">Bacteria multiply in clogged pores</p>
              </div>
              <div className="bg-blush border-l-4 border-pink-400 rounded-r-xl p-5">
                <h4 className="font-semibold text-foreground mb-2">Inflammation</h4>
                <p className="text-sm text-muted-foreground">Your body's immune response creates redness and swelling</p>
              </div>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">Types of Acne Lesions</h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-foreground mb-3">Non-Inflammatory (Comedonal):</h4>
              <div className="space-y-3">
                <div className="bg-muted rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple/20 text-purple-deep text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Blackheads</span>
                  <p className="text-sm text-muted-foreground">Blocked pores open to the surface, appear dark due to oxidation</p>
                </div>
                <div className="bg-muted rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple/20 text-purple-deep text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Whiteheads</span>
                  <p className="text-sm text-muted-foreground">Blocked pores closed at the surface, appear as small white bumps</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-3">Inflammatory:</h4>
              <div className="space-y-3">
                <div className="bg-blush/50 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-pink-200 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Papules</span>
                  <p className="text-sm text-muted-foreground">Small, red, tender bumps without pus</p>
                </div>
                <div className="bg-blush/50 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-pink-200 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Pustules</span>
                  <p className="text-sm text-muted-foreground">Red bumps with white/yellow pus at the centre</p>
                </div>
                <div className="bg-blush/50 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-pink-300 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Nodules</span>
                  <p className="text-sm text-muted-foreground">Large, painful lumps deep under the skin</p>
                </div>
                <div className="bg-blush/50 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-pink-300 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Cysts</span>
                  <p className="text-sm text-muted-foreground">Large, pus-filled lesions deep under the skin (highest scarring risk)</p>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">Acne Severity Classification</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-5">
                <h4 className="font-semibold text-green-800 mb-2">Mild to Moderate Acne:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Any number of comedones (blackheads/whiteheads)</li>
                  <li>• Up to 34 inflammatory lesions (papules/pustules)</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-5">
                <h4 className="font-semibold text-red-800 mb-2">Moderate to Severe Acne:</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 35+ inflammatory lesions</li>
                  <li>• Nodules or cysts present</li>
                  <li>• Significant scarring risk</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Evidence-Based Treatments */}
          <section id="treatments">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Evidence-Based Treatments</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              The following treatments are recommended by NICE guidelines. Over-the-counter options can be very effective, especially for mild-moderate acne.
            </p>

            <div className="space-y-6">
              {/* Benzoyl Peroxide */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl text-foreground">Benzoyl Peroxide (2.5% - 10%)</h3>
                  <span className="bg-purple/10 text-purple-deep text-xs font-semibold px-3 py-1 rounded-full">Gold Standard</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How it works:</strong> Kills acne-causing bacteria, reduces inflammation, helps unclog pores</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Best for:</strong> Inflammatory acne (papules, pustules)</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How to use:</strong> Start with 2.5% to minimise irritation, apply once daily</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Side effects:</strong> Dryness, redness, peeling (usually improves after 2-4 weeks)</p>
                  </div>
                </div>
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800"><strong>Warning:</strong> Bleaches fabric - use white towels and pillowcases!</p>
                </div>
              </div>

              {/* Adapalene */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl text-foreground">Adapalene (Retinoid) 0.1%</h3>
                  <span className="bg-purple/10 text-purple-deep text-xs font-semibold px-3 py-1 rounded-full">NICE Recommended</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How it works:</strong> Normalises skin cell turnover, prevents clogged pores, anti-inflammatory</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Best for:</strong> All acne types, prevention, anti-ageing benefits</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How to use:</strong> Start 2-3x weekly at night, gradually increase to nightly. Use pea-sized amount</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Side effects:</strong> Dryness, redness, peeling (retinisation period)</p>
                  </div>
                </div>
                <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800"><strong>Contraindicated in pregnancy.</strong> Use SPF daily.</p>
                </div>
              </div>

              {/* Salicylic Acid */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-xl text-foreground mb-4">Salicylic Acid (BHA) 0.5% - 2%</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How it works:</strong> Exfoliates inside pores, dissolves oil, prevents clogging</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Best for:</strong> Blackheads, whiteheads, oily skin</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How to use:</strong> Apply once or twice daily, can be used long-term</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Side effects:</strong> Mild dryness, can increase sun sensitivity</p>
                  </div>
                </div>
              </div>

              {/* Azelaic Acid */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-xl text-foreground mb-4">Azelaic Acid 10% - 20%</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How it works:</strong> Antibacterial, anti-inflammatory, unclogs pores, reduces hyperpigmentation</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Best for:</strong> Inflammatory acne, dark marks, sensitive skin</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How to use:</strong> Apply twice daily, gentler than other actives</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Side effects:</strong> Minimal - mild tingling initially, well-tolerated</p>
                  </div>
                </div>
              </div>

              {/* Niacinamide */}
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-xl text-foreground mb-4">Niacinamide (Vitamin B3) 2% - 10%</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How it works:</strong> Reduces sebum production, anti-inflammatory, strengthens skin barrier</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Best for:</strong> All acne types, reducing redness and oil</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">How to use:</strong> Apply once or twice daily, plays well with other ingredients</p>
                    <p className="text-muted-foreground mb-2"><strong className="text-foreground">Side effects:</strong> Very well-tolerated, rare irritation</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Building Your Routine */}
          <section id="routine">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Building Your Evidence-Based Routine</h2>
            </div>

            <div className="bg-lavender-light rounded-2xl p-6 mb-8">
              <h3 className="font-serif text-xl text-purple-deep mb-4">NICE-Recommended First-Line Approaches</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">For Mild-Moderate Acne:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Adapalene 0.1% + Benzoyl Peroxide 2.5% combination</li>
                    <li>• OR Benzoyl Peroxide + Azelaic Acid</li>
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">For Moderate-Severe Acne:</h4>
                  <p className="text-sm text-muted-foreground">Consider consultation for prescription options (oral antibiotics + topical combination therapy)</p>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">Sample Morning & Evening Routines</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-6 h-6 text-amber-500" />
                  <h4 className="font-semibold text-foreground text-lg">Morning Routine</h4>
                </div>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-amber-200 text-amber-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <span className="text-sm text-muted-foreground">Gentle cleanser (fragrance-free, pH-balanced)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-amber-200 text-amber-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <span className="text-sm text-muted-foreground">Niacinamide serum (optional but helpful)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-amber-200 text-amber-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <span className="text-sm text-muted-foreground">Lightweight, non-comedogenic moisturiser</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-amber-300 text-amber-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                    <span className="text-sm text-foreground font-medium">SPF 30+ (ESSENTIAL if using retinoids or acids)</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-center gap-2 mb-4">
                  <Moon className="w-6 h-6 text-indigo-500" />
                  <h4 className="font-semibold text-foreground text-lg">Evening Routine</h4>
                </div>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-indigo-200 text-indigo-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <span className="text-sm text-muted-foreground">Gentle cleanser</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-indigo-200 text-indigo-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <span className="text-sm text-muted-foreground">Treatment (benzoyl peroxide OR adapalene OR azelaic acid)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-indigo-200 text-indigo-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <span className="text-sm text-muted-foreground">Wait 10-15 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-indigo-200 text-indigo-800 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                    <span className="text-sm text-muted-foreground">Moisturiser (more generous if using drying actives)</span>
                  </li>
                </ol>
              </div>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">Essential Skincare Advice (NICE Guidelines)</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Droplets, text: "Cleanse twice daily with a gentle, fragrance-free cleanser" },
                { icon: ShieldCheck, text: "Avoid oil-based products - look for 'non-comedogenic' on labels" },
                { icon: XCircle, text: "Don't pick or squeeze - increases scarring risk" },
                { icon: Sparkles, text: "Remove makeup before bed - use non-comedogenic products" },
                { icon: Clock, text: "Be patient - treatments take 6-8 weeks to show improvement" },
                { icon: Heart, text: "Use moisturiser - even with oily skin! Prevents irritation" },
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: When to Seek Prescription Help */}
          <section id="prescription">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">When to Seek Prescription Help</h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              While over-the-counter treatments work well for many people, sometimes prescription-strength options are necessary. Consider professional consultation if:
            </p>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-100 rounded-2xl p-6 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Over-the-counter treatments haven't worked after <strong>12 weeks</strong> of consistent use</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You have moderate-to-severe acne (35+ inflammatory lesions, nodules, or cysts)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You're developing <strong>scarring</strong> - early intervention prevents permanent marks</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Acne is affecting your <strong>mental health</strong> - psychological impact is just as important</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">You suspect <strong>hormonal acne</strong> (jawline/chin breakouts, related to menstrual cycle, PCOS symptoms)</span>
                </li>
              </ul>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">Prescription Treatment Options</h3>
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="text-muted-foreground mb-4">A qualified prescriber can offer:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-primary" />
                  <span>Prescription-strength retinoids (tretinoin, isotretinoin)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-primary" />
                  <span>Oral antibiotics (lymecycline, doxycycline) combined with topical treatment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-primary" />
                  <span>Hormonal treatments (combined oral contraceptive, spironolactone for women)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-primary" />
                  <span>Isotretinoin (Roaccutane) for severe/persistent acne</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Common Mistakes */}
          <section id="mistakes">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Common Acne Treatment Mistakes</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Giving Up Too Soon",
                  content: "Acne treatments take TIME. You need 6-8 weeks minimum to see improvement, and full results often take 12 weeks. Many people give up after 2-3 weeks thinking it's not working.",
                  color: "border-red-300 bg-red-50"
                },
                {
                  title: "Using Too Many Products at Once",
                  content: "Start ONE active ingredient at a time. Introducing multiple new products simultaneously makes it impossible to identify what's helping or causing irritation. Wait 4-6 weeks before adding another active.",
                  color: "border-orange-300 bg-orange-50"
                },
                {
                  title: "Over-Cleansing and Stripping the Skin",
                  content: "Washing your face more than twice daily or using harsh cleansers damages your skin barrier, leading to more oil production and breakouts. Stick to gentle, pH-balanced cleansers twice daily.",
                  color: "border-amber-300 bg-amber-50"
                },
                {
                  title: "Skipping Moisturiser",
                  content: "Even oily, acne-prone skin needs moisture. Dehydrated skin produces MORE oil to compensate. Use a lightweight, non-comedogenic moisturiser, especially when using drying actives.",
                  color: "border-yellow-300 bg-yellow-50"
                },
                {
                  title: "Not Using SPF",
                  content: "If you're using retinoids, AHAs, or BHAs, SPF is NON-NEGOTIABLE. These ingredients increase sun sensitivity, and sun damage worsens hyperpigmentation. Use SPF 30+ daily.",
                  color: "border-lime-300 bg-lime-50"
                },
                {
                  title: "Picking and Squeezing",
                  content: "This is the fastest way to cause scarring and spread bacteria. Use hydrocolloid patches (pimple patches) instead if you're tempted to pick.",
                  color: "border-green-300 bg-green-50"
                },
                {
                  title: "Using Antibiotics Alone",
                  content: "NICE guidelines specifically recommend AGAINST antibiotic monotherapy due to resistance concerns. Antibiotics should always be combined with topical treatments like benzoyl peroxide or retinoids.",
                  color: "border-teal-300 bg-teal-50"
                }
              ].map((mistake, index) => (
                <div key={index} className={`border-l-4 ${mistake.color} rounded-r-xl p-5`}>
                  <h4 className="font-semibold text-foreground mb-2">Mistake {index + 1}: {mistake.title}</h4>
                  <p className="text-sm text-muted-foreground">{mistake.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: 12-Week Action Plan */}
          <section id="action-plan">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Your 12-Week Action Plan</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple text-white font-bold px-3 py-1 rounded-lg text-sm">Week 1-2</span>
                  <h3 className="font-semibold text-foreground">Foundation</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Establish gentle cleansing routine (AM/PM)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Add non-comedogenic moisturiser</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Start daily SPF 30+</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Begin tracking your progress</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-500 text-white font-bold px-3 py-1 rounded-lg text-sm">Week 3-4</span>
                  <h3 className="font-semibold text-foreground">Introduce First Active</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Choose ONE: benzoyl peroxide, azelaic acid, OR adapalene</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Start slowly (2-3x per week if using retinoid, daily if using benzoyl peroxide)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Monitor for irritation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-teal-500 text-white font-bold px-3 py-1 rounded-lg text-sm">Week 6-8</span>
                  <h3 className="font-semibold text-foreground">Assess Progress</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Review your tracking logs - notice any patterns?</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Compare progress photos</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> If seeing improvement - continue!</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-lime-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-500 text-white font-bold px-3 py-1 rounded-lg text-sm">Week 12+</span>
                  <h3 className="font-semibold text-foreground">Maintenance</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> If clear - continue with maintenance routine</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> If not adequately improved - seek prescription consultation</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Keep using tracking tools to prevent relapse</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Purging vs Breakouts */}
          <section id="purging">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Purging vs Breakouts: What's Normal?</h2>
            </div>

            <p className="text-muted-foreground mb-6">
              One of the MOST confusing parts of starting acne treatment is knowing whether you're experiencing 'purging' (good) or having a bad reaction (bad).
            </p>

            <div className="bg-lavender-light rounded-2xl p-6 mb-6">
              <h3 className="font-serif text-xl text-purple-deep mb-4">What is Skin Purging?</h3>
              <p className="text-muted-foreground">
                Purging occurs when active ingredients (retinoids, acids, benzoyl peroxide) speed up skin cell turnover, bringing existing clogged pores to the surface FASTER. It's your skin fast-forwarding months of congestion into weeks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="font-semibold text-green-800">Signs of NORMAL Purging</h4>
                </div>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Starts within 1-2 weeks of starting new treatment</li>
                  <li>• Happens ONLY in areas where you normally break out</li>
                  <li>• Small, superficial breakouts (whiteheads, blackheads, small papules)</li>
                  <li>• Pimples heal FASTER than usual (3-5 days vs 7-10 days)</li>
                  <li>• Improves within 4-6 weeks</li>
                  <li>• Accompanied by mild dryness, peeling, redness</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h4 className="font-semibold text-red-800">Signs of a BAD Reaction (Stop the Product)</h4>
                </div>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Appears in NEW areas where you don't typically break out</li>
                  <li>• Painful cysts or deep nodules</li>
                  <li>• Severe burning, stinging, or itching</li>
                  <li>• Excessive dryness, cracking, or bleeding skin</li>
                  <li>• Continues to worsen after 6-8 weeks</li>
                  <li>• Swelling or blistering (seek medical attention immediately)</li>
                </ul>
              </div>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">How Long Does Purging Last?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="font-semibold text-foreground mb-1">Retinoids</p>
                <p className="text-sm text-muted-foreground">4-8 weeks, sometimes up to 12</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="font-semibold text-foreground mb-1">Benzoyl Peroxide</p>
                <p className="text-sm text-muted-foreground">2-4 weeks</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="font-semibold text-foreground mb-1">Salicylic Acid</p>
                <p className="text-sm text-muted-foreground">2-3 weeks</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="font-semibold text-foreground mb-1">Azelaic Acid</p>
                <p className="text-sm text-muted-foreground">2-4 weeks</p>
              </div>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">How to Minimize Purging</h3>
            <div className="bg-card border border-border rounded-2xl p-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="bg-purple/10 text-purple-deep font-bold text-xs px-2 py-1 rounded">TIP</span>
                  <span><strong>Start LOW, go SLOW:</strong> Begin with lower concentrations (0.1% adapalene, 2.5% benzoyl peroxide)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-purple/10 text-purple-deep font-bold text-xs px-2 py-1 rounded">TIP</span>
                  <span><strong>Use gradually:</strong> Retinoids 2-3x weekly for first 2 weeks, then increase to nightly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-purple/10 text-purple-deep font-bold text-xs px-2 py-1 rounded">TIP</span>
                  <span><strong>Buffer sensitive areas:</strong> Apply moisturiser BEFORE retinoid around eyes, mouth, nose</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-purple/10 text-purple-deep font-bold text-xs px-2 py-1 rounded">TIP</span>
                  <span><strong>Support your barrier:</strong> Use gentle cleanser, non-comedogenic moisturiser, SPF 30+ daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-purple/10 text-purple-deep font-bold text-xs px-2 py-1 rounded">TIP</span>
                  <span><strong>DON'T STOP:</strong> Unless you have a bad reaction, push through - clearer skin is on the other side!</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8: Treating Scars */}
          <section id="scars">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Treating Scars & Hyperpigmentation</h2>
            </div>

            <p className="text-muted-foreground mb-6">
              After acne heals, you may be left with marks. Understanding the difference between PIE, PIH, and actual scars is crucial for effective treatment.
            </p>

            <h3 className="font-serif text-xl text-purple-deep mb-4">Types of Post-Acne Marks</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-pink-50 border-l-4 border-pink-400 rounded-r-xl p-5">
                <h4 className="font-semibold text-pink-800 mb-2">PIE (Red/Pink Marks)</h4>
                <p className="text-sm text-pink-700 mb-2"><strong>Cause:</strong> Damaged blood vessels beneath the skin</p>
                <p className="text-sm text-pink-700 mb-2"><strong>Duration:</strong> 3-12 months to fade naturally</p>
                <p className="text-sm text-pink-700"><strong>Treatment:</strong> Vitamin C, niacinamide, azelaic acid</p>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
                <h4 className="font-semibold text-amber-800 mb-2">PIH (Dark Marks)</h4>
                <p className="text-sm text-amber-700 mb-2"><strong>Cause:</strong> Excess melanin production after inflammation</p>
                <p className="text-sm text-amber-700 mb-2"><strong>Duration:</strong> 6-24 months to fade</p>
                <p className="text-sm text-amber-700"><strong>Treatment:</strong> Retinoids, azelaic acid, tranexamic acid</p>
              </div>
              <div className="bg-slate-50 border-l-4 border-slate-500 rounded-r-xl p-5">
                <h4 className="font-semibold text-slate-800 mb-2">Atrophic Scars (Indented)</h4>
                <p className="text-sm text-slate-700 mb-2"><strong>Types:</strong> Ice pick, boxcar, rolling scars</p>
                <p className="text-sm text-slate-700 mb-2"><strong>Important:</strong> Cannot be treated with topicals alone</p>
                <p className="text-sm text-slate-700"><strong>Needs:</strong> Professional treatments</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Sun className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">CRITICAL: Daily SPF 30+ is ESSENTIAL</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• UV exposure darkens existing marks and prevents fading</li>
                    <li>• Use broad-spectrum SPF every day, even indoors (UVA penetrates windows)</li>
                    <li>• Reapply every 2 hours if outdoors</li>
                    <li>• This is the MOST important step - nothing else will work without sun protection</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">Evidence-Based Ingredients for PIH/PIE</h3>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-2">Niacinamide (2-5%)</h4>
                <p className="text-sm text-muted-foreground">Reduces melanin transfer to skin cells. Use morning and evening, well-tolerated. Expect improvement in 8-12 weeks.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-2">Vitamin C (L-Ascorbic Acid 10-20%)</h4>
                <p className="text-sm text-muted-foreground">Inhibits tyrosinase (melanin-producing enzyme). Morning application, use stable formulations, pair with SPF.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-2">Azelaic Acid (10-20%)</h4>
                <p className="text-sm text-muted-foreground">Tyrosinase inhibitor, anti-inflammatory. Excellent for sensitive skin. Also treats active acne - ideal for ongoing breakouts with marks.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-2">Retinoids (Tretinoin, Adapalene)</h4>
                <p className="text-sm text-muted-foreground">Gold standard for PIH treatment in darker skin tones. Start slowly (2-3x weekly), increase gradually, ALWAYS use SPF. Expect improvement in 12-24 weeks.</p>
              </div>
            </div>
          </section>

          {/* Section 9: How to Layer Actives */}
          <section id="layering">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">How to Layer Multiple Actives Safely</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              Once you've introduced actives one at a time and your skin has adjusted, you can combine them strategically. <strong>NEVER introduce multiple new actives simultaneously.</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-green-800">What CAN Be Combined</h3>
                </div>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• <strong>Niacinamide</strong> + almost anything (retinoids, vitamin C, BHA, azelaic acid)</li>
                  <li>• <strong>Azelaic acid</strong> + retinoids (use azelaic in AM, retinoid in PM)</li>
                  <li>• <strong>Benzoyl peroxide</strong> + niacinamide (BP in PM, niacinamide AM/PM)</li>
                  <li>• <strong>Salicylic acid</strong> + niacinamide (use both)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  <h3 className="font-semibold text-yellow-800">Should Be SEPARATED</h3>
                </div>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• <strong>Vitamin C (AM)</strong> + Retinoids (PM) - use at different times</li>
                  <li>• <strong>Benzoyl peroxide (PM)</strong> + Retinoids (different nights if just starting)</li>
                  <li>• <strong>AHA/BHA exfoliants</strong> + Retinoids - alternate days until skin is resilient</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="font-semibold text-red-800">What Should NOT Be Combined</h3>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• <strong>Vitamin C + Benzoyl peroxide</strong> (BP oxidises vitamin C)</li>
                <li>• <strong>Multiple strong actives</strong> if you're new to skincare (too irritating)</li>
              </ul>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">Sample Advanced Routine (After 3+ months)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-6 h-6 text-amber-500" />
                  <h4 className="font-semibold text-foreground">Morning</h4>
                </div>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Gentle cleanser</li>
                  <li>2. Vitamin C or Azelaic Acid serum</li>
                  <li>3. Niacinamide serum (optional)</li>
                  <li>4. Moisturiser</li>
                  <li>5. SPF 30+</li>
                </ol>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-center gap-2 mb-4">
                  <Moon className="w-6 h-6 text-indigo-500" />
                  <h4 className="font-semibold text-foreground">Evening</h4>
                </div>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Gentle cleanser</li>
                  <li>2. Wait 5 minutes for skin to dry</li>
                  <li>3. Retinoid (adapalene) OR Benzoyl peroxide</li>
                  <li>4. Wait 10-15 minutes</li>
                  <li>5. Moisturiser</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 10: Emergency Spot Treatment */}
          <section id="emergency">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Emergency Spot Treatment Protocol</h2>
            </div>

            <p className="text-muted-foreground mb-6">
              Got a big event tomorrow and a massive spot appeared? Here's what ACTUALLY works (and what doesn't).
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-green-800">What WORKS (Evidence-Based)</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-green-800 mb-1">1. Hydrocolloid Patches</p>
                    <p className="text-green-700">Absorb fluid, protect from picking. Apply overnight. Best for whiteheads, surface pustules.</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-800 mb-1">2. Ice (10 minutes on, 10 off)</p>
                    <p className="text-green-700">Reduces inflammation and redness. Wrap ice in clean cloth, repeat 2-3x. Best for painful, inflamed spots.</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-800 mb-1">3. Benzoyl Peroxide Spot Treatment</p>
                    <p className="text-green-700">Apply 2.5-5% directly to spot overnight. Works best on bacterial/inflamed spots.</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-800 mb-1">4. Salicylic Acid Spot Treatment</p>
                    <p className="text-green-700">Apply 2% to spot. Helps unclog and dry out. Best for whiteheads, blackheads.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h3 className="font-semibold text-red-800">What DOESN'T Work</h3>
                </div>
                <div className="space-y-2 text-sm text-red-700">
                  <p>❌ <strong>Toothpaste</strong> - Too irritating, can cause burns</p>
                  <p>❌ <strong>Lemon juice</strong> - Can burn skin, causes pigmentation</p>
                  <p>❌ <strong>Baking soda</strong> - Disrupts skin pH, too harsh</p>
                  <p>❌ <strong>Tea tree oil undiluted</strong> - Can cause severe irritation</p>
                  <p>❌ <strong>Steaming your face</strong> - Worsens inflammation</p>
                  <p>❌ <strong>Picking/squeezing</strong> - Causes scarring, spreads bacteria</p>
                </div>
              </div>
            </div>

            <div className="bg-lavender-light rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Realistic Expectations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Nothing will make a spot disappear overnight</li>
                <li>• These methods reduce redness, size, and pain</li>
                <li>• Deep, cystic spots cannot be 'emergency treated' - they need time</li>
                <li>• Prevention is always better than emergency treatment</li>
              </ul>
            </div>
          </section>

          {/* Section 11: Budget-Friendly Routines */}
          <section id="budget">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Budget-Friendly Routines (£20/month)</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              You don't need expensive products for effective acne treatment. Here's how to build a routine on a tight budget.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 mb-8">
              <h3 className="font-semibold text-green-800 mb-4">Minimum Effective Routine (£15-20/month)</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm bg-white/50 rounded-lg p-3">
                  <span className="text-muted-foreground"><strong>Gentle Cleanser:</strong> Simple Kind to Skin Refreshing Facial Wash Gel (£4 for 150ml)</span>
                  <span className="text-green-700 font-semibold">£2/month</span>
                </div>
                <div className="flex justify-between items-center text-sm bg-white/50 rounded-lg p-3">
                  <span className="text-muted-foreground"><strong>Treatment:</strong> Acnecide 5% Gel (£9-10)</span>
                  <span className="text-green-700 font-semibold">£10/month</span>
                </div>
                <div className="flex justify-between items-center text-sm bg-white/50 rounded-lg p-3">
                  <span className="text-muted-foreground"><strong>Moisturiser:</strong> Simple Kind to Skin Hydrating Light Moisturiser (£5 for 125ml)</span>
                  <span className="text-green-700 font-semibold">£2.50/month</span>
                </div>
                <div className="flex justify-between items-center text-sm bg-white/50 rounded-lg p-3">
                  <span className="text-muted-foreground"><strong>SPF:</strong> Altruist Face Fluid SPF50 (£7 for 50ml)</span>
                  <span className="text-green-700 font-semibold">£4.50/month</span>
                </div>
              </div>
              <div className="bg-green-600 text-white rounded-lg p-3 text-center">
                <span className="font-bold">Total: ~£19/month</span>
              </div>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">UK Product Shopping List</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-3">Benzoyl Peroxide</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Acnecide 5% Gel (£9-12) - Boots, Superdrug</li>
                  <li>• PanOxyl 10% Wash (£10-15) - Good for body acne</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-3">Adapalene (Retinoid)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Differin 0.1% Gel (£13-16) - Boots, online</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-3">Azelaic Acid</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Skinoren 20% Cream (£18-25) - Pharmacy</li>
                  <li>• The Ordinary Azelaic Acid 10% (£7) - Online</li>
                  <li>• Facetheory Azelaic Acid 15% (£12) - UK brand</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-3">Niacinamide</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• The Ordinary Niacinamide 10% + Zinc 1% (£5)</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-3">Salicylic Acid</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CeraVe SA Smoothing Cleanser (£10)</li>
                  <li>• The Inkey List Beta Hydroxy Acid (£10)</li>
                  <li>• Paula's Choice 2% BHA Liquid (£31) - Premium</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="font-semibold text-foreground mb-3">SPF (Essential!)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• La Roche-Posay Anthelios Ultra-Light (£18)</li>
                  <li>• Garnier Ambre Solaire UV Face Fluid (£8)</li>
                  <li>• Altruist Sunscreen SPF50 (£7/500ml) - Best value</li>
                </ul>
              </div>
            </div>

            <div className="bg-lavender-light rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-3">What You DON'T Need</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <ul className="space-y-1">
                  <li>• Toners (usually unnecessary)</li>
                  <li>• Multiple serums</li>
                  <li>• Eye creams (use your regular moisturiser)</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Expensive cleansers</li>
                  <li>• Face mists</li>
                  <li>• Sheet masks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 12: Realistic Timeline */}
          <section id="timeline">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-12 bg-gradient-to-b from-purple to-purple-light rounded-full"></div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Realistic Expectations & Timeline</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              One of the biggest mistakes is unrealistic expectations about how quickly acne will clear.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-lavender-light">
                    <th className="text-left p-4 font-semibold text-foreground">Treatment</th>
                    <th className="text-left p-4 font-semibold text-foreground">Initial Purging</th>
                    <th className="text-left p-4 font-semibold text-foreground">See Improvement</th>
                    <th className="text-left p-4 font-semibold text-foreground">Full Results</th>
                  </tr>
                </thead>
                <tbody className="bg-card">
                  <tr className="border-t border-border">
                    <td className="p-4 text-muted-foreground">OTC Benzoyl Peroxide</td>
                    <td className="p-4 text-muted-foreground">2-4 weeks</td>
                    <td className="p-4 text-muted-foreground">6-8 weeks</td>
                    <td className="p-4 text-muted-foreground">12 weeks</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-muted-foreground">OTC Adapalene/Retinoids</td>
                    <td className="p-4 text-muted-foreground">4-8 weeks (can be intense!)</td>
                    <td className="p-4 text-muted-foreground">8-12 weeks</td>
                    <td className="p-4 text-muted-foreground">16-24 weeks</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-muted-foreground">Azelaic Acid</td>
                    <td className="p-4 text-muted-foreground">1-2 weeks</td>
                    <td className="p-4 text-muted-foreground">4-6 weeks</td>
                    <td className="p-4 text-muted-foreground">8-12 weeks</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-muted-foreground">PIE (red marks)</td>
                    <td className="p-4 text-muted-foreground">—</td>
                    <td className="p-4 text-muted-foreground">3-6 months with treatment</td>
                    <td className="p-4 text-muted-foreground">Up to 12 months</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-4 text-muted-foreground">PIH (dark marks)</td>
                    <td className="p-4 text-muted-foreground">—</td>
                    <td className="p-4 text-muted-foreground">6-12 months with treatment</td>
                    <td className="p-4 text-muted-foreground">Up to 24 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-lavender-light rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3">What "Clear" Means</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Not</strong> zero pimples forever</li>
                <li>• 90%+ improvement from baseline</li>
                <li>• Occasional spot (especially hormonal) is normal</li>
                <li>• Manageable with maintenance routine</li>
              </ul>
            </div>

            <h3 className="font-serif text-xl text-purple-deep mb-4">Setting Realistic Goals</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-center">
                <p className="font-bold text-red-800 text-sm mb-1">Week 4</p>
                <p className="text-xs text-red-700">Stick with it, even if worse</p>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
                <p className="font-bold text-orange-800 text-sm mb-1">Week 8</p>
                <p className="text-xs text-orange-700">Should see SOME improvement</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-center">
                <p className="font-bold text-yellow-800 text-sm mb-1">Week 12</p>
                <p className="text-xs text-yellow-700">Noticeable difference</p>
              </div>
              <div className="bg-lime-50 border border-lime-100 rounded-xl p-4 text-center">
                <p className="font-bold text-lime-800 text-sm mb-1">Month 6</p>
                <p className="text-xs text-lime-700">Significant improvement</p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-center">
                <p className="font-bold text-green-800 text-sm mb-1">Ongoing</p>
                <p className="text-xs text-green-700">Maintenance to prevent relapse</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-purple-deep via-purple to-purple-light rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">You've Got This! 💜</h2>
            <p className="text-white/90 mb-2 text-lg">Clear skin is a journey, not a destination.</p>
            <p className="text-white/80 mb-8">Be patient. Be consistent. Trust the process.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-purple-deep hover:bg-white/90">
                <Link to="/booking">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/guides">View All Guides</Link>
              </Button>
            </div>

            <p className="text-white/60 text-sm mt-8">
              Based on NICE NG198 & British Association of Dermatologists Guidelines © ReSKN Clinic 2025
            </p>
          </section>

        </div>
      </div>
    </>
  );
};

export default AcneGuide;
