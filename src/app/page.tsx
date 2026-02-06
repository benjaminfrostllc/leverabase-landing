'use client'

import { useState } from 'react'
import { Check, ArrowRight, Building2, CreditCard, Shield, Zap, ChevronDown, Star, Sparkles, FileText, Eye, BadgeCheck, Clock, HeartHandshake, Smartphone, Mail } from 'lucide-react'

// How it works steps
const steps = [
  {
    number: '01',
    title: 'We Uncover What\'s Holding You Back',
    description: 'Your credit report tells a story — but not always the truth. We dive deep into all three major bureaus and beyond, uncovering inaccuracies, outdated information, and items that shouldn\'t be there. Most people are surprised by what we find.'
  },
  {
    number: '02',
    title: 'A Strategy Built Just for You',
    description: 'No two credit situations are alike. We build a personalized attack plan using proven legal frameworks that creditors and bureaus must respond to. Every letter, every dispute, every move is calculated for maximum impact on your specific profile.'
  },
  {
    number: '03',
    title: 'We Fight While You Live Your Life',
    description: 'This is where most people give up — the back-and-forth, the waiting, the paperwork. Not anymore. We handle every response, every escalation, every follow-up. You just watch the progress unfold through your personal portal.'
  },
  {
    number: '04',
    title: 'Watch Your Score Transform',
    description: 'There\'s nothing quite like watching negative items disappear from your report. Doors that were closed start opening — better rates, approvals, opportunities. This is the moment everything changes.'
  }
]

// Pricing plans (main 3)
const plans = [
  {
    name: 'Three Bureau Cleaner',
    description: 'Experian, Equifax & TransUnion',
    price: '$1,500',
    period: 'One-time payment',
    features: [
      'Experian cleaning',
      'Equifax cleaning',
      'TransUnion cleaning',
      'Real-time portal access',
      'Email & chat support'
    ],
    popular: false,
    highlightLastFeature: false,
    link: 'https://book.stripe.com/14AbITcHL3PB6M525GfQI00'
  },
  {
    name: 'Complete',
    description: 'Full credit restoration',
    price: '$2,500',
    period: 'Or $417/mo for 6 months',
    features: [
      'All 3 major bureaus',
      'Secondary bureaus included',
      'LexisNexis cleaning',
      'Unlimited support'
    ],
    popular: false,
    highlightLastFeature: false,
    link: 'https://book.stripe.com/dRm9AL4bfeuf2vPfWwfQI01'
  },
  {
    name: 'Business Builder',
    description: 'Credit + funding package',
    price: '$6,500',
    period: 'Or $1,083/mo for 6 months',
    features: [
      'Everything in Complete',
      'ChexSystems & Early Warning cleaning',
      'Tradelines + credit history (included & set up for you)',
      'LLC & EIN setup help',
      'Business structuring & online presence setup',
      '$30K+ funding guarantee'
    ],
    popular: false,
    highlightLastFeature: true,
    link: 'https://book.stripe.com/7sY3cn6jnfyj6M5cKkfQI02'
  }
]

// ChexSystems add-on
const chexSystemsPlan = {
  name: 'ChexSystems & Early Warning',
  description: 'Banking report cleaning',
  price: '$500',
  period: 'One-time payment',
  features: [
    'ChexSystems cleaning',
    'Early Warning cleaning'
  ]
}

// Testimonials
const testimonials = [
  {
    quote: "After my divorce, I was left with 7 collections and 2 charge offs that tanked my score to 512. I thought I'd be stuck renting forever. Six months with Leverabase and I'm at 724. Just got approved for a $15K credit card and I'm pre approved for a mortgage. For the first time in years, I see a future.",
    name: 'Mikey T.',
    location: 'Atlanta, GA',
    result: '512 to 724',
    highlight: '+212 points'
  },
  {
    quote: "I've been burned by 3 different credit repair companies. They all sent the same generic templates and nothing happened. Leverabase was different. I could literally watch disputes being filed through my portal. They removed 11 negative items including a $12K medical collection I thought would haunt me for 7 years. Paid for itself 100x over.",
    name: 'Jennifer R.',
    location: 'Houston, TX',
    result: '11 items removed',
    highlight: '$12K collection gone'
  },
  {
    quote: "My wife and I had given up on buying a home. Both of us in the high 500s with old student loan issues and a car repo from 2020. Leverabase got us both above 720 in 5 months. Our lender said he'd never seen a turnaround like that. We closed on our first home last month. 3 bedrooms, backyard for the kids. Still doesn't feel real.",
    name: 'David & Lisa M.',
    location: 'Phoenix, AZ',
    result: '580s to 720+',
    highlight: 'First home owners'
  },
  {
    quote: "The Business Builder package changed my life. They cleaned up my personal credit (went from 540 to 764), set up my LLC properly, and helped me secure $80K in business credit cards at 0% interest. In 8 months I was able to double the amount of trucks I own for my business. Best investment I've ever made.",
    name: 'Anthony W.',
    location: 'Chicago, IL',
    result: '$80K in funding',
    highlight: 'Business doubled'
  },
  {
    quote: "Chapter 7 bankruptcy in 2019. I thought my financial life was over at 34. They couldn't remove the bankruptcy itself, but they cleaned up EVERYTHING around it. Late payments, collections, the works. Went from 489 to 648. Just financed a reliable car for my family. I can finally breathe again.",
    name: 'Keisha B.',
    location: 'Miami, FL',
    result: '489 to 648',
    highlight: 'Post bankruptcy recovery'
  },
  {
    quote: "Single mom, tight budget, skeptical of everything. The 0% payment plan made it possible. They removed 9 negatives including a $8K repo that was destroying my score. Went from 520 to 672. Just got approved for an apartment in a safe neighborhood for my daughter. Worth every single penny.",
    name: 'Tanya S.',
    location: 'Dallas, TX',
    result: '9 items removed',
    highlight: '520 to 672'
  }
]

// Guarantees
const guarantees = [
  { icon: Zap, title: 'Industry-Leading Tech', description: 'Powered by cutting-edge AI and proven strategies that get results.' },
  { icon: HeartHandshake, title: 'Unlimited Support', description: 'Email, text, and Zoom support throughout your journey.' },
  { icon: Clock, title: 'Quarterly Check-ins', description: '12-month protection with quarterly re-evaluations.' },
  { icon: Eye, title: 'Real-Time Updates', description: 'Watch progress after each dispute round in your portal.' },
  { icon: FileText, title: 'FCRA-Grounded', description: 'Bespoke dispute letters using proven legal frameworks.' },
  { icon: CreditCard, title: '0% Financing', description: '6-month payment plans, no credit check required.' }
]

function StepAccordion({ step, isOpen, onToggle }: { step: typeof steps[0], isOpen: boolean, onToggle: () => void }) {
  return (
    <div className="group relative rounded-2xl transition-all duration-300">
      {/* Glow effect border - shows on hover OR when open */}
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] transition-opacity duration-300 blur-[2px] ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

      {/* Card content */}
      <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#141B2D]' : 'bg-[#0A0F1C] group-hover:bg-[#141B2D]'}`}>
        <button
          onClick={onToggle}
          className="w-full p-6 flex items-center justify-between cursor-pointer text-left"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#A855F7] to-[#2563EB] bg-clip-text text-transparent">{step.number}</span>
            <span className="text-lg font-semibold text-white">{step.title}</span>
          </div>
          <ChevronDown className={`w-5 h-5 text-[#A855F7] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100'}`}>
          <p className="px-6 pb-6 text-gray-400 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [openStep, setOpenStep] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0A0F1C]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-purple-500/10" style={{background: 'linear-gradient(to right, rgba(10, 15, 28, 0.95) 0%, rgba(26, 16, 48, 0.9) 50%, rgba(88, 28, 135, 0.85) 80%, rgba(37, 99, 235, 0.8) 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Leverabase" className="w-14 h-14 object-contain" />
              <span className="text-3xl font-bold text-white">Leverabase</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition">Results</a>
              <a href="#guarantees" className="text-gray-400 hover:text-white transition">Guarantees</a>
            </div>
            <a href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 overflow-hidden">
        {/* Electric grid background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-35"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 59px, #A855F7 59px, #A855F7 60px),
              repeating-linear-gradient(90deg, transparent, transparent 59px, #2563EB 59px, #2563EB 60px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)'
          }}
        />
        {/* Glow layer */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-25 blur-sm"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 58px, #A855F7 58px, #A855F7 62px),
              repeating-linear-gradient(90deg, transparent, transparent 58px, #2563EB 58px, #2563EB 62px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)'
          }}
        />

        {/* Background glow effects */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#2563EB]/20 rounded-full blur-3xl z-0" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#A855F7]/20 rounded-full blur-3xl z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-3">
              <Shield className="w-4 h-4 text-[#A855F7]" />
              <span className="text-sm text-gray-300">Credit Restoration & Financial Freedom</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
              Clean Credit.
              <br />
              <span className="bg-gradient-to-r from-[#A855F7] to-[#2563EB] bg-clip-text text-transparent">Unlock Your Future.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 mb-4 max-w-2xl mx-auto">
              Dedicated to helping individuals and businesses
              <br />
              achieve financial freedom through credit restoration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing" className="w-full sm:w-auto bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 shadow-[0_0_60px_rgba(0,102,255,0.3)]">
                View Packages
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-[#A855F7] font-medium mb-1 text-sm">YOUR JOURNEY</p>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-[#A855F7] to-[#2563EB] bg-clip-text text-transparent">
              The Path to Clean Credit
            </h2>
          </div>

          <div className="space-y-3">
            {steps.map((step, i) => (
              <StepAccordion
                key={i}
                step={step}
                isOpen={openStep === i}
                onToggle={() => setOpenStep(openStep === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#A855F7] to-[#2563EB] bg-clip-text text-transparent mb-4">
            Ready for Financial Freedom?
          </h2>
          <p className="text-gray-400 mb-8">
            Personal credit, business credit, or both. Start with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 shadow-[0_0_60px_rgba(37,99,235,0.3)]">
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-500 mt-4 text-sm">
            Or email <a href="mailto:contact@leverabase.com" className="text-[#A855F7] hover:underline">contact@leverabase.com</a>
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-[#141B2D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#A855F7] font-medium mb-2">SIMPLE PRICING</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#A855F7] to-[#2563EB] bg-clip-text text-transparent mb-4">
              Choose Your Path
            </h2>
            <p className="text-gray-400">
              Not sure which is right? Book a free consultation and we&apos;ll recommend the best option.
            </p>
          </div>

          {/* Main 3 pricing cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Glow effect border on hover */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative rounded-2xl p-8 bg-[#0A0F1C] group-hover:bg-[#141B2D] transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">{plan.period}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#A855F7] flex-shrink-0 mt-0.5" />
                        <span className={plan.highlightLastFeature && j === plan.features.length - 1 ? "text-yellow-400 font-medium" : "text-white"}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 rounded-xl font-semibold transition bg-white/10 text-white hover:bg-white/20"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary cards - ChexSystems & Free Consultation */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
            {/* ChexSystems add-on card */}
            <div className="rounded-xl p-4 bg-[#141B2D] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-white">{chexSystemsPlan.name}</h3>
                <span className="text-xl font-bold text-white">{chexSystemsPlan.price}</span>
              </div>
              <p className="text-gray-500 text-xs mb-3">{chexSystemsPlan.period}</p>
              <ul className="space-y-1.5 mb-4 flex-1">
                {chexSystemsPlan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                    <span className="text-gray-300 text-xs">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://book.stripe.com/fZubIT5fjfyjfiB9y8fQI03"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 rounded-lg text-sm font-medium transition bg-white/10 text-white hover:bg-white/20"
              >
                Get Started
              </a>
            </div>

            {/* Free consultation card */}
            <div className="rounded-xl p-4 bg-[#141B2D] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-semibold text-white">Free Consultation</h3>
                <span className="text-xl font-bold text-white">$0</span>
              </div>
              <p className="text-gray-500 text-xs mb-3">No obligation</p>
              <ul className="space-y-1.5 mb-4 flex-1">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                  <span className="text-gray-300 text-xs">Personalized recommendation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                  <span className="text-gray-300 text-xs">Credit situation review</span>
                </li>
              </ul>
              <a
                href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 rounded-lg text-sm font-medium transition bg-white/10 text-white hover:bg-white/20"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Starter card - full width */}
          <div className="max-w-5xl mx-auto mt-6">
            <div className="rounded-xl p-4 bg-[#141B2D] border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-base font-semibold text-white">Starter</h3>
                  <span className="text-xl font-bold text-white">$500</span>
                </div>
                <p className="text-gray-500 text-xs mb-2">One-time payment — Single bureau cleaning</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                    <span className="text-gray-300 text-xs">Single bureau cleaning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                    <span className="text-gray-300 text-xs">Real-time portal access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                    <span className="text-gray-300 text-xs">Email & chat support</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://book.stripe.com/14AbITcHL3PB6M525GfQI00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2 px-6 rounded-lg text-sm font-medium transition bg-white/10 text-white hover:bg-white/20 whitespace-nowrap"
              >
                Get Started
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Payment plans at 0% interest. BNPL: Affirm, Klarna, Afterpay & more.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#A855F7] font-medium mb-2">REAL RESULTS</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#A855F7] to-[#2563EB] bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-[#141B2D] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#A855F7] text-[#A855F7]" />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {testimonial.highlight}
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="bg-[#A855F7]/10 text-[#A855F7] text-sm font-semibold px-3 py-1 rounded-full">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="guarantees" className="py-16 bg-[#141B2D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#A855F7] font-medium mb-2">OUR COMMITMENT</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#A855F7] to-[#2563EB] bg-clip-text text-transparent">
              Guarantees & Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {guarantees.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="bg-[#0A0F1C] border border-white/5 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#A855F7]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#A855F7]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* App Coming Soon Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#141B2D] to-[#0A0F1C] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-[#A855F7]/10 text-[#A855F7] rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <Smartphone className="w-4 h-4" />
              Coming Soon
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Leverabase App
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Track disputes, watch deletions in real-time, chat with your specialist, and manage your credit journey from one app.
            </p>
            <a href="https://leverabase.app" className="inline-flex items-center gap-2 text-[#A855F7] hover:text-white transition font-medium">
              Explore <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Leverabase" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-white">Leverabase</span>
            </div>

            <p className="text-gray-500 text-sm">
              Credit Restoration & Financial Freedom
            </p>

            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <a href="#how-it-works" className="hover:text-white transition">Process</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#guarantees" className="hover:text-white transition">Guarantees</a>
              <a href="mailto:contact@leverabase.com" className="hover:text-white transition flex items-center gap-1">
                <Mail className="w-4 h-4" />
                contact@leverabase.com
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Leverabase. A Benjamin Frost LLC company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
