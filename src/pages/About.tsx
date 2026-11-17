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
          model answers, and quizzes. Progress is stored only on your device.
        </p>
        <p>
          Each objection comes with the exchange that usually follows: what the other person is likely to say to your
          answer, how to reply, what they say to that, and so on for as many rounds as the real argument runs. Open
          each round in turn after you have tried your own answer.
        </p>
        <p>
          Each quiz draws ten questions at random from the topic’s bank and shuffles the answers, so a second attempt
          is a different test. The mixed quiz draws from a whole track or sub-track.
        </p>
        <p>
          The Islam Specialization has sub-tracks for the groups you are most likely to meet: Sunni and Shia Muslims,
          Quran-only Muslims, the Ahmadiyya, the Nation of Islam, the Druze, and Alawites and Alevis.
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
          refer to classical Muslim commentaries, the early biography of Muhammad, and manuscript scholarship. What
          the lessons say about the commentaries (al-Tabari, Ibn Kathir, the Jalalayn) and about Ibn Ishaq’s biography
          has been checked against their text; the app describes them without showing the text in a popup. The
          manuscript lesson is drawn from published scholarship, listed under its Further reading.
        </p>
        <p>
          The sub-track lessons also describe the history and teaching of particular communities. Those facts are
          taken from each community’s own publications, from primary texts and from published scholarship and
          standard reference works. Encyclopedias that anyone can edit are not used as a source. For closed
          communities such as the Druze and the Alawites, whose teaching is not public, the lessons say what outside
          scholars report and say that it is a report.
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
