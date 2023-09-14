import React, { memo } from "react";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.webHomePage1}>
      <div className={styles.webHomePage1Child} />
      <div className={styles.webHomePage1Item} />
      <div className={styles.webHomePage1Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.frameDiv} />
      <img
        className={styles.aceofnetI3em9pgzkzwUnsplashIcon}
        alt=""
      />
      <div className={styles.webHomePage1Child1} />
      <div className={styles.groupDiv}>
        <div className={styles.startingFromRs500Parent}>
          <div className={styles.startingFromRs}>Starting from RS 500</div>
          <b className={styles.experientialTourismIs}>
            Experiential tourism is a type of travel that prioritizes immersive
            and hands-on experiences over traditional sightseeing. Travelers
            actively engage with a destination's culture to connect more deeply
            with the place they are visiting.
          </b>
        </div>
      </div>
      <div className={styles.experientialTourism}>Experiential Tourism</div>
      <img
        className={styles.sehajpalSingh8uqj1L3hzkUnsIcon}
        alt=""
        src="/undefined1.png"
      />
      <div className={styles.webHomePage1Child2} />
      <div className={styles.webHomePage1Inner1}>
        <div className={styles.spiritualTourismInvolvesTraWrapper}>
          <b className={styles.spiritualTourismInvolvesContainer}>
            <p
              className={styles.spiritualTourismInvolves}
            >{`Spiritual tourism involves traveling to destinations or engaging in   experiences that are deeply `}</p>
            <p
              className={styles.spiritualTourismInvolves}
            >{`connected to one's spiritual `}</p>
            <p className={styles.spiritualTourismInvolves}>
              or religious beliefs.
            </p>
          </b>
        </div>
      </div>
      <div className={styles.spiritualTourism}>Spiritual Tourism</div>
      <b className={styles.startingFromRs1}>Starting from RS 800</b>
      <img
        className={styles.nationalCancerInstitute701Icon}
        alt=""
        src="/undefined2.png"
      />
      <div className={styles.webHomePage1Child3} />
      <div className={styles.webHomePage1Inner2}>
        <div className={styles.medicalTourismRefersToTheWrapper}>
          <b className={styles.medicalTourismRefers}>
            Medical tourism refers to the practice of traveling to other
            countries or regions to receive medical treatment, often due to
            lower costs, shorter wait times, or access to specialized procedures
            and expertise not available in one's home country.
          </b>
        </div>
      </div>
      <b className={styles.startingFromRs2}>Starting from RS 1000</b>
      <div className={styles.medicalTourism}>Medical Tourism</div>
      <img
        className={styles.vincentVanZalingeVk9bntxotsIcon}
        alt=""
        src="/undefined3.png"
      />
      <div className={styles.webHomePage1Child4} />
      <div className={styles.webHomePage1Inner3}>
        <div className={styles.wildlifeTourismIsAFormOfWrapper}>
          <b className={styles.wildlifeTourismIs}>
            Wildlife tourism is a form of travel that centers around observing
            and interacting with wildlife in their natural habitats. Travelers
            visit destinations known for their rich biodiversity and ecosystems
            to experience encounters.
          </b>
        </div>
      </div>
      <div className={styles.wildlifeTourism}>Wildlife Tourism</div>
      <b className={styles.startingFromRs3}>Starting from RS 1500</b>
    </div>
    </div>
  );
}
export default memo(Home);
