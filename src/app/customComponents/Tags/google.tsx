'use client'
import Script from "next/script"

export default function GoogleAds() {
    return (
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16761575101" strategy="afterInteractive"></Script>
            <Script id="google-gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                   
                    gtag('config', 'AW-16761575101');
                `}
            </Script>
            {/* <!-- Event snippet for Contact conversion page --> */}
            <Script id="google-gtag-event" strategy="afterInteractive">
                {`
                    gtag('event', 'conversion', {'send_to': 'AW-16761575101/CDiACOifnsoaEL2txbg-'});
                `}
            </Script>

        </>
    )
}
