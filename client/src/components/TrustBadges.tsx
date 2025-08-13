import { Award, Shield, Star, Wrench, Tag, Umbrella } from "lucide-react";

const badges = [
  { icon: Tag, text: "I-CAR Certified" },
  { icon: Wrench, text: "ASE Certified" },
  { icon: Shield, text: "BBB A+ Rating" },
  { icon: Award, text: "30+ Years Experience" },
  { icon: Star, text: "5-Star Rated" },
  { icon: Umbrella, text: "Insurance Approved" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-black overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content flex items-center space-x-12">
          {/* Repeat badges twice for continuous scroll */}
          {[...badges, ...badges].map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center space-x-2 text-white whitespace-nowrap">
                <Icon className="w-6 h-6 text-brand-red" />
                <span className="font-semibold">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
