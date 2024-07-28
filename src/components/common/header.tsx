"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Messenger from "../../../public/messenger.svg";
import WhatsApp from "../../../public/whatsapp.svg";
import { Button } from "@/components/ui/button";

const navigation_items = [
  {
    title: "About us",
    href: "/about-us",
  },
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
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-5 border-b lg:border-none"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">Your Company</span>
            DREAM
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navigation_items.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium leading-6 text-[#526077]"
            >
              {title}
            </Link>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link
              href="/free-quote"
              className=" px-3 py-2 block text-base font-medium"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Get a free quote
            </Link>
          </Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="sr-only">DREAM Wall Print</span>
              DREAM
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation_items.map(({ title, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-2">
                <Button asChild size="lg" className="text-base font-medium">
                  <Link
                    href="/free-quote"
                    className=" px-3 py-2 block text-base font-medium"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    Get a free quote
                  </Link>
                </Button>
                <a
                  href="tel:+447459073560"
                  className="flex gap-3 text-base font-medium -mx-3 px-3 py-2"
                >
                  <PhoneIcon width={24} />
                  +44 7459 073560
                </a>
                <a
                  href="mailto:sales@dreamwallprint.com"
                  className="flex gap-3 text-base font-medium -mx-3 px-3 py-2"
                >
                  <EnvelopeIcon width={24} />
                  sales@dreamwallprint.com
                </a>
                <a
                  href="mailto:sales@dreamwallprint.com"
                  className="flex gap-3 text-base font-medium -mx-3 px-3 py-2"
                >
                  <Image src={Messenger} alt="Messenger" className="size-5" />
                  Messenger
                </a>
                <a
                  href="mailto:sales@dreamwallprint.com"
                  className="flex gap-3 text-base font-medium -mx-3 px-3 py-2"
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
