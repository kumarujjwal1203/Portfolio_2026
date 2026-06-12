import VideoIntro from '../components/VideoIntro';
import PortfolioSections from '../components/PortfolioSections';
import StartOnRefresh from '../components/StartOnRefresh';

export default function Home() {
  return (
    <main>
      <StartOnRefresh />
      <VideoIntro />
      <PortfolioSections />
    </main>
  );
}
