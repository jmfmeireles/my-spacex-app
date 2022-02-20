import { useContext } from 'react';
import Image from 'next/image';

import TranslationContext from '../../context/Translation';

const Rocket = () => {
  const { t } = useContext(TranslationContext);

  return (
    <Image
      src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png"
      alt={t.rocketImage}
      layout="fixed"
      width="40px"
      height="40px"
      quality="50"
    />
  );
};

export default Rocket;
