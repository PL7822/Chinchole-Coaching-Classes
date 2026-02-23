import { useState } from "react";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", class: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = "New Inquiry from Website";
    const body = `
Student Name: ${form.name}
Phone Number: ${form.phone}
Class: ${form.class}
  `;

    window.location.href = `mailto:vgchinchole143@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[image:var(--hero-gradient)] py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl font-extrabold md:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
            Get in touch for admissions, inquiries, or any questions.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2">

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 font-heading text-2xl font-bold text-primary">
              Get In Touch
            </h2>

            <ul className="space-y-5">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 9922823403",
                  href: "tel:+919922823403",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "vgchinchole143@gmail.com",
                  href: "mailto:vgchinchole143@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value:
                    "Shri Sant Motiram Maharaj Nagar, Palam, Maharashtra",
                },
                {
                  icon: Clock,
                  label: "Abhyasika Timing",
                  value: "6:00 AM – 10:00 PM",
                },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <c.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-sm font-semibold text-foreground hover:text-secondary"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground">
                        {c.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Google Map */}
            {/* Google Map */}
            <div className="mt-8 overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Chinchole+Coaching+Classes+Palam&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chinchole Coaching Classes Location"
              ></iframe>
            </div>

            {/* Open in Maps Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Chinchole+Coaching+Classes+Palam+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:scale-105"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Inquiry Form */}
          <div>
            <h2 className="mb-6 font-heading text-2xl font-bold text-primary">
              Send an Inquiry
            </h2>

            {submitted ? (
              <div className="rounded-xl border bg-card p-8 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                  <Send className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Thank You!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your inquiry has been received. We will contact you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-xl border bg-card p-8 shadow-sm"
              >
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Student Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Class
                  </label>
                  <select
                    required
                    value={form.class}
                    onChange={(e) =>
                      setForm({ ...form, class: e.target.value })
                    }
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select Class</option>
                    {["6th", "7th", "8th", "9th", "10th"].map((c) => (
                      <option key={c} value={c}>
                        {c} Standard
                      </option>
                    ))}
                    <option value="abhyasika">Shri Abhyasika</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground shadow transition-transform hover:scale-[1.02]"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;