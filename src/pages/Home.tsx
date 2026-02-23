import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Trophy,
  Users,
  Star,
  ChevronRight,
  Phone,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import AnimatedStat from "@/components/AnimatedStat";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Students Trained" },
  { icon: Trophy, value: 90, suffix: "+", label: "Marks Achievers" },
  { icon: Star, value: 15, suffix: "+", label: "Years Experience" },
  { icon: GraduationCap, value: 100, suffix: "%", label: "Board Results" },
];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-[image:var(--hero-gradient)] py-20 text-primary-foreground md:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary" />
        <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-secondary" />
      </div>
      <div className="container relative mx-auto px-4 text-center">
        <span className="mb-4 inline-block animate-pulse-glow rounded-full bg-secondary px-5 py-1.5 text-sm font-bold text-secondary-foreground">
          🎓 Admissions Open 2025-26
        </span>
        <h1 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-tight md:text-5xl">
          Chinchole Coaching Classes & Shri Abhyasika
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
          Quality education for 6th to 10th standard students with a peaceful
          self-study environment at Palam.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/coaching"
            className="flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-heading text-sm font-semibold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Enroll Now <ChevronRight size={16} />
          </Link>
          <Link
            to="/abhyasika"
            className="flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:border-secondary hover:text-secondary"
          >
            Join Study Point <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="-mt-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <AnimatedStat
              key={s.label}
              icon={s.icon}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="py-16">
      <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            Coaching Classes <span className="text-secondary">(6th–10th)</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Expert-led coaching in Mathematics (Semi & Marathi medium) for 6th to
            8th and Science & Technology for 6th to 10th standard. Strong focus on
            Maharashtra Board examinations with proven results.
          </p>
          <ul className="mt-4 space-y-2">
            {["6th–8th Mathematics (Semi & Marathi)", "6th–10th Science & Technology", "Board Exam Focused Preparation", "90+ Marks Track Record"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                <BookOpen size={14} className="text-secondary" /> {t}
              </li>
            ))}
          </ul>
          <Link
            to="/coaching"
            className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-semibold text-primary hover:text-secondary"
          >
            Learn More <ChevronRight size={14} />
          </Link>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            Shri Abhyasika <span className="text-secondary">(Study Point)</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A dedicated silent self-study center with all the facilities students
            need to focus and succeed. Open from 6 AM to 10 PM daily.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              { icon: Shield, text: "CCTV Surveillance" },
              { icon: Zap, text: "24-Hour Electricity Backup" },
              { icon: Clock, text: "6 AM – 10 PM Timing" },
              { icon: Users, text: "Separate Seating Arrangement" },
            ].map((f) => (
              <li key={f.text} className="flex items-center gap-2 text-sm text-foreground">
                <f.icon size={14} className="text-secondary" /> {f.text}
              </li>
            ))}
          </ul>
          <Link
            to="/abhyasika"
            className="mt-6 inline-flex items-center gap-1 font-heading text-sm font-semibold text-primary hover:text-secondary"
          >
            Explore Abhyasika <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-section-alt py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
          Ready to Excel in Your Studies?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Join Chinchole Coaching Classes today and take the first step towards
          academic excellence.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-heading text-sm font-semibold text-secondary-foreground shadow transition-transform hover:scale-105"
          >
            <Phone size={14} /> Call Now
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
