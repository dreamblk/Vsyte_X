import Image from "next/image";
import { Box, Monitor, Video, ArrowRight, Sparkles, Microscope, Layers } from "lucide-react";

const molecularImage =
  "/assets/dreamblk72_antibodies_at_the_molecular_level_-ar_43_-styliz_9853224e-2334-4c9b-ab2d-54d41e340e7a_2-1024x771.png";

const services = [
  {
    title: "Product Animation",
    text: "We transform complex products and mechanisms into captivating 3D animation for launch, education, and sales.",
    icon: Box
  },
  {
    title: "Video Production",
    text: "From strategy and storyboards to polished edits, our production team brings technical narratives to life.",
    icon: Video
  },
  {
    title: "Web Platforms",
    text: "We design focused digital platforms and branded experiences that make advanced ideas easier to understand.",
    icon: Monitor
  }
];

const process = [
  "Medical accuracy aligned with visual clarity",
  "Concepts shaped for patients, clinicians, and buyers",
  "Production-ready assets for web, video, and live presentation"
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" }
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="VSYTE home">
          <Image src="/assets/vsyte-logo_340_100.png" alt="VSYTE" width={122} height={36} priority />
        </a>
        <input className="nav-toggle" id="nav-toggle" type="checkbox" aria-label="Toggle navigation menu" />
        <label className="nav-toggle-button" htmlFor="nav-toggle" aria-hidden="true">
          <span />
          <span />
          <span />
        </label>
        <nav>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-inner">
          <p className="eyebrow">VSYTE</p>
          <h1>Visual insight in seconds.</h1>
          <p className="hero-copy">
            Harness the captivating power of 3D animation to elevate your business, immersing audiences with
            stunning visuals that bring your brand to life and leave a lasting impact.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#about">
              Learn more
            </a>
            <a className="button button-warm" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="feature section-shell">
        <div className="feature-copy">
          <p className="section-kicker">Medical visualization</p>
          <h2>
            3D visuals <br />
            simplify complex <br />
            technical concepts
            <br />
            for patients.
          </h2>
          <p>
            3D visualization turns intricate medical concepts into clear, interactive visuals. It helps patients
            better understand diagnoses, treatments, and procedures, empowering informed health decisions with
            confidence.
          </p>
          <div className="proof-strip" aria-label="VSYTE strengths">
            <span>3D</span>
            <span>VFX</span>
            <span>Web</span>
          </div>
        </div>
        <div className="feature-media">
          <Image src={molecularImage} alt="Colorful 3D molecular visualization" width={1024} height={771} />
        </div>
      </section>

      <section id="services" className="services section-shell">
        <div className="section-heading">
          <p className="section-kicker">Our Services</p>
          <h2>Multimedia built for technical stories.</h2>
          <p>
            We offer a comprehensive range of multimedia services, including video production, graphic design,
            animation, web development, and digital marketing.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ title, text, icon: Icon }) => (
            <article className="service-card" key={title}>
              <div className="service-icon" aria-hidden="true">
                <Icon size={30} strokeWidth={2.3} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact" aria-label={`Learn more about ${title}`}>
                Learn more <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="why-image">
          <Image
            src="/assets/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
            alt="Modern industrial studio meeting room"
            width={1200}
            height={798}
          />
        </div>
        <div className="why-card">
          <Sparkles size={26} aria-hidden="true" />
          <h2>Why Choose Us</h2>
          <p>
            VSYTE is a VFX studio focused on visual communication for the medical and technical professions. Our
            designers and technical experts work together to deliver seamless, high-quality results for every project.
          </p>
          <ul>
            {process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="button button-light" href="#contact">
            Let&apos;s talk
          </a>
        </div>
      </section>

      <section id="case-studies" className="showcase section-shell" aria-label="Case studies">
        <div>
          <p className="section-kicker">Case Studies</p>
          <h2>From scientific detail to production polish.</h2>
        </div>
        <div className="showcase-grid">
          <article>
            <Image src="/assets/medshot010-1024x559.png" alt="Medical 3D render scene" width={1024} height={559} />
            <span>
              <Microscope size={18} /> Medical explainers
            </span>
          </article>
          <article>
            <Image src="/assets/mechFlower-1024x559.png" alt="Mechanical flower 3D render" width={1024} height={559} />
            <span>
              <Layers size={18} /> Product mechanisms
            </span>
          </article>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-inner">
          <Image src="/assets/vsyte-logo_WHT_340_100.png" alt="VSYTE" width={136} height={40} />
          <h2>Ready to make the complex visible?</h2>
          <p>Bring us the thing that is hard to explain. We&apos;ll turn it into visual insight your audience can use.</p>
          <a className="button button-warm filled" href="mailto:hello@vsyte.com">
            Start a project
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-logo" href="#home" aria-label="VSYTE home">
            <Image src="/assets/vsyte-logo_WHT_340_100.png" alt="VSYTE" width={112} height={33} />
          </a>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navigation.slice(0, -1).map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-rule" />
          <div className="footer-bottom">
            <p>© Vsyte 2026 | All Rights Reserved.</p>
            <div className="footer-legal">
              <a href="#contact">Privacy Policy</a>
              <a href="#contact">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
