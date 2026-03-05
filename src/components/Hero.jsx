import React, { useState } from "react";
import { FadeIn } from "./FadeIn";
import { Fragment } from "react";
import { Popover, DialogPanel, Dialog } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Therapists", href: "/therapists" },
  { name: "Services", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Contact", href: "/" },
];

export default function HeroComp(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full font-[Jost]">
      <div className="bg-black opacity-35 absolute w-full z-20"></div>

      <main>{/* More main page content here... */}</main>
    </div>
  );
}
