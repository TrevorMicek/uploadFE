'use client'
import React from 'react'
import { FadeIn } from './FadeIn'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

/*
{
    question: "How do I bring traffic to my site?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",

  },
  {
    question: "What makes Websites By Trevor different?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
*/
const defaultQ = [
  {

  }
]
const faqs = [
  {
  question: "Why should I have a website?",
  answer: "Not everyone needs a website, and not everyone needs a fast website, but if you want to have a solid online presence, social media isn't enough. Our websites allow your business to offer your services or products to your clients. Meaning you can make money directly from your site.",
  open: true
  },

  {
    question: "How to make my site faster NOW?",
    answer:
      "There are some straightforward ways to boost performance on your site today. The main things being; image optimization, lazy loading styles, images & scripts, limiting number of scripts(plugins), ",
  },
  {
    question: "Should I try to do my own website or hire a web developer?",
    answer:
      "If you're just starting out, or on a tight budget, building your own with a popular page builder like Shopify, Wordpress, or Wix, is the best way to go. But when you don't have the time, or you need a high quality and fast website, you absolutely need a developer to achieve that quality.",
  },
  {
    question: "What's the cost of a website?",
    answer:
      "hand coded website's are minimum $3,000 for a basic site, for a not so good site you can get one for under a thousand but that's only suggested if you're on a tight budget and I would personally suggest waiting till you can afford a good website. Our website's start at $3,000 for service businesses and $5,500 for ecommerce.",
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-indigo-50 pb-14" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
      <div className="max-w-7xl mx-auto bg-indigo-50  -mt-12 pt-12 pb-8 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            <FadeIn>
            {faqs.map((faq) => (
              <Disclosure as="div" defaultOpen={faq.open} key={faq.question} className="pt-6">

                {({ open }) => (
                  <>
                 
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                    
                  </>
                )}
              </Disclosure>
            ))}
            </FadeIn>
          </dl>
        </div>
      </div>
    </div>
  )
}