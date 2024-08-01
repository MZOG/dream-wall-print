"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
// import Messenger from "../../../public/messenger.svg";
import WhatsApp from "../../../public/whatsapp.svg";
// import { Button } from "@/components/ui/button";
import Logo from "../../../public/logo.svg";

const navigation_items = [
  {
    title: "Offer",
    href: "/offer",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Contact us",
    href: "/contact-us",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black">
      <nav
          aria-label="Global"
          className="mx-auto flex max-w-6xl items-center justify-between p-5"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">Your Company</span>
            <Image src={Logo} alt="Dream Wall Print"/>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon color="#FFFFFF" aria-hidden="true" className="h-8 w-8"/>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation_items.map((item) => (
              <Link href={item.href} key={item.href} className="text-white font-medium text-lg hover:text-orange">
                {item.title}
              </Link>
          ))}
        </div>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black p-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between lg:justify-normal">
            <Image src={Logo} alt="Dream Wall Print" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 lg:pl-[150px] rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon color="#FFFFFF" aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation_items.map(({ title, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-white text-base font-medium"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-2">
                <a
                  href="tel:+447459073560"
                  className="flex gap-3 text-base text-white font-medium -mx-3 px-3 py-2"
                >
                  <PhoneIcon width={24} />
                  +44 7459 073560
                </a>
                <a
                  href="mailto:sales@dreamwallprint.com"
                  className="flex gap-3 text-base text-white font-medium -mx-3 px-3 py-2"
                >
                  <EnvelopeIcon width={24} />
                  sales@dreamwallprint.com
                </a>
                {/*<a*/}
                {/*  href="mailto:sales@dreamwallprint.com"*/}
                {/*  className="flex gap-3 text-base text-white font-medium -mx-3 px-3 py-2"*/}
                {/*>*/}
                {/*  <Image src={Messenger} alt="Messenger" className="size-5" />*/}
                {/*  Messenger*/}
                {/*</a>*/}
                <a
                  href="mailto:sales@dreamwallprint.com"
                  className="flex gap-3 text-base text-white font-medium -mx-3 px-3 py-2"
                >
                  <Image src={WhatsApp} className="size-5" alt="Messenger" />
                  WhatApp
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
