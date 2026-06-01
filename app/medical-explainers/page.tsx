import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";

const videoCards = [
  {
    title: "Video URL 01",
    description: "Patient-facing animation for diagnosis, treatment, or procedure education.",
    href: "#"
  },
  {
    title: "Video URL 02",
    description: "Clinical explainer built to clarify biological mechanisms and therapeutic pathways.",
    href: "#"
  },
  {
    title: "Video URL 03",
    description: "Technical product walkthrough for medical devices, platforms, or surgical tools.",
    href: "#"
  },
  {
    title: "Video URL 04",
    description: "Launch-ready visual story for conference, web, sales, or investor presentation use.",
    href: "#"
  }
];

export default function MedicalExplainersPage() {
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
        <h1>Medical Explainers</h1>
        <p>
          Four video link cards for patient education, clinical clarity, product storytelling, and launch-ready
          medical communication.
        </p>
      </section>

      <section className="video-url-grid" aria-label="Medical explainer video URLs">
        {videoCards.map((video) => (
          <a className="video-url-card" href={video.href} key={video.title}>
            <div className="video-card-media">
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
