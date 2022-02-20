import { useContext } from 'react';

import styles from '../../styles/Mission.module.css';
import { LaunchDetailedData } from '../../models/Launch';
import Rocket from '../common/Rocket';
import TranslationContext from '../../context/Translation';

const MissionInfo = (props: { launchData: LaunchDetailedData }) => {
  const { t } = useContext(TranslationContext);
  const launchDate = new Date(props.launchData.launch_date_local);

  return (
    <div className={styles.textInfo}>
      <div className={styles.launchAndRocket}>
        <div className={styles.launchInfo}>
          <h4>
            <span>{t.launchLocal}: </span>
            {props.launchData.launch_site.site_name}
          </h4>
          <h4>{`${launchDate.toLocaleDateString()}, ${launchDate.toLocaleTimeString()}`}</h4>
        </div>
        <div className={styles.rocket}>
          <Rocket />
          <h4>{props.launchData.rocket.rocket_name}</h4>
        </div>
      </div>
      {props.launchData.details && (
        <p data-testid="details" className={`${styles.details} border`}>
          {props.launchData.details}
        </p>
      )}
      {props.launchData.ships.length > 0 && (
        <div data-testid="ships" className={`${styles.shipsWrapper} border`}>
          <h3>{t.ships}</h3>
          <div className={styles.ships}>
            {props.launchData.ships.map(ship => (
              <a
                key={ship.name}
                href={ship.url}
                className={styles.ship}
                target="_blank"
                rel="noreferrer"
              >{`${ship.name} (${ship.type})`}</a>
            ))}
          </div>
        </div>
      )}
      <div className={`${styles.buttons} border`}>
        {props.launchData.links.video_link && (
          <a
            className="button"
            data-testid="video"
            href={props.launchData.links.video_link}
            target="_blank"
            rel="noreferrer"
          >
            {t.video}
          </a>
        )}
        {props.launchData.links.article_link && (
          <a
            className="button"
            data-testid="article"
            href={props.launchData.links.article_link}
            target="_blank"
            rel="noreferrer"
          >
            {t.article}
          </a>
        )}
      </div>
    </div>
  );
};

export default MissionInfo;
