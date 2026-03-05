import React, { useState, useEffect } from "react";
import {
  CodeBracketIcon,
  ChartBarIcon,
  CreditCardIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

import { FadeIn } from "./FadeIn";
const benefits = [
  {
    name: "	You constantly fight with your partner.",
    description:
      "Elevating your website and brand with our 100% Custom Solutions simply can't be beat by WordPress websites that are slow, templated, and lack the care and design we offer.",
    icon: CodeBracketIcon,
  },
  {
    name: "	You've lost a sense of meaning in your life.",
    description:
      "Save yourself time and effort by having a developer take care of all of your website needs, which allows you to focus on more important things in your business.",
    icon: ChartBarIcon,
  },

  {
    name: "Your mind is working overtime, leaving you exhausted.",
    description:
      "The #1 reason visitors will leave a website is if it's slow to load. Our sites are lightning fast, accessible and SEO friendly to rank higher on Google and provide a better user experience.",
    icon: BoltIcon,
  },
  {
    name: "	You wish you could just switch it all off and unplug from what's happening.",
    description:
      "Maintenance and edits are all built right into each website package so there's no annoying monthly subscription.",
    icon: CreditCardIcon,
  },
  {
    name: "	You feel like something is missing in your life.",
    description:
      "Maintenance and edits are all built right into each website package so there's no annoying monthly subscription.",
    icon: CreditCardIcon,
  },
];
/*
const features = [
  {
    name: '100% Hand Coded',
    description:
    "All of our sites are made from scratch using our own code. This allows us full control over the design and functionality, leading to more traffic and conversions.",
    icon: CodeIcon,
  },
  {
    name: 'Optimization',
    description:
      "The #1 reason visitors will leave a website is if it's slow to load. Our sites are lightning fast, accessible and SEO friendly to rank higher on Google and provide a better user experience.",
    icon: LightningBoltIcon,
  },
  {
    name: 'Subscription Pricing',
    description:
      "We use a unique subscription pricing model, so you enjoy no upfront costs, affordable packages and no hidden fees.",
    icon: TagIcon,
  }
]
<div className="mt-10 hidden">
        <h2 className="mt-5 mb-6 text-base text-default font-semibold tracking-wide uppercase">Features</h2>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
*/
export default function FeatureSection() {
  return (
    <div className="overflow-hidden text-white bg-neutral-800 py-24 sm:py-32">
      <div className=".5xl:flex .5xl:flex-row-reverse .5xl:justify-between mx-auto max-w-7xl px-6 .5xl:px-8 .5xl:w-[800px]">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 .5xl:w-1/2 .5xl:pl-7 .5xl:border-l-2 .5xl:border-white">
          <div className=".5xl:pr-8 .5xl:pt-4">
            <h2 className="text-orange mt-2 text-center relative z-10 max-w-3xl text-3xl leading-8 font tracking-tight  .5xl:text-4xl .5xl:text-left">
              Hello
            </h2>
            <h2 className=" mt-2 text-center relative z-10 max-w-3xl text-3xl leading-8 font tracking-tight  .5xl:text-4xl .5xl:text-left">
              Lorem ipsum dolor sit amet, consecte
            </h2>
            <FadeIn>
              <h2 className="text-lightblue mt-10 relative z-10 max-w-3xl text-1.5xl leading-8 font tracking-tight  .5xl:text-3xl .5xl:text-left">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis
              </h2>
            </FadeIn>
            <FadeIn>
              <p className="my-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet
              </p>
            </FadeIn>
          </div>
        </div>
        <FadeIn>
          <div className="mx-auto flex justify-center  mt-6 .5xl:w-full ">
            <img
              alt="two people doing therapy"
              src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1738975887/pexels-shkrabaanthony-5217850_i3ogoh.jpg"
              width="300px"
              height="300px"
              className=" aspect-[3/4] size-half border-8 border-white object-fit .5xl:block"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
