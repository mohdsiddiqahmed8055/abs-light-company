import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/captured.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "ABS Wedding Planner | Luxury Wedding \u0026 Event Management" }] }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  return (<><style>{capturedCSS.replace(/(<\/|<)(s)(tyle)/gi, (_, prefix, letter, rest) => prefix + (letter === "s" ? "\\73 " : "\\53 ") + rest)}</style>
    <>
      <aside id="lovable-badge" role="complementary" lang="en" aria-label="Edit with Lovable" {...({ dir: "ltr" } as any)}>
      	<a aria-label="Edit with Lovable" href="https://lovable.dev/projects/lovp_34h8wv37j88bs8rdaepa6hhjet?utm_source=lovable-badge" id="lovable-badge-cta" rel="noopener nofollow" target="_blank">{"\n\t\t"}<span id="lovable-badge-text">Edit with</span>{"\n\t\t"}<span id="lovable-badge-logo"><svg fill="none" viewBox="0 0 52 16" {...({ xmlns: "http://www.w3.org/2000/svg", width: "52", height: "16" } as any)}>{"\n  "}<path fill="#FCFBF8" fillRule="evenodd" d="M20.318 5.25c.643 0 1.206.14 1.69.418a2.81 2.81 0 0 1 1.118 1.191c.266.513.4 1.115.4 1.807s-.134 1.296-.4 1.812a2.81 2.81 0 0 1-1.118 1.193c-.484.278-1.047.418-1.69.418s-1.208-.14-1.695-.418a2.85 2.85 0 0 1-1.125-1.193c-.262-.516-.393-1.12-.393-1.812s.131-1.294.393-1.807a2.848 2.848 0 0 1 1.125-1.191c.487-.279 1.052-.418 1.695-.418Zm0 1.425c-.27 0-.504.076-.7.228-.193.147-.34.37-.443.67-.102.295-.153.66-.153 1.093 0 .435.05.801.153 1.1.102.3.25.524.443.676.196.147.43.22.7.22.27 0 .502-.073.694-.22.193-.152.341-.375.443-.67.103-.299.153-.667.153-1.106 0-.65-.112-1.145-.337-1.481a1.08 1.08 0 0 0-.953-.51ZM32.7 5.25c.61 0 1.127.1 1.549.3.422.197.74.48.953.849.217.368.325.809.325 1.32v2.704c0 .29.02.562.062.812.044.245.108.4.19.466V12h-1.935a5.895 5.895 0 0 1-.105-.684 7.745 7.745 0 0 1-.02-.228 2.293 2.293 0 0 1-.151.203c-.205.242-.47.437-.793.584-.32.143-.685.215-1.094.215-.406 0-.77-.08-1.094-.24a1.845 1.845 0 0 1-.756-.682 1.984 1.984 0 0 1-.27-1.045c0-.606.178-1.069.535-1.388.356-.324.87-.534 1.542-.633l1.125-.16c.225-.032.403-.074.534-.123a.622.622 0 0 0 .288-.196.549.549 0 0 0 .093-.327.65.65 0 0 0-.11-.367.702.702 0 0 0-.32-.27c-.14-.07-.31-.105-.51-.105-.32 0-.576.083-.768.251-.193.164-.298.39-.314.676h-1.923c.016-.434.147-.82.393-1.155.25-.34.596-.604 1.039-.792.442-.189.954-.283 1.535-.283Zm.99 3.498a.98.98 0 0 1-.215.14 2.49 2.49 0 0 1-.584.178l-.473.092c-.315.061-.553.156-.713.283-.155.127-.233.305-.233.534 0 .23.084.412.252.547.168.135.383.203.645.203s.494-.058.694-.173c.201-.118.355-.282.461-.49.11-.21.166-.448.166-.714v-.6Zm4.526-2.375c.065-.125.138-.243.221-.349.197-.25.437-.44.719-.571.282-.135.6-.203.952-.203.528 0 .988.138 1.377.412.389.275.688.67.896 1.186.21.512.314 1.12.314 1.824 0 .7-.107 1.309-.32 1.825-.213.512-.518.906-.915 1.18-.393.275-.854.412-1.383.412-.352 0-.667-.062-.946-.184a1.832 1.832 0 0 1-.7-.554 2.2 2.2 0 0 1-.234-.383V12h-1.843V3h1.862v3.373Zm1.284.296c-.274 0-.51.085-.707.253-.192.163-.338.397-.436.7a3.376 3.376 0 0 0-.148 1.05c0 .406.05.759.148 1.058.098.299.243.53.436.694.197.164.433.246.707.246.279 0 .512-.082.7-.246.193-.164.336-.395.43-.694.099-.3.148-.652.148-1.058 0-.405-.05-.757-.147-1.056-.095-.299-.238-.53-.43-.694a1.015 1.015 0 0 0-.7-.253Zm9.416-1.419c.602 0 1.136.131 1.604.393.466.262.829.643 1.086 1.143.263.5.394 1.097.394 1.794 0 .25-.002.449-.006.596H47.51c.018.288.071.538.164.75a1.3 1.3 0 0 0 .491.596c.214.13.465.196.757.196.319 0 .583-.082.792-.246.209-.167.34-.403.393-.706h1.862a2.48 2.48 0 0 1-.485 1.235 2.54 2.54 0 0 1-1.051.805c-.439.188-.949.283-1.53.283-.655 0-1.225-.125-1.708-.375a2.672 2.672 0 0 1-1.13-1.143c-.267-.508-.4-1.137-.4-1.887 0-.712.14-1.327.418-1.843a2.86 2.86 0 0 1 1.155-1.186c.491-.27 1.051-.405 1.678-.405Zm-.044 1.345c-.274 0-.516.068-.725.203a1.29 1.29 0 0 0-.479.59 2.045 2.045 0 0 0-.132.498h2.562a1.873 1.873 0 0 0-.138-.602 1.061 1.061 0 0 0-.418-.516 1.243 1.243 0 0 0-.67-.173Z" clipRule="evenodd" />{"\n  "}<path fill="#FCFBF8" d="m26.605 9.995 1.342-4.566h1.924L27.628 12h-2.07l-2.33-6.57h1.98l1.397 4.565Zm-13.013.143h2.256c1.632 0 1.421 1.837 1.418 1.861h-5.603V3h1.93v7.138Zm31.516 1.861h-1.862V3h1.862v8.999Z" />{"\n  "}<path fill="url(#a)" fillRule="evenodd" d="M2.7 3c1.492 0 2.7 1.192 2.7 2.663v1.012h.9c1.49 0 2.7 1.192 2.7 2.662S7.791 12 6.3 12H0V5.663C0 4.193 1.209 3 2.7 3Z" clipRule="evenodd" />{"\n  "}<defs>
          <radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(-1.54236 7.07838 -10.231 -2.15602 4.627 5.022)" gradientUnits="userSpaceOnUse">
            <stop offset=".106" stopColor="#FE7B02" />
            <stop offset=".394" stopColor="#FE3F21" />
            <stop offset=".608" stopColor="#F858BC" />
            <stop offset=".929" stopColor="#575ECF" />
          </radialGradient>
        </defs>{"\n"}</svg>{"\n\n"}</span>{"\n\t"}</a>
      	
      	<span id="lovable-badge-divider" aria-hidden="true" />
      	
      	<button id="lovable-badge-close" aria-label="Dismiss" title="Dismiss" type="button">{"\n\t\t"}<svg fill="none" viewBox="0 0 16 16" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16" } as any)}>{"\n\t\t\t"}<path d="M10.646 4.646a.5.5 0 1 1 .707.708L8.707 8l2.646 2.646a.5.5 0 1 1-.707.707L8 8.707l-2.646 2.646a.5.5 0 1 1-.708-.707L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708L8 7.293l2.646-2.647Z" />{"\n\t\t"}</svg>{"\n\t"}</button>
      </aside>
      <main>
        <header className={"\x66ixed \x69nset-x-0 \x74op-0 \x7a-50 \x74ransition-all \x64uration-500 \x70y-6"}>
          <div className={"\x6dx-auto \x66lex \x6dax-w-7xl \x69tems-center \x6austify-between \x70x-6 \x74ext-secondary-foreground"}>
            <a className={"\x66ont-display \x74ext-2xl \x74racking-wide"} href="#top">ABS Wedding Planner</a>
            <nav className={"\x68idden \x69tems-center \x67ap-9 \x6dd:\x66lex"}>
              <a className={"\x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ransition-colors \x68over:\x74ext-primary"} href="#services">Services</a>
              <a className={"\x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ransition-colors \x68over:\x74ext-primary"} href="#portfolio">Portfolio</a>
              <a className={"\x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ransition-colors \x68over:\x74ext-primary"} href="#about">About</a>
              <a className={"\x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ransition-colors \x68over:\x74ext-primary"} href="#testimonials">Testimonials</a>
              <a className={"\x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ransition-colors \x68over:\x74ext-primary"} href="#contact">Contact</a>
              <a className={"\x62order \x62order-primary \x70x-5 \x70y-2.\x35 \x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ext-primary \x74ransition-colors \x68over:\x62g-primary \x68over:\x74ext-primary-foreground"} href="#contact">Plan Your Event</a>
            </nav>
            <button className={"\x6dd:\x68idden"} aria-label="Toggle menu">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-menu"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </header>
        <section id="top" className={"\x72elative \x66lex \x6din-h-screen \x69tems-center \x6austify-center \x6fverflow-hidden \x62g-secondary"}>
          <img alt="Illuminated wedding stage with ivory florals and gold drapes" width="1920" height="1088" className={"\x61bsolute \x69nset-0 \x68-full \x77-full \x73cale-105 \x6fbject-cover"} src="/site-assets/c3e12199865764fa.jpg" />
          <div className={"\x61bsolute \x69nset-0 \x62g-overlay"} />
          <div className={"\x72elative \x7a-10 \x6dx-auto \x6dax-w-4xl \x70x-6 \x74ext-center \x74ext-secondary-foreground"}>
            <p className={"\x65yebrow \x72eveal"} style={{ transform: "translateY(0px)", opacity: "1" } as unknown as CSSProperties}>Weddings &amp; Celebrations</p>
            <h1 className={"\x72eveal \x6dt-6 \x66ont-display \x74ext-5xl \x66ont-light \x6ceading-[\x31.\x305] [\x61nimation-delay:\x3150ms] \x6dd:\x74ext-8xl"} style={{ transform: "translateY(0px)", opacity: "1" } as unknown as CSSProperties}>Celebrations crafted <em className={"\x74ext-gold-gradient"}>with grace</em></h1>
            <p className={"\x72eveal \x6dx-auto \x6dt-8 \x6dax-w-xl \x74ext-base \x6ceading-relaxed \x74ext-secondary-foreground/\x380 [\x61nimation-delay:\x3300ms] \x6dd:\x74ext-lg"} style={{ transform: "translateY(0px)", opacity: "1" } as unknown as CSSProperties}>Wedding planning, décor and full event production — designed around your story and delivered with care.</p>
            <div className={"\x72eveal \x6dt-12 \x66lex \x66lex-col \x6austify-center \x67ap-4 [\x61nimation-delay:\x3450ms] \x73m:\x66lex-row"} style={{ transform: "translateY(0px)", opacity: "1" } as unknown as CSSProperties}>
              <a className={"\x69nline-flex \x69tems-center \x6austify-center \x70x-8 \x70y-4 \x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ransition-all \x64uration-300 \x62g-primary \x74ext-primary-foreground \x68over:\x62g-gold-light"} href="#contact">Plan Your Event</a>
              <a className={"\x69nline-flex \x69tems-center \x6austify-center \x70x-8 \x70y-4 \x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ransition-all \x64uration-300 \x62order \x62order-secondary-foreground/\x360 \x74ext-secondary-foreground \x68over:\x62order-primary \x68over:\x74ext-primary"} href="#portfolio">View Our Work</a>
            </div>
          </div>
        </section>
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
                <a className={"\x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ext-primary \x75nderline-offset-8 \x68over:\x75nderline"} href="#contact">Start a conversation →</a>
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
              <a className={"\x69nline-flex \x69tems-center \x6austify-center \x70x-8 \x70y-4 \x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ransition-all \x64uration-300 \x62g-primary \x74ext-primary-foreground \x68over:\x62g-gold-light"} href="#contact">Plan Your Event</a>
              <a className={"\x69nline-flex \x69tems-center \x6austify-center \x70x-8 \x70y-4 \x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ransition-all \x64uration-300 \x62order \x62order-secondary-foreground/\x360 \x74ext-secondary-foreground \x68over:\x62order-primary \x68over:\x74ext-primary"} href="https://wa.me/917893286383?text=Hello!%20I'd%20like%20to%20plan%20an%20event.">Chat on WhatsApp</a>
            </div>
          </div>
        </section>
        <section id="contact" className={"\x62g-muted \x70x-6 \x70y-28 \x6dd:\x70y-36"}>
          <div className={"\x6dx-auto \x67rid \x6dax-w-6xl \x67ap-16 \x6cg:\x67rid-cols-5"}>
            <div className={"\x6cg:\x63ol-span-2"}>
              <div className={"\x6dx-auto \x6db-16 \x6dax-w-2xl \x74ext-center"}>
                <p className={"\x65yebrow"}>Enquire</p>
                <h2 className={"\x6dt-4 \x66ont-display \x74ext-4xl \x6ceading-tight \x6dd:\x74ext-6xl"}>Plan your <em>event</em></h2>
                <div className={"\x6dx-auto \x6dt-6 \x68-px \x77-16 \x62g-primary"} />
              </div>
              <div className={"\x2dmt-8 \x73pace-y-4 \x74ext-center \x74ext-sm \x74ext-muted-foreground \x6cg:\x74ext-left"}>
                <p>Share a few details and we'll get back to you to discuss ideas, dates and budget.</p>
                <p>
                  <a className={"\x74ext-foreground \x68over:\x74ext-primary"} href="tel:+917893286383">+91 78932 86383</a>
                </p>
                <p>
                  <a className={"\x74ext-foreground \x68over:\x74ext-primary"} href="mailto:mohdsiddiqahmed838@gmail.com">mohdsiddiqahmed838@gmail.com</a>
                </p>
                <a className={"\x69nline-block \x62order \x62order-primary \x70x-6 \x70y-3 \x74ext-xs \x75ppercase \x74racking-[\x30.\x325em] \x74ext-primary \x68over:\x62g-primary \x68over:\x74ext-primary-foreground"} href="https://wa.me/917893286383?text=Hello!%20I'd%20like%20to%20plan%20an%20event." rel="noreferrer" target="_blank">WhatsApp Us</a>
              </div>
            </div>
            <form noValidate className={"\x67rid \x67ap-8 \x62g-card \x70-8 \x6dd:\x67rid-cols-2 \x6dd:\x70-12 \x6cg:\x63ol-span-3"}>
              <div>
                <label className={"\x65yebrow"} htmlFor="name">Name *</label>
                <input id="name" className={"\x77-full \x62order-b \x62order-border \x62g-transparent \x70y-3 \x74ext-foreground \x6futline-none \x74ransition-colors \x70laceholder:\x74ext-muted-foreground/\x360 \x66ocus:\x62order-primary"} placeholder="Your full name" name="name" />
              </div>
              <div>
                <label className={"\x65yebrow"} htmlFor="phone">Phone *</label>
                <input id="phone" className={"\x77-full \x62order-b \x62order-border \x62g-transparent \x70y-3 \x74ext-foreground \x6futline-none \x74ransition-colors \x70laceholder:\x74ext-muted-foreground/\x360 \x66ocus:\x62order-primary"} placeholder="+91" type="tel" name="phone" />
              </div>
              <div>
                <label className={"\x65yebrow"} htmlFor="eventType" id="bb-customSelect-LixQt-label">Event Type *</label>
                <div className={"\x62b-custom-select-container \x62b-customSelect"}>
                  <span className={"\x62b-custom-select-opener"} role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="bb-customSelect-LixQt-panel" aria-activedescendant="bb-customSelect-LixQt-selectedOption" aria-labelledby="bb-customSelect-LixQt-label" tabIndex={0}>
                    <span>Select</span>
                  </span>
                  <select id="eventType" name="eventType" className={"\x77-full \x62order-b \x62order-border \x62g-transparent \x70y-3 \x74ext-foreground \x6futline-none \x74ransition-colors \x70laceholder:\x74ext-muted-foreground/\x360 \x66ocus:\x62order-primary"} tabIndex={-1} defaultValue="">
                    <option value="" disabled selected>Select</option>
                    <option>Wedding</option>
                    <option>Reception</option>
                    <option>Engagement</option>
                    <option>Sangeet / Mehendi</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                  <div id="bb-customSelect-LixQt-panel" className={"\x62b-custom-select-panel"} role="listbox">
                    <div className={"\x62b-custom-select-option \x62b-is-selected \x62b-has-focus"} role="option" id="bb-customSelect-LixQt-selectedOption">Select</div>
                    <div className={"\x62b-custom-select-option"} role="option">Wedding</div>
                    <div className={"\x62b-custom-select-option"} role="option">Reception</div>
                    <div className={"\x62b-custom-select-option"} role="option">Engagement</div>
                    <div className={"\x62b-custom-select-option"} role="option">Sangeet / Mehendi</div>
                    <div className={"\x62b-custom-select-option"} role="option">Corporate Event</div>
                    <div className={"\x62b-custom-select-option"} role="option">Other</div>
                  </div>
                </div>
              </div>
              <div>
                <label className={"\x65yebrow"} htmlFor="eventDate">Event Date *</label>
                <input id="eventDate" className={"\x77-full \x62order-b \x62order-border \x62g-transparent \x70y-3 \x74ext-foreground \x6futline-none \x74ransition-colors \x70laceholder:\x74ext-muted-foreground/\x360 \x66ocus:\x62order-primary"} type="date" name="eventDate" />
              </div>
              <div className={"\x6dd:\x63ol-span-2"}>
                <label className={"\x65yebrow"} htmlFor="venue">Venue</label>
                <input id="venue" className={"\x77-full \x62order-b \x62order-border \x62g-transparent \x70y-3 \x74ext-foreground \x6futline-none \x74ransition-colors \x70laceholder:\x74ext-muted-foreground/\x360 \x66ocus:\x62order-primary"} placeholder="Venue or city" name="venue" />
              </div>
              <div className={"\x6dd:\x63ol-span-2"}>
                <label className={"\x65yebrow"} htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} className={"\x77-full \x62order-b \x62order-border \x62g-transparent \x70y-3 \x74ext-foreground \x6futline-none \x74ransition-colors \x70laceholder:\x74ext-muted-foreground/\x360 \x66ocus:\x62order-primary"} placeholder="Tell us about your celebration" />
              </div>
              <div className={"\x6dd:\x63ol-span-2"}>
                <button className={"\x77-full \x62g-secondary \x70x-8 \x70y-4 \x74ext-xs \x75ppercase \x74racking-[\x30.\x33em] \x74ext-secondary-foreground \x74ransition-colors \x68over:\x62g-primary \x68over:\x74ext-primary-foreground \x64isabled:\x6fpacity-60"}>Send Enquiry</button>
              </div>
            </form>
          </div>
        </section>
        <footer className={"\x62g-secondary \x70x-6 \x70b-10 \x70t-20 \x74ext-secondary-foreground"}>
          <div className={"\x6dx-auto \x67rid \x6dax-w-7xl \x67ap-12 \x6dd:\x67rid-cols-3"}>
            <div>
              <p className={"\x66ont-display \x74ext-3xl"}>ABS Wedding Planner</p>
              <p className={"\x6dt-4 \x74ext-sm \x74ext-secondary-foreground/\x360"}>Weddings, receptions and event production.</p>
              <p className={"\x6dt-2 \x74ext-sm \x74ext-secondary-foreground/\x360"}>Chairman — Mohammed Anwar Qhdeer</p>
              <div className={"\x6dt-6 \x66lex \x67ap-4"}>
                <a aria-label="Social media link" className={"\x66lex \x68-10 \x77-10 \x69tems-center \x6austify-center \x72ounded-full \x62order \x62order-secondary-foreground/\x320 \x68over:\x62order-primary \x68over:\x74ext-primary"} href="#">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-instagram \x68-4 \x77-4"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <rect x="2" y="2" rx="5" ry="5" {...({ width: "20", height: "20" } as any)} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a aria-label="Social media link" className={"\x66lex \x68-10 \x77-10 \x69tems-center \x6austify-center \x72ounded-full \x62order \x62order-secondary-foreground/\x320 \x68over:\x62order-primary \x68over:\x74ext-primary"} href="#">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-facebook \x68-4 \x77-4"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a aria-label="Social media link" className={"\x66lex \x68-10 \x77-10 \x69tems-center \x6austify-center \x72ounded-full \x62order \x62order-secondary-foreground/\x320 \x68over:\x62order-primary \x68over:\x74ext-primary"} href="#">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-youtube \x68-4 \x77-4"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <p className={"\x65yebrow"}>Explore</p>
              <ul className={"\x6dt-6 \x73pace-y-3 \x74ext-sm"}>
                <li>
                  <a className={"\x68over:\x74ext-primary"} href="#services">Services</a>
                </li>
                <li>
                  <a className={"\x68over:\x74ext-primary"} href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a className={"\x68over:\x74ext-primary"} href="#about">About</a>
                </li>
                <li>
                  <a className={"\x68over:\x74ext-primary"} href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a className={"\x68over:\x74ext-primary"} href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <p className={"\x65yebrow"}>Contact</p>
              <ul className={"\x6dt-6 \x73pace-y-3 \x74ext-sm \x74ext-secondary-foreground/\x380"}>
                <li>
                  <a className={"\x68over:\x74ext-primary"} href="tel:+917893286383">+91 78932 86383</a>
                </li>
                <li>
                  <a className={"\x68over:\x74ext-primary"} href="mailto:mohdsiddiqahmed838@gmail.com">mohdsiddiqahmed838@gmail.com</a>
                </li>
                <li>Himmathpura, Shalibanda, Hyderabad, Telangana, India</li>
              </ul>
            </div>
          </div>
          <p className={"\x6dx-auto \x6dt-16 \x6dax-w-7xl \x62order-t \x62order-secondary-foreground/\x310 \x70t-8 \x74ext-center \x74ext-xs \x74ext-secondary-foreground/\x350"}>© 2026 ABS Wedding Planner. All rights reserved.</p>
        </footer>
        <div className={"\x66ixed \x62ottom-6 \x72ight-6 \x7a-50 \x66lex \x66lex-col \x67ap-3"}>
          <a aria-label="Call us" className={"\x66lex \x68-14 \x77-14 \x69tems-center \x6austify-center \x72ounded-full \x62g-secondary \x74ext-primary \x73hadow-lg \x74ransition-transform \x68over:\x73cale-110"} href="tel:+917893286383">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-phone \x68-5 \x77-5"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
          </a>
          <a aria-label="Chat on WhatsApp" className={"\x66lex \x68-14 \x77-14 \x69tems-center \x6austify-center \x72ounded-full \x62g-primary \x74ext-primary-foreground \x73hadow-lg \x74ransition-transform \x68over:\x73cale-110"} href="https://wa.me/917893286383?text=Hello!%20I'd%20like%20to%20plan%20an%20event." rel="noreferrer" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"\x6cucide \x6cucide-message-circle \x68-6 \x77-6"} aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
            </svg>
          </a>
        </div>
      </main>
    </>
  </>);
}
