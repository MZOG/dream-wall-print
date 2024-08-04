'use client'
import cookie from 'js-cookie';
import Link from 'next/link'
import {useEffect, useState} from "react";

import {Card,} from "@/components/ui/card"
import {Button} from "@/components/ui/button";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get('cookieConsent');

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set('cookieConsent', 'accepted', {expires: 365});
  }

  const handleReject = () => {
    setShowBanner(false);
    cookie.set('cookieConsent', 'rejected', {expires: 365});
  }

  if (!showBanner) return;

  return (
    <Card className="fixed left-5 md:left-auto right-5 bottom-5 max-w-sm p-3">
      <p className="text-xs">We use cookies to improve your experience. By using our site, you agree to our use of
        cookies.
      </p>

      <div className="mt-2 flex gap-3 items-center">
        <Button size="sm" onClick={handleAccept}>
          Accept
        </Button>
        <Button size="sm" variant="outline" onClick={handleReject}>
          Reject
        </Button>
        <Link href="/privacy-policy" className="text-xs">Learn more</Link>
      </div>
    </Card>
  )
}