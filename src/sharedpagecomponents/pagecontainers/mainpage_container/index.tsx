import { ReactNode, useMemo, useState, useEffect } from 'react';
import s from './ManePageContainer.module.css';
import '../../../w3.css';

function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, [mediaQuery]);

  return match;
}

export const MainPageContainer = ({ children }: { children: ReactNode }) => {
  const sm = useMediaQuery('(max-width: 720px)');

  if (sm) {
    console.log('sm');
    return <div className={s.gridOnecol}>{children}</div>;
  } else {
    return <div className={s.grid}>{children}</div>;
  }
};
