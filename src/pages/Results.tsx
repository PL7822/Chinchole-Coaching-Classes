import { Trophy, Star, Quote } from "lucide-react";
import topperPriya from "@/assets/lahu.png";
import topperRahul from "@/assets/ram.png";
import topperSneha from "@/assets/Akshara.png";
import topperAmit from "@/assets/Riturani.png";
import topperPooja from "@/assets/Nivrutti.png";
import topperRohan from "@/assets/Babasaheb.png";
import topperAnjali from "@/assets/kamaji.png";
import topperVishal from "@/assets/Laiba-zareen.png";

const toppers = [
  { name: "lahu Poul", pct: 95, year: "2024",stream: "Science", img: topperPriya },
  { name: "Ram Bhale", pct: 95, year: "2024", stream: "Science", img: topperRahul },
  { name: "Akshara Poul", pct: 94, year: "2024", stream: "Mathematics", img: topperSneha },
  { name: "Riturani karvar", pct: 94, year: "2024", stream: "Overall", img: topperAmit },
  { name: "Nivrutti Hargil", pct: 92, year: "2024", stream: "Overall", img: topperPooja },
  { name: "Babasaheb J.", pct: 90, year: "2024", stream: "Science", img: topperRohan },
  { name: "Kamaji kure", pct: 92, year: "2024", stream: "Mathematics", img: topperAnjali },
  { name: "Laiba Zareen", pct: 90, year: "2024", stream: "Overall", img: topperVishal },
];

const testimonials = [
  { text: "Chinchole sir's teaching helped me score 96% in boards. The personal attention and doubt sessions were incredibly helpful.", author: "Shruti S., 2024 Batch" },
  { text: "Shri Abhyasika gave me the perfect study environment. I could focus without any distractions. Highly recommended!", author: "lahu P., 2023 Batch" },
  { text: "My son improved from 70% to 92% after joining coaching classes. The faculty is very dedicated and supportive.", author: "Parent of Akshara P." },
];

const Results = () => (
  <div>
    <section className="bg-[image:var(--hero-gradient)] py-16 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Trophy className="mx-auto mb-3" size={40} />
        <h1 className="font-heading text-3xl font-extrabold md:text-4xl">Our Results</h1>
        <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
          Consistently producing 90+ marks achievers in Maharashtra Board exams.
        </p>
      </div>
    </section>

    {/* Highlights */}
    <section className="-mt-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4">
          {[
            { val: "96%", label: "Highest Score" },
            { val: "50+", label: "90+ Achievers" },
            { val: "100%", label: "Pass Rate" },
          ].map((h) => (
            <div key={h.label} className="rounded-xl bg-card p-5 text-center shadow-lg">
              <span className="font-heading text-2xl font-bold text-secondary">{h.val}</span>
              <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Toppers Grid */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-heading text-2xl font-bold text-primary">
          Toppers Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {toppers.map((t) => (
            <div key={t.name + t.year} className="group rounded-xl border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <img
                src={t.img}
                alt={t.name}
                className="mx-auto mb-3 h-20 w-20 rounded-full border-2 border-secondary object-cover"
              />
              <p className="font-heading text-2xl font-bold text-primary">{t.pct}%</p>
              <h4 className="mt-1 font-heading text-sm font-semibold text-foreground">{t.name}</h4>
              <p className="text-xs text-muted-foreground">{t.stream} • {t.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-section-alt py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-heading text-2xl font-bold text-primary">
          What Students & Parents Say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-xl bg-card p-6 shadow-sm">
              <Quote className="mb-3 text-secondary/50" size={24} />
              <p className="text-sm italic leading-relaxed text-foreground">"{t.text}"</p>
              <p className="mt-4 text-xs font-semibold text-primary">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Results;
