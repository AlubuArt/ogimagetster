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
    images: [ 'https://prod-aaudxp-cms-001-app.azurewebsites.net/media/ubdgjwfl/aau-energy-2.png'],
  },
  twitter: {
    card: "summary",
    title: "Working",
    domain: "ogimagetster.vercel.app/",
    url: "https://ogimagetster.vercel.app/",
    site: "@ogimagetster",
    creator: "@ogimagetster",
    description: "This is an amazing description",
    image:"https://prod-aaudxp-cms-001-app.azurewebsites.net/media/yi1jzam4/aau50_19-04fotohansravn.jpg",
    
  },
};
