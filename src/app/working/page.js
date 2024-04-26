export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>
          working OG image:
          https://www.aaudxp-cms.aau.dk/media/ubdgjwfl/aau-energy-2.png
        </p>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Create Next App",
  description: "Gsomething",
  openGraph: {
    images: [ 'https://www.aaudxp-cms.aau.dk/media/ubdgjwfl/aau-energy-2.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your title",
    description: "Your description",
    creator: "@author_name",
    images: [{url:"https://prod-aaudxp-cms-001-app.azurewebsites.net/media/ubdgjwfl/aau-energy-2.png", width: 1200, height: 630}],
  },
};
