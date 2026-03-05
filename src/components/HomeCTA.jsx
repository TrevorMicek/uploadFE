import React from 'react'
import { FadeIn } from './FadeIn'

export default function Example() {
    return (
      <div className="bg-indigo-50" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"span 7"}}>
        <div className="mt-4 max-w-7xl mx-auto py-12 px-4 sm:px-6 .5xl:py-24 .5xl:px-8 .5xl:flex .5xl:items-center .5xl:justify-between">
        <FadeIn x={-24}><h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl .5xl:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-default">See how we can help you </span>
          </h2></FadeIn>
          <FadeIn viewport={{ once: true, margin: '0px 0px -50px' }} duration={.75} x={-24}>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
         <div class="hs-cta-embed hs-cta-simple-placeholder hs-cta-embed-184504116874"
  style={{maxWidth:"100%", maxHeight:"100%", width:"200px", height:"50.399993896484375px"}} data-hubspot-wrapper-cta-id="184504116874">
  <a href="https://cta-service-cms2.hubspot.com/web-interactives/public/v1/track/redirect?encryptedPayload=AVxigLJHYvhfSNUnT3PAuFQHKRVJctZhoVQnpQzrn041c50GcKOoSmxgo87zigFjOdnu6z4f8xmQb03205GcQNxJX%2BNZxDWRkUruiZ5eyPWQyXdVVwsbdWR%2FbC25F%2BPwpW%2F0FesvqFnLtSuj3xiTkB8qglK09XPUdE3Cnbp9IJsEFsLjHBsXlgllmfZ4uIPJ&webInteractiveContentId=184504116874&portalId=47413956" target="_blank" rel="noopener" crossorigin="anonymous">
    <img alt="Schedule Zoom Meeting" loading="lazy" src="https://no-cache.hubspot.com/cta/default/47413956/interactive-184504116874.png" style={{height: "100%", width: "100%", objectFit: "fill"}}
      onerror="this.style.display='none'" />
  </a>
</div>


          </div></FadeIn>
        </div>
        
      </div>
    )
  }