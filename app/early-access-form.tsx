"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

export function AccessForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

    if (!isValidEmail) {
      setMessage("Enter a valid email to join early access.");
      return;
    }

    try {
      const saved = window.localStorage.getItem("bookeepaEarlyAccess");
      const emails = saved ? (JSON.parse(saved) as string[]) : [];
      const nextEmails = Array.from(new Set([...emails, cleanEmail]));
      window.localStorage.setItem("bookeepaEarlyAccess", JSON.stringify(nextEmails));
    } catch {
      // The form still succeeds when private browsing blocks local storage.
    }

    setMessage("You are on the Bookeepa early access list.");
    setEmail("");
  }

  return (
    <div className={compact ? styles.footerFormWrap : styles.formWrap}>
      <form
        id={compact ? undefined : "early-access"}
        className={compact ? styles.footerForm : styles.accessForm}
        onSubmit={handleSubmit}
        noValidate
      >
        <label className={styles.srOnly} htmlFor={compact ? "footer-email" : "hero-email"}>
          Email address
        </label>
        <span className={styles.mailIcon} aria-hidden="true" />
        <input
          id={compact ? "footer-email" : "hero-email"}
          name="email"
          type="email"
          value={email}
          placeholder="Your email address"
          autoComplete="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Get Early Access</button>
      </form>
      <p className={styles.formMessage} aria-live="polite">
        {message}
      </p>
    </div>
  );
}
