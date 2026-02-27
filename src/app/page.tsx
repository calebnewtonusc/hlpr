import Link from "next/link";
import {
  Heart,
  Users,
  HandHeart,
  ArrowRight,
  Flame,
  Shield,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Network,
  Zap,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-warm-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-2xl font-display font-black text-warm-900 tracking-tight">
            hlpr
          </span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-warm-500 hover:text-warm-900 transition-colors">
              How it works
            </a>
            <a href="#mission" className="text-sm font-medium text-warm-500 hover:text-warm-900 transition-colors">
              Mission
            </a>
          </div>
          <Link
            href="/need-help"
            className="text-sm font-semibold bg-brand-600 text-white px-4 py-2 rounded-xl hover:bg-brand-700 transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative w-full max-w-5xl flex flex-col items-center text-center">
          {/* Emergency badge */}
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-10 animate-fade-in shadow-sm">
            <Flame className="w-4 h-4 text-red-500" />
            <span>LA Wildfire Relief — Active</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-black text-warm-900 leading-[1.05] mb-6 tracking-tight animate-slide-up">
            Help given.{" "}
            <br className="hidden md:block" />
            Help received.{" "}
            <br />
            <span className="text-brand-600">Community activated.</span>
          </h1>

          <p className="text-lg md:text-xl text-warm-500 max-w-2xl leading-relaxed mb-14 animate-slide-up">
            HLPR connects people who need support with people who can give it —
            through trusted relationships, AI-guided conversations, and the
            spirit of communities that care.
          </p>

          {/* Three entry cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl mb-12">
            {/* Need Help */}
            <Link
              href="/need-help"
              className="group bg-white rounded-2xl p-7 shadow-md border border-orange-100 hover:shadow-xl hover:border-brand-300 hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-5">
                <HandHeart className="w-6 h-6 text-brand-600" />
              </div>
              <h2 className="text-xl font-display font-bold text-warm-900 mb-2">
                I Need Help
              </h2>
              <p className="text-warm-500 text-sm leading-relaxed mb-5">
                Get connected with people and resources who can support you
                through this — practically, relationally, and spiritually.
              </p>
              <div className="flex items-center gap-1.5 text-brand-600 text-sm font-semibold">
                Start here{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Help Friend */}
            <Link
              href="/help-friend"
              className="group bg-white rounded-2xl p-7 shadow-md border border-purple-100 hover:shadow-xl hover:border-purple-300 hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-display font-bold text-warm-900 mb-2">
                My Friend Needs Help
              </h2>
              <p className="text-warm-500 text-sm leading-relaxed mb-5">
                Advocate for someone who can&apos;t ask for themselves. We&apos;ll help
                you think through how to show up well for them.
              </p>
              <div className="flex items-center gap-1.5 text-purple-600 text-sm font-semibold">
                Help them{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Want to Help */}
            <Link
              href="/want-to-help"
              className="group bg-white rounded-2xl p-7 shadow-md border border-emerald-100 hover:shadow-xl hover:border-emerald-300 hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-display font-bold text-warm-900 mb-2">
                I Want to Help
              </h2>
              <p className="text-warm-500 text-sm leading-relaxed mb-5">
                Offer your time, skills, and resources to someone in need. We&apos;ll
                help you find the right fit for your unique gifts.
              </p>
              <div className="flex items-center gap-1.5 text-emerald-600 text-sm font-semibold">
                Get started{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-warm-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-warm-400" />
              <span>Private & confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-warm-400" />
              <span>AI-guided conversations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-warm-400" />
              <span>Trust-based matching</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <a href="#how-it-works" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-warm-400 hover:text-warm-600 transition-colors animate-bounce-slow">
          <ChevronDown className="w-6 h-6" />
        </a>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-600 text-sm font-bold uppercase tracking-widest mb-3">
              How it works
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-warm-900 mb-4">
              Real help in three steps.
            </h2>
            <p className="text-warm-500 text-lg max-w-xl mx-auto">
              Not a form. Not a waitlist. A guided conversation that leads to
              real human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                icon: MessageCircle,
                title: "Share your situation",
                desc: "An AI care coordinator guides you through a compassionate conversation — understanding your unique needs, capacity, or the situation you're advocating for.",
                color: "text-brand-600",
                bg: "bg-brand-50",
              },
              {
                step: "02",
                icon: Network,
                title: "Get matched with people who care",
                desc: "Based on your conversation, HLPR connects you with verified individuals, churches, or organizations with the specific resources and willingness to help.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                step: "03",
                icon: Zap,
                title: "Build lasting connection",
                desc: "HLPR isn't built for transactions. It's built for relationships. Every interaction is an opportunity to strengthen your community for the long haul.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div className="text-5xl font-display font-black text-warm-100 mb-3 select-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-bold text-warm-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-warm-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 px-6 bg-warm-900">
        <div className="max-w-4xl mx-auto text-center">
          <Flame className="w-10 h-10 text-brand-400 mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
            The church as{" "}
            <span className="text-brand-400">first responder.</span>
          </h2>
          <p className="text-warm-300 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            HLPR was born in the ashes of the LA wildfires — a direct response
            to seeing communities scramble to help neighbors without a way to
            coordinate. But the need it addresses is older than any fire.
          </p>
          <p className="text-warm-400 text-lg leading-relaxed max-w-2xl mx-auto mb-14">
            We believe the church is God&apos;s primary vehicle for communities of
            care — and that every person has a unique contribution to make.
            HLPR exists to activate that potential, starting with disaster
            relief and growing into lifelong mutual support for any community
            that chooses to care for its own.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Active Relief",
                desc: "LA wildfire recovery support, matching immediate practical needs with willing helpers.",
              },
              {
                label: "Relational Trust",
                desc: "Help that flows through real relationships — friends, family, and church networks.",
              },
              {
                label: "Long-term Vision",
                desc: "From disaster relief to lifelong discipleship and community care for every season.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-warm-800 rounded-2xl p-6 text-left">
                <div className="w-2 h-2 bg-brand-400 rounded-full mb-4" />
                <h3 className="text-white font-display font-bold text-lg mb-2">{item.label}</h3>
                <p className="text-warm-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-brand-600 to-orange-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to connect?
          </h2>
          <p className="text-orange-100 text-lg mb-12 max-w-xl mx-auto">
            Whether you&apos;re in need, advocating for someone, or ready to offer
            what you have — the conversation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/need-help"
              className="bg-white text-brand-700 font-bold px-8 py-4 rounded-2xl hover:bg-orange-50 transition-colors text-base shadow-lg"
            >
              I Need Help
            </Link>
            <Link
              href="/want-to-help"
              className="bg-orange-800/50 text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-800/70 transition-colors text-base border border-orange-500"
            >
              I Want to Help
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-warm-900 border-t border-warm-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-2xl font-display font-black text-white tracking-tight">
            hlpr
          </span>
          <p className="text-warm-500 text-sm text-center">
            Community care, activated. Starting with LA.
          </p>
          <p className="text-warm-600 text-xs">
            Built with care · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
