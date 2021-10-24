import Hero from './components/home/hero';
import Stats from './components/home/stats';
import Features from './components/home/features';
import Footer from './components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Footer />
    </main>
  )
}