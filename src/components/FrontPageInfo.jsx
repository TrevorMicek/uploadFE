
import React, { useState } from 'react'
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'
import officeImg from '../images/coding7.jpg'
import metricsImg from'../images/metric.png'

export default function Example() {
  const [learnMore, setLearnMore] = useState(false)
    return (
      <div className="relative bg-white pr-4" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
        <div className="lg:absolute lg:inset-0 ">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">

            <img
              loading="lazy"
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=567&q=80"
              width="100px"
              height="50px"
              alt="team working together at office"
            />


          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-base text-indigo-600 font-semibold tracking-wide uppercase">what we do</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Page Builder vs Hand Coded
              </h3>
              <p className="mt-8 max-w-2xl text-lg text-gray-500">
                Our main focus is small businesses that have a website they made with a page builder, yet are looking for something that isn&apos;t so slow, isn&apos;t so templated, & isn&apos;t so expensive.
              </p>
              <div className="mt-5 prose prose-indigo text-gray-900">
                <p className="max-w-2xl text-gray-900">
                  We are actively trying to bridge the gap between page built websites that are great for starting out, and websites you&apos;d see at a mid-sized business.
                  When you need something better there&apos;s only expensive options. This is where we excel & this is why we do what we do; to make fast, high quality websites that are affordable to small businesses like your clients.
                </p>
                <ul role="list text-gray-500">
                  <li class="text-gray-600">Our websites always score two to three times as fast on page load times.</li>
                  <li class="text-gray-600">Every website we make is uniquely hand coded to your liking & branding.</li>
                  <li class="text-gray-600">Our prices are roughly half the cost of other designers & developers.</li>
                </ul>
                {
                  learnMore ? <>
                  <div className="flex flex-row justify-between text-lg cursor-pointer text-gray-900 border-b-2 border-solid border-gray-600 w-32 ml-4" onClick={()=>setLearnMore(false)}>Learn More...<div className="transform rotate-180 mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg></div></div>
                  <img
              className="h-65 w-full object-cover "
              src={officeImg}
              width="100px"
              height="50px"
              alt="picture of computer with code on it"
            />

                <h3>How we make better websites</h3>
                <p className="max-w-2xl">
                  We achieve these three feats through our single page applications, which are known for having better user experience, faster pages and are great for bigger websites, like an online store. We also spend a lot of time creating new designs for each client, as well as our unique pricing model that makes our upfront costs very affordable for any client.
                </p>
                <p className="max-w-2xl">
                  Each client is directed to <a href="https://html5up.net">This Site</a>. We don&apos;t use these templates but they&apos;re great for a starting design concept. We then ask for 3-5 websites they have found that they like. We then do competitor analysis to find commonality between your competitors.
                  We then recreate the design you picked with many elements of the other websites including your current website so that we have a brand new, completely unique website.
                </p>
                <p className="max-w-2xl">
                  We spend multiple hours per website optimizing it to have 95-100 scores according to google, meaning our websites out perform your competitors website&apos;s.
                </p>
                <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fcustomcode.netlify.app%2F">
                <img
              className="h-65 w-full object-cover "
              src={metricsImg}
              width="200px"
              height="100px"
              alt="google page speed metrics"
            />
            </a></> :  <div className="flex flex-row justify-between text-lg cursor-pointer text-gray-800 border-b-2 border-solid border-gray-600 w-32 ml-4" onClick={()=>setLearnMore(true)}>Learn More...<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg></div>

                }
            {/*
                <h3>How we’re different</h3>
                <p className="max-w-2xl">
                  What makes Websites By Trevor truly unique, aside from the above, is that we genuinely care and have built an entire business model around helping small businesses access better websites. Our process is very unique and is always evolving to be even better for our clients.
                </p>
                <p className="max-w-2xl">
                  Another reason we are unique is because we aren't just selling websites to small businesses. One of our main goals is to create a community where we can all connect and help each other out. We are actively looking for partnerships with business service companies that work directly with you in order to offer even more affordable packages and helpful knowledge.
                </p>*/
}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }