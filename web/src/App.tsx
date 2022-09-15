import { MagnifyingGlassPlus } from 'phosphor-react'
import { GameBanner } from './components/GameBanner'
import './styles/main.css'

import Logo from './assets/logo.svg'
import { Banner } from './components/Banner'

function App() {
  return (
    <div className="w-11/12 max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={Logo} alt="Logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-span-gradient bg-clip-text text-transparent">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl='/image-1.png' title='Ligue Of Legends' adsCount={5}/>
        <GameBanner bannerUrl='/image-2.png' title='Dota 2' adsCount={7}/>
        <GameBanner bannerUrl='/image-3.png' title='Counter Strike' adsCount={10}/>
        <GameBanner bannerUrl='/image-4.png' title='Apex Legends' adsCount={8}/>
        <GameBanner bannerUrl='/image-5.png' title='Fortnite' adsCount={3}/>
        <GameBanner bannerUrl='/image-6.png' title='World WarCraft' adsCount={2}/>
      </div>

       <Banner />
    </div>
  )
}

export default App
