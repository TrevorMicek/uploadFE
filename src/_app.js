import '../app/globals.css'
import Script from 'next/script'
export default function App({ Component, pageProps }) {
    return (
        <>
       
<Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/47413956.js"></Script>

         <Script  async src="https://www.googletagmanager.com/gtag/js?id=G-LHW4HG3VK0"></Script>
<Script id="gtag">
  
{` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-LHW4HG3VK0');`}
  
</Script>

   
        <Component {...pageProps} />
        </>
    )
}