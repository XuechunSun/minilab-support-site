import { useEffect } from "react";

const SUPPORT_EMAIL = "app.minilab@gmail.com";
const EFFECTIVE_DATE = "May 12, 2026";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy – MiniLab";
  }, []);

  return (
    <article className="page">
      <h1>Privacy Policy</h1>
      <p className="effective">Effective Date: {EFFECTIVE_DATE}</p>

      <p>
        This Privacy Policy describes how MiniLab – Experiments for Everyday
        Life (“MiniLab,” “we,” “us”) handles information when you use the app.
        MiniLab is designed to be local-first: your experiment data lives on
        your device, not on our servers.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        The current version of MiniLab does not require an account and does not
        collect personal information on our servers. We do not ask for your
        name, email, phone number, or other identifiers to use the app.
      </p>
      <p>
        Information you create inside MiniLab — such as experiment titles,
        descriptions, daily notes, moods, optional photos, and app preferences
        — is entered by you and stored locally on your device.
      </p>

      <h2>2. How Your Information Is Stored</h2>
      <p>
        User-entered experiment titles, descriptions, daily notes, moods,
        optional photos, and app preferences are stored locally on the device
        using the operating system’s standard on-device storage. This data is
        not transmitted to MiniLab’s servers in the current version of the app.
      </p>

      <h2>3. How We Use Information</h2>
      <p>
        Because your experiment data is stored locally, it is used only to
        provide the app’s features to you — for example, to display your
        experiments, daily logs, and summaries inside the app. We do not use
        your content for advertising or profiling.
      </p>

      <h2>4. Data Sharing</h2>
      <p>
        MiniLab does not sell, rent, or share personal information with
        advertisers or data brokers. Because the current version of MiniLab
        does not collect personal information on our servers, there is no
        server-side personal data for us to share.
      </p>

      <h2>5. Analytics and Tracking</h2>
      <p>
        The current version of MiniLab does not use third-party advertising
        trackers or behavioral advertising. We do not embed analytics SDKs or
        ad networks that track you across apps or websites.
      </p>

      <h2>6. Photos</h2>
      <p>
        If you choose to attach photos to a log entry, those optional photos
        are stored locally and used only to display logs inside the app. MiniLab
        does not upload your photos to our servers in the current version.
      </p>

      <h2>7. Data Deletion</h2>
      <p>
        You are in control of your data. You can delete local app data by
        deleting experiments where available within the app, or by deleting
        the app from your device, which removes its locally stored data
        according to your operating system’s behavior.
      </p>

      <h2>8. Children’s Privacy</h2>
      <p>
        MiniLab is not directed to children under the age of 13, and the
        current version does not knowingly collect personal information from
        children. If you believe a child has contacted us or provided personal
        information to us, please contact us so we can address it.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        to the app or for legal, operational, or regulatory reasons. When we
        do, we will update the “Effective Date” at the top of this page.
        Material changes will be reflected here before they take effect.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or MiniLab’s privacy
        practices, please contact us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </article>
  );
}
