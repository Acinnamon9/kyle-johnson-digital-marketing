import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

export default function Problems() {
  const problems = [
    {
      icon: <Clock className="w-12 h-12 text-primary mb-4" />,
      title: "Zero Time for Content?",
      description:
        "You're buried in day-to-day operations and can't find hours to script, film, and edit high-quality videos.",
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-primary mb-4" />,
      title: "Inconsistent Branding?",
      description:
        "Posting sporadically hurts your authority. You need a reliable presence without the constant grind.",
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-primary mb-4" />,
      title: "Missed Opportunities?",
      description:
        "While you're busy running the business, potential leads are scrolling past you to find your competitors.",
    },
  ];

  return (
    <section
      id="problems"
      className="py-24 bg-zinc-100 border-b border-black/5"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title text-4xl font-bold uppercase text-black mb-6">
            The Problem
          </h2>
          <p className="text-xl text-gray-600">
            Scaling visibility shouldn't mean sacrificing your schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary/50 transition-colors text-center group shadow-sm"
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase text-black mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
