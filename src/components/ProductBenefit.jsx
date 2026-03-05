import React from 'react'
import { FadeIn } from './FadeIn'
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  [{
    name: 'Web Design & Development',
    description: 'Websites are built with over 100 hours of design, development, and testing',
  },
  { name: 'Full Customer Support', description: 'NoCo Web Designs takes pride in our quality of website, as well as facilitating a nurturing customer support system.' },
  { name: 'Fully Maintained Site', description: "We do monthly maintenance, so you don't have to worry about an outdated site" },
],[
  { name: 'Free Hosting', description: 'All hosting is completely free for all clients' },
  { name: 'Google Analytics', description: 'We use metrics such as Google Analytics to keep track of website growth' },
  { name: 'Fully Customized Site', description: 'Since every website is hand coded, we can customize every aspect of your website'},
]]

export default function ProductBenefit() {
  return (
    <div className="bg-indigo-50 pt-16" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
      <div className="max-w-7xl bg-indigo-50 mx-auto -mt-20 pt-20 py-8 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Everything you need</h2>
          <p className="mt-2 xs:w-10/12  pr-2 text-3xl font-extrabold text-gray-900">Perfect for products or services</p>
          <div className="mt-4 text-lg text-gray-600">
          <p className="-mb-2">Speed: 2x-4x faster than WordPress, leading to more traffic and customers</p><br />

          <p className=" -mb-2">Cost: Simple pricing structure that&apos;s half the cost of other developers</p><br />

        </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className=" -ml-2 flex flex-col justify-between sm:flex-row sm:space-y-0  sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            <span>{features[0].map((feature, i) => (
              <div key={feature.name} className="relative h-40">
                <FadeIn >
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 w-60 text-base text-gray-500">{feature.description}</dd>
              </FadeIn>
              </div>
            ))}</span>
            <span>
            {features[1].map((feature) => (
              <div key={feature.name} className="relative h-40">
                <FadeIn>
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 w-52 text-base text-gray-500">{feature.description}</dd>
              </FadeIn>
              </div>
            ))}
            </span>
          </dl>
        </div>
      </div>
    </div>
  )
}