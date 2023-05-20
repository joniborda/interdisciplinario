import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { TopBarButton } from './TopBarButton'

export const TopBar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="topBar flex w-full">
      <div
        className={clsx(
          'z-50 absolute pt-3 pl-2 min-w-[300px] drop-shadow-md h-screen',
          isMenuOpen ? 'left-0' : '-left-full',
        )}
        style={{
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="flex">
          <TopBarButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <h2
            className={clsx(
              'py-2 hover:bg-slate-800 block w-full font-[fortnite]',
              'tracking-widest text-2xl justify-self-center text-center pr-4',
            )}
          >
            Menú
          </h2>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <Link
            href="/"
            className="py-2 hover:bg-slate-800 block w-full font-[fortnite] tracking-widest text-xl"
          >
            ¿Qué disciplinas intervienen?
          </Link>
          <Link
            href="/guess"
            className="py-2 hover:bg-slate-800 block w-full font-[fortnite] tracking-widest text-xl"
          >
            ¿Cuál es la disciplina?
          </Link>
          <Link
            href="/list"
            className="py-2 hover:bg-slate-800 block w-full font-[fortnite] tracking-widest text-xl"
          >
            Glosario
          </Link>
        </div>
      </div>
      <div className="pt-3 px-2">
        <TopBarButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div className="grow">{children}</div>
    </div>
  )
}
