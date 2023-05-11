import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

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
        <button
          className={clsx(
            'flex flex-col w-10 h-12 border-0 bg-transparent gap-[0.75rem]',
            isMenuOpen && 'group',
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className="bg-white h-0.5 w-full rounded-[5px] transition-all group-hover:rotate-45"
            style={{ transformOrigin: 'left' }}
          ></div>
          <div
            className="bg-white h-0.5 w-full rounded-[5px] transition-all group-hover:opacity-0"
            style={{ transformOrigin: 'left' }}
          ></div>
          <div
            className="bg-white h-0.5 w-full rounded-[5px] transition-all group-hover:-rotate-45"
            style={{ transformOrigin: 'left' }}
          ></div>
        </button>
        <div className="flex flex-col gap-1 justify-center items-center">
          <Link href="/"
            className="py-2 hover:bg-slate-800 block w-full font-[fortnite] tracking-widest text-xl">
              ¿Qué disciplinas intervienen?
          </Link>
          <Link href="/guess"
            className="py-2 hover:bg-slate-800 block w-full font-[fortnite] tracking-widest text-xl">
              ¿Cuál es la disciplina?
          </Link>
        </div>
      </div>
      <div className="pt-3 px-2">
        <button
          className={clsx(
            'flex flex-col w-10 h-12 border-0 bg-transparent gap-[0.75rem]',
            isMenuOpen && 'group',
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className="bg-white h-0.5 w-full rounded-[5px] transition-all group-hover:rotate-45"
            style={{ transformOrigin: 'left' }}
          ></div>
          <div
            className="bg-white h-0.5 w-full rounded-[5px] transition-all group-hover:opacity-0"
            style={{ transformOrigin: 'left' }}
          ></div>
          <div
            className="bg-white h-0.5 w-full rounded-[5px] transition-all group-hover:-rotate-45"
            style={{ transformOrigin: 'left' }}
          ></div>
        </button>
      </div>
      <div className="grow">{children}</div>
    </div>
  )
}
