/*
ELEMENTS--

wrapper:
  <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">

accent title:
<div className="lg:max-w-lg">
    <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
</div

title:
<div className="lg:max-w-lg">
    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"></p>
</div>

paragraph:
<div className="lg:max-w-lg">
    <p className="mt-6 text-lg/8 text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
        iste dolor cupiditate blanditiis ratione.
    </p>
</div>

list:
<div className="lg:max-w-lg">
    <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
        {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                    <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                        {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
            </div>
        ))}
    </dl>
</div>

list var1:
<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

BUTTONS---

simple button:
<div className="mt-10 flex">
     <a
        href="#"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        Join our team <span aria-hidden="true">&rarr;</span>
    </a>
</div>

learn more ->
<div className="mt-10 flex items-center justify-center gap-x-6">
    <a
        href="#"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        Get started
    </a>
    <a href="#" className="text-sm/6 font-semibold text-gray-900">
        Learn more <span aria-hidden="true">→</span>
    </a>
</div>

IMAGES--

bordered:
 <div className="border-8 border-white mx-auto mt-6 max-w-xl h-96  ">
          <img
            alt="city image with orange sunset"
            src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1738002492/pexels-ibnulharezmi-7055469_ep8jmn.jpg"
            width="300px"
            height="300px"
            className=" aspect-[3/4] size-full object-cover lg:block"
          />
        </div>

COMPONENTS--






*/
