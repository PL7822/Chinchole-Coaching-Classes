import { BookOpen, Calculator, FlaskConical, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/* 100% Achievers images */
import topperAditi100 from "@/assets/Aaditi-100.png";
import topperMaurya100 from "@/assets/mauri-100.png";
import topperVaishali100 from "@/assets/Vaishali-100.png";

/* 99% Toppers images */
import topperNeha from "@/assets/Neha-99.png";
import topperSameeksha from "@/assets/Sameeksha-99.png";
import topperTanvi from "@/assets/Tanvi-99.png";
import topperAditi99 from "@/assets/Aditi-99.png";
import topperShreya from "@/assets/shreya-99.png";

const hundredPercentToppers = [
  { img: topperAditi100 },
  { img: topperMaurya100 },
  { img: topperVaishali100 },
];

const toppers99 = [
  { img: topperNeha },
  { img: topperSameeksha },
  { img: topperTanvi },
  { img: topperAditi99 },
  { img: topperShreya },
];

const Coaching = () => (
  <div>

    {/* Banner */}
    <section className="bg-[image:var(--hero-gradient)] py-16 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <span className="mb-3 inline-block rounded-full bg-secondary px-4 py-1 text-xs font-bold text-secondary-foreground">
          Admissions Open
        </span>
        <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
          Coaching Classes
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
          Expert coaching for 6th to 10th standard students with strong focus on Maharashtra Board.
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
            <p className="mt-3 text-sm leading-relaxed text-foreground"> omprehensive mathematics coaching in
              Semi-English and Marathi medium. Strong problem-solving
              approach with regular practice sessions and tests.</p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground" >
              <li>• Weekly tests & doubt sessions</li>
              <li>• Algebra, Geometry & Arithmetic</li>
              <li>• Semi-English & Marathi Medium</li>
            </ul>

          </div>

          <div className="rounded-xl border bg-card p-8 shadow-sm">
            <FlaskConical className="mb-3 text-secondary" size={36} />
            <h3 className="font-heading text-xl font-bold text-primary">
              Science & Technology
            </h3>
            <p className="text-sm text-muted-foreground">6th to 10th Standard</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground"> In-depth science teaching covering Physics, Chemistry and Biology with practical understanding and board exam preparation.</p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground" >
              <li>• Physics, Chemistry, Biology</li>
              <li>• Practical-based learning</li>
              <li>• Board exam pattern practice</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

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

    {/* 100% Achievers */}
    <section className="bg-yellow-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-10 font-heading text-3xl font-extrabold text-primary">
          🎖️ 100% Achievers
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {hundredPercentToppers.map((t, index) => (
            <img
              key={index}
              src={t.img}
              alt="100 Percent Topper"
              className="mx-auto rounded-2xl shadow-2xl transition hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>

    {/* Our Toppers */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-10 font-heading text-3xl font-bold text-primary">
          🎗️ 99% Achievers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
          {toppers99.map((t, index) => (
            <img
              key={index}
              src={t.img}
              alt="Topper"
              className="w-36 sm:w-40 md:w-44 rounded-2xl transition duration-300 hover:scale-105"
            />
          ))}
        </div>
        <Link
          to="/results"
          className="mt-10 inline-flex items-center gap-1 font-heading text-sm font-semibold text-primary hover:text-secondary"
        >
          View All Results <ChevronRight size={14} />
        </Link>
      </div>
    </section>

  </div>
);

export default Coaching;