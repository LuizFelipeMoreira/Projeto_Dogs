import React from 'react';

const useMedia = (media) => {
  const [matcth, setMach] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMach(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return matcth;
};

export default useMedia;
