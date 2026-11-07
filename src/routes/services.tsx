import { createFileRoute } from "@tanstack/react-router";
import { CapturedStyles } from "../components/site/CapturedStyles";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | ABS Wedding Planner" },
      { name: "description", content: "Wedding planning, stage decoration, mandap design, receptions, sound, lighting, LED screens and full event production." },
      { property: "og:title", content: "Services | ABS Wedding Planner" },
      { property: "og:description", content: "Wedding planning, stage decoration, mandap design, receptions, sound, lighting, LED screens and full event production." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (<><CapturedStyles />
    <main>
      <Header solid />
      <div className="pt-20">
        <section id="services" className={"\x70x-6 \x70y-28 \x6dd:\x70y-36"}>
          <div className={"\x6dx-auto \x6dax-w-7xl"}>
            <div className={"\x6dx-auto \x6db-16 \x6dax-w-2xl \x74ext-center"}>
              <p className={"\x65yebrow"}>What We Do</p>
              <h2 className={"\x6dt-4 \x66ont-display \x74ext-4xl \x6ceading-tight \x6dd:\x74ext-6xl"}>Services for every <em>celebration</em></h2>
              <div className={"\x6dx-auto \x6dt-6 \x68-px \x77-16 \x62g-primary"} />
              <p className={"\x6dt-6 \x74ext-base \x6ceading-relaxed \x74ext-muted-foreground"}>From intimate ceremonies to grand receptions, one team handles design, décor and technical production.</p>
            </div>
            <div className={"\x67rid \x67ap-px \x62g-border \x73m:\x67rid-cols-2 \x6cg:\x67rid-cols-4"}>
              <div className={"\x67roup \x62g-background \x70-10 \x74ransition-colors \x64uration-500 \x68over:\x62g-secondary"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-heart \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
                <h3 className={"\x6dt-8 \x66ont-display \x74ext-2xl \x67roup-hover:\x74ext-secondary-foreground"}>Wedding Planning</h3>
                <p className={"\x6dt-3 \x74ext-sm \x6ceading-relaxed \x74ext-muted-foreground \x67roup-hover:\x74ext-secondary-foreground/\x370"}>End-to-end coordination from first idea to final farewell.</p>
              </div>
              <div className={"\x67roup \x62g-background \x70-10 \x74ransition-colors \x64uration-500 \x68over:\x62g-secondary"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-flower2 \x6cucide-flower-2 \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
                  <circle cx="12" cy="8" r="2" />
                  <path d="M12 10v12" />
                  <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
                  <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
                </svg>
                <h3 className={"\x6dt-8 \x66ont-display \x74ext-2xl \x67roup-hover:\x74ext-secondary-foreground"}>Stage Decoration</h3>
                <p className={"\x6dt-3 \x74ext-sm \x6ceading-relaxed \x74ext-muted-foreground \x67roup-hover:\x74ext-secondary-foreground/\x370"}>Bespoke floral and fabric stages that frame your moments.</p>
              </div>
              <div className={"\x67roup \x62g-background \x70-10 \x74ransition-colors \x64uration-500 \x68over:\x62g-secondary"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-landmark \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="M10 18v-7" />
                  <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" />
                  <path d="M14 18v-7" />
                  <path d="M18 18v-7" />
                  <path d="M3 22h18" />
                  <path d="M6 18v-7" />
                </svg>
                <h3 className={"\x6dt-8 \x66ont-display \x74ext-2xl \x67roup-hover:\x74ext-secondary-foreground"}>Mandap Design</h3>
                <p className={"\x6dt-3 \x74ext-sm \x6ceading-relaxed \x74ext-muted-foreground \x67roup-hover:\x74ext-secondary-foreground/\x370"}>Traditional and contemporary mandaps, thoughtfully detailed.</p>
              </div>
              <div className={"\x67roup \x62g-background \x70-10 \x74ransition-colors \x64uration-500 \x68over:\x62g-secondary"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-glass-water \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" />
                  <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
                </svg>
                <h3 className={"\x6dt-8 \x66ont-display \x74ext-2xl \x67roup-hover:\x74ext-secondary-foreground"}>Reception Events</h3>
                <p className={"\x6dt-3 \x74ext-sm \x6ceading-relaxed \x74ext-muted-foreground \x67roup-hover:\x74ext-secondary-foreground/\x370"}>Elegant receptions with seamless guest experiences.</p>
              </div>
              <div className={"\x67roup \x62g-background \x70-10 \x74ransition-colors \x64uration-500 \x68over:\x62g-secondary"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-speaker \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <rect x="4" y="2" rx="2" {...({ width: "16", height: "20" } as any)} />
                  <path d="M12 6h.01" />
                  <circle cx="12" cy="14" r="4" />
                  <path d="M12 14h.01" />
                </svg>
                <h3 className={"\x6dt-8 \x66ont-display \x74ext-2xl \x67roup-hover:\x74ext-secondary-foreground"}>Sound Systems</h3>
                <p className={"\x6dt-3 \x74ext-sm \x6ceading-relaxed \x74ext-muted-foreground \x67roup-hover:\x74ext-secondary-foreground/\x370"}>Clear, balanced audio for vows, music and speeches.</p>
              </div>
              <div className={"\x67roup \x62g-background \x70-10 \x74ransition-colors \x64uration-500 \x68over:\x62g-secondary"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-lightbulb \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
                <h3 className={"\x6dt-8 \x66ont-display \x74ext-2xl \x67roup-hover:\x74ext-secondary-foreground"}>Professional Lighting</h3>
                <p className={"\x6dt-3 \x74ext-sm \x6ceading-relaxed \x74ext-muted-foreground \x67roup-hover:\x74ext-secondary-foreground/\x370"}>Ambient, architectural and stage lighting design.</p>
              </div>
              <div className={"\x67roup \x62g-background \x70-10 \x74ransition-colors \x64uration-500 \x68over:\x62g-secondary"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-monitor-play \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
                  <path d="M12 17v4" />
                  <path d="M8 21h8" />
                  <rect x="2" y="3" rx="2" {...({ width: "20", height: "14" } as any)} />
                </svg>
                <h3 className={"\x6dt-8 \x66ont-display \x74ext-2xl \x67roup-hover:\x74ext-secondary-foreground"}>LED Screens</h3>
                <p className={"\x6dt-3 \x74ext-sm \x6ceading-relaxed \x74ext-muted-foreground \x67roup-hover:\x74ext-secondary-foreground/\x370"}>High-resolution screens for backdrops and live feeds.</p>
              </div>
              <div className={"\x67roup \x62g-background \x70-10 \x74ransition-colors \x64uration-500 \x68over:\x62g-secondary"}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-clapperboard \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                  <path d="m12.296 3.464 3.02 3.956" />
                  <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" />
                  <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="m6.18 5.276 3.1 3.899" />
                </svg>
                <h3 className={"\x6dt-8 \x66ont-display \x74ext-2xl \x67roup-hover:\x74ext-secondary-foreground"}>Event Production</h3>
                <p className={"\x6dt-3 \x74ext-sm \x6ceading-relaxed \x74ext-muted-foreground \x67roup-hover:\x74ext-secondary-foreground/\x370"}>Technical production managed by an experienced crew.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  </>);
}
