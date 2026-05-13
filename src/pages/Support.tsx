import { ReactNode, useEffect } from "react";

const SUPPORT_EMAIL = "app.minilab@gmail.com";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "What is MiniLab?",
    a: "MiniLab is a personal experiment and reflection app. It helps you create small experiments, log daily notes and moods, and review gentle summaries over time.",
  },
  {
    q: "Do I need an account?",
    a: "No. The current version of MiniLab does not require an account.",
  },
  {
    q: "Where is my data stored?",
    a: "The current version of MiniLab stores your experiment data locally on your device.",
  },
  {
    q: "How can I delete my data?",
    a: "You can delete experiments or app data from within the app where available. You can also remove all locally stored app data by deleting the app from your device.",
  },
  {
    q: "How do I report a bug or request a feature?",
    a: (
      <>
        Please email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with your device
        model, iOS version, app version, and a short description of the issue
        or request.
      </>
    ),
  },
];

export default function Support() {
  useEffect(() => {
    document.title = "Support – MiniLab";
  }, []);

  return (
    <article className="page">
      <h1>MiniLab Support</h1>
      <p>
        If you have questions, app issues, feedback, or feature requests, please
        contact us.
      </p>

      <h2>Contact</h2>
      <p>
        <a className="contact-pill" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>
      </p>

      <h2>FAQ</h2>
      <div className="faq">
        {faqs.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <h3>
              {idx + 1}. {item.q}
            </h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
