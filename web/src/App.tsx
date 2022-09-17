import axios from 'axios'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './components/GameBanner'
import { Banner } from './components/Banner'

import Logo from './assets/logo.svg'
import './styles/main.css'
import { Modal } from './components/Modal'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('https://evander-sports.fly.dev/games')
      .then(response => {
        setGames(response.data)
      })
  }, [])

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
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <Banner />
        <Modal />
      </Dialog.Root>
    </div>
  )
}

export default App
