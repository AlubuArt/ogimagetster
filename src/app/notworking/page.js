export default function Home() {


    return (
       <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <p>not working OG image: https://prod-aaudxp-cms-001-app.azurewebsites.net/media/ubdgjwfl/aau-energy-2.png</p>
                </div>
            </main>
    );
  }

  export const metadata = {
    title: "Create Next App",
    description: "Gsomething",
    openGraph: {
      images: [{ url:'https://www.aaudxp-cms.aau.dk/media/0s1dkbzr/aau_bygninger_090719_00398_effect-800px.jpg', width: 1200, height: 630}],
      url: 'https://ogimagetster.vercel.app/notworking',
      type: 'website',
      title: 'Test OG',
      description: 'test site',
      site_name: 'ogimagetster.vercel.app',
  
  
    },
    twitter: {
      card: "summary",
      title: "Working",
      domain: "ogimagetster.vercel.app/",
      url: "https://ogimagetster.vercel.app/notworking",
      site: "@ogimagetster",
      creator: "@ogimagetster",
      description: "This is an amazing description",
      image:"https://www.aaudxp-cms.aau.dk/media/3benkand/img_5598.jpg",
      
    },
  };