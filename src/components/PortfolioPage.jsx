
import React from "react"
import { FadeIn } from '../components/FadeIn'


import Layout from "../components/layout.astro"

  const portfolio = [
    {
        name: 'Earth & Elle',
        description:
          "This health and beauty business has a beautiful website that allows them to sell collagen supplements all over the world.",
        desktop: 'https://res.cloudinary.com/websites-by-trevor/image/upload/v1733602584/earthMonitor_ye5lra.png',
        link: 'https://earthandelle.netlify.app/'
      },
      {
        name: 'Spotter Fitness',
        description:
          "This fitness app is transforming the way people work out. With their new website, they're able to funnel more customers directly to their app.",
        desktop: 'https://res.cloudinary.com/websites-by-trevor/image/upload/v1733602691/spotterMonitor_mrakwf.png',
        link: 'https://spotterfitness.netlify.app/'
      },

    {
      name: "Eagle Plume's",
      description:
      "A little piece of history in the high mountains of Colorado, this 100 year old business is now getting more sales online then ever before.",
      desktop: 'https://res.cloudinary.com/websites-by-trevor/image/upload/v1733602790/eagleMonitor_ejsvyn.png',
      link: 'https://eagle-plumes.com/'
    },
    {
      name: 'Competitive Intelligence & Analytics',
      description:
        "This Colorado marketer is now able to  offer services directly through their website, increasing their reach and sales.",
      desktop: 'https://res.cloudinary.com/websites-by-trevor/image/upload/v1733602388/marketMonitor_ygzigy.png',
      link: 'https://getmarketintel.com/'
    }

]
export default function Portfolio() {
    return (

    
   <div class="   bg-indigo-50  pt-16 pb-16 overflow-hidden sm:pt-24 lg:pt-32 " style={{gridColumn:"span 7", gridRow: "span 9"}}>
        <div class=" px-4 sm:px-9  sm:max-w-2xl lg:px-12 lg:max-w-7xl">
         
          <div>
          <h2 class=" text-base text-default font-semibold tracking-wide uppercase .5xl:text-lg ">Our Portfolio</h2>
          <p class="mt-2 max-w-3xl text-3xl leading-8 font-extrabold tracking-tight text-gray-900 .5xl:text-4xl">
          Check out some of our websites
          </p>
            <p class=" mt-5 mb-8 text-xl text-gray-500 md:mr-10  .5xl:text-1.5xl lg:w-[700px]"> 
              Here are a few examples of our best work so you can see firsthand the quality and style of NoCo Web Designs.
            </p>
            </div>
            <div>
            {portfolio.map(example => (
             
                <div class="w-full flex flex-col lg:flex-col">
               <FadeIn viewport={{ once: true, margin: '0px 0px -85px' }}>
                <p class=" mt-5  text-base text-default font-semibold tracking-wide uppercase .5xl:text-lg">
                <a href={`${example.link}`}>{example.name}</a>
                </p>
                <p class=" mt-5 max-w-prose  text-xl text-gray-500  .5xl:mt-2 lg:w-[500px]">
                    {example.description}
                  </p>
                </FadeIn>
                <FadeIn duration={.75}>
                <div class=" mt-10 relative mb-24 mx-auto items-center space-y-8 sm:mx-1 md:space-x-16 lg:inset-y-0 lg:right-0 lg:h-full">
                 
                  <a href={`${example.link}`} class="w-fit">
                  <img
                    class="relative w-[300px] mr-0 object-fit  sm:w-[400px]"
                    src={example.desktop}
                    alt={`${example.name} website on desktop and mobile`}
                    width="250px"
                    height="175px"
                    loading="lazy"
                  />
                  </a>
                </div>
                </FadeIn>
                </div>
                
            ))}
            </div>

        </div>
      </div>


    )}