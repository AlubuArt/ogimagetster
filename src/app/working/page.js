export const metadata = {
  title: "Create Next App",
  description: "Gsomething",
  openGraph: {
images: 'https://www.aaudxp-cms.aau.dk/media/ubdgjwfl/aau-energy-2.png'
}
  } 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p>working OG image: https://www.aaudxp-cms.aau.dk/media/ubdgjwfl/aau-energy-2.png</p>
        </div>
      </main>
  );
}

