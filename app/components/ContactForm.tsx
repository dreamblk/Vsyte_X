"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "78bbb147-904f-4469-b93c-6f9937d61826");
    formData.append("subject", "New VSYTE contact form submission");
    formData.append("from_name", "VSYTE Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        setResult("Error sending form");
      }
    } catch {
      setResult("Error sending form");
    }
  }

  return (
    <form className="contact-form-card" onSubmit={onSubmit}>
      <a className="contact-close" href="#home" aria-label="Close contact form">
        <span />
        <span />
      </a>
      <Image src="/assets/vsyte-logo_WHT_340_100.png" alt="VSYTE" width={240} height={71} />
      <input type="hidden" name="recipient_email" value="dreamblk@aol.com" />
      <label>
        <span>Your Name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span>Your Email</span>
        <input type="email" name="email" required />
      </label>
      <label>
        <span>Your Message</span>
        <textarea name="message" rows={4} required />
      </label>
      <button type="submit">Send</button>
      <span className="contact-result" aria-live="polite">
        {result}
      </span>
    </form>
  );
}
