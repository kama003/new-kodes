'use client';

import {
  Clock,
  MessageCircle,
  Wand2,
  Activity,
  MessageSquare,
  Database,
  Bot,
  LineChart,
  Layers,
  CheckCircle2,
  Zap,
  Check,
  Globe,
  Server,
  Workflow,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import kamalImg from '../img/Kamaljit.jpg';
import kodesLogo from '../img/kodes_logo.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-[#0B0E14]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src={kodesLogo} alt="Kodes Logo" width={40} height={40} className="group-hover:scale-110 transition-transform rounded-md" />
            <span className="font-bold text-xl tracking-tight text-white">Kodes</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#process" className="hover:text-white transition-colors">Process</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
          </nav>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95">
            Book Free Call
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
                Never Miss a Lead<br />
                Again <br />
                <span className="text-blue-500">I Automate Your<br />Website, WhatsApp<br />& CRM</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
                I handle your tech monthly so you can focus on closing deals and growing your business.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold transition-all hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] active:scale-95">
                  Get Free Audit
                </button>
                <button className="bg-transparent border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-md font-semibold transition-all active:scale-95">
                  Book Free Call
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center p-4 mt-10 md:mt-0"
            >
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(51,65,85,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(51,65,85,0.2)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_100%)] opacity-70" />

              {/* Central Glowing Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px]" />

              {/* Card 1: Webhook / Entry */}
              <motion.div
                animate={{ y: -15 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute top-[5%] md:top-[12%] left-[0%] md:left-[5%] w-56 md:w-64 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 shadow-2xl z-10"
                style={{ willChange: "transform" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <Globe className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Website Form</p>
                    <p className="text-[10px] md:text-xs text-slate-400">Trigger: New Submission</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 bg-slate-800 rounded w-full"></div>
                  <div className="h-1.5 bg-slate-800 rounded w-4/5"></div>
                </div>
              </motion.div>

              {/* Card 2: AI Processing (Center) */}
              <motion.div
                animate={{ y: 15 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                className="absolute top-[30%] md:top-[35%] left-[10%] md:left-[20%] w-64 md:w-72 bg-[#0B0E14] border border-blue-500/40 rounded-xl p-5 shadow-[0_0_40px_rgba(37,99,235,0.2)] z-30"
                style={{ willChange: "transform" }}
              >
                <div className="absolute -top-3 -right-3">
                  <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-500 items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                      <Wand2 className="w-3 h-3 text-white" />
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-blue-600/20 rounded-lg border border-blue-500/30">
                    <Bot className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-white">AI Assistant</p>
                    <p className="text-xs text-blue-400 flex items-center gap-1">
                      <Activity className="w-3 h-3" /> Processing Data
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900/80 rounded-lg p-3 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400 font-medium">Extract Query Info</span>
                    <span className="text-[10px] text-green-400 flex items-center gap-1 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20"><CheckCircle2 className="w-3 h-3" /> Done</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400 font-medium">Draft Response</span>
                    <span className="text-[10px] text-blue-400 flex items-center gap-1 bg-blue-400/10 px-2 py-0.5 rounded-full border border-blue-400/20"><Activity className="w-3 h-3 animate-spin" /> Active</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: CRM */}
              <motion.div
                animate={{ y: -12 }}
                transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[15%] right-[0%] md:right-[5%] w-56 md:w-60 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 shadow-2xl z-20"
                style={{ willChange: "transform" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                    <Database className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">CRM Database</p>
                    <p className="text-[10px] md:text-xs text-slate-400">Syncing Record...</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <div className="h-1.5 bg-slate-800 rounded w-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <div className="h-1.5 bg-slate-800 rounded w-3/4"></div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: WhatsApp */}
              <motion.div
                animate={{ y: 12 }}
                transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[5%] md:bottom-[15%] right-[5%] md:right-[10%] w-60 md:w-64 bg-slate-900/90 backdrop-blur-xl border border-green-500/30 rounded-xl p-4 shadow-[0_10px_40px_rgba(34,197,94,0.1)] z-40"
                style={{ willChange: "transform" }}
              >
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#25D366]/20 rounded-lg border border-[#25D366]/30">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">WhatsApp API</p>
                      <p className="text-[10px] text-[#25D366]">Message Sent</p>
                    </div>
                  </div>
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div className="bg-[#0B141A] rounded-lg p-3 border border-[#1e2b33]">
                  <p className="text-xs text-[#E9EDEF]">Hi! Thanks for reaching out. I've received your request and will call you shortly.</p>
                  <div className="flex justify-end mt-1 items-center gap-1">
                    <span className="text-[9px] text-[#8696A0]">10:42 AM</span>
                    <CheckCircle2 className="w-3 h-3 text-[#53bdeb]" />
                  </div>
                </div>
              </motion.div>

              {/* Connecting abstract data points */}
              <div className="absolute top-[25%] left-[20%] w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse" />
              <div className="absolute top-[30%] right-[30%] w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse delay-75" />
              <div className="absolute bottom-[35%] left-[40%] w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse delay-150" />
              <div className="absolute top-[50%] right-[15%] w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse delay-300" />
            </motion.div>
          </div>
        </section>

        {/* Results Banner */}
        <section className="border-y border-slate-800/50 bg-slate-900/20 py-10">
          <div className="container mx-auto px-4">
            <motion.p
              {...fadeIn}
              className="text-center text-xs font-bold text-slate-500 tracking-[0.2em] uppercase mb-8"
            >
              Results I Deliver
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="flex flex-wrap justify-center gap-8 md:gap-24"
            >
              {[
                { icon: Clock, text: '24/7 Lead Capture' },
                { icon: MessageCircle, text: 'Instant WhatsApp Replies' },
                { icon: Wand2, text: 'Zero Manual Data Entry' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex items-center gap-3 text-slate-300 font-semibold text-lg"
                >
                  <item.icon className="w-6 h-6 text-blue-500" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="py-32">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeIn}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Everything You Need to Run on Autopilot</h2>
              <p className="text-slate-400 text-xl leading-relaxed">Practical solutions that eliminate busywork for growing SMBs.</p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="group bg-slate-900/40 border border-slate-800/60 rounded-2xl p-10 hover:bg-slate-800/40 hover:border-blue-500/30 transition-all hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="process" className="py-32 bg-slate-900/20 border-y border-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeIn}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How It Works</h2>
              <p className="text-slate-400 text-xl">Simple, transparent, and results-driven process.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-slate-800" />

              {[
                { step: '1', title: 'Free Audit', desc: 'We analyze your current setup and identify where you are wasting time and losing leads.' },
                { step: '2', title: 'Custom Setup', desc: 'I implement the solutions, connect your tools, and eliminate the repetitive tasks.' },
                { step: '3', title: 'Monthly Support', desc: 'You focus on your clients. I ensure your systems run smoothly, 24/7/365.' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#0B0E14] border-2 border-slate-700 flex items-center justify-center text-2xl font-black text-white mb-8 relative z-10 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed max-w-sm text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden border border-slate-800 relative aspect-square shadow-2xl"
              >
                <Image
                  src={kamalImg}
                  alt="Kamal"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  placeholder="blur"
                />
              </motion.div>
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">Your Technical Partner,<br />Not Just a Vendor</h2>
                <div className="space-y-6 text-slate-300 text-xl leading-relaxed mb-10">
                  <p>
                    Hi, I&apos;m Kamal. With 6+ years of engineering experience, I don&apos;t just build tools <br /> I ensure your business tech works perfectly every single day.
                  </p>
                  <p>
                    I&apos;m your long-term technical partner, not a one-time vendor. I personally oversee every automation I build.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['Reliability', 'Predictable Growth', 'Peace of Mind'].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 rounded-full px-6 py-3 text-base font-medium text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      {tag}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-slate-900/20 border-y border-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeIn}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Simple Monthly Pricing</h2>
              <p className="text-slate-400 text-xl">No hidden fees. Cancel anytime.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
              {/* Starter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 border border-slate-800 rounded-3xl p-10 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <p className="text-slate-400 text-base mb-8">Essential maintenance for small sites.</p>
                <div className="mb-10">
                  <span className="text-5xl font-black text-white">₹8,000</span>
                  <span className="text-slate-500 text-lg">/mo</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                  {['Website Maintenance', 'Basic Uptime Monitoring', 'Monthly Backup', 'Email Support'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 text-base">
                      <Check className="w-6 h-6 text-blue-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-xl border border-slate-700 hover:bg-slate-800 text-white font-bold transition-all active:scale-95">
                  Choose Starter
                </button>
              </motion.div>

              {/* Growth */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900 border-2 border-blue-600 rounded-3xl p-10 relative shadow-2xl shadow-blue-900/20 flex flex-col md:-translate-y-6"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm font-black px-6 py-2 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
                <p className="text-slate-400 text-base mb-8">Automation focus for scaling businesses.</p>
                <div className="mb-10">
                  <span className="text-5xl font-black text-white">₹15,000</span>
                  <span className="text-slate-500 text-lg">/mo</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                  {['Everything in Starter', 'WhatsApp Automation', 'CRM Integration', 'Priority WhatsApp Support', '1 Custom Script/mo'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 text-base">
                      <Check className="w-6 h-6 text-blue-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95">
                  Choose Growth
                </button>
              </motion.div>

              {/* Custom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 border border-slate-800 rounded-3xl p-10 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Custom</h3>
                <p className="text-slate-400 text-base mb-8">For complex needs and larger teams.</p>
                <div className="mb-10">
                  <span className="text-4xl font-black text-white">Let&apos;s Talk</span>
                </div>
                <ul className="space-y-5 mb-10 flex-grow">
                  {['Custom API Development', 'Full Stack Development', 'Dedicated Server Management', 'Weekly Consultation Calls'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 text-base">
                      <Check className="w-6 h-6 text-blue-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-xl border border-slate-700 hover:bg-slate-800 text-white font-bold transition-all active:scale-95">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Real Results */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeIn}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Real Results</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {[
                {
                  icon: CheckCircle2,
                  color: 'green',
                  title: 'Demo Example',
                  subtitle: 'Local Business • Insurance',
                  problem: 'Missed inquiries because the owner was busy in meetings.',
                  solution: 'Automated follow-ups for a local insurance agent.',
                  result: 'No inquiry goes unanswered, leading to more policies sold.'
                },
                {
                  icon: Zap,
                  color: 'blue',
                  title: 'Small Clinic',
                  subtitle: 'Healthcare • Local',
                  problem: 'Receptionist overwhelmed with appointment booking calls.',
                  solution: 'WhatsApp bot to handle appointment scheduling 24/7.',
                  result: 'Staff cost reduced and patients can book anytime.'
                }
              ].map((caseStudy, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-slate-900/40 border border-slate-800 rounded-2xl p-10 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-5 mb-8">
                    <div className={`w-14 h-14 bg-${caseStudy.color}-500/10 rounded-full flex items-center justify-center border border-${caseStudy.color}-500/20`}>
                      <caseStudy.icon className={`w-7 h-7 text-${caseStudy.color}-500`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{caseStudy.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{caseStudy.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-base leading-relaxed">
                    <p><span className="text-blue-400 font-bold uppercase text-xs tracking-wider mr-2">Problem:</span> <span className="text-slate-300">{caseStudy.problem}</span></p>
                    <p><span className="text-blue-400 font-bold uppercase text-xs tracking-wider mr-2">Solution:</span> <span className="text-slate-300">{caseStudy.solution}</span></p>
                    <p><span className="text-blue-400 font-bold uppercase text-xs tracking-wider mr-2">Result:</span> <span className="text-slate-300 font-semibold">{caseStudy.result}</span></p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-32 bg-slate-900/20 border-t border-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-[#0B0E14] border border-slate-800 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />

              <div className="text-center mb-12 relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Ready to automate?</h2>
                <p className="text-slate-400 text-lg">Fill out the form or message me directly.</p>
                <p className="text-blue-500 text-sm font-bold mt-4 uppercase tracking-widest">I personally reply within 24 hours.</p>
              </div>

              <form className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Business Type</label>
                    <input
                      type="text"
                      placeholder="E-commerce, Agency, etc."
                      className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Message</label>
                  <textarea
                    placeholder="Tell me about your bottlenecks..."
                    rows={5}
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  ></textarea>
                </div>
                <button type="button" className="w-full bg-white hover:bg-slate-100 text-[#0B0E14] font-black py-5 rounded-xl transition-all active:scale-[0.98] shadow-xl">
                  Send Message
                </button>
              </form>

              <div className="relative my-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#0B0E14] px-6 text-slate-500 font-black tracking-[0.3em]">Or Faster</span>
                </div>
              </div>

              <a href="https://wa.me/9877055945" type="button" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-5 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-green-900/10">
                <MessageCircle className="w-6 h-6" />
                Message me on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-[#0B0E14] py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Image src={kodesLogo} alt="Kodes Logo" width={32} height={32} className="rounded-md" />
            <span className="font-bold text-xl tracking-tight text-white">Kodes</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            © 2026 Kodes. Made in India
          </p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Activity,
    title: 'Zero Downtime & Fast Loading',
    description: 'A slow site loses customers. I ensure your pages load instantly and never crash, so you never miss a sale.'
  },
  {
    icon: MessageSquare,
    title: 'Never Miss a Lead',
    description: 'Stop losing customers because you couldn&apos;t reply in time. Automated WhatsApp responses capture interest instantly.'
  },
  {
    icon: Database,
    title: 'Your Data, All in One Place',
    description: 'No more copying and pasting from emails to spreadsheets. Leads flow automatically into your CRM.'
  },
  {
    icon: Bot,
    title: '24/7 Support on Autopilot',
    description: 'Let smart assistants answer common questions like "What are your hours?" or "What\'s the price?" day and night.'
  },
  {
    icon: LineChart,
    title: 'System Monitoring',
    description: 'I keep an eye on your systems 24/7. If something breaks, I fix it before you or your customers even notice.'
  },
  {
    icon: Layers,
    title: 'Tailored Solutions',
    description: 'Need a specific workflow for your clinic or agency? I build custom connectors that fit exactly how you work.'
  }
];
