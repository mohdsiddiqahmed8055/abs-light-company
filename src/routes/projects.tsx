import { createFileRoute } from "@tanstack/react-router";
import { CapturedStyles } from "../components/site/CapturedStyles";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | ABS Wedding Planner" },
      { name: "description", content: "A glimpse of stages, mandaps and receptions designed by ABS Wedding Planner." },
      { property: "og:title", content: "Projects | ABS Wedding Planner" },
      { property: "og:description", content: "A glimpse of stages, mandaps and receptions designed by ABS Wedding Planner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (<><CapturedStyles />
    <main>
      <Header solid />
      <section id="portfolio" className={"\x62g-secondary \x70x-6 \x70y-28 \x6dd:\x70y-36"}>
        <div className={"\x6dx-auto \x6dax-w-7xl"}>
          <div className={"\x6dx-auto \x6db-16 \x6dax-w-2xl \x74ext-center"}>
            <p className={"\x65yebrow"}>Portfolio</p>
            <h2 className={"\x6dt-4 \x66ont-display \x74ext-4xl \x6ceading-tight \x6dd:\x74ext-6xl \x74ext-secondary-foreground"}>Moments we've <em>designed</em></h2>
            <div className={"\x6dx-auto \x6dt-6 \x68-px \x77-16 \x62g-primary"} />
            <p className={"\x6dt-6 \x74ext-base \x6ceading-relaxed \x74ext-secondary-foreground/\x370"}>A glimpse of stages, mandaps and receptions. Click any image to view it larger.</p>
          </div>
          <div className={"\x67rid \x61uto-rows-[\x3260px] \x67ap-4 \x6dd:\x67rid-cols-4"}>
            <button className={"\x67roup \x72elative \x6fverflow-hidden \x6dd:\x63ol-span-2 \x6dd:\x72ow-span-2"} aria-label="Open Wedding Stage">
              <img alt="Night wedding stage with chandeliers" className={"\x68-full \x77-full \x6fbject-cover \x74ransition-transform \x64uration-1000 \x67roup-hover:\x73cale-110"} src="/site-assets/c3e12199865764fa.jpg" {...({ loading: "lazy" } as any)} />
              <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-end \x62g-overlay \x70-6 \x6fpacity-0 \x74ransition-opacity \x64uration-500 \x67roup-hover:\x6fpacity-100"}>
                <span className={"\x66ont-display \x74ext-2xl \x74ext-secondary-foreground"}>Wedding Stage</span>
              </div>
            </button>
            <button className={"\x67roup \x72elative \x6fverflow-hidden \x6dd:\x72ow-span-2"} aria-label="Open Mandap Design">
              <img alt="Floral mandap with gold pillars" className={"\x68-full \x77-full \x6fbject-cover \x74ransition-transform \x64uration-1000 \x67roup-hover:\x73cale-110"} src="/site-assets/b4fb10d808dd6759.jpg" {...({ loading: "lazy" } as any)} />
              <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-end \x62g-overlay \x70-6 \x6fpacity-0 \x74ransition-opacity \x64uration-500 \x67roup-hover:\x6fpacity-100"}>
                <span className={"\x66ont-display \x74ext-2xl \x74ext-secondary-foreground"}>Mandap Design</span>
              </div>
            </button>
            <button className={"\x67roup \x72elative \x6fverflow-hidden "} aria-label="Open Décor Details">
              <img alt="Gold and ivory table setting" className={"\x68-full \x77-full \x6fbject-cover \x74ransition-transform \x64uration-1000 \x67roup-hover:\x73cale-110"} src="/site-assets/d8157da2b8194279.jpg" {...({ loading: "lazy" } as any)} />
              <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-end \x62g-overlay \x70-6 \x6fpacity-0 \x74ransition-opacity \x64uration-500 \x67roup-hover:\x6fpacity-100"}>
                <span className={"\x66ont-display \x74ext-2xl \x74ext-secondary-foreground"}>Décor Details</span>
              </div>
            </button>
            <button className={"\x67roup \x72elative \x6fverflow-hidden \x6dd:\x63ol-span-2"} aria-label="Open Event Production">
              <img alt="Reception hall with LED screen and lighting" className={"\x68-full \x77-full \x6fbject-cover \x74ransition-transform \x64uration-1000 \x67roup-hover:\x73cale-110"} src="/site-assets/616a33e2d24a879e.jpg" {...({ loading: "lazy" } as any)} />
              <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-end \x62g-overlay \x70-6 \x6fpacity-0 \x74ransition-opacity \x64uration-500 \x67roup-hover:\x6fpacity-100"}>
                <span className={"\x66ont-display \x74ext-2xl \x74ext-secondary-foreground"}>Event Production</span>
              </div>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </>);
}
