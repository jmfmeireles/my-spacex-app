import { useContext } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { gql, useQuery } from '@apollo/client';

import styles from '../styles/Home.module.css';
import Loader from '../components/common/Loader';
import { LaunchBasicData } from '../models/Launch';
import Rocket from '../components/common/Rocket';
import TranslationContext from '../context/Translation';

const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      details
      id
    }
  }
`;

const Home: NextPage = () => {
  const { t } = useContext(TranslationContext);
  const { loading, error, data } = useQuery(GET_LAUNCHES);
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
        <div className={styles.title}>
          <h2>{t.lastLaunches}</h2>
          <Rocket />
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.launches}>
            {data.launchesPast.map((launch: LaunchBasicData) => (
              <Link
                href="/mission/${launch.id}"
                as={`/mission/${launch.id}`}
                passHref
                key={launch.id}
              >
                <div className={`${styles.card} overlay`}>
                  <h3>{launch.mission_name}</h3>
                  <p className={styles.details}>
                    {launch.details ?? <>{t.noDetailsFound}</>}
                  </p>
                  <p className={styles.date}>
                    {new Date(launch.launch_date_local).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
