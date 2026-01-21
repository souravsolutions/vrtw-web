import { useRef, useState } from "react";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";
import { NPM } from "./ui/npmIcon";
import { GithubIcon, type GithubIconHandle } from "@/icons/GithubIcon";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const githubRef = useRef<GithubIconHandle>(null);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className='fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent'
      >
        <div className='m-auto max-w-5xl px-6'>
          <div className='flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4'>
            <div className='flex w-full justify-between lg:w-auto'>
              <img
                src={logo}
                alt='VRTW'
                className='h-9 w-9 shrink-0 rounded-md object-contain'
                draggable={false}
              />

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className='relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden'
              >
                <Menu className='in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200' />
                <X className='in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200' />
              </button>
            </div>

            <div className='bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent '>
              <div className=''>
                <ul className='space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm'>
                  <a
                    href='https://www.npmjs.com/package/create-vrtw'
                    className='text-muted-foreground hover:text-accent-foreground block duration-150 font-jetbrains'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <NPM className='size-6' />
                  </a>
                </ul>
              </div>

              <div className='flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6'>
                <Button
                  asChild
                  variant='outline'
                  size='sm'
                  className='font-jetbrains'
                  onMouseEnter={() => githubRef.current?.startAnimation()}
                  onMouseLeave={() => githubRef.current?.stopAnimation()}
                >
                  <a
                    href='https://github.com/Avijit07x/create-vrtw'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <GithubIcon ref={githubRef} />
                    github
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
