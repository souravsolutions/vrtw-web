import { Swiper } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

import { ArrowRight } from "lucide-react";

import CodeBlocks from "./CodeBlock";

export default function HeroSection() {
  return (
    <>
      <main className='overflow-hidden'>
        <section className='relative min-h-screen flex items-start pt-10 sm:pt-10'>
          <div className='relative w-full py-24 lg:py-28'>
            <div className='mx-auto max-w-7xl px-6 md:px-12'>
              <div className='text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5'>
                <a
                  href='#'
                  className='rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3'
                >
                  <span className='bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs'>
                    New
                  </span>
                  <span className='text-sm font-jetbrains'>
                    Introducing VRTW CLI
                  </span>
                  <span className='bg-(--color-border) block h-4 w-px'></span>
                  <ArrowRight className='size-4' />
                </a>

                <h1 className='mt-8 text-4xl font-extrabold md:text-5xl xl:text-6xl xl:leading-[1.125] sm:text-5xl font-geist'>
                  Build blazing-fast React <br /> apps in seconds
                </h1>

                <p className='mx-auto mt-8 hidden max-w-2xl text-wrap text-base sm:block font-mono'>
                  A zero-config CLI to instantly scaffold React apps with
                  Tailwind, TypeScript or JavaScript, with a production-ready
                  setup.
                </p>

                <div className='mt-8'></div>
              </div>

              <div className='x-auto relative mx-auto mt-8 max-w-lg sm:mt-12'>
                <div className='absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent_98%,--theme(--color-gray-200/75%)_98%),linear-gradient(to_right,transparent_94%,--theme(--color-gray-200/75%)_94%)] bg-size-[16px_35px] [mask:radial-gradient(black,transparent_95%)] dark:opacity-10'></div>
                <div className='absolute inset-x-0 top-12 -z-1 mx-auto h-1/3 w-2/3 rounded-full bg-blue-300 blur-3xl dark:bg-white/20'></div>

                <Swiper
                  slidesPerView={1}
                  loop={false}
                  autoplay={{ delay: 5000 }}
                  pagination={{ clickable: true }}
                  effect='coverflow'
                  coverflowEffect={{
                    rotate: 30,
                    depth: 120,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  modules={[Autoplay, EffectCoverflow, Pagination]}
                >
                  <CodeBlocks />
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
