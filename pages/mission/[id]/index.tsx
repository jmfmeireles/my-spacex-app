import { useContext } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';

import { gql, useQuery } from '@apollo/client';

import styles from '../../../styles/Mission.module.css';
import Loader from '../../../components/common/Loader';
import MissionImage from '../../../components/mission/MissionImage';
import MissionInfo from '../../../components/mission/MissionInfo';
import TranslationContext from '../../../context/Translation';

const GET_LAUNCH_INFO = gql`
  query GelLaunch($id: ID!) {
    launch(id: $id) {
      id
      links {
        video_link
        article_link
        mission_patch
        flickr_images
      }
      mission_name
      ships {
        name
        status
        type
        url
      }
      launch_date_local
      details
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
    }
  }
`;

const Launch: NextPage = () => {
  const router = useRouter();
  const { t } = useContext(TranslationContext);
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_LAUNCH_INFO, {
    variables: { id: id },
  });
  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/d-din" rel="stylesheet" />
      </Head>
      <main>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2 className={styles.title}>{data.launch.mission_name}</h2>
            <div className={styles.detailedInfo}>
              <MissionImage missionLinks={data.launch.links} />
              <MissionInfo launchData={data.launch} />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Launch;
