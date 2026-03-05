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
    <div
      className="text-white pb-10 pt-12   relative overflow-hidden bg-neutral-800"
      style={{
        gridColumn: "span 7",
        gridRowStart: "first",
        gridRowEnd: "second",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-9 lg:px-8 .5xl:w-[800px]">
        <div className="">
          <h2 className=" mt-2 text-center relative z-10 max-w-3xl text-3xl leading-8 font tracking-tight  .5xl:text-4xl">
            Do any of the following resonate with you?
          </h2>
        </div>

        <div className="  mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative">
                <FadeIn>
                  <dt className="flex flex-row space-x-3">
                    <div className="my-auto  min-h-2 min-w-2 rounded-md bg-default text-white "></div>

                    <p className="text-lg leading-6 font-medium  .5xl:text-xl">
                      {benefit.name === "Monthly Cost" ? (
                        <span>&#216; </span>
                      ) : null}
                      {benefit.name}
                    </p>
                  </dt>
                </FadeIn>
              </div>
            ))}
          </dl>
        </div>
        <p className="my-10">if so, we're here to help.</p>
        <div className="w-full inline-flex flex justify-center mx-auto">
          <a
            href="/services"
            className="font-[Jost] uppercase inline-flex items-center justify-center  px-12 py-3 border border-transparent text-base font-medium text-white bg-[#ff905e] hover:bg-blue .5xl:text-lg .5xl:px-7"
          >
            Schedule Now
          </a>
        </div>
        <div className="border-8 border-white mx-auto mt-6 max-w-xl h-96  ">
          <img
            alt="city image with orange sunset"
            src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1738002492/pexels-ibnulharezmi-7055469_ep8jmn.jpg"
            width="300px"
            height="300px"
            className=" aspect-[3/4] size-full object-cover lg:block"
          />
        </div>
      </div>
    </div>
  );
}
