import { useGithubStars } from "@/hooks/useGithubStars";
import { useNpmDownloads } from "@/hooks/useNpmDownloads";

export default function StatsSection() {
  const {
    data: stars,
    isLoading: starsLoading,
    isError: starsError,
  } = useGithubStars();

  const {
    data: downloads,
    isLoading: downloadsLoading,
    isError: downloadsError,
  } = useNpmDownloads();

  if (starsLoading || downloadsLoading) {
    return <p>Loading...</p>;
  }

  if (starsError || downloadsError) {
    return <p>Failed to load stats</p>;
  }

  return (
    <section className='py-12 md:py-16'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-semibold md:text-4xl font-ubuntu'>
            VRTW by the numbers
          </h2>
          <p className='mt-3 text-sm text-muted-foreground md:text-base font-mono'>
            Quick proof that VRTW helps you ship faster.
          </p>
        </div>

        <div className='mt-10 rounded-2xl border bg-background/40'>
          <div className='grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0'>
            <div className='px-6 py-8 text-center'>
              <div className='text-4xl font-bold md:text-5xl font-mono'>
                {stars == null ? "—" : `+${stars.toLocaleString()}`}
              </div>
              <p className='mt-2 text-sm text-muted-foreground font-mono'>
                Stars on GitHub
              </p>
            </div>

            <div className='px-6 py-8 text-center'>
              <div className='text-4xl font-bold md:text-5xl font-mono'>
                {downloads == null ? "—" : `${downloads.toLocaleString()}+`}
              </div>
              <p className='mt-2 text-sm text-muted-foreground font-mono'>Downloads</p>
            </div>

            <div className='px-6 py-8 text-center'>
              <div className='text-4xl font-bold md:text-5xl font-mono'>10s</div>
              <p className='mt-2 text-sm text-muted-foreground font-mono'>Setup time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
