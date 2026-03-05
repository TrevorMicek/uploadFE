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
    name: "Lorem ipsum dolor sit amet, c",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, p",
    num: 1,
  },
  {
    name: "Lorem ipsum dolo",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla cons",
    num: 2,
  },

  {
    name: "Lorem ipsum dolor sit ame",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ul",
    num: 3,
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
    <div className="overflow-hidden bg-amber-50 text-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 .5xl:w-[800px]">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 .5xl:w-[800px]">
          <div className="lg:pr-8 lg:pt-4">
            <FadeIn>
              <h2 className=" mt-2  relative z-10  text-3xl leading-8 font tracking-tight  .5xl:text-4xl lg:6xl">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              </h2>
            </FadeIn>
            <h2 className="mt-8 text-2xl text-orange  tracking-tight  .5xl:text-lg lg:text-2.5xl">
              Three reasons you may want to work with us.
            </h2>

            <div className="  mt-10">
              <dl className="">
                {benefits.map((benefit) => (
                  <div key={benefit.name} className="relative">
                    <FadeIn className="flex flex-col">
                      <dt>
                        <div className="text-2xl text-lightblue lg:text-4.5xl lg:pt-10">
                          {benefit.num}
                        </div>
                      </dt>
                      <p className="pb-6 pt-4 text-2xl leading-6  text-gray-900 .5xl:text-xl lg:text-1.5xl">
                        {benefit.name}
                      </p>
                      <dd className="mt-2  text-base text-gray-600 .5xl:text-lg">
                        {benefit.description}
                      </dd>
                    </FadeIn>
                  </div>
                ))}
              </dl>
            </div>
            <FadeIn>
              <div className="text-center pt-10 lg:pt-24">
                <h2 className=" mt-2  relative z-10 max-w-3xl text-3xl leading-8 font tracking-tight  .5xl:text-4xl lg:text-4.5xl">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing.
                </h2>
                <h2 className="mt-8 text-2xl text-orange  tracking-tight  .5xl:text-lg lg:text-2.5xl">
                  Get started today.
                </h2>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
