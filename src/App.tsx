/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import MenuHighlights from './components/MenuHighlights';
import Atmosphere from './components/Atmosphere';
import Lifestyle from './components/Lifestyle';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sand-50 font-sans selection:bg-sea-900 selection:text-sand-50">
      <Navigation />
      <main>
        <Hero />
        <Story />
        <MenuHighlights />
        <Lifestyle />
        <Atmosphere />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
