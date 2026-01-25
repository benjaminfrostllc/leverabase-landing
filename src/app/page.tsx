'use client'

import { useState } from 'react'
import { Check, ArrowRight, Building2, CreditCard, Shield, Zap, ChevronDown, Star, Sparkles, FileText, Eye, BadgeCheck, DollarSign, Clock, HeartHandshake, Smartphone, Mail } from 'lucide-react'

// How it works steps
const steps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description: 'Our AI scans all three major bureaus plus secondary bureaus, identifying every disputable item and building a comprehensive case file tailored to your situation.'
  },
  {
    number: '02',
    title: 'Strategic Action',
    description: 'We craft bespoke FCRA-grounded dispute letters for your specific situation — not templates. Letters are mailed daily to bureaus and creditors until issues are resolved.'
  },
  {
    number: '03',
    title: 'Monitoring & Response',
    description: 'Watch every dispute through your portal. We handle all responses, escalations, and follow-ups automatically. You\'ll never be left guessing about status.'
  },
  {
    number: '04',
    title: 'Results & Payment',
    description: 'See negative items disappear from your reports in real-time through your portal. Pay as you see results — we\'re aligned with your success.'
  }
]

// Pricing plans
const plans = [
  {
    name: 'Starter',
    description: 'Clean up one bureau',
    price: '$500',
    period: 'One-time payment',
    features: [
      'Single bureau cleaning',
      'Real-time portal access',
      'Email & chat support'
    ],
    popular: false
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
    popular: true
  },
  {
    name: 'Business Builder',
    description: 'Credit + funding package',
    price: '$4,499',
    period: 'Or $750/mo for 6 months',
    features: [
      'Everything in Complete',
      'Tradelines + credit history',
      'LLC & EIN setup help',
      '$30K+ funding guarantee'
    ],
    popular: false
  }
]

// Testimonials
const testimonials = [
  {
    quote: "I had 7 collections and 2 charge-offs dragging my score down to 512. After 4 months with Leverabase, I'm sitting at 691. Just got approved for my first real credit card in years. These people actually know what they're doing.",
    name: 'Marcus T.',
    location: 'Atlanta, GA',
    result: '512 → 691'
  },
  {
    quote: "Was skeptical at first because I've been burned by credit repair companies before. But the portal where I could see everything happening in real-time made all the difference. They removed 11 items from my reports. Worth every penny.",
    name: 'Jennifer R.',
    location: 'Houston, TX',
    result: '11 items removed'
  },
  {
    quote: "We needed to clean up our credit before applying for a mortgage. Leverabase got us from the high 500s to 720+ in about 5 months. Our lender couldn't believe the turnaround. Closed on our house last month.",
    name: 'David & Lisa M.',
    location: 'Phoenix, AZ',
    result: '580s → 720+'
  },
  {
    quote: "Went with the Business Builder package. Not only did they fix my personal credit, but they helped me set up my LLC properly and got me $42K in business credit lines. My trucking business is finally funded.",
    name: 'Anthony W.',
    location: 'Chicago, IL',
    result: '$42K in funding'
  },
  {
    quote: "I had a bankruptcy from 2019 that I thought would haunt me forever. They couldn't remove that obviously, but they cleaned up everything else around it. Went from 489 to 648. I can actually breathe now.",
    name: 'Keisha B.',
    location: 'Miami, FL',
    result: '489 → 648'
  },
  {
    quote: "The payment plan made this affordable for me. And unlike other companies that just send generic letters, I could tell they actually researched my specific situation. Got 9 negatives removed including a repo.",
    name: 'Robert S.',
    location: 'Dallas, TX',
    result: '9 items removed'
  }
]

// Guarantees
const guarantees = [
  { icon: DollarSign, title: 'Pro-Rated Refund', description: 'Zero items removed after 90 days? Get a pro-rated refund.' },
  { icon: HeartHandshake, title: 'Unlimited Support', description: 'Email, text, and Zoom support throughout your journey.' },
  { icon: Clock, title: 'Quarterly Check-ins', description: '12-month protection with quarterly re-evaluations.' },
  { icon: Eye, title: 'Real-Time Updates', description: 'Watch progress after each dispute round in your portal.' },
  { icon: FileText, title: 'FCRA-Grounded', description: 'Bespoke dispute letters using proven legal frameworks.' },
  { icon: CreditCard, title: '0% Financing', description: '6-month payment plans, no credit check required.' }
]

function StepAccordion({ step, isOpen, onClick }: { step: typeof steps[0], isOpen: boolean, onClick: () => void }) {
  return (
    <div
      className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#141B2D]' : 'bg-[#0A0F1C] hover:bg-[#0F1420]'}`}
    >
      <button
        onClick={onClick}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-[#00D4AA]">{step.number}</span>
          <span className="text-lg font-semibold text-white">{step.title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-[#00D4AA] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-6 text-gray-400 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  const [openStep, setOpenStep] = useState<number>(0)

  return (
    <main className="min-h-screen bg-[#0A0F1C]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00D4AA] to-[#0066FF] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Leverabase</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition">Results</a>
              <a href="#guarantees" className="text-gray-400 hover:text-white transition">Guarantees</a>
            </div>
            <a href="https://leverabase.app" className="bg-gradient-to-r from-[#00D4AA] to-[#0066FF] text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#00D4AA]/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#00D4AA]" />
              <span className="text-sm text-gray-300">Credit Restoration & Financial Freedom</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Clean Credit.
              <br />
              <span className="bg-gradient-to-r from-[#00D4AA] to-[#0066FF] bg-clip-text text-transparent">Unlock Your Future.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re an individual ready to take control of your financial future or an entrepreneur building business credit — we&apos;ve got you covered.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#pricing" className="w-full sm:w-auto bg-gradient-to-r from-[#00D4AA] to-[#0066FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 shadow-[0_0_60px_rgba(0,102,255,0.3)]">
                View Packages
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition">
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00D4AA] font-medium mb-2">YOUR JOURNEY</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The Path to Clean Credit
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <StepAccordion
                key={i}
                step={step}
                isOpen={openStep === i}
                onClick={() => setOpenStep(openStep === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#141B2D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00D4AA] font-medium mb-2">SIMPLE PRICING</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Path
            </h2>
            <p className="text-gray-400">
              Not sure which is right? Book a free consultation and we&apos;ll recommend the best option.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#141B2D] to-[#0A0F1C] border border-[#00D4AA]/30 shadow-[0_0_60px_rgba(0,212,170,0.15)]'
                    : 'bg-[#141B2D] border border-white/5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]'
                }`}
              >
                {plan.popular && (
                  <div className="text-[#00D4AA] text-sm font-semibold mb-4">POPULAR</div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">{plan.period}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#00D4AA] flex-shrink-0 mt-0.5" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://leverabase.app"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#00D4AA] to-[#0066FF] text-white hover:opacity-90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Payment plans at 0% interest. BNPL: Affirm, Klarna, Afterpay & more.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00D4AA] font-medium mb-2">REAL RESULTS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-[#141B2D] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#00D4AA] text-[#00D4AA]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="bg-[#00D4AA]/10 text-[#00D4AA] text-sm font-semibold px-3 py-1 rounded-full">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="guarantees" className="py-24 bg-[#141B2D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#00D4AA] font-medium mb-2">OUR COMMITMENT</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00D4AA]/20 to-[#0066FF]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#00D4AA]" />
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
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#141B2D] to-[#0A0F1C] border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-[#00D4AA]/10 text-[#00D4AA] rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <Smartphone className="w-4 h-4" />
              Coming Soon
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Leverabase App
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Track disputes, watch deletions in real-time, chat with your specialist, and manage your credit journey from one app.
            </p>
            <a href="https://leverabase.app" className="inline-flex items-center gap-2 text-[#00D4AA] hover:text-white transition font-medium">
              Explore <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#141B2D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Financial Freedom?
          </h2>
          <p className="text-gray-400 mb-8">
            Personal credit, business credit, or both — start with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://leverabase.app" className="w-full sm:w-auto bg-gradient-to-r from-[#00D4AA] to-[#0066FF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 shadow-[0_0_60px_rgba(0,102,255,0.3)]">
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-500 mt-4 text-sm">
            Or email <a href="mailto:contact@leverabase.com" className="text-[#00D4AA] hover:underline">contact@leverabase.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00D4AA] to-[#0066FF] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
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
              © 2026 Leverabase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
