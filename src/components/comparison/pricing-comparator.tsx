import { Button } from "../ui/button";
import { Cpu } from "lucide-react";

type CellValue = boolean | string;

type Row = {
  feature: string;
  vite: CellValue;
  vrtw: CellValue;
};

const comparisonData: Row[] = [
  {
    feature: "Project Scaffolding",
    vite: true,
    vrtw: true,
  },
  {
    feature: "React Setup",
    vite: true,
    vrtw: true,
  },
  {
    feature: "Tailwind CSS Preconfigured",
    vite: false,
    vrtw: true,
  },
  {
    feature: "TypeScript / JavaScript Choice",
    vite: false,
    vrtw: true,
  },
  {
    feature: "Clean Folder Structure",
    vite: false,
    vrtw: true,
  },
  {
    feature: "Routing Ready",
    vite: false,
    vrtw: true,
  },
  {
    feature: "Opinionated Best Practices",
    vite: "",
    vrtw: true,
  },
  {
    feature: "One Command Setup",
    vite: false,
    vrtw: true,
  },
  {
    feature: "Setup vite + tailwind and others",
    vite: "2-3 mins",
    vrtw: "1 min",
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='size-4'
    >
      <path
        fillRule='evenodd'
        d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
        clipRule='evenodd'
      />
    </svg>
  );
}

function renderCell(value: CellValue) {
  if (value === true) return <CheckIcon />;
  if (value === false || value === "")
    return <span className='text-muted-foreground'>—</span>;
  return <span className='font-medium'>{value}</span>;
}

export default function ViteVsVRTWComparison() {
  return (
    <section className='py-16 md:py-28'>
      <div className='mx-auto max-w-5xl px-6'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h2 className='text-3xl font-semibold md:text-4xl font-ubuntu'>
            Vite vs VRTW CLI
          </h2>
          <p className='mt-3 text-muted-foreground font-mono'>
            See how VRTW saves you hours of setup compared to a plain Vite
            starter.
          </p>
        </div>

        {/* Table */}
        <div className='w-full overflow-x-auto'>
          <table className='w-full border-separate border-spacing-x-3'>
            <thead className='bg-background sticky top-0'>
              <tr className='*:py-4 *:text-left *:font-medium'>
                <th className='w-1/2'></th>

                <th>
                  <span className='block font-mono'>Vite</span>
                </th>

                <th className='bg-muted rounded-t-(--radius) px-4'>
                  <span className='block font-mono'>VRTW CLI</span>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm'>
              <tr className='*:py-3'>
                <td className='flex items-center gap-2 font-medium'>
                  <Cpu className='size-4' />
                  <span className='font-mono'>Core Features</span>
                </td>
                <td></td>
                <td className='bg-muted px-4'></td>
              </tr>

              {comparisonData.map((row, index) => (
                <tr key={index} className='*:border-b *:py-3'>
                  <td className='text-muted-foreground font-jetbrains'>
                    {row.feature}
                  </td>
                  <td className='font-mono'>{renderCell(row.vite)}</td>
                  <td className='bg-muted px-4'>
                    <div className='-mb-3 border-b py-3 font-mono'>
                      {renderCell(row.vrtw)}
                    </div>
                  </td>
                </tr>
              ))}

              <tr className='*:py-6'>
                <td></td>
                <td></td>
                <td className='bg-muted rounded-b-(--radius) px-4'></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className='mt-12 text-center font-ubuntu'>
          <Button size='lg'>Get Started with VRTW</Button>
        </div>
      </div>
    </section>
  );
}
