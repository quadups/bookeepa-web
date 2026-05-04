import { AccessForm } from "./early-access-form";
import { AudienceTabs } from "./audience-tabs";
import { LandingMotion } from "./landing-motion";
import { RotatingAudience } from "./rotating-audience";
import { faqItems, jsonLd } from "./seo";
import styles from "./page.module.css";

const debtRows = [
  { name: "Amina Stores", value: "NGN 42,000", status: "Due today" },
  { name: "Kelechi Foods", value: "NGN 18,500", status: "Paid" },
  { name: "Tomi Logistics", value: "NGN 73,900", status: "Friday" },
];

const featureCards = [
  {
    eyebrow: "10-second capture",
    title: "Record sales before they slip.",
    footer: "Income logged",
    stat: "NGN 18,500",
  },
  {
    eyebrow: "Debt clarity",
    title: "See unpaid balances at a glance.",
    footer: "Outstanding",
    stat: "NGN 134,400",
  },
  {
    eyebrow: "Manual MVP",
    title: "Send a reminder in one tap.",
    footer: "Reminder ready",
    stat: "WhatsApp",
  },
];

const footerGroups = [
  {
    title: "Bookeepa",
    links: [
      { label: "Use cases", href: "#use-cases" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Beta access", href: "#early-access" },
      { label: "Contact", href: "mailto:hello@bookeepa.com" },
    ],
  },
];

function Brand() {
  return (
    <a href="#" className={styles.brand} aria-label="Bookeepa home">
      <span className={styles.brandMark} />
      <span>Bookeepa</span>
    </a>
  );
}

function HeroPhone() {
  return (
    <div
      className={styles.phoneStage}
      aria-label="Bookeepa mobile dashboard preview"
      data-float-phone
    >
      <div className={styles.phoneBackdrop} />
      <div className={styles.phoneFrame}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneScreen}>
          <div className={styles.statusBar}>
            <span>9:41</span>
            <span className={styles.statusDots}>LTE</span>
          </div>

          <div className={styles.appTop}>
            <span className={styles.gridIcon} />
            <span className={styles.avatar}>BE</span>
          </div>

          <p className={styles.balanceLabel}>Business balance</p>
          <h2>NGN 1,245,800</h2>

          <div className={styles.phoneActions}>
            <button type="button">
              <span aria-hidden="true">+</span>
              Sale
            </button>
            <button type="button">
              <span aria-hidden="true">-&gt;</span>
              Reminder
            </button>
          </div>

          <div className={styles.phoneSectionHead}>
            <span>Credit customers</span>
            <span>+</span>
          </div>

          <div className={styles.debtList}>
            {debtRows.map((row) => (
              <div className={styles.debtRow} key={row.name}>
                <span className={row.status === "Paid" ? styles.paidDot : styles.dueDot} />
                <div>
                  <strong>{row.name}</strong>
                  <small>{row.status}</small>
                </div>
                <b>{row.value}</b>
              </div>
            ))}
          </div>

          <div className={styles.whatsappBubble}>
            <span>WhatsApp reminder</span>
            <p>Hi Amina, your NGN 42,000 balance is due today.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniPhone({ variant }: { variant: "sale" | "debt" | "message" }) {
  return (
    <div className={`${styles.miniPhone} ${styles[variant]}`}>
      <div className={styles.miniNotch} />
      <div className={styles.miniStatus}>9:41</div>
      {variant === "sale" && (
        <>
          <div className={styles.saleAmount}>NGN 18,500</div>
          <div className={styles.salePill}>Product sales</div>
          <div className={styles.confirmButton}>Save transaction</div>
        </>
      )}
      {variant === "debt" && (
        <>
          <div className={styles.debtMeter}>
            <span />
          </div>
          <div className={styles.miniRow} />
          <div className={styles.miniRow} />
          <div className={styles.miniRowShort} />
        </>
      )}
      {variant === "message" && (
        <>
          <div className={styles.chatBubble}>Please settle today if you can.</div>
          <div className={styles.chatBubbleAlt}>Reminder sent</div>
          <div className={styles.confirmButton}>Log message</div>
        </>
      )}
    </div>
  );
}

function FeatureCard({
  card,
  variant,
}: {
  card: (typeof featureCards)[number];
  variant: "sale" | "debt" | "message";
}) {
  return (
    <article className={styles.featureCard}>
      <span>{card.eyebrow}</span>
      <h3>{card.title}</h3>
      <div className={styles.cardVisual}>
        <MiniPhone variant={variant} />
      </div>
      <div className={styles.cardFooter}>
        <small>{card.footer}</small>
        <strong>{card.stat}</strong>
      </div>
    </article>
  );
}

function StorePhone() {
  return (
    <div className={styles.storePhoneWrap} aria-label="Bookeepa early access preview">
      <div className={styles.ring} />
      <div className={styles.storePhone}>
        <div className={styles.phoneNotch} />
        <div className={styles.storeScreen}>
          <div className={styles.storeTop}>Search</div>
          <div className={styles.appListing}>
            <div className={styles.appIcon}>
              <span />
            </div>
            <div>
              <strong>Bookeepa</strong>
              <small>Money tracking and reminders</small>
              <button type="button">JOIN</button>
            </div>
          </div>
          <div className={styles.ratingGrid}>
            <div>
              <strong>4.9</strong>
              <small>Beta score</small>
            </div>
            <div>
              <strong>10s</strong>
              <small>Fast entry</small>
            </div>
            <div>
              <strong>WA</strong>
              <small>Reminder</small>
            </div>
          </div>
          <div className={styles.storePreview}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}

function JsonLdScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function FaqSection() {
  return (
    <section className={styles.faqSection} aria-labelledby="faq-title" data-rise>
      <div className={styles.faqIntro}>
        <p>Answers</p>
        <h2 id="faq-title">Bookeepa in plain terms.</h2>
      </div>
      <div className={styles.faqGrid}>
        {faqItems.map((item) => (
          <article key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className={styles.pageShell}>
      <JsonLdScript />
      <LandingMotion />
      <div className={styles.canvas}>
        <header className={styles.nav}>
          <Brand />
          <nav aria-label="Primary navigation">
            <a href="#use-cases">Use cases</a>
            <a href="#how-it-works">How it works</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className={styles.navButton} href="#early-access">
            Get Early Access
          </a>
        </header>

        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy} data-rise>
            <div className={styles.dotMap} aria-hidden="true" />
            <span className={styles.spark} aria-hidden="true">
              +
            </span>
            {/* <p className={styles.kicker}>Built for African SMEs</p> */}
            <h1 id="hero-title">
              Bookeepa for <RotatingAudience />.
              <span>Track money. Follow up on WhatsApp.</span>
            </h1>
            <p className={styles.lede}>
              Simple bookkeeping, customer balances, invoices, and reminders for
              owners who run their business from a phone.
            </p>
            <AccessForm />
          </div>

          <HeroPhone />
        </section>

        <AudienceTabs />

        <section
          className={styles.featureBand}
          id="how-it-works"
          aria-labelledby="features-title"
          data-rise
        >
          <h2 id="features-title">
            We made cashflow <span>hard to forget.</span>
          </h2>
          <div className={styles.featureCards}>
            <FeatureCard card={featureCards[0]} variant="sale" />
            <FeatureCard card={featureCards[1]} variant="debt" />
            <FeatureCard card={featureCards[2]} variant="message" />
          </div>
        </section>

        <section
          className={styles.release}
          id="roadmap"
          aria-labelledby="release-title"
          data-rise
        >
          <h2 id="release-title">Early access opens soon...</h2>
          <p>
            The MVP starts with business setup, customers, transaction tracking,
            invoices, a computed dashboard, and manual reminders.
          </p>
          <StorePhone />
        </section>

        <FaqSection />

        <footer className={styles.footer} id="contact" data-rise>
          <div className={styles.footerLead}>
            <Brand />
            <p>
              Simple money tracking and WhatsApp follow-ups for African SMEs
              that need speed before accounting complexity.
            </p>
            <AccessForm compact />
          </div>
          <div className={styles.footerLinks}>
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                {group.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
