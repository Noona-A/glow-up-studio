import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Clock, Sparkles, ShieldCheck, Heart, AlertCircle, Pill, Droplets, Sun, Moon, ChevronRight, BookOpen, FlaskConical, Calendar, Zap, ShoppingBag, Timer } from "lucide-react";
import SEO from "@/components/SEO";

const sections = [
  { id: "understanding", label: "Understanding Acne", icon: BookOpen },
  { id: "treatments", label: "Treatments", icon: FlaskConical },
  { id: "routine", label: "Your Routine", icon: Sun },
  { id: "prescription", label: "Prescription Help", icon: Pill },
  { id: "mistakes", label: "Common Mistakes", icon: XCircle },
  { id: "action-plan", label: "12-Week Plan", icon: Calendar },
  { id: "purging", label: "Purging vs Breakouts", icon: AlertCircle },
  { id: "scars", label: "Scars & Marks", icon: Heart },
  { id: "layering", label: "Layering Actives", icon: Zap },
  { id: "emergency", label: "Emergency Treatment", icon: AlertTriangle },
  { id: "budget", label: "Budget Routines", icon: ShoppingBag },
  { id: "timeline", label: "Timeline", icon: Timer },
];

// Section content components
const UnderstandingContent = () => (
  <div className="space-y-6">
    <div>
      <h3 className="font-semibold text-lg text-foreground mb-3">What Causes Acne?</h3>
      <p className="text-muted-foreground mb-4 text-sm">
        Acne develops when four key factors come together:
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="bg-lavender-light/50 border-l-4 border-purple rounded-r-lg p-3">
          <h4 className="font-medium text-foreground text-sm mb-1">Excess sebum</h4>
          <p className="text-xs text-muted-foreground">Overproduction of oil, often hormone-triggered</p>
        </div>
        <div className="bg-lavender-light/50 border-l-4 border-purple-light rounded-r-lg p-3">
          <h4 className="font-medium text-foreground text-sm mb-1">Blocked pores</h4>
          <p className="text-xs text-muted-foreground">Dead skin cells clog pores</p>
        </div>
        <div className="bg-lavender-light/50 border-l-4 border-lavender-glow rounded-r-lg p-3">
          <h4 className="font-medium text-foreground text-sm mb-1">C. acnes bacteria</h4>
          <p className="text-xs text-muted-foreground">Bacteria multiply in clogged pores</p>
        </div>
        <div className="bg-blush/30 border-l-4 border-pink-300 rounded-r-lg p-3">
          <h4 className="font-medium text-foreground text-sm mb-1">Inflammation</h4>
          <p className="text-xs text-muted-foreground">Immune response creates redness</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-foreground mb-3">Types of Acne Lesions</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Non-Inflammatory</h4>
          <div className="space-y-2">
            <div className="bg-muted/50 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-purple/15 text-purple-deep text-xs font-medium px-2 py-0.5 rounded-full">Blackheads</span>
              <p className="text-xs text-muted-foreground">Open, dark due to oxidation</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-purple/15 text-purple-deep text-xs font-medium px-2 py-0.5 rounded-full">Whiteheads</span>
              <p className="text-xs text-muted-foreground">Closed, small white bumps</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Inflammatory</h4>
          <div className="space-y-2">
            <div className="bg-blush/30 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-pink-100 text-pink-700 text-xs font-medium px-2 py-0.5 rounded-full">Papules</span>
              <p className="text-xs text-muted-foreground">Red, tender, no pus</p>
            </div>
            <div className="bg-blush/30 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-pink-100 text-pink-700 text-xs font-medium px-2 py-0.5 rounded-full">Pustules</span>
              <p className="text-xs text-muted-foreground">Red with white/yellow pus</p>
            </div>
            <div className="bg-blush/30 rounded-lg p-2 flex items-center gap-2">
              <span className="bg-pink-200 text-pink-800 text-xs font-medium px-2 py-0.5 rounded-full">Nodules/Cysts</span>
              <p className="text-xs text-muted-foreground">Deep, painful, scar risk</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-foreground mb-3">Severity</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="bg-green-50/80 border border-green-200 rounded-xl p-3">
          <h4 className="font-semibold text-green-800 text-sm mb-1">Mild to Moderate</h4>
          <p className="text-xs text-green-700">Up to 34 papules/pustules, any comedones</p>
        </div>
        <div className="bg-red-50/80 border border-red-200 rounded-xl p-3">
          <h4 className="font-semibold text-red-800 text-sm mb-1">Moderate to Severe</h4>
          <p className="text-xs text-red-700">35+ lesions, nodules/cysts, scarring risk</p>
        </div>
      </div>
    </div>
  </div>
);

const TreatmentsContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      NICE-recommended treatments. OTC options can be very effective for mild-moderate acne.
    </p>

    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-foreground text-sm">Benzoyl Peroxide (2.5-10%)</h3>
        <span className="bg-purple/10 text-purple-deep text-xs font-medium px-2 py-0.5 rounded-full">Gold Standard</span>
      </div>
      <p className="text-xs text-muted-foreground mb-2">Kills bacteria, reduces inflammation. Start with 2.5%, once daily.</p>
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-2 flex items-start gap-2">
        <AlertTriangle className="w-3 h-3 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800">Bleaches fabric — use white towels/pillowcases!</p>
      </div>
    </div>

    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-foreground text-sm">Adapalene (Retinoid) 0.1%</h3>
        <span className="bg-purple/10 text-purple-deep text-xs font-medium px-2 py-0.5 rounded-full">NICE Recommended</span>
      </div>
      <p className="text-xs text-muted-foreground mb-2">Normalises cell turnover, prevents clogged pores. Start 2-3x weekly at night.</p>
      <div className="bg-red-50/80 border border-red-200 rounded-lg p-2 flex items-start gap-2">
        <XCircle className="w-3 h-3 text-red-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-red-800">Contraindicated in pregnancy. Use SPF daily.</p>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 gap-3">
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm mb-1">Salicylic Acid 0.5-2%</h3>
        <p className="text-xs text-muted-foreground">Exfoliates pores, dissolves oil. Best for blackheads/whiteheads.</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm mb-1">Azelaic Acid 10-20%</h3>
        <p className="text-xs text-muted-foreground">Antibacterial, fades dark marks. Good for sensitive skin.</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm mb-1">Niacinamide 2-10%</h3>
        <p className="text-xs text-muted-foreground">Reduces sebum and inflammation. Pairs well with most actives.</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm mb-1">Alpha Hydroxy Acids</h3>
        <p className="text-xs text-muted-foreground">Surface exfoliation, improves texture and mild PIH.</p>
      </div>
    </div>
  </div>
);

const RoutineContent = () => (
  <div className="space-y-6">
    <div className="bg-lavender-light/50 rounded-xl p-4 mb-4">
      <h3 className="font-semibold text-foreground mb-2 text-sm">Golden Rules</h3>
      <ul className="text-xs text-muted-foreground space-y-1">
        <li className="flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" /> Introduce one new active at a time</li>
        <li className="flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" /> Wait 4-6 weeks before adding another</li>
        <li className="flex items-start gap-2"><CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" /> SPF is non-negotiable with any active</li>
      </ul>
    </div>

    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sun className="w-5 h-5 text-amber-600" />
          <h3 className="font-semibold text-amber-900">Morning</h3>
        </div>
        <ol className="text-xs text-amber-800 space-y-2">
          <li><span className="font-medium">1.</span> Gentle cleanser</li>
          <li><span className="font-medium">2.</span> Niacinamide or Azelaic Acid</li>
          <li><span className="font-medium">3.</span> Lightweight moisturiser</li>
          <li><span className="font-medium">4.</span> SPF 30-50</li>
        </ol>
      </div>

      <div className="bg-indigo-50/80 border border-indigo-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Moon className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-indigo-900">Evening</h3>
        </div>
        <ol className="text-xs text-indigo-800 space-y-2">
          <li><span className="font-medium">1.</span> Double cleanse if wearing SPF</li>
          <li><span className="font-medium">2.</span> Treatment (BP or Adapalene)</li>
          <li><span className="font-medium">3.</span> Moisturiser</li>
        </ol>
      </div>
    </div>
  </div>
);

const PrescriptionContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground">
      See your GP or dermatologist if OTC treatments haven't worked after 12 weeks.
    </p>

    <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4">
      <h3 className="font-semibold text-purple-900 mb-2 text-sm">When to Seek Help</h3>
      <ul className="text-xs text-purple-800 space-y-1">
        <li>• Moderate-severe acne not responding to OTC</li>
        <li>• Nodules or cysts present</li>
        <li>• Acne causing scarring</li>
        <li>• Significant psychological impact</li>
      </ul>
    </div>

    <div className="space-y-3">
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Topical Antibiotics</h3>
        <p className="text-xs text-muted-foreground">Clindamycin, erythromycin — always with BP to prevent resistance</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Oral Antibiotics</h3>
        <p className="text-xs text-muted-foreground">Lymecycline, doxycycline — 3-month courses typical</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Combined Oral Contraceptives</h3>
        <p className="text-xs text-muted-foreground">For hormonal acne in women — Dianette, Yasmin</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Isotretinoin (Roaccutane)</h3>
        <p className="text-xs text-muted-foreground">Dermatologist-only — for severe/scarring acne</p>
      </div>
    </div>
  </div>
);

const MistakesContent = () => (
  <div className="space-y-3">
    <p className="text-sm text-muted-foreground mb-4">
      Avoid these common pitfalls that can make acne worse or delay results.
    </p>

    {[
      { mistake: "Using too many actives at once", fix: "Introduce one at a time, 4-6 weeks apart" },
      { mistake: "Stopping treatment when it starts working", fix: "Maintenance is key — continue long-term" },
      { mistake: "Not using SPF with actives", fix: "SPF 30+ daily, especially with retinoids/AHAs" },
      { mistake: "Over-cleansing or using harsh products", fix: "Gentle cleanser twice daily max" },
      { mistake: "Picking and squeezing", fix: "Increases scarring and spreading — hands off!" },
      { mistake: "Expecting overnight results", fix: "Allow 8-12 weeks for significant improvement" },
      { mistake: "Skipping moisturiser because skin is oily", fix: "Moisturise to maintain barrier — choose lightweight" },
    ].map((item, index) => (
      <div key={index} className="bg-card border border-border rounded-xl p-3 flex gap-3">
        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-foreground">{item.mistake}</p>
          <p className="text-xs text-muted-foreground">{item.fix}</p>
        </div>
      </div>
    ))}
  </div>
);

const ActionPlanContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      A structured approach to introducing treatments and tracking progress.
    </p>

    {[
      { weeks: "1-2", title: "Foundation", tasks: ["Start gentle cleanser + moisturiser", "Introduce SPF if not using", "Track baseline photos"] },
      { weeks: "3-4", title: "First Active", tasks: ["Add benzoyl peroxide 2.5% OR salicylic acid", "Start every other night", "Note any irritation"] },
      { weeks: "5-8", title: "Build Tolerance", tasks: ["Increase to nightly if tolerated", "Add niacinamide AM if desired", "Continue tracking progress"] },
      { weeks: "9-12", title: "Assess & Adjust", tasks: ["Evaluate improvement", "Consider adding retinoid if needed", "Consult GP if no progress"] },
    ].map((phase, index) => (
      <div key={index} className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">Weeks {phase.weeks}</span>
          <h3 className="font-semibold text-foreground text-sm">{phase.title}</h3>
        </div>
        <ul className="text-xs text-muted-foreground space-y-1">
          {phase.tasks.map((task, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
              {task}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const PurgingContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Learn to distinguish between a normal adjustment period and a bad reaction.
    </p>

    <div className="grid sm:grid-cols-2 gap-4">
      <div className="bg-green-50/80 border border-green-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <h3 className="font-semibold text-green-900 text-sm">Purging</h3>
        </div>
        <ul className="text-xs text-green-800 space-y-1">
          <li>• Only with cell-turnover actives (retinoids, AHAs, BHAs)</li>
          <li>• Breakouts in your usual spots</li>
          <li>• Faster healing lesions</li>
          <li>• Improves within 4-6 weeks</li>
          <li>• No new allergy symptoms</li>
        </ul>
      </div>

      <div className="bg-red-50/80 border border-red-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <XCircle className="w-5 h-5 text-red-600" />
          <h3 className="font-semibold text-red-900 text-sm">Bad Reaction</h3>
        </div>
        <ul className="text-xs text-red-800 space-y-1">
          <li>• From products that don't increase turnover</li>
          <li>• Breakouts in new areas</li>
          <li>• Itching, burning, rashes</li>
          <li>• Gets worse after 6 weeks</li>
          <li>• Excessive dryness or peeling</li>
        </ul>
      </div>
    </div>

    <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3">
      <p className="text-xs text-amber-800"><strong>If in doubt:</strong> Stop the product and see if skin improves within 1-2 weeks.</p>
    </div>
  </div>
);

const ScarsContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Understanding the difference between temporary marks and permanent scarring.
    </p>

    <div className="space-y-3">
      <div className="bg-pink-50/80 border border-pink-200 rounded-xl p-4">
        <h3 className="font-semibold text-pink-900 text-sm mb-2">PIE (Post-Inflammatory Erythema)</h3>
        <p className="text-xs text-pink-800 mb-2">Red/pink marks from damaged blood vessels. More common in lighter skin.</p>
        <p className="text-xs text-pink-700"><strong>Treatments:</strong> Azelaic acid, niacinamide, SPF, time (3-6 months)</p>
      </div>

      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4">
        <h3 className="font-semibold text-amber-900 text-sm mb-2">PIH (Post-Inflammatory Hyperpigmentation)</h3>
        <p className="text-xs text-amber-800 mb-2">Brown/dark marks from excess melanin. More common in darker skin.</p>
        <p className="text-xs text-amber-700"><strong>Treatments:</strong> Vitamin C, azelaic acid, retinoids, SPF critical</p>
      </div>

      <div className="bg-purple-50/80 border border-purple-200 rounded-xl p-4">
        <h3 className="font-semibold text-purple-900 text-sm mb-2">Atrophic Scars (Indented)</h3>
        <p className="text-xs text-purple-800 mb-2">Ice pick, boxcar, rolling scars — from collagen loss.</p>
        <p className="text-xs text-purple-700"><strong>Treatments:</strong> Professional only — microneedling, laser, fillers</p>
      </div>
    </div>
  </div>
);

const LayeringContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Safe combinations and what to avoid.
    </p>

    <div className="bg-green-50/80 border border-green-200 rounded-xl p-4 mb-3">
      <h3 className="font-semibold text-green-900 text-sm mb-2 flex items-center gap-2">
        <CheckCircle className="w-4 h-4" /> Safe Combinations
      </h3>
      <ul className="text-xs text-green-800 space-y-1">
        <li>• Niacinamide + most actives (very versatile)</li>
        <li>• Hyaluronic acid + anything</li>
        <li>• Benzoyl peroxide AM + Retinoid PM</li>
        <li>• Azelaic acid + Niacinamide</li>
      </ul>
    </div>

    <div className="bg-red-50/80 border border-red-200 rounded-xl p-4 mb-3">
      <h3 className="font-semibold text-red-900 text-sm mb-2 flex items-center gap-2">
        <XCircle className="w-4 h-4" /> Avoid Together
      </h3>
      <ul className="text-xs text-red-800 space-y-1">
        <li>• Retinoids + AHAs/BHAs (same routine)</li>
        <li>• Benzoyl peroxide + Vitamin C</li>
        <li>• Multiple acids at once</li>
        <li>• Retinoids + Benzoyl peroxide (same time)</li>
      </ul>
    </div>

    <div className="bg-card border border-border rounded-xl p-3">
      <p className="text-xs text-muted-foreground"><strong>Tip:</strong> When in doubt, alternate nights or use one AM and one PM.</p>
    </div>
  </div>
);

const EmergencyContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Quick fixes for sudden breakouts before important events.
    </p>

    <div className="space-y-3">
      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="font-semibold text-foreground text-sm mb-2">For a Red, Angry Spot</h3>
        <ol className="text-xs text-muted-foreground space-y-1">
          <li><span className="font-medium">1.</span> Ice for 1-2 minutes to reduce swelling</li>
          <li><span className="font-medium">2.</span> Benzoyl peroxide 2.5% spot treatment</li>
          <li><span className="font-medium">3.</span> Pimple patch overnight (hydrocolloid)</li>
        </ol>
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="font-semibold text-foreground text-sm mb-2">For a Cyst or Nodule</h3>
        <ol className="text-xs text-muted-foreground space-y-1">
          <li><span className="font-medium">1.</span> Do NOT squeeze — will make it worse</li>
          <li><span className="font-medium">2.</span> Warm compress to draw it out</li>
          <li><span className="font-medium">3.</span> Consider cortisone injection (dermatologist)</li>
        </ol>
      </div>

      <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3">
        <p className="text-xs text-amber-800"><strong>Never:</strong> Use toothpaste, lemon, baking soda — these are irritating and ineffective.</p>
      </div>
    </div>
  </div>
);

const BudgetContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Effective skincare doesn't have to be expensive. UK pharmacy options.
    </p>

    <div className="space-y-3">
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Cleanser</h3>
        <p className="text-xs text-muted-foreground">CeraVe Foaming Cleanser, Simple Refreshing Gel Wash (~£8-10)</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Benzoyl Peroxide</h3>
        <p className="text-xs text-muted-foreground">Acnecide 5% Gel — pharmacy-only (~£10)</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Retinoid</h3>
        <p className="text-xs text-muted-foreground">La Roche-Posay Effaclar Adapalene — pharmacy-only (~£15)</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">Moisturiser</h3>
        <p className="text-xs text-muted-foreground">CeraVe PM, Simple Light Moisturiser (~£10-12)</p>
      </div>
      <div className="bg-card border border-border rounded-xl p-3">
        <h3 className="font-semibold text-foreground text-sm">SPF</h3>
        <p className="text-xs text-muted-foreground">Garnier Ambre Solaire Face Fluid, Altruist SPF50 (~£5-10)</p>
      </div>
    </div>

    <div className="bg-purple-50/80 border border-purple-200 rounded-lg p-3">
      <p className="text-xs text-purple-800"><strong>Total basic routine:</strong> £40-50 for 2-3 months of products</p>
    </div>
  </div>
);

const TimelineContent = () => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground mb-4">
      Realistic expectations for treatment progress.
    </p>

    <div className="space-y-3">
      {[
        { time: "Week 1-2", status: "Adjustment", desc: "Possible initial irritation, dryness. This is normal." },
        { time: "Week 3-4", status: "Purging possible", desc: "Skin may look worse before better with retinoids/acids." },
        { time: "Week 6-8", status: "First improvements", desc: "Fewer new breakouts, existing ones healing faster." },
        { time: "Week 10-12", status: "Visible progress", desc: "Clearer skin, reduced inflammation." },
        { time: "Month 4-6", status: "Significant improvement", desc: "Most mild-moderate acne well-controlled." },
        { time: "Ongoing", status: "Maintenance", desc: "Continue routine to prevent recurrence." },
      ].map((item, index) => (
        <div key={index} className="bg-card border border-border rounded-xl p-3 flex gap-3">
          <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full h-fit whitespace-nowrap">{item.time}</div>
          <div>
            <p className="text-sm font-medium text-foreground">{item.status}</p>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-lavender-light/50 rounded-lg p-3">
      <p className="text-xs text-muted-foreground"><strong>Remember:</strong> Everyone's skin is different. Some see faster results, others need more time.</p>
    </div>
  </div>
);

const sectionContent: Record<string, { title: string; description: string; component: React.ReactNode }> = {
  understanding: {
    title: "Understanding Your Acne",
    description: "Learn what causes acne, the different types of lesions, and how to assess severity.",
    component: <UnderstandingContent />,
  },
  treatments: {
    title: "Evidence-Based Treatments",
    description: "NICE-recommended treatments including over-the-counter and prescription options.",
    component: <TreatmentsContent />,
  },
  routine: {
    title: "Building Your Routine",
    description: "Morning and evening routines with evidence-based active ingredients.",
    component: <RoutineContent />,
  },
  prescription: {
    title: "When to Seek Prescription Help",
    description: "Signs you need professional help and what treatments are available.",
    component: <PrescriptionContent />,
  },
  mistakes: {
    title: "Common Mistakes to Avoid",
    description: "Pitfalls that can delay progress or make acne worse.",
    component: <MistakesContent />,
  },
  "action-plan": {
    title: "12-Week Action Plan",
    description: "A structured approach to introducing treatments and tracking progress.",
    component: <ActionPlanContent />,
  },
  purging: {
    title: "Purging vs Bad Reactions",
    description: "How to tell if your skin is adjusting or if a product isn't right for you.",
    component: <PurgingContent />,
  },
  scars: {
    title: "Treating Scars & Marks",
    description: "Understanding PIE, PIH, and permanent scarring — and what helps.",
    component: <ScarsContent />,
  },
  layering: {
    title: "Layering Actives Safely",
    description: "Which ingredients can be used together and what to keep separate.",
    component: <LayeringContent />,
  },
  emergency: {
    title: "Emergency Spot Treatment",
    description: "Quick fixes for sudden breakouts before important events.",
    component: <EmergencyContent />,
  },
  budget: {
    title: "Budget-Friendly Routines",
    description: "Effective UK pharmacy products that won't break the bank.",
    component: <BudgetContent />,
  },
  timeline: {
    title: "Realistic Timeline",
    description: "What to expect week by week when starting treatment.",
    component: <TimelineContent />,
  },
};

const AcneGuide = () => {
  const [activeSection, setActiveSection] = useState("understanding");

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

  const currentContent = sectionContent[activeSection];
  const SectionIcon = sections.find(s => s.id === activeSection)?.icon || BookOpen;

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
        <div className="bg-gradient-to-br from-purple-deep via-purple to-purple-light py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-5xl">
            <Link
              to="/guides"
              className="inline-flex items-center text-sm text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3 text-white">
              The Complete Acne Guide
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl">
              Evidence-based treatment following UK clinical guidelines.
            </p>
            <p className="text-xs text-white/60 mt-2">
              Based on NICE NG198 & British Association of Dermatologists Guidelines
            </p>
          </div>
        </div>

        {/* Main Content with Tab Layout */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-3">
                  Comprehensive Guide
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                  Everything you need to know
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                  Select a topic below to learn more. All information follows UK clinical guidelines.
                </p>
              </div>

              <div className="grid md:grid-cols-[220px_1fr] gap-6">
                {/* Tab Buttons - Vertical on desktop, horizontal scroll on mobile */}
                <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 flex-shrink-0 md:flex-shrink ${
                          activeSection === section.id
                            ? 'bg-primary text-white shadow-md'
                            : 'bg-card hover:bg-accent text-foreground border border-border'
                        }`}
                      >
                        <Icon className={`w-4 h-4 flex-shrink-0 ${activeSection === section.id ? 'text-white' : 'text-primary'}`} />
                        <span className="font-medium text-sm whitespace-nowrap">{section.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Content Area */}
                <div className="card-luxury p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <SectionIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl">{currentContent.title}</h3>
                      <p className="text-xs text-muted-foreground">{currentContent.description}</p>
                    </div>
                  </div>
                  
                  {currentContent.component}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-section-gradient">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Need personalised advice?
            </h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Book a consultation to discuss your skin concerns with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-luxury">
                <Link to="/booking">
                  Book Consultation <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/guides">
                  Explore More Guides
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AcneGuide;
