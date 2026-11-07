import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CapturedStyles } from "../components/site/CapturedStyles";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { LovableBadge } from "../components/site/LovableBadge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABS Wedding Planner | Luxury Wedding & Event Management" },
      { name: "description", content: "Wedding planning, décor and full event production in Hyderabad — designed around your story and delivered with care." },
      { property: "og:title", content: "ABS Wedding Planner | Luxury Wedding & Event Management" },
      { property: "og:description", content: "Wedding planning, décor and full event production in Hyderabad — designed around your story and delivered with care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (<><CapturedStyles />
    <>
      <LovableBadge />
      <main>
        <Header />
        <section id="top" className={"\x72elative \x66lex \x6din-h-screen \x69tems-center \x6austify-center \x6fverflow-hidden \x62g-secondary"}>
          <video aria-label="Illuminated wedding stage with ivory florals and gold drapes" className="absolute inset-0 h-full w-full object-cover" src="/__l5e/assets-v1/6791b687-1494-4393-91bf-25fcf23c89dd/hero-loop.mp4" autoPlay muted loop playsInline preload="auto" />
          <div className={"\x61bsolute \x69nset-0 \x62g-overlay"} />
          <div className={"\x72elative \x7a-10 \x6dx-auto \x6dax-w-4xl \x70x-6 \x74ext-center \x74ext-secondary-foreground"}>
            <p className={"\x65yebrow \x72eveal"} style={{ transform: "translateY(0px)", opacity: "1" } as unknown as CSSProperties}>Weddings &amp; Celebrations</p>
            <h1 className={"\x72eveal \x6dt-6 \x66ont-display \x74ext-5xl \x66ont-light \x6ceading-[\x31.\x305] [\x61nimation-delay:\x3150ms] \x6dd:\x74ext-8xl"} style={{ transform: "translateY(0px)", opacity: "1" } as unknown as CSSProperties}>Celebrations crafted <em className={"\x74ext-gold-gradient"}>with grace</em></h1>
            <p className={"\x72eveal \x6dx-auto \x6dt-8 \x6dax-w-xl \x74ext-base \x6ceading-relaxed \x74ext-secondary-foreground/\x380 [\x61nimation-delay:\x3300ms] \x6dd:\x74ext-lg"} style={{ transform: "translateY(0px)", opacity: "1" } as unknown as CSSProperties}>Wedding planning, décor and full event production — designed around your story and delivered with care.</p>
            <div className={"\x72eveal \x6dt-12 \x66lex \x66lex-col \x6austify-center \x67ap-4 [\x61nimation-delay:\x3450ms] \x73m:\x66lex-row"} style={{ transform: "translateY(0px)", opacity: "1" } as unknown as CSSProperties}>
              <Link className={"\x69nline-flex \x69tems-center \x6austify-center \x70x-8 \x70y-4 \x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ransition-all \x64uration-300 \x62g-primary \x74ext-primary-foreground \x68over:\x62g-gold-light"} to="/contact">Plan Your Event</Link>
              <Link className={"\x69nline-flex \x69tems-center \x6austify-center \x70x-8 \x70y-4 \x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ransition-all \x64uration-300 \x62order \x62order-secondary-foreground/\x360 \x74ext-secondary-foreground \x68over:\x62order-primary \x68over:\x74ext-primary"} to="/projects">View Our Work</Link>
            </div>
          </div>
        </section>
        <section id="testimonials" className={"\x70x-6 \x70y-28 \x6dd:\x70y-36"}>
          <div className={"\x6dx-auto \x6dax-w-7xl"}>
            <div className={"\x6dx-auto \x6db-16 \x6dax-w-2xl \x74ext-center"}>
              <p className={"\x65yebrow"}>Kind Words</p>
              <h2 className={"\x6dt-4 \x66ont-display \x74ext-4xl \x6ceading-tight \x6dd:\x74ext-6xl"}>Stories from our <em>clients</em></h2>
              <div className={"\x6dx-auto \x6dt-6 \x68-px \x77-16 \x62g-primary"} />
              <p className={"\x6dt-6 \x74ext-base \x6ceading-relaxed \x74ext-muted-foreground"}>Placeholder content — these sample reviews will be replaced with real customer testimonials.</p>
            </div>
            <div className={"\x67rid \x67ap-8 \x6dd:\x67rid-cols-3"}>
              <figure className={"\x72elative \x62order \x62order-border \x62g-card \x70-10"}>
                <span className={"\x61bsolute \x72ight-4 \x74op-4 \x62g-accent \x70x-2 \x70y-1 \x74ext-[\x310px] \x75ppercase \x74racking-widest \x74ext-accent-foreground"}>Sample</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-quote \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                </svg>
                <blockquote className={"\x6dt-6 \x66ont-display \x74ext-xl \x69talic \x6ceading-relaxed"}>“Sample testimonial — replace with a real review from a happy couple describing their experience.”</blockquote>
                <figcaption className={"\x6dt-8 \x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ext-muted-foreground"}>Sample Client Name · Wedding</figcaption>
              </figure>
              <figure className={"\x72elative \x62order \x62order-border \x62g-card \x70-10"}>
                <span className={"\x61bsolute \x72ight-4 \x74op-4 \x62g-accent \x70x-2 \x70y-1 \x74ext-[\x310px] \x75ppercase \x74racking-widest \x74ext-accent-foreground"}>Sample</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-quote \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                </svg>
                <blockquote className={"\x6dt-6 \x66ont-display \x74ext-xl \x69talic \x6ceading-relaxed"}>“Sample testimonial — replace with real feedback about décor, lighting or planning.”</blockquote>
                <figcaption className={"\x6dt-8 \x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ext-muted-foreground"}>Sample Client Name · Reception</figcaption>
              </figure>
              <figure className={"\x72elative \x62order \x62order-border \x62g-card \x70-10"}>
                <span className={"\x61bsolute \x72ight-4 \x74op-4 \x62g-accent \x70x-2 \x70y-1 \x74ext-[\x310px] \x75ppercase \x74racking-widest \x74ext-accent-foreground"}>Sample</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-quote \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                </svg>
                <blockquote className={"\x6dt-6 \x66ont-display \x74ext-xl \x69talic \x6ceading-relaxed"}>“Sample testimonial — replace with a genuine review once customer permission is received.”</blockquote>
                <figcaption className={"\x6dt-8 \x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ext-muted-foreground"}>Sample Client Name · Engagement</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className={"\x72elative \x6fverflow-hidden \x70x-6 \x70y-32 \x74ext-center"}>
          <img alt="" className={"\x61bsolute \x69nset-0 \x68-full \x77-full \x6fbject-cover"} src="/site-assets/616a33e2d24a879e.jpg" {...({ loading: "lazy" } as any)} />
          <div className={"\x61bsolute \x69nset-0 \x62g-overlay"} />
          <div className={"\x72elative \x6dx-auto \x6dax-w-3xl \x74ext-secondary-foreground"}>
            <h2 className={"\x66ont-display \x74ext-4xl \x6dd:\x74ext-6xl"}>Let's create something <em className={"\x74ext-gold-gradient"}>unforgettable</em></h2>
            <div className={"\x6dt-10 \x66lex \x66lex-col \x6austify-center \x67ap-4 \x73m:\x66lex-row"}>
              <Link className={"\x69nline-flex \x69tems-center \x6austify-center \x70x-8 \x70y-4 \x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ransition-all \x64uration-300 \x62g-primary \x74ext-primary-foreground \x68over:\x62g-gold-light"} to="/contact">Plan Your Event</Link>
              <a className={"\x69nline-flex \x69tems-center \x6austify-center \x70x-8 \x70y-4 \x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ransition-all \x64uration-300 \x62order \x62order-secondary-foreground/\x360 \x74ext-secondary-foreground \x68over:\x62order-primary \x68over:\x74ext-primary"} href="https://wa.me/917893286383?text=Hello!%20I'd%20like%20to%20plan%20an%20event.">Chat on WhatsApp</a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  </>);
}
