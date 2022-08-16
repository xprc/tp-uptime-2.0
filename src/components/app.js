import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import useLocalStorage from 'use-local-storage';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);
  
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className='main' data-theme={theme}>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>
            <span onClick={switchTheme}>{theme === 'light' ? '深色模式' : '浅色模式'}</span> 
            <Link to='https://www.projectoms.com/pc/view/Terms.html' text='服务条款' />
            <Link to='https://www.projectoms.com/pc/view/Privacy.html' text='隐私政策' />
          </p>
          <p>基于 <Link to='https://uptimerobot.com/' text='UptimeRobot' /> 接口制作，检测频率 5 分钟</p>
          <p>&copy; 2022 <Link to='https://www.projectoms.com/' text='TomsProject' /> 版权所有 v{Package.version}</p>
          <p>
            <Link to='https://beian.miit.gov.cn/' text='京ICP备19007812号-2' />
            <Link to='https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802032182' text='京公网安备11010802032182号' />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
