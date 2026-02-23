import { BookOpen, Calculator, FlaskConical, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import topperPriya from "@/assets/Shruti.png";
import topperRahul from "@/assets/lahu.png";
import topperSneha from "@/assets/Tanishka.png";
import topperAmit from "@/assets/Shweta.png";

const toppers = [
  { name: "Shruti Shinde", pct: "97%", subject: "Overall", img: topperPriya },
  { name: "lahu Poul", pct: "95%", subject: "Overall", img: topperRahul },
  { name: "Tanishka Tak", pct: "93%", subject: "Overall", img: topperSneha },
  { name: "Shwets jadhav ", pct: "90%", subject: "Overall", img: topperAmit },
];

const Coaching = () => (
  <div>
    {/* Banner */}
    <section className="bg-[image:var(--hero-gradient)] py-16 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <span className="mb-3 inline-block rounded-full bg-secondary px-4 py-1 text-xs font-bold text-secondary-foreground">
          Admissions Open
        </span>
        <h1 className="font-heading text-3xl font-extrabold md:text-4xl">Coaching Classes</h1>
        <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
          Expert coaching for 6th to 10th standard students with a strong focus on
          Maharashtra Board examinations.
        </p>
      </div>
    </section>

    {/* Subjects */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-heading text-2xl font-bold text-primary">
          Our Subjects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-8 shadow-sm">
            <Calculator className="mb-3 text-secondary" size={36} />
            <h3 className="font-heading text-xl font-bold text-primary">Mathematics</h3>
            <p className="text-sm text-muted-foreground">6th to 8th Standard</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              Comprehensive mathematics coaching in Semi-English and Marathi medium.
              Strong problem-solving approach with regular practice sessions and tests.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              <li>• Algebra, Geometry & Arithmetic</li>
              <li>• Semi-English & Marathi Medium</li>
              <li>• Weekly tests & doubt sessions</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-8 shadow-sm">
            <FlaskConical className="mb-3 text-secondary" size={36} />
            <h3 className="font-heading text-xl font-bold text-primary">Science & Technology</h3>
            <p className="text-sm text-muted-foreground">6th to 10th Standard</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              In-depth science teaching covering Physics, Chemistry and Biology with
              practical understanding and board exam preparation.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              <li>• Physics, Chemistry, Biology</li>
              <li>• Practical-based learning</li>
              <li>• Board exam pattern practice</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Board Exam Focus */}
    <section className="bg-section-alt py-16">
      <div className="container mx-auto px-4 text-center">
        <Award className="mx-auto mb-3 text-secondary" size={40} />
        <h2 className="font-heading text-2xl font-bold text-primary">
          10th Board Exam Preparation
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Dedicated preparation program for SSC Board exams with previous year paper
          practice, mock tests, revision batches, and personal mentoring to ensure
          every student scores 90+ marks.
        </p>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
          {["Mock Tests", "Paper Solving", "Revision Batches", "Personal Mentoring"].map((f) => (
            <div key={f} className="rounded-lg bg-card p-4 shadow-sm">
              <BookOpen className="mx-auto mb-2 text-primary" size={20} />
              <span className="text-sm font-medium text-foreground">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Toppers Preview */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 font-heading text-2xl font-bold text-primary">Our Toppers</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {toppers.map((t) => (
            <div key={t.name} className="rounded-xl border bg-card p-6 shadow-sm">
              <img
                src={t.img}
                alt={t.name}
                className="mx-auto mb-3 h-16 w-16 rounded-full border-2 border-secondary object-cover"
              />
              <span className="font-heading text-xl font-bold text-primary">{t.pct}</span>
              <h4 className="mt-1 font-heading text-sm font-semibold text-foreground">{t.name}</h4>
              <p className="text-xs text-muted-foreground">{t.subject}</p>
            </div>
          ))}
        </div>
        <Link
          to="/results"
          className="mt-8 inline-flex items-center gap-1 font-heading text-sm font-semibold text-primary hover:text-secondary"
        >
          View All Results <ChevronRight size={14} />
        </Link>
      </div>
    </section>
  </div>
);

export default Coaching;
