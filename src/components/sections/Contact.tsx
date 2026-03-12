"use client";

import { useState, type FormEvent } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-section">
        <AnimatedSection>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind or want to say hello? I'd love to hear from you."
          />
        </AnimatedSection>

        <div className="grid-two-col">
          {/* Contact info */}
          <AnimatedSection delay={0.2}>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="icon-circle bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="icon-circle bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Phone</p>
                  <p className="text-text-secondary text-sm">{profile.phone}</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="icon-circle bg-accent/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">Location</p>
                  <p className="text-text-secondary text-sm">{profile.location}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.4}>
            <form onSubmit={handleSubmit} className="form-stack">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors text-sm"
                  style={{ padding: '0.75rem 1rem' }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors text-sm"
                  style={{ padding: '0.75rem 1rem' }}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors text-sm"
                style={{ padding: '0.75rem 1rem' }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                className="w-full rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                style={{ padding: '0.75rem 1rem' }}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-gradient-to-r from-accent-gradient-from to-accent-gradient-to text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent/25 transition-all disabled:opacity-50 cursor-pointer"
                style={{ padding: '0.75rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', alignSelf: 'flex-start' }}
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-green-600 dark:text-green-400 text-sm">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-sm">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
