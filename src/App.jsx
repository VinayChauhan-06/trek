import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Chardham from './pages/Chardham'
import BaliPassTrek from './pages/BaliPassTrek'
import PhularaRidge from './pages/PhularaRidge'
import HarKiDunTrek from './pages/HarKiDunTrek'
import GaumukhTapovanTrek from './pages/GaumukhTapovanTrek'
import ChoptaTrek from './pages/ChoptaTrek'
import KedarkanthaTrek from './pages/KedarkanthaTrek'
import DayaraBugyal from './pages/DayaraBugyal'
import NagTibbaTrek from './pages/NagTibbaTrek'
import ValleyOfFlowersTrek from './pages/ValleyOfFlowersTrek'
import ExploreTreks from './pages/ExploreTreks'
import Blogs from './pages/Blogs'
import CancellationPolicy from './pages/CancellationPolicy'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chardham" element={<Chardham />} />
        <Route path="/trek-bali-pass-trek" element={<BaliPassTrek />} />
        <Route path="/trek-phulara-ridge" element={<PhularaRidge />} />
        <Route path="/trek-har-ki-dun-trek" element={<HarKiDunTrek />} />
        <Route path="/trek-gaumukh-tapovan-trek" element={<GaumukhTapovanTrek />} />
        <Route path="/trek-chopta-trek" element={<ChoptaTrek />} />
        <Route path="/trek-kedarkantha-trek" element={<KedarkanthaTrek />} />
        <Route path="/trek-dayara-bugyal" element={<DayaraBugyal />} />
        <Route path="/trek-nag-tibba-trek" element={<NagTibbaTrek />} />
        <Route path="/trek-valley-of-flowers-trek" element={<ValleyOfFlowersTrek />} />
        <Route path="/explore-treks" element={<ExploreTreks />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
