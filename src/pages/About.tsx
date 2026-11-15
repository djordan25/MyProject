import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Link to="/" className="back">← Home</Link>
      <h1>About and sources</h1>
      <section className="card lesson">
        <h2>What this is</h2>
        <p>
          A training tool for Christians who want to give a reason for their hope: short lessons, objection drills with
          model answers and follow-up replies, and quizzes. Progress is stored only on your device.
        </p>
      </section>
      <section className="card lesson">
        <h2>Sources and translations</h2>
        <p><strong>Bible:</strong> Berean Standard Bible (public domain). Lesson quotations and popups use the same text.</p>
        <p>
          <strong>Quran:</strong> Sahih International translation. Words in [square brackets] are the translators’
          additions and are not in the Arabic.
        </p>
        <p>
          <strong>Hadith:</strong> Sahih al-Bukhari and Sahih Muslim, the two collections Sunni Muslims regard as most
          authentic, in the English text and numbering used by sunnah.com. Words in (parentheses) are the translator’s
          explanations.
        </p>
        <p>
          These three are the backbone of the Islam Specialization. Some lessons also cite other hadith collections
          (Abu Dawud, Tirmidhi, Ibn Majah, Musnad Ahmad), whose popups show how Muslim scholars grade each report, and
          refer to classical Muslim commentaries, the early biography of Muhammad, and manuscript scholarship. Those
          last three are described from the published literature; the app does not hold their text, so check them
          before relying on a detail.
        </p>
      </section>
      <section className="card lesson">
        <h2>How accuracy is checked</h2>
        <p>
          Every reference must point to a real verse or hadith, and every quotation that is followed by a reference
          must match the wording of that passage; the app’s automated tests fail otherwise. Tap any reference to read
          the passage yourself, and follow the link in the popup to see it in context.
        </p>
        <p>No tool replaces your own checking. If something looks wrong, read the source and correct it.</p>
      </section>
    </>
  );
}
