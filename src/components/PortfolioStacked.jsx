import React from "react";
import { FadeIn } from "./FadeIn";
const portfolio = [
  {
    name: "Earth",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090026/pexels-cottonbro-3205760_r4rbrn.jpg",
    title: "Anxiety Therapy",
    desc: "Anxiety is exhausting you. When you’re not preoccupied thinking about bad things that have happened in your past, you’re stuck worrying about the next horrible thing that will happen.",
    a: "https://earthandelle.netlify.app/",
    alt: "supplement website",
  },
  {
    name: "Spotter",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090026/pexels-mike-jones-9051448_y37d5d.jpg",
    title: "BIPOC Therapy",
    desc: "Anxiety is exhausting you. When you’re not preoccupied thinking about bad things that have happened in your past, you’re stuck worrying about the next horrible thing that will happen.",
    a: "https://spotterfitness.netlify.app/",
    alt: "fitness app website",
  },
  {
    name: "Eagle",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090026/pexels-alyona-antonenko-364775202-14882215_di5yyy.jpg",
    title: "Couples Therapy",
    desc: "You and your partner keep arguing over the same things and conflict never gets resolved. You feel disconnected from and misunderstood by your partner.",
    a: "https://eagle-plumes.com/",
    alt: "native american  website",
  },
  {
    name: "Eagle",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090027/pexels-alteredsnaps-16948826_pbrh04.jpg",
    title: "Depression Therapy",
    desc: "Feeling depressed may mean you feel numb, like any emotion you feel isn't quite being felt. Or it could show up like a lack of energy, needing to take a nap every day or fighting to get out of bed in the morning.",
    a: "https://eagle-plumes.com/",
    alt: "native american  website",
  },
  {
    name: "Eagle",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090193/pexels-victor-lopez-258459048-30357351_ojavld.jpg",
    title: "LGBTQ+ Affirmative Therapy",
    desc: "You are in the process of exploring your gender and/or sexuality and it’s changing what your relationships look like. You often feel like you don't belong anywhere, even within the LGBTQ+ community. Finding a supportive community has been hard.",
    a: "https://eagle-plumes.com/",
    alt: "native american  website",
  },
];
export default function Example() {
  return (
    <div className="overflow-hidden bg-white text-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 .5xl:w-[800px]">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 .5xl:w-[800px]">
          <div className="lg:pr-8 lg:pt-4">
            <h2 className="mt-2 mb-4 max-w-3xl mx-auto text-4xl leading-8  tracking-tight  text-center .5xl:text-4.5xl">
              <a href="/portfolio">Services</a>
            </h2>
            <p className="text-[#55a4a5] my-2 mb-7 text-center relative z-10  text-2xl leading-8 font tracking-tight  .5xl:text-4xl">
              In-person therapy in Los Angeles & online therapy for California
              residents.
            </p>
          </div>

          {portfolio.map((example) => (
            <div key={example.name} className="mx-auto mt-6 max-w-xl  ">
              <a href="/portfolio">
                <FadeIn viewport={{ once: true, margin: "0px 0px -200px" }}>
                  <img
                    className="mx-auto aspect-[3/4] size-half object-fit h-72 w-72 rounded-full lg:block "
                    src={example.desktop}
                    alt={example.alt}
                    width="300px"
                    height="200px"
                    loading="lazy"
                  />
                </FadeIn>
              </a>
              <FadeIn>
                <p className=" mt-7 text-center relative z-10  text-2xl leading-8 font tracking-tight  .5xl:text-4xl">
                  {example.title}
                </p>
                <p className="my-6 mb-10 text-center relative z-10  text-lg leading-8 font tracking-tight  .5xl:text-2xl">
                  {example.desc}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
