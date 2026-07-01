import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL = "abhipatel1698@gmail.com";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [values, setValues] = useState({ user_name: "", user_email: "", user_message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey && form.current) {
      try {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        setStatus("success");
        setValues({ user_name: "", user_email: "", user_message: "" });
      } catch {
        fallbackMailto();
      }
    } else {
      // No EmailJS configured — open mailto directly
      fallbackMailto();
    }
  };

  const fallbackMailto = () => {
    const subject = encodeURIComponent(`Hey Abhishek — from ${values.user_name}`);
    const body    = encodeURIComponent(
      `Name: ${values.user_name}\nEmail: ${values.user_email}\n\n${values.user_message}`
    );
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setStatus("success");
  };

  return (
    <section id="contact" style={{ padding: "6rem 0", maxWidth: "600px" }}>
      <span className="contact-overline">07. What&apos;s Next?</span>
      <h2 className="contact-heading" style={{ textAlign: "left" }}>Get In Touch</h2>
      <p className="contact-text" style={{ textAlign: "left", margin: "0 0 2rem" }}>
        I&apos;m currently open to new opportunities. Whether you have a question, a project idea,
        or just want to say hi — drop me a message and I&apos;ll get back to you.
      </p>

      {status === "success" ? (
        <div style={{
          background: "rgba(100,255,218,0.05)",
          border: "1px solid rgba(100,255,218,0.3)",
          borderRadius: "8px",
          padding: "2rem",
          textAlign: "center",
        }}>
          <p style={{ color: "var(--teal)", fontFamily: "var(--font-mono)", fontSize: "1rem", margin: 0 }}>
            ✓ Thanks! I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="contact-form-field"
            type="text"
            name="user_name"
            placeholder="Your name"
            value={values.user_name}
            onChange={handleChange}
            required
          />
          <input
            className="contact-form-field"
            type="email"
            name="user_email"
            placeholder="Email address"
            value={values.user_email}
            onChange={handleChange}
            required
          />
          <textarea
            className="contact-form-field"
            name="user_message"
            placeholder="Your message..."
            rows={5}
            value={values.user_message}
            onChange={handleChange}
            required
            style={{ resize: "vertical" }}
          />

          {status === "error" && (
            <p style={{ color: "#ff6b6b", fontFamily: "var(--font-mono)", fontSize: "0.85rem", marginBottom: "1rem" }}>
              ✗ Something went wrong. Please try again.
            </p>
          )}

          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <button
              type="submit"
              className="btn-outline-teal"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Opening..." : "Send Message"}
            </button>
            <a
              href={`mailto:${EMAIL}`}
              className="btn-outline-teal"
              style={{ fontSize: "0.75rem", opacity: 0.7 }}
            >
              or email directly
            </a>
          </div>
        </form>
      )}
    </section>
  );
};

export default ContactUs;
