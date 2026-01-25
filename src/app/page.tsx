'use client'

import { Check, ArrowRight, Building2, CreditCard, TrendingUp, Shield, Users, Zap, ChevronRight, Star, DollarSign, LineChart, BadgeCheck } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Leverabase</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition">Results</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://leverabase.app" className="text-gray-400 hover:text-white transition hidden sm:block">Log In</a>
              <a href="https://leverabase.app" className="bg-gradient-to-r from-secondary to-primary text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-grid">
        {/* Background glow effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm text-gray-300">Trusted by 2,500+ businesses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Build Business Credit.
              <br />
              <span className="gradient-text">Unlock Funding.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Access $50K to $500K+ in business credit and funding. We guide you through building a strong credit profile and securing the capital your business needs to grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="https://leverabase.app" className="w-full sm:w-auto bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 glow-primary">
                Start Building Credit
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition">
                See How It Works
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-secondary" />
                <span className="text-sm">No Hard Credit Pulls</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-secondary" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">$127M+</div>
              <div className="text-gray-500">Funding Secured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">2,500+</div>
              <div className="text-gray-500">Businesses Funded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">45 Days</div>
              <div className="text-gray-500">Avg. Time to Funding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-gray-500">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Complete Funding Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you're starting fresh or scaling up, we have the right funding solution for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Business Credit Building */}
            <div className="bg-dark-secondary border border-white/5 rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business Credit Building</h3>
              <p className="text-gray-400 mb-6">
                Establish and build your business credit profile from scratch with our proven system.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Net 30/60/90 vendor accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Business credit monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">D&B, Experian, Equifax reporting</span>
                </li>
              </ul>
            </div>

            {/* Business Credit Cards */}
            <div className="bg-dark-secondary border border-white/5 rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business Credit Cards</h3>
              <p className="text-gray-400 mb-6">
                Access high-limit business credit cards with 0% APR introductory offers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">$10K-$100K+ credit limits</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">0% APR for 12-21 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Cashback & travel rewards</span>
                </li>
              </ul>
            </div>

            {/* Business Lines of Credit */}
            <div className="bg-dark-secondary border border-white/5 rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lines of Credit</h3>
              <p className="text-gray-400 mb-6">
                Flexible revolving credit lines for ongoing business needs and cash flow.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">$25K-$250K credit lines</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Draw funds as needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Only pay on what you use</span>
                </li>
              </ul>
            </div>

            {/* Business Loans */}
            <div className="bg-dark-secondary border border-white/5 rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business Loans</h3>
              <p className="text-gray-400 mb-6">
                Term loans for larger investments, equipment, real estate, or expansion.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">$50K-$5M+ loan amounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Competitive rates from 6%</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Flexible 1-10 year terms</span>
                </li>
              </ul>
            </div>

            {/* Personal Credit Repair */}
            <div className="bg-dark-secondary border border-white/5 rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personal Credit Services</h3>
              <p className="text-gray-400 mb-6">
                Improve your personal credit to unlock better business funding options.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Credit repair & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Personal funding options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Score improvement strategies</span>
                </li>
              </ul>
            </div>

            {/* SBA Loans */}
            <div className="bg-dark-secondary border border-white/5 rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SBA Loans</h3>
              <p className="text-gray-400 mb-6">
                Government-backed loans with favorable terms for qualified businesses.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Up to $5M in funding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Lower down payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Extended repayment terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-dark-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How Leverabase Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proven 4-step process helps you build credit and secure funding faster than going it alone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-primary hidden lg:block" />
              <div className="relative bg-dark border border-white/5 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Free Consultation</h3>
                <p className="text-gray-400 text-sm">
                  We analyze your current credit situation and create a custom funding roadmap.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-primary hidden lg:block" />
              <div className="relative bg-dark border border-white/5 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Build Foundation</h3>
                <p className="text-gray-400 text-sm">
                  Establish your business credit profile with the right vendor accounts and tradelines.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary to-primary hidden lg:block" />
              <div className="relative bg-dark border border-white/5 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Scale Credit</h3>
                <p className="text-gray-400 text-sm">
                  Apply for business credit cards and credit lines as your profile strengthens.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-dark border border-white/5 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Access Funding</h3>
                <p className="text-gray-400 text-sm">
                  Qualify for larger loans and credit lines to fuel your business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your business goals. All plans include our proven credit-building system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-dark-secondary border border-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 mb-4">For new businesses building credit</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$497</span>
                <span className="text-gray-400">/one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Business credit profile setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">5 starter vendor accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Credit monitoring setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Email support</span>
                </li>
              </ul>
              <a href="https://leverabase.app" className="block w-full bg-white/10 text-white text-center py-3 rounded-xl font-semibold hover:bg-white/20 transition">
                Get Started
              </a>
            </div>

            {/* Growth Plan */}
            <div className="bg-gradient-to-b from-dark-secondary to-dark border border-secondary/30 rounded-2xl p-8 relative glow-secondary">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-gray-400 mb-4">For businesses ready to scale</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$1,497</span>
                <span className="text-gray-400">/one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">15 vendor accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Business credit card applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Personal credit optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">1-on-1 strategy calls</span>
                </li>
              </ul>
              <a href="https://leverabase.app" className="block w-full bg-gradient-to-r from-secondary to-primary text-white text-center py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Get Started
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-dark-secondary border border-white/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-4">Full-service funding solutions</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$3,997</span>
                <span className="text-gray-400">/one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Everything in Growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Unlimited vendor accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Business loan applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">SBA loan guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-white">12 months support</span>
                </li>
              </ul>
              <a href="https://leverabase.app" className="block w-full bg-white/10 text-white text-center py-3 rounded-xl font-semibold hover:bg-white/20 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-dark-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Real Results from Real Businesses
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join thousands of business owners who have built credit and secured funding with Leverabase.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Started with zero business credit. Within 6 months, I had $75K in credit lines and just got approved for a $150K business loan. Leverabase made it possible."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div>
                  <div className="font-semibold text-white">Marcus Johnson</div>
                  <div className="text-sm text-gray-400">E-commerce Business Owner</div>
                </div>
              </div>
            </div>

            <div className="bg-dark border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The team at Leverabase helped me fix my personal credit and build my business credit simultaneously. Now I have over $200K in available funding."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold">
                  SR
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Rodriguez</div>
                  <div className="text-sm text-gray-400">Real Estate Investor</div>
                </div>
              </div>
            </div>

            <div className="bg-dark border border-white/5 rounded-2xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "I was skeptical at first, but the results speak for themselves. Got approved for 5 business credit cards totaling $85K in the first 90 days."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold">
                  DW
                </div>
                <div>
                  <div className="font-semibold text-white">David Williams</div>
                  <div className="text-sm text-gray-400">Marketing Agency Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Build Your Business Credit?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 2,500+ business owners who have used Leverabase to build credit and access the funding they need. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://leverabase.app" className="w-full sm:w-auto bg-gradient-to-r from-secondary to-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 glow-primary">
              Start Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+1234567890" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Leverabase</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering businesses to build credit and access funding since 2020.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Business Credit Building</a></li>
                <li><a href="#" className="hover:text-white transition">Business Credit Cards</a></li>
                <li><a href="#" className="hover:text-white transition">Lines of Credit</a></li>
                <li><a href="#" className="hover:text-white transition">Business Loans</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Leverabase. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <span className="text-sm">Not a lender. We connect businesses with funding partners.</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
