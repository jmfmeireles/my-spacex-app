import { render, screen } from '@testing-library/react';
import TranslationContext from '../../../context/Translation';
import { en } from '../../../locales/en';
import { LaunchDetailedData, MissionLinks } from '../../../models/Launch';
import MissionImage from '../MissionImage';
import MissionInfo from '../MissionInfo';

const defaultLaunchDataUsedForTest: LaunchDetailedData = {
  id: 108,
  links: {
    video_link: 'https://youtu.be/aVFPzTDCihQ',
    article_link:
      'https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/',
    mission_patch: null,
    flickr_images: [],
  },
  mission_name: 'Sentinel-6 Michael Freilich',
  ships: [
    {
      name: 'Ship example',
      type: 'Cargo',
      url: 'www.example.com',
    },
  ],
  launch_date_local: '2020-11-21T09:17:00-08:00',
  details:
    'SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.',
  rocket: { rocket_name: 'Falcon 9' },
  launch_site: { site_name: 'VAFB SLC 4E' },
};

describe('Mission Image', () => {
  it('renders properly without details, ships, video link and article link', () => {
    renderComponent({
      ...defaultLaunchDataUsedForTest,
      details: '',
      links: {
        ...defaultLaunchDataUsedForTest.links,
        video_link: '',
        article_link: '',
      },
      ships: [],
    });
    expect(screen.queryAllByTestId('details')).toHaveLength(0);
    expect(screen.queryAllByTestId('ships')).toHaveLength(0);
    expect(screen.queryAllByTestId('video')).toHaveLength(0);
    expect(screen.queryAllByTestId('article')).toHaveLength(0);
  });

  it('renders mission with all info', () => {
    renderComponent(defaultLaunchDataUsedForTest);
    expect(screen.queryAllByTestId('details')).toHaveLength(1);
    expect(screen.queryAllByTestId('ships')).toHaveLength(1);
    expect(screen.queryAllByTestId('video')).toHaveLength(1);
    expect(screen.queryAllByTestId('article')).toHaveLength(1);
  });

  function renderComponent(launchData: LaunchDetailedData) {
    render(
      <TranslationContext.Provider value={{ t: en }}>
        <MissionInfo launchData={launchData} />
      </TranslationContext.Provider>,
    );
  }
});
