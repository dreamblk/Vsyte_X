import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";

const videoCards = [
  {
    title: "Video URL 01",
    description: "Animated product reveal showing form, function, and mechanical detail.",
    href: "#"
  },
  {
    title: "Video URL 02",
    description: "Exploded-view sequence for internal parts, assemblies, and engineering logic.",
    href: "#"
  },
  {
    title: "Video URL 03",
    description: "Technical walkthrough built for sales, training, or investor presentations.",
    href: "#"
  },
  {
    title: "Video URL 04",
    description: "Launch-ready product mechanism story for web, trade show, or campaign use.",
    href: "#"
  }
];

export default function ProductMechanismsPage() {
  return (
    <main className="detail-page">
      <header className="detail-header">
        <Link className="brand" href="/" aria-label="VSYTE home">
          <Image src="/assets/vsyte-logo_340_100.png" alt="VSYTE" width={122} height={36} priority />
        </Link>
        <Link className="detail-back" href="/#case-studies">
          <ArrowLeft size={16} />
          Case Studies
        </Link>
      </header>

      <section className="detail-hero">
        <p className="section-kicker">Case Study</p>
        <h1>Product Mechanisms</h1>
        <p>
          Four video link cards for product animation, exploded views, technical walkthroughs, and launch-ready
          mechanism storytelling.
        </p>
      </section>

      <section className="video-url-grid" aria-label="Product mechanism video URLs">
        {videoCards.map((video) => (
          <a className="video-url-card" href={video.href} key={video.title}>
            <div className="video-card-media product-card-media">
              <Play size={34} fill="currentColor" />
            </div>
            <div className="video-card-copy">
              <p>{video.title}</p>
              <h2>{video.description}</h2>
              <span>
                Open video URL <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
