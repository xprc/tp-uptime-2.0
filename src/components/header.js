import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import Link from './link';

function Header() {

  useEffect(() => {
    document.title = window.Config.SiteName;
  }, []);
  
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div id='header'>
      <div className='container'>
        <h1 className='logo'>{window.Config.SiteName}</h1>
        <button onClick={switchTheme}>Switch to Theme</button>
        <div className='navi'>
          {window.Config.Navi.map((item, index) => (
            <Link key={index} to={item.url} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
