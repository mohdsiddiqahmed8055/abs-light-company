import { createFileRoute } from "@tanstack/react-router";
import { CapturedStyles } from "../components/site/CapturedStyles";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | ABS Wedding Planner" },
      { name: "description", content: "Plan your event with ABS Wedding Planner — call, WhatsApp or send an enquiry about your celebration." },
      { property: "og:title", content: "Contact | ABS Wedding Planner" },
      { property: "og:description", content: "Plan your event with ABS Wedding Planner — call, WhatsApp or send an enquiry about your celebration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (<><CapturedStyles />
    <main>
      <Header solid />
      <div className="pt-20">
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
                <label className={"\x65yebrow"} htmlFor="eventType">Event Type *</label>
                <select id="eventType" name="eventType" className={"\x77-full \x62order-b \x62order-border \x62g-transparent \x70y-3 \x74ext-foreground \x6futline-none \x74ransition-colors \x70laceholder:\x74ext-muted-foreground/\x360 \x66ocus:\x62order-primary"} defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Wedding</option>
                  <option>Reception</option>
                  <option>Engagement</option>
                  <option>Sangeet / Mehendi</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
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
      </div>
      <Footer />
    </main>
  </>);
}
