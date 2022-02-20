import { render } from '@testing-library/react';
import { MissionLinks } from '../../../models/Launch';
import MissionImage from '../MissionImage';

const defaultMissionLinksUsedForTest: MissionLinks = {
  video_link: 'https://youtu.be/aVFPzTDCihQ',
  article_link:
    'https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/',
  mission_patch: null,
  flickr_images: [
    'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
    'https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg',
  ],
};

describe('Mission Image', () => {
  it('renders first image of flickr_images properly', () => {
    expect(
      getRenderedComponent(defaultMissionLinksUsedForTest),
    ).toMatchSnapshot();
  });

  it('renders mission patch properly', () => {
    expect(
      getRenderedComponent({
        ...defaultMissionLinksUsedForTest,
        flickr_images: [],
        mission_patch:
          'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg',
      }),
    ).toMatchSnapshot();
  });

  it('does not render anything', () => {
    expect(
      getRenderedComponent({
        ...defaultMissionLinksUsedForTest,
        flickr_images: [],
      }),
    ).toMatchSnapshot();
  });

  function getRenderedComponent(missionLinks: MissionLinks) {
    return render(<MissionImage missionLinks={missionLinks} />).container;
  }
});
