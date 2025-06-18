"use client";

export default function About() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Main content */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-teal-500/10 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-magenta-500/10 rounded-full blur-xl" />

            <h2 className="text-4xl font-mono font-bold mb-6 text-white">
              About Pulsekeep
            </h2>

            <div className="space-y-6 text-slate-300">
              <p className="text-lg">
                Pulsekeep is a sub-DAO of{" "}
                <a
                  href="https://raidguild.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
                >
                  Raid Guild
                </a>
                , created to help communities harness the power of their own
                data.
              </p>

              <blockquote className="pl-4 border-l-4 border-teal-500/50 italic text-slate-400">
                We&apos;re engineers, architects, and guides. Our mission is to
                build clarity into digital systems—so your team can build, grow,
                and lead with confidence.
              </blockquote>

              <p className="text-lg">
                Together, we&apos;re building a future where data serves as a
                foundation for growth, not a barrier to progress.
              </p>
            </div>
          </div>

          {/* Right side - Decorative elements and stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-magenta-500/5 rounded-2xl" />

            <div className="relative p-8 space-y-8">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-3xl font-mono font-bold text-teal-400 mb-2">
                    100+
                  </div>
                  <div className="text-slate-400">Nothings Done</div>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-3xl font-mono font-bold text-magenta-400 mb-2">
                    50+
                  </div>
                  <div className="text-slate-400">Nothing else</div>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-3xl font-mono font-bold text-magenta-400 mb-2">
                    1000+
                  </div>
                  <div className="text-slate-400">Anything?</div>
                </div>
                <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="text-3xl font-mono font-bold text-teal-400 mb-2">
                    10+
                  </div>
                  <div className="text-slate-400">Something Cool</div>
                </div>
              </div>

              {/* Team section placeholder */}
              <div className="text-center">
                <p className="text-slate-400">
                  Built by a team of experienced builders and community leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
