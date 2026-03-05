
import React, { useState, useRef } from 'react'
import { FadeIn } from './FadeIn.jsx'
import emailjs from 'emailjs-com';

import Confirm from './Confirmation.jsx'

import UseInput from '../customHooks/useInput.jsx'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const inputs = ['newName', 'email', 'message']
  const UseInputComp = () => {
  for (let i=0;i<inputs.length;i++) {

    return UseInput(inputs[i])
  }
}
const InputComp = UseInputComp().comp
const submitForm =  UseInputComp().submit

const [meeting, setMeeting] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [validateName, setValidateName] = useState(undefined)
  const [validateEmail, setValidateEmail] = useState(undefined)
  const [validateMessage, setValidateMessage] = useState(undefined)

  const form = useRef()

const handleChange = (e) => {
  switch(e.target.name) {
      case 'email':
           if (validateEmail !== undefined) {
               setValidateEmail(undefined)
           }
          setEmail(e.target.value)
          break;
      case 'name':
          if (validateName !== undefined) {
              setValidateName(undefined)
          }
          setName(e.target.value)
          break;
      case 'message':
          if (validateMessage !== undefined) {
              setValidateMessage(undefined)
          }
          setMessage(e.target.value)
          break;
    }
}
const validateError = (label, which) => {
  const errorMessage = () => (
      <div className="text-red-500">
      * {which} input is empty
      </div>
  )
  console.log(label)
 switch (label) {
     case name:
          setValidateName(errorMessage)
          break;
     case email:
         setValidateEmail(errorMessage)
         break;
      case message:
          setValidateMessage(errorMessage)
          break;
 }
}
const onSubmit = (e) => {
  switch ('') {
      case name:
          validateError(name, 'name');
          e.preventDefault()
          break;
      case email:
          validateError(email, 'email')
          e.preventDefault()
          break;
      case message:
          validateError(message, 'message');
          e.preventDefault()
          break;

      default:
         /* setURL() */
         setConfirm(true)
         emailjs.sendForm('service_arikqvn', 'template_ht51ufi', e.target, 'user_kC0T8kmC4F1GOkt3Q06Q4')
         e.preventDefault()
  }
}
const confirmMessage = ['Thanks for reaching out to NoCo Web Designs!', 'We will respond ASAP']

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
      <div className="relative max-w-xl mx-auto" >
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
       
        <div className="text-center">
          <FadeIn>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Questions, Comments, Concerns?</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We will get back to you by the end of the day!
          </p>
          
          {meeting ?<>
      
         
    <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/trevor-micek?embed=true"></div>
    <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></script>

          </>
          : <div className='underline text-default cursor-pointer' onClick={()=> setMeeting(true)}> Or you can schedule a meeting here</div>
          }
          </FadeIn>
        </div>
        <div className="mt-12">
        {confirm ? <Confirm prompt="false" message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}
       
        </div>
      </div>
    </div>
  )
}