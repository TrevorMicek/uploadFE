import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid'
import { UserIcon, CpuChipIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Time To Load', stat: '2.1 Sec', statTwo: '6.4 sec', icon: ChartBarIcon, change: '101.55%', changeType: 'increase' },
  { id: 2, name: 'SEO', stat: '93%', icon: CpuChipIcon, statTwo: '100%', change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'Accessibility', stat: '91%', statTwo: '86%', icon: UserIcon, change: '5.65%', changeType: 'increase' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PageSpeed() {
  return (
    <div>
    
      <dl className="bg-indigo-50 pt-14 -mb-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon aria-hidden="true" className="size-6 text-white" />
              </div>
              <span className='flex flex-row w-10/12 pb-1'>
              <p className="ml-16 truncate w-32 font-medium text-gray-500">{item.name}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  ' flex items-baseline text-sm font-semibold',
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon aria-hidden="true" className="size-5 shrink-0 self-center text-green-500" />
                ) : (
                  <ArrowDownIcon aria-hidden="true" className="size-5 shrink-0 self-center text-red-500" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              </span>
           
            </dt>
            <dd className="ml-16 flex items-baseline space-x-8 text-black pb-6 sm:pb-7">
              <span>
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p>Our Site</p>
              </span>
              
              <p>vs.</p>
              <span>
               
              <p className="text-2xl font-semibold text-gray-900">{item.statTwo}</p>
              <p>WordPress</p>
             </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
