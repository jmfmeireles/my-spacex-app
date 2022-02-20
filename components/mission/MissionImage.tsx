import { useContext } from 'react';
import Image from 'next/image';

import styles from '../../styles/Mission.module.css';
import { MissionLinks } from '../../models/Launch';
import TranslationContext from '../../context/Translation';

const MissionImage = (props: { missionLinks: MissionLinks }) => {
  const { t } = useContext(TranslationContext);
  const imageSrc: string | null = props.missionLinks.flickr_images.length
    ? props.missionLinks.flickr_images[0]
    : props.missionLinks.mission_patch;
  return (
    <>
      {imageSrc && (
        <div className={styles.image}>
          <Image
            src={imageSrc}
            alt={t.missionImage}
            layout="responsive"
            width="100%"
            height="100%"
            priority={true}
          />
        </div>
      )}
    </>
  );
};

export default MissionImage;
