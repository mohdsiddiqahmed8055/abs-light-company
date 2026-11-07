import { createFileRoute, Link } from "@tanstack/react-router";
import { CapturedStyles } from "../components/site/CapturedStyles";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | ABS Wedding Planner" },
      { name: "description", content: "Meet the ABS Wedding Planner team — design, décor and technical production under one roof, led by Chairman Mohammed Anwar Qhdeer." },
      { property: "og:title", content: "About Us | ABS Wedding Planner" },
      { property: "og:description", content: "Meet the ABS Wedding Planner team — design, décor and technical production under one roof, led by Chairman Mohammed Anwar Qhdeer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (<><CapturedStyles />
    <main>
      <Header solid />
      <div className="pt-20">
        <section id="about" className={"\x70x-6 \x70y-28 \x6dd:\x70y-36"}>
          <div className={"\x6dx-auto \x67rid \x6dax-w-7xl \x69tems-center \x67ap-16 \x6cg:\x67rid-cols-2"}>
            <div className={"\x72elative"}>
              <img alt="Mandap decorated with white roses" width="896" height="1152" className={"\x61spect-[\x34/\x35] \x77-full \x6fbject-cover"} src="/site-assets/b4fb10d808dd6759.jpg" {...({ loading: "lazy" } as any)} />
              <div className={"\x61bsolute \x2dbottom-6 \x2dright-6 \x2dz-10 \x68-full \x77-full \x62order \x62order-primary"} />
            </div>
            <div>
              <p className={"\x65yebrow"}>About Us</p>
              <h2 className={"\x6dt-4 \x66ont-display \x74ext-4xl \x6ceading-tight \x6dd:\x74ext-6xl"}>Where creativity meets <em>careful execution</em></h2>
              <p className={"\x6dt-8 \x6ceading-relaxed \x74ext-muted-foreground"}>We are a wedding and event management team bringing design, décor and technical production under one roof. Every celebration begins with listening — to your traditions, your taste and the feeling you want guests to remember.</p>
              <p className={"\x6dt-5 \x6ceading-relaxed \x74ext-muted-foreground"}>Our planners, decorators and production crew work together so the stage, the lighting and the sound feel like one considered experience.</p>
              <div className={"\x6dt-10 \x62order-l \x62order-primary \x70l-6"}>
                <p className={"\x65yebrow"}>Chairman</p>
                <p className={"\x6dt-2 \x66ont-display \x74ext-3xl"}>Mohammed Anwar Qhdeer</p>
              </div>
              <div className={"\x6dt-10"}>
                <Link className={"\x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ext-primary \x75nderline-offset-8 \x68over:\x75nderline"} to="/contact">Start a conversation →</Link>
              </div>
            </div>
          </div>
        </section>
        <section className={"\x62g-muted \x70x-6 \x70y-28 \x6dd:\x70y-36"}>
          <div className={"\x6dx-auto \x6dax-w-7xl"}>
            <div className={"\x6dx-auto \x6db-16 \x6dax-w-2xl \x74ext-center"}>
              <p className={"\x65yebrow"}>Why Choose Us</p>
              <h2 className={"\x6dt-4 \x66ont-display \x74ext-4xl \x6ceading-tight \x6dd:\x74ext-6xl"}>The difference is in <em>the details</em></h2>
              <div className={"\x6dx-auto \x6dt-6 \x68-px \x77-16 \x62g-primary"} />
            </div>
            <div className={"\x67rid \x67ap-10 \x73m:\x67rid-cols-2 \x6cg:\x67rid-cols-4"}>
              <div className={"\x74ext-center"}>
                <div className={"\x6dx-auto \x66lex \x68-20 \x77-20 \x69tems-center \x6austify-center \x72ounded-full \x62order \x62order-primary"}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-gem \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
                    <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
                    <path d="M2 9h20" />
                  </svg>
                </div>
                <h3 className={"\x6dt-6 \x66ont-display \x74ext-2xl"}>Uncompromising Quality</h3>
                <p className={"\x6dt-2 \x74ext-sm \x74ext-muted-foreground"}>Premium materials, florals and equipment.</p>
              </div>
              <div className={"\x74ext-center"}>
                <div className={"\x6dx-auto \x66lex \x68-20 \x77-20 \x69tems-center \x6austify-center \x72ounded-full \x62order \x62order-primary"}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-award \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </div>
                <h3 className={"\x6dt-6 \x66ont-display \x74ext-2xl"}>Attention to Detail</h3>
                <p className={"\x6dt-2 \x74ext-sm \x74ext-muted-foreground"}>Every centrepiece and cue considered.</p>
              </div>
              <div className={"\x74ext-center"}>
                <div className={"\x6dx-auto \x66lex \x68-20 \x77-20 \x69tems-center \x6austify-center \x72ounded-full \x62order \x62order-primary"}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-palette \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                </div>
                <h3 className={"\x6dt-6 \x66ont-display \x74ext-2xl"}>Customised Designs</h3>
                <p className={"\x6dt-2 \x74ext-sm \x74ext-muted-foreground"}>Concepts built around your story.</p>
              </div>
              <div className={"\x74ext-center"}>
                <div className={"\x6dx-auto \x66lex \x68-20 \x77-20 \x69tems-center \x6austify-center \x72ounded-full \x62order \x62order-primary"}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-shield-check \x68-8 \x77-8 \x74ext-primary"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className={"\x6dt-6 \x66ont-display \x74ext-2xl"}>Professional Execution</h3>
                <p className={"\x6dt-2 \x74ext-sm \x74ext-muted-foreground"}>Calm, coordinated teams on the day.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  </>);
}
