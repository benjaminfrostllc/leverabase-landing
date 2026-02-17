'use client'

import { useState, useEffect, useRef } from 'react'
import { Check, ArrowRight, Building2, CreditCard, Shield, Zap, ChevronDown, Star, Sparkles, FileText, Eye, BadgeCheck, Clock, HeartHandshake, Smartphone, Mail, Info, X, AlertTriangle, TrendingUp, Target, DollarSign, Users, Calendar, ToggleLeft, ToggleRight } from 'lucide-react'

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

// Pricing plans (3 standard cards)
const plans = [
  {
    name: 'Starter',
    description: 'Single bureau cleaning',
    price: '$500',
    period: 'One-time payment',
    features: [
      'Single bureau cleaning',
      'Real-time portal access',
      'Email & chat support',
      'Unlocks funding opportunities'
    ],
    link: 'https://book.stripe.com/14AbITcHL3PB6M525GfQI00'
  },
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
    link: 'https://book.stripe.com/7sY7sDcHLbi3eexfWwfQI04'
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
    link: 'https://book.stripe.com/dRm9AL4bfeuf2vPfWwfQI01'
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
  { icon: CreditCard, title: '0% Financing', description: 'Up to 8 months at 0% interest on Business Builder. Book a consultation to unlock.' }
]

// Business Builder phases
const phases = [
  {
    number: '01',
    title: 'Foundation & Risk Removal',
    visible: 'We eliminate silent denials before you apply.',
    modal: {
      heading: 'Phase 1 — Foundation & Risk Removal',
      body: 'This phase addresses the systems that block approvals without telling you:',
      bullets: [
        'Primary bureau optimization',
        'Secondary bureau cleanup',
        'ChexSystems & Early Warning remediation',
        'Correct LLC setup & compliance structure'
      ],
      closing: 'Most applicants fail here and never know why. We fix this first.'
    }
  },
  {
    number: '02',
    title: 'Leverage & Fundability Boost',
    visible: 'We make your profile look lendable, not risky.',
    modal: {
      heading: 'Phase 2 — Leverage & Fundability Boost',
      body: 'Once risk is removed, we add strength:',
      bullets: [
        'Tradelines that increase depth & trust',
        'Business profile optimization',
        'Online presence that passes underwriting reviews'
      ],
      closing: 'This step transforms you from "possible risk" to "qualified applicant."'
    }
  },
  {
    number: '03',
    title: 'Capital Access Strategy',
    visible: 'We position you to access $50,000+ in business credit.',
    modal: {
      heading: 'Phase 3 — Capital Access Strategy',
      body: 'With the foundation built, we deploy:',
      bullets: [
        'Business credit access strategies',
        'Capital stacking logic',
        'Approval-ready sequencing'
      ],
      closing: 'This is not random applications. It\'s engineered access.'
    }
  }
]

// Problem points
const problemPoints = [
  'Their reporting systems don\'t align',
  'ChexSystems or Early Warning silently flags them',
  'Their LLC is structured wrong',
  'Their business has no lender-credible presence',
  'Their credit file lacks leverage'
]

// Solution points
const solutionPoints = [
  'Personal credit foundations',
  'Secondary reporting agencies',
  'Banking risk databases',
  'Business entity structure',
  'Credit depth and leverage',
  'Digital credibility checks'
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

function PhaseModal({ phase, onClose }: { phase: typeof phases[0], onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-[#141B2D] border border-[#A855F7]/30 rounded-2xl p-8 max-w-lg w-full shadow-[0_0_80px_rgba(168,85,247,0.15)]" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
          <X className="w-5 h-5" />
        </button>
        <div className="text-[#A855F7] text-sm font-semibold mb-3">BUSINESS BUILDER</div>
        <h3 className="text-xl font-bold text-white mb-4">{phase.modal.heading}</h3>
        <p className="text-gray-400 mb-4">{phase.modal.body}</p>
        <ul className="space-y-2 mb-6">
          {phase.modal.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#A855F7] flex-shrink-0 mt-0.5" />
              <span className="text-white">{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 font-medium italic">{phase.modal.closing}</p>
      </div>
    </div>
  )
}

function FadeInUp({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-in-up ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [openStep, setOpenStep] = useState<number | null>(null)
  const [activePhase, setActivePhase] = useState<number | null>(null)
  const [cleanCredit, setCleanCredit] = useState(false)

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
              <a href="#how-it-works" className="text-[#C084FC] font-medium hover:text-white transition">How It Works</a>
              <a href="#business-builder" className="text-[#C084FC] font-medium hover:text-white transition">Business Builder</a>
              <a href="#pricing" className="text-[#C084FC] font-medium hover:text-white transition">Pricing</a>
              <a href="#testimonials" className="text-[#C084FC] font-medium hover:text-white transition">Results</a>
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
              <span className="text-sm text-gray-300">Credit Restoration & Capital Access</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
              Build a Fundable Business
              <br />
              <span className="shimmer-text">Not Just Better Credit.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 mb-4 max-w-2xl mx-auto">
              LeveraBase is a done-for-you system that restructures your credit, reporting profiles, and business foundation so lenders see you as approvable, bankable, and scalable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#business-builder" className="w-full sm:w-auto bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 cta-pulse">
                Start My Business Builder Path
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
                See How It Works
              </a>
            </div>

            <p className="text-sm text-[#A855F7] mt-6 max-w-xl mx-auto italic">
              Most platforms disappear when you&apos;re not fundable yet. We start there — and build until lenders can&apos;t say no.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-6">
            <p className="text-[#A855F7] font-medium mb-1 text-sm">YOUR JOURNEY</p>
            <h2 className="text-2xl sm:text-3xl font-bold shimmer-text">
              The Path to Clean Credit
            </h2>
          </FadeInUp>

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

      {/* CTA after Path to Clean Credit */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-5 px-8">
            <a
              href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#A855F7] text-[#A855F7] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#A855F7]/10 transition"
            >
              Get Your Free Custom Plan
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-10">
            <p className="text-[#A855F7] font-medium mb-2 text-sm">THE REAL PROBLEM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Most Businesses Get Denied Before They&apos;re Even Reviewed
            </h2>
            <p className="text-xl text-gray-400">
              Banks don&apos;t reject people — they reject profiles.
            </p>
          </FadeInUp>

          <div className="bg-[#141B2D] border border-white/5 rounded-2xl p-8">
            <p className="text-gray-400 mb-6">Most applicants fail because:</p>
            <ul className="space-y-4 mb-8">
              {problemPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{point}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/5 pt-6">
              <p className="text-gray-400">Better credit alone doesn&apos;t fix this.</p>
              <p className="text-xl font-bold shimmer-text mt-1">Structure does.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="business-builder-solution" className="py-16 bg-[#141B2D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-10">
            <p className="shimmer-text font-medium mb-2 text-sm">THE SOLUTION</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Business Builder Fixes the Entire Approval Stack
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Business Builder doesn&apos;t focus on one bureau, one account, or one trick. We rebuild every system lenders evaluate.
            </p>
          </FadeInUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {solutionPoints.map((point, i) => (
              <div key={i} className="bg-[#0A0F1C] border border-white/5 rounded-xl p-4 flex items-center gap-3">
                <Check className="w-5 h-5 text-[#A855F7] flex-shrink-0" />
                <span className="text-white text-sm">{point}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400">This is why our clients don&apos;t just improve scores —</p>
            <p className="text-xl font-bold text-white mt-1">they qualify for capital.</p>
          </div>
        </div>
      </section>

      {/* Phased Breakdown Section */}
      <section id="business-builder" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-10">
            <p className="shimmer-text font-medium mb-2 text-sm">BUSINESS BUILDER</p>
            <h2 className="text-3xl sm:text-4xl font-bold shimmer-text mb-4">
              The Three-Phase System
            </h2>
            <p className="text-gray-400">
              Each phase builds on the last. Click the info icon to see what&apos;s included.
            </p>
          </FadeInUp>

          <div className="space-y-4">
            {phases.map((phase, i) => (
              <div key={i} className="group relative rounded-2xl transition-all duration-300">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative rounded-2xl p-6 bg-[#0A0F1C] group-hover:bg-[#141B2D] transition-all duration-300 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#A855F7] to-[#2563EB] bg-clip-text text-transparent">{phase.number}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{phase.visible}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActivePhase(i)}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A855F7]/10 hover:bg-[#A855F7]/20 flex items-center justify-center transition cursor-pointer"
                  >
                    <Info className="w-5 h-5 text-[#A855F7]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Anchor Section */}
      <section className="py-16 bg-[#141B2D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
          <p className="text-[#A855F7] font-medium mb-2 text-sm">WHY THIS MAKES SENSE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            This Isn&apos;t a Cost
          </h2>
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold shimmer-text mb-6">
            It&apos;s a Capital Multiplier
          </p>
          </FadeInUp>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0A0F1C] border border-white/5 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A855F7]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-[#A855F7]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">$50,000+</h3>
              <p className="text-gray-400 text-sm">in business credit unlocked</p>
            </div>
            <div className="bg-[#0A0F1C] border border-white/5 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A855F7]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-[#A855F7]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Future Funding</h3>
              <p className="text-gray-400 text-sm">Banking relationships that scale</p>
            </div>
            <div className="bg-[#0A0F1C] border border-white/5 rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A855F7]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-[#A855F7]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Structured Path</h3>
              <p className="text-gray-400 text-sm">No guessing, no random applications</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Most people spend years applying, getting denied, and guessing. Business Builder compresses that into a structured path. You&apos;re not paying for services — you&apos;re paying for certainty and access.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Doing It Alone */}
            <div className="bg-[#141B2D] border border-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-400 mb-6">Doing It Alone</h3>
              <ul className="space-y-4">
                {['Trial & error', 'Random advice', 'Multiple denials', 'Damaged banking profiles', 'Months or years wasted'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With LeveraBase */}
            <div className="relative rounded-2xl">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] blur-[2px]" />
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB]" />
              <div className="relative bg-[#141B2D] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">With LeveraBase</h3>
                <ul className="space-y-4">
                  {['Clear structure', 'One strategy', 'One system', 'Built specifically for funding', 'Engineered for approvals'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#A855F7] flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            If You Want Capital, Your Business Must Be <span className="bg-gradient-to-r from-[#A855F7] to-[#2563EB] bg-clip-text text-transparent">Built for It</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Business Builder is for founders who are done guessing and ready to build something banks say yes to.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://book.stripe.com/5kQ7sD0Z3gCn7Q96lWfQI05" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 shadow-[0_0_60px_rgba(37,99,235,0.3)]">
              Start Business Builder
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition">
              Book Free Consultation
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
          <FadeInUp className="text-center mb-10">
            <p className="text-[#A855F7] font-medium mb-2">SIMPLE PRICING</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#A855F7] to-[#2563EB] bg-clip-text text-transparent mb-4">
              Choose Your Path
            </h2>
            <p className="text-gray-400">
              Not sure which is right? Book a free consultation and we&apos;ll recommend the best option.
            </p>
          </FadeInUp>

          {/* Payment Plan Explainer */}
          <FadeInUp>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-[#141B2D] border border-[#A855F7]/20 rounded-2xl p-6 sm:p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-[#A855F7]/10 text-[#A855F7] rounded-full px-3 py-1 text-xs font-semibold mb-4">
                <CreditCard className="w-3.5 h-3.5" />
                FLEXIBLE PAYMENT PLANS
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Every Plan Is Affordable — Pay Over Time at 0% Interest</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-5">
                We believe credit shouldn&apos;t cost you more credit. That&apos;s why every LeveraBase package comes with a 6–8 month payment plan option at 0% interest. No hidden fees. No financing traps. Just a simple, split payment structure so you can get started today without the upfront pressure.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
                <span className="flex items-center gap-2 text-gray-300"><Check className="w-4 h-4 text-[#A855F7] flex-shrink-0" /> 0% interest for 6–8 months</span>
                <span className="flex items-center gap-2 text-gray-300"><Check className="w-4 h-4 text-[#A855F7] flex-shrink-0" /> No credit check to enroll</span>
                <span className="flex items-center gap-2 text-gray-300"><Check className="w-4 h-4 text-[#A855F7] flex-shrink-0" /> BNPL: Affirm, Klarna, Afterpay & more</span>
              </div>
            </div>
          </div>
          </FadeInUp>

          {/* Quick add-on cards - $300 & $500 */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {/* Inquiry Three Bureau Sweep card - $300 */}
            <FadeInUp delay={0}>
            <div className="group relative rounded-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-xl p-4 bg-[#141B2D] group-hover:bg-[#1a2236] transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base md:text-lg font-semibold text-white">Inquiry Three Bureau Sweep</h3>
                  <span className="text-xl font-bold shimmer-text-price">$300</span>
                </div>
                <p className="text-gray-500 text-xs mb-3">One-time payment</p>
                <ul className="space-y-1.5 mb-4 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                    <span className="text-gray-300 text-xs">Inquiry removal across all 3 bureaus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                    <span className="text-gray-300 text-xs">Hard & soft inquiry targeting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0" />
                    <span className="text-gray-300 text-xs">Real-time portal access</span>
                  </li>
                </ul>
                <a
                  href="https://book.stripe.com/dRm9ALazD0Dp5I16lWfQI06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 rounded-lg text-sm font-medium transition bg-white/10 text-white hover:bg-white/20"
                >
                  Get Started
                </a>
              </div>
            </div>
            </FadeInUp>

            {/* ChexSystems add-on card - $500 */}
            <FadeInUp delay={0.15}>
            <div className="group relative rounded-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-xl p-4 bg-[#141B2D] group-hover:bg-[#1a2236] transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base md:text-lg font-semibold text-white">{chexSystemsPlan.name}</h3>
                  <span className="text-xl font-bold shimmer-text-price">{chexSystemsPlan.price}</span>
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
            </div>
            </FadeInUp>
          </div>

          {/* 3 Standard pricing cards - $500 / $1,500 / $2,500 */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <FadeInUp key={i} delay={i * 0.15}>
              <div className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Glow effect border on hover */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative rounded-2xl p-8 bg-[#0A0F1C] group-hover:bg-[#141B2D] transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold shimmer-text-price">{plan.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">{plan.period}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#A855F7] flex-shrink-0 mt-0.5" />
                        <span className="text-white">{feature}</span>
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
              </FadeInUp>
            ))}
          </div>

          {/* 700+ Credit Club - $2,000 */}
          <div className="max-w-5xl mx-auto mt-8">
            <FadeInUp>
            <div className="group relative rounded-3xl transition-all duration-300">
              {/* Persistent glow border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] blur-[3px]" />
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#A855F7] to-[#2563EB]" />

              <div className="relative rounded-3xl p-8 md:p-10 bg-[#0A0F1C]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-[#A855F7]/10 text-[#A855F7] rounded-full px-3 py-1 mb-3 text-xs font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      NEW TO CREDIT?
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Join the 700+ Credit Club</h3>
                    <p className="text-gray-400 text-sm mb-3">Built for people with no credit history — we build yours from scratch.</p>
                    <div className="mb-5">
                      <span className="text-4xl font-bold shimmer-text-price">$2,000</span>
                      <p className="text-gray-500 text-sm mt-1">One-time payment</p>
                      <p className="text-[#A855F7] text-xs mt-1">0% interest for 8 months — <a href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition">book a call</a> to unlock</p>
                    </div>

                    {/* What's Included */}
                    <p className="text-white font-semibold text-sm mb-3">What&apos;s included:</p>
                    <ul className="space-y-2 mb-6">
                      {[
                        '3 tradelines reported to your credit report (included & set up for you)',
                        'Account setup & structuring to reach 700+ credit score',
                        'Real-time portal access',
                        'Email & chat support',
                      ].map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                          <span className="text-white text-sm">{feature}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-yellow-400 font-medium text-sm">$20K+ funding guarantee</span>
                      </li>
                    </ul>

                    {/* What You Need */}
                    <p className="text-white font-semibold text-sm mb-3">What you&apos;ll need:</p>
                    <div className="grid sm:grid-cols-3 gap-3">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                        <DollarSign className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white text-sm font-medium">$100/month</p>
                          <p className="text-gray-500 text-xs">for credit builders</p>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white text-sm font-medium">2 hrs/week</p>
                          <p className="text-gray-500 text-xs">at-home applications</p>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-start gap-2.5">
                        <Calendar className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white text-sm font-medium">4 hrs/month</p>
                          <p className="text-gray-500 text-xs">in-person visits</p>
                        </div>
                      </div>
                    </div>

                    {/* Bonus Section - Tradeline Program */}
                    <div className="mt-6 bg-gradient-to-r from-[#A855F7]/10 to-[#2563EB]/10 border border-[#A855F7]/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-[#A855F7]" />
                        <p className="text-[#A855F7] font-bold text-sm">BONUS: Exclusive Tradeline Program Access</p>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0 mt-0.5" />
                          <span className="text-white text-xs">Discounted tradelines at exclusive member rates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0 mt-0.5" />
                          <span className="text-white text-xs">Guaranteed aged accounts with low utilization & high credit limits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0 mt-0.5" />
                          <span className="text-white text-xs">Premium pricing for ongoing tradeline needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span className="text-yellow-400 font-medium text-xs">FREE eBook: 72-Hour Inquiry Removal Guide</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A855F7]" />
                      <span className="text-gray-300 text-sm">4-month program</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 md:min-w-[200px] md:pt-10">
                    <a
                      href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 rounded-xl font-semibold transition bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white hover:opacity-90 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                    >
                      Join the Club
                    </a>
                    <a
                      href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 rounded-xl font-semibold transition bg-white/10 text-white hover:bg-white/20"
                    >
                      Book Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </FadeInUp>
          </div>

          {/* Featured Business Builder Card - $8,200 */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="group relative rounded-3xl transition-all duration-300">
              {/* Persistent glow border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] blur-[3px]" />
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#A855F7] to-[#2563EB]" />

              <div className="relative rounded-3xl p-8 md:p-10 bg-[#0A0F1C]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <div className="inline-flex items-center gap-2 bg-[#A855F7]/10 text-[#A855F7] rounded-full px-3 py-1 text-xs font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        MOST POPULAR
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Business Builder</h3>
                    <p className="text-gray-400 text-sm mb-3">{cleanCredit ? 'Funding package for clean credit profiles' : 'Credit + funding package'}</p>

                    {/* Clean Credit Toggle */}
                    <button
                      onClick={() => setCleanCredit(!cleanCredit)}
                      className="flex items-center gap-2.5 mb-4 group/toggle cursor-pointer"
                    >
                      <div className={`relative w-11 h-6 rounded-full transition-all duration-300 ${cleanCredit ? 'bg-[#A855F7]' : 'bg-white/10'}`}>
                        <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 ${cleanCredit ? 'left-[22px]' : 'left-0.5'}`} />
                      </div>
                      <span className="text-sm text-gray-400 group-hover/toggle:text-gray-300 transition">I already have clean credit</span>
                    </button>

                    <div className="mb-5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold shimmer-text-price price-transition">{cleanCredit ? '$5,000' : '$8,200'}</span>
                        {cleanCredit && <span className="text-gray-500 line-through text-lg">$8,200</span>}
                      </div>
                      <p className="text-[#A855F7] text-xs mt-1">0% interest for 8 months — <a href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition">book a call</a> to unlock</p>
                      {cleanCredit && <p className="text-green-400 text-xs mt-1 font-medium">Save $3,200 — credit cleaning not needed</p>}
                    </div>
                    <ul className="space-y-2">
                      {!cleanCredit && (
                        <>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                            <span className="text-white text-sm">Everything in Complete</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                            <span className="text-white text-sm">ChexSystems & Early Warning cleaning</span>
                          </li>
                        </>
                      )}
                      {[
                        'Tradelines + credit history (included & set up for you)',
                        'LLC & EIN setup help',
                        'Business structuring & online presence setup',
                      ].map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#A855F7] flex-shrink-0 mt-0.5" />
                          <span className="text-white text-sm">{feature}</span>
                        </li>
                      ))}
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span className="text-yellow-400 font-medium text-sm">$50K+ funding guarantee</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 md:min-w-[200px] md:pt-10">
                    <a
                      href={cleanCredit ? 'https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO' : 'https://book.stripe.com/5kQ7sD0Z3gCn7Q96lWfQI05'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 rounded-xl font-semibold transition bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white hover:opacity-90 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                    >
                      {cleanCredit ? 'Book a Call' : 'Get Started'}
                    </a>
                    <a
                      href="#business-builder-solution"
                      className="block w-full text-center py-3 rounded-xl font-semibold transition bg-white/10 text-white hover:bg-white/20"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Free Consultation - full width lead magnet */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="group relative rounded-2xl transition-all duration-300">
              {/* Persistent glow border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB] blur-[3px]" />
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#2563EB]" />
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#A855F7]/5 to-[#2563EB]/5" />
                <div className="relative p-8 sm:p-10 bg-[#0A0F1C]">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 text-center md:text-left">
                      <div className="inline-flex items-center gap-2 bg-[#A855F7]/10 text-[#A855F7] rounded-full px-3 py-1 text-xs font-semibold mb-3">
                        <Sparkles className="w-3.5 h-3.5" />
                        NOT SURE WHERE TO START?
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Custom Plan</h3>
                      <p className="text-gray-400 mb-5">In 30 minutes, we&apos;ll map out exactly what&apos;s holding you back and build a step-by-step roadmap — completely free, no strings attached.</p>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-gray-300 text-sm">
                        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#A855F7] flex-shrink-0" /> Personalized recommendation</span>
                        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#A855F7] flex-shrink-0" /> Full credit situation review</span>
                        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#A855F7] flex-shrink-0" /> No credit check required</span>
                        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#A855F7] flex-shrink-0" /> Zero obligation</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                      <span className="text-3xl font-bold text-white">$0</span>
                      <a
                        href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition cta-pulse"
                      >
                        Book Now
                      </a>
                      <p className="text-gray-500 text-xs">Takes 30 seconds to book</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Returning Customer / LLC Special Rate */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="bg-[#141B2D] border border-[#A855F7]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A855F7]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <BadgeCheck className="w-6 h-6 text-[#A855F7]" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-white font-semibold mb-1">Returning Client or Already Have Your LLC?</h3>
                <p className="text-gray-400 text-sm">If you&apos;re a returning customer or already have your LLC structured correctly, call us to unlock a special funding rate on business funding.</p>
              </div>
              <a
                href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-gradient-to-r from-[#A855F7] to-[#2563EB] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition whitespace-nowrap"
              >
                Unlock Your Rate
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">
            Payment plans available. BNPL: Affirm, Klarna, Afterpay & more.<br />
            <span className="text-[#A855F7]">0% interest financing available for Business Builder — <a href="https://api.leadconnectorhq.com/widget/booking/LIGb8Yj9D4QK54fLb4qO" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition">book a call</a> to qualify.</span>
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-10">
            <p className="text-[#A855F7] font-medium mb-2">REAL RESULTS</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#A855F7] to-[#2563EB] bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
              <div
                className="shimmer-card bg-[#141B2D] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col h-full"
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
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="guarantees" className="py-16 bg-[#141B2D]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp className="text-center mb-10">
            <p className="text-[#A855F7] font-medium mb-2">OUR COMMITMENT</p>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-[#A855F7] to-[#2563EB] bg-clip-text text-transparent">
              Guarantees & Features
            </h2>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {guarantees.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeInUp key={i} delay={i * 0.1}>
                <div
                  className="guarantee-icon bg-[#0A0F1C] border border-white/5 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <div className="icon-bounce w-12 h-12 bg-gradient-to-br from-[#A855F7]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#A855F7]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                </FadeInUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* App Coming Soon Section */}
      <section className="py-16">
        <FadeInUp className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#141B2D] to-[#0A0F1C] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Floating Credit Card */}
              <div className="flex-shrink-0 mt-4 mr-[-16px]" style={{ perspective: '1000px' }}>
                <div className="credit-card-float w-[180px] h-[115px] rounded-xl relative" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Card Front */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#2563EB] p-4 flex flex-col shadow-[0_0_40px_rgba(168,85,247,0.4)]" style={{ backfaceVisibility: 'hidden' }}>
                    <span className="text-white/80 text-[8px] font-semibold tracking-widest">LEVERABASE</span>
                    <div className="flex-1 flex items-end justify-end pr-1 pb-1">
                      <div className="w-7 h-5 bg-yellow-400/80 rounded-sm" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[7px] tracking-wider mb-0.5">CARD HOLDER</p>
                      <p className="text-white font-bold text-xs tracking-wide">YOUR NEW LLC</p>
                    </div>
                  </div>
                  {/* Card Back */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#A855F7] flex flex-col shadow-[0_0_40px_rgba(168,85,247,0.4)]" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="w-full h-6 bg-black/30 mt-5 mb-3" />
                    <div className="px-4">
                      <div className="bg-white/20 h-5 rounded flex items-center justify-end px-2">
                        <span className="text-white text-[10px] font-mono">***</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 bg-[#A855F7]/10 text-[#A855F7] rounded-full px-4 py-2 mb-4 text-sm font-medium">
                  <Smartphone className="w-4 h-4" />
                  Coming Soon
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  The Leverabase App
                </h2>
                <p className="text-gray-400 mb-5 max-w-xl">
                  Track disputes, watch deletions in real-time, chat with your specialist, and manage your credit journey from one app.
                </p>
                <a href="https://leverabase.app" className="inline-flex items-center gap-2 text-[#A855F7] hover:text-white transition font-medium">
                  Explore <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Leverabase" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold shimmer-text">Leverabase</span>
            </div>

            <p className="text-gray-500 text-sm">
              Credit Restoration & Capital Access
            </p>

            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <a href="#how-it-works" className="hover:text-white transition">Process</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#business-builder" className="hover:text-white transition">Business Builder</a>
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

      {/* Phase Modal */}
      {activePhase !== null && (
        <PhaseModal phase={phases[activePhase]} onClose={() => setActivePhase(null)} />
      )}
    </main>
  )
}
