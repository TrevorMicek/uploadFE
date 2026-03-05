import React from "react";
import { FadeIn } from "./FadeIn";
const portfolio = [
  {
    name: "Earth",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090026/pexels-cottonbro-3205760_r4rbrn.jpg",
    title: "Lorem ipsum dolor.",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu",
    a: "#",
    alt: "supplement website",
  },
  {
    name: "Spotter",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090026/pexels-mike-jones-9051448_y37d5d.jpg",
    title: "Lorem ipsum dolor.",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu",
    a: "#",
    alt: "fitness app website",
  },
  {
    name: "Eagle",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090026/pexels-alyona-antonenko-364775202-14882215_di5yyy.jpg",
    title: "Lorem ipsum dolor.",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
    a: "#",
    alt: "native american  website",
  },
  {
    name: "Eagle",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090027/pexels-alteredsnaps-16948826_pbrh04.jpg",
    title: "Lorem ipsum dolor.",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ul",
    a: "#",
    alt: "native american  website",
  },
  {
    name: "Eagle",
    desktop:
      "https://res.cloudinary.com/websites-by-trevor/image/upload/v1738090193/pexels-victor-lopez-258459048-30357351_ojavld.jpg",
    title: "Lorem ipsum dolor.",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pr",
    a: "#",
    alt: "native american  website",
  },
];
export default function Example() {
  return (
    <div className="overflow-hidden bg-amber-50 text-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 .5xl:w-[1000px]">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 .5xl:w-[800px]">
          <div className="lg:pr-8 lg:pt-4">
            <h2 className="mt-2 mb-4 max-w-3xl mx-auto text-4xl   text-center .5xl:text-4.5xl">
              <a href="/portfolio">Services</a>
            </h2>
            <p className="text-[#55a4a5] my-2 mb-7 text-center relative z-10  text-2xl leading-8 font tracking-tight  .5xl:text-4xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor
            </p>
          </div>
          <div className="flex flex-col .5xl:flex-row .5xl:flex-wrap .5xl:justify-between">
            {portfolio.map((example) => (
              <div
                key={example.name}
                className="mx-auto mt-10 max-w-xl .5xl:max-w-xs "
              >
                <FadeIn>
                  <img
                    className="mx-auto aspect-[3/4]  object-fit w-64  .5xl:w-64 lg:block "
                    src={example.desktop}
                    alt={example.alt}
                    width="300px"
                    height="200px"
                    loading="lazy"
                  />
                </FadeIn>

                <FadeIn>
                  <p className=" mt-7 text-center relative z-10  text-2xl font-normal leading-8 font tracking-tight  .5xl:text-2xl">
                    {example.title}
                  </p>
                  <p className="my-6 mb-4 text-center relative z-10  text-lg leading-8 font-[335] tracking-tight  .5xl:text-xl .5xl:px-12">
                    {example.desc}
                  </p>
                </FadeIn>
                <p className="my-6 mb-10 text-center text-orange cursor-pointer relative z-10  text-lg leading-8 font-[400] tracking-tight  .5xl:text-xl .5xl:px-12">
                  {example.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
