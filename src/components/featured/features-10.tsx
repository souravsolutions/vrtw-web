import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, type LucideIcon, MapIcon } from "lucide-react";

import setup from "../../assets/setup.png";
import gg from "../../assets/ggg.png";

export default function Features() {
  return (
    <section className='bg-zinc-50 pb-16 md:pb-32 dark:bg-transparent'>
      <div className='mx-auto max-w-2xl px-6 lg:max-w-5xl'>
        <div className='mx-auto grid gap-4 lg:grid-cols-2'>
          <FeatureCard>
            <CardHeader className='pb-3'>
              <CardHeading
                icon={MapIcon}
                title='Smart project scaffolding'
                description='React + Tailwind + TS in one clean command.'
              />
            </CardHeader>

            <div className='relative border-t border-dashed max-sm:mb-6'>
              <div
                aria-hidden
                className='absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]'
              />
              <div className='aspect-76/59 p-1 px-6'>
                <DualModeImage
                  darkSrc={setup}
                  lightSrc='/payments-light.png'
                  alt='payments illustration'
                />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className='pb-3'>
              <CardHeading
                icon={Calendar}
                title='Instant dev environment'
                description='Your app is live in seconds — not minutes.'
              />
            </CardHeader>

            <CardContent>
              <div className='mask-radial-at-right mask-radial-from-75% mask-radial-[75%_75%] relative max-sm:mb-6'>
                <div className='aspect-76/59 overflow-hidden rounded-lg border'>
                  <DualModeImage
                    darkSrc={gg}
                    lightSrc='/origin-cal.png'
                    alt='calendar illustration'
                  />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className='p-6 lg:col-span-2'>
            <p className='mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold font-ubuntu'>
              Build faster with sensible defaults and optional extras—without
              the boilerplate.
            </p>

            <div className='flex justify-center gap-6 overflow-hidden font-mono'>
              <CircularUI
                label='Zero-config'
                circles={[{ pattern: "border" }, { pattern: "border" }]}
              />

              <CircularUI
                label='Clean structure'
                circles={[{ pattern: "none" }, { pattern: "primary" }]}
              />

              <CircularUI
                label='Modern stack'
                circles={[{ pattern: "blue" }, { pattern: "none" }]}
              />

              <CircularUI
                label='Extensible'
                circles={[{ pattern: "primary" }, { pattern: "none" }]}
                className='hidden sm:block'
              />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn("group relative rounded-none shadow-zinc-950/5", className)}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className='border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2' />
    <span className='border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2' />
    <span className='border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2' />
    <span className='border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2' />
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className='p-6'>
    <span className='text-muted-foreground flex items-center gap-2 font-mono'>
      <Icon className='size-4' />
      {title}
    </span>
    <p className='mt-8 text-2xl font-semibold font-ubuntu'>{description}</p>
  </div>
);

interface DualModeImageProps {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  className?: string;
}

const DualModeImage = ({
  darkSrc,
  lightSrc,
  alt,
  className,
}: DualModeImageProps) => {
  return (
    <>
      <img
        src={darkSrc}
        className={cn(
          "hidden w-full select-none object-contain dark:block",
          className,
        )}
        alt={`${alt} dark`}
        loading='lazy'
        draggable={false}
      />

      <img
        src={lightSrc}
        className={cn(
          "w-full select-none object-contain shadow dark:hidden",
          className,
        )}
        alt={`${alt} light`}
        loading='lazy'
        draggable={false}
      />
    </>
  );
};

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className='bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px'>
      <div className='bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4'>
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-primary bg-background bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "bg-background z-10 border-blue-500 bg-[repeating-linear-gradient(-45deg,var(--color-blue-500),var(--color-blue-500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          />
        ))}
      </div>
    </div>
    <span className='text-muted-foreground mt-1.5 block text-center text-sm'>
      {label}
    </span>
  </div>
);
