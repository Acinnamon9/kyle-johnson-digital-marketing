import {
  Mic,
  Users,
  Calendar,
  PhoneCall,
  BarChart3,
  Globe,
  Clock,
  Voicemail,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-white" />,
      title: "Human-like AI voice agents",
      highlight: true,
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Lead qualification & follow-up",
      highlight: true,
    },
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Appointment booking & CRM sync",
      highlight: false,
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-white" />,
      title: "Real-time call transfers",
      highlight: false,
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Call recordings & analytics",
      highlight: false,
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Multi-language support",
      highlight: false,
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "24/7 availability",
      highlight: true,
    },
    {
      icon: <Voicemail className="w-8 h-8 text-white" />,
      title: "Local number & voicemail handling",
      highlight: false,
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-zinc-900 border-t border-b border-white/5"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-16 text-center text-4xl font-bold uppercase text-white">
          Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                feature.highlight
                  ? "bg-primary/10 border-primary/50 hover:bg-primary/20"
                  : "bg-black/40 border-white/5 hover:border-white/20"
              }`}
            >
              <div
                className={`mb-4 w-14 h-14 rounded-full flex items-center justify-center ${
                  feature.highlight ? "bg-primary" : "bg-white/10"
                }`}
              >
                {feature.icon}
              </div>
              <h3
                className={`text-xl font-bold ${
                  feature.highlight ? "text-primary" : "text-white"
                }`}
              >
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
