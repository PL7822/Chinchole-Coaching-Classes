import { Shield, Zap, Clock, Droplets, Monitor, Armchair, Wifi, Newspaper, Award } from "lucide-react";
import { Link } from "react-router-dom";

const facilities = [
  { icon: Armchair, title: "Separate Cabins", desc: "Separate cabin arrangement for boys and girls." },
  { icon: Monitor, title: "Spacious & Quiet", desc: "Clean and quiet spacious sitting arrangement." },
  { icon: Wifi, title: "Free High-Speed Wi-Fi", desc: "Free high-speed Wi-Fi facility for students." },
  { icon: Shield, title: "CCTV Surveillance", desc: "CCTV camera surveillance for safety & discipline." },
  { icon: Droplets, title: "Mineral Water", desc: "Mineral water facility for drinking." },
  { icon: Newspaper, title: "Newspapers & Magazines", desc: "Daily newspapers and magazines available." },
  { icon: Zap, title: "24-Hr Power (Inverter)", desc: "24 hours light with inverter backup facility." },
];

const achievers = [
  {
    name: "Sudhakar Madhukar Hake",
    position: "State Reserve Police Force (SRPF)",
  },
  {
    name: "Gajanan Eknathrao Kure",
    position: "Police Department",
  },
  {
    name: "Dnyaneshwar Tanaji Ghorpade",
    position: "Police Constable",
  },
];

const Abhyasika = () => (
  <div>

    {/* Hero Section */}
    <section className="bg-[image:var(--hero-gradient)] py-16 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
          Shri Abhyasika
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
          A peaceful and disciplined self-study center designed to help students
          focus deeply, prepare effectively, and achieve their dreams.
        </p>
      </div>
    </section>

    {/* Timing */}
    <section className="-mt-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-5 text-center shadow-lg">
          <Clock size={24} className="text-secondary-foreground" />
          <div>
            <p className="font-heading text-lg font-bold text-secondary-foreground">
              Open Daily: 6:00 AM – 10:00 PM
            </p>
            <p className="text-xs text-secondary-foreground/70">
              16 hours of uninterrupted study time
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Facilities */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-heading text-2xl font-bold text-primary">
          Our Facilities
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <div key={f.title} className="flex items-start gap-4 rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Achievers */}
    <section className="bg-section-alt py-16">
      <div className="container mx-auto px-4 text-center">
        <Award size={40} className="mx-auto mb-4 text-primary" />
        <h2 className="mb-6 font-heading text-3xl font-bold text-primary">
          Our Proud Achievers
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
          At Shri Abhyasika, discipline, dedication and consistent effort create
          real success stories. Our students have proudly secured positions in
          the Police Department and State Reserve Police Force (SRPF), proving
          that focused preparation in the right environment leads to excellence.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {achievers.map((a) => (
            <div
              key={a.name}
              className="rounded-2xl bg-card p-8 shadow-lg transition hover:shadow-xl"
            >
              <h3 className="font-heading text-lg font-bold text-primary">
                {a.name}
              </h3>

              <p className="mt-2 text-sm font-semibold text-secondary">
                {a.position}
              </p>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Achieved through perseverance, determination, and focused study.
                Their journey reflects the strong discipline and motivating
                atmosphere of Shri Abhyasika.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl font-bold text-primary">
          Start Your Success Journey Today
        </h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Limited seats available. Join a disciplined and peaceful environment
          designed to help you achieve your goals.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-105"
        >
          Inquire Now
        </Link>
      </div>
    </section>

  </div>
);

export default Abhyasika;