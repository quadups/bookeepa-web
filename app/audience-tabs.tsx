"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "./page.module.css";

const audiences = [
  {
    name: "Retail shops",
    eyebrow: "Credit sales desk",
    title: "Keep credit sales from slipping through the cracks.",
    copy: "Record a sale, attach the customer, and know exactly who needs a reminder before closing time.",
    balance: "NGN 642,800",
    signal: "7 balances due today",
    metrics: [
      { label: "Entry speed", value: "10 sec" },
      { label: "Open credit", value: "NGN 184k" },
    ],
    ledger: [
      { label: "Amina Stores", meta: "Due today", value: "NGN 42,000" },
      { label: "Kelechi Foods", meta: "Paid", value: "NGN 18,500" },
      { label: "Tomi Logistics", meta: "Friday", value: "NGN 73,900" },
    ],
    workflow: ["Add customer", "Record sale", "Send reminder"],
  },
  {
    name: "Food vendors",
    eyebrow: "Daily cashflow",
    title: "Separate today's sales from ingredient and supplier costs.",
    copy: "Track cash, transfers, and expenses without turning your phone into a spreadsheet.",
    balance: "NGN 216,450",
    signal: "Profit view refreshed",
    metrics: [
      { label: "Today sales", value: "NGN 92k" },
      { label: "Supplies", value: "NGN 34k" },
    ],
    ledger: [
      { label: "Lunch sales", meta: "Income", value: "NGN 28,000" },
      { label: "Tomatoes", meta: "Expense", value: "NGN 11,400" },
      { label: "Bank transfer", meta: "Income", value: "NGN 46,500" },
    ],
    workflow: ["Log sales", "Add expense", "Check profit"],
  },
  {
    name: "Logistics teams",
    eyebrow: "Trip ledger",
    title: "See trip income, driver advances, and unpaid clients together.",
    copy: "Bookeepa makes every job easy to capture, whether payment comes before or after delivery.",
    balance: "NGN 1,128,900",
    signal: "3 unpaid deliveries",
    metrics: [
      { label: "Trip income", value: "NGN 410k" },
      { label: "Advances", value: "NGN 58k" },
    ],
    ledger: [
      { label: "Lekki delivery", meta: "Completed", value: "NGN 36,000" },
      { label: "Driver advance", meta: "Expense", value: "NGN 15,000" },
      { label: "Ibadan client", meta: "Pending", value: "NGN 120,000" },
    ],
    workflow: ["Create job", "Track payment", "Follow up"],
  },
  {
    name: "Market sellers",
    eyebrow: "Customer book",
    title: "Replace paper customer books with clean mobile records.",
    copy: "Keep familiar credit workflows, but make the balances searchable, safer, and reminder-ready.",
    balance: "NGN 388,200",
    signal: "Customer book synced",
    metrics: [
      { label: "Saved buyers", value: "128" },
      { label: "Due this week", value: "NGN 96k" },
    ],
    ledger: [
      { label: "Madam Sade", meta: "Textiles", value: "NGN 24,000" },
      { label: "Chika", meta: "Paid cash", value: "NGN 9,500" },
      { label: "Bala", meta: "Due Monday", value: "NGN 41,000" },
    ],
    workflow: ["Select buyer", "Add balance", "Confirm paid"],
  },
  {
    name: "Accountants",
    eyebrow: "Multi-client control",
    title: "Support multiple SMEs without chasing owners for missing context.",
    copy: "Review recent transactions, customer balances, and reminder logs from a simpler shared workspace.",
    balance: "12 businesses",
    signal: "4 reports ready",
    metrics: [
      { label: "Clean entries", value: "96%" },
      { label: "Missing context", value: "4 items" },
    ],
    ledger: [
      { label: "Ayo Stores", meta: "Reviewed", value: "NGN 840k" },
      { label: "Titi Foods", meta: "Needs note", value: "NGN 132k" },
      { label: "Northline", meta: "Export ready", value: "NGN 1.2m" },
    ],
    workflow: ["Switch business", "Review entries", "Prepare report"],
  },
];

export function AudienceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAudience = audiences[activeIndex];

  return (
    <section className={styles.segmentStrip} id="use-cases" aria-labelledby="use-cases-title" data-rise>
      <div className={styles.tabsHeader}>
        <div>
          <p>Use cases</p>
          <h2 id="use-cases-title">A finance workspace shaped around how the business actually runs.</h2>
        </div>
        {/* <span>Tap a segment to preview its operating flow.</span> */}
      </div>

      <div className={styles.tabList} role="tablist" aria-label="Bookeepa business types">
        {audiences.map((audience, index) => (
          <button
            key={audience.name}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="audience-panel"
            className={activeIndex === index ? styles.activeTab : undefined}
            onClick={() => setActiveIndex(index)}
          >
            {activeIndex === index && (
              <motion.span
                className={styles.tabIndicator}
                layoutId="audience-tab"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span>{audience.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeAudience.name}
          id="audience-panel"
          role="tabpanel"
          className={styles.tabPanel}
          initial={{ opacity: 0, y: 24, scale: 0.985, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, scale: 0.985, filter: "blur(10px)" }}
          transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.tabCopy}>
            <p>{activeAudience.eyebrow}</p>
            <h3>{activeAudience.title}</h3>
            <span>{activeAudience.copy}</span>
            <div className={styles.tabStats}>
              {activeAudience.metrics.map((metric) => (
                <div key={metric.label}>
                  <small>{metric.label}</small>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.tabPreview} aria-label={`${activeAudience.name} Bookeepa preview`}>
            <div className={styles.previewTop}>
              <span>Preview</span>
              <small>{activeAudience.name}</small>
            </div>
            <div className={styles.previewBalance}>
              <small>Snapshot</small>
              <strong>{activeAudience.balance}</strong>
              <span>{activeAudience.signal}</span>
            </div>
            <div className={styles.previewLedger}>
              {activeAudience.ledger.map((row) => (
                <div key={row.label}>
                  <span />
                  <p>
                    <strong>{row.label}</strong>
                    <small>{row.meta}</small>
                  </p>
                  <b>{row.value}</b>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.tabWorkflow} aria-label={`${activeAudience.name} workflow`}>
            <p>Flow</p>
            {activeAudience.workflow.map((step, index) => (
              <div key={step}>
                <small>0{index + 1}</small>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
