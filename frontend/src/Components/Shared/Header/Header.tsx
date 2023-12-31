// @ts-nocheck
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import CustomButton from "../../../common/CustomButton/CustomButton";
import IconGlobe from "../../../icons/IconGlobe";
import IconSearch from "../../../icons/IconSearch";

// function classNames( ) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Header() {
  //const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locale, setLocale] = useState("eng");

  useEffect(() => {
    setLocale("eng");
  }, []);

  return (
    <header className="sticky top-0 border-b border-black-10">
      <nav className="flex items-center p-2 lg:px-10 w-full mx-auto bg-creame-1">
        <div className="flex items-center justify-evenly h-full w-[40%]">
          <Link to="/">
            <p className="text-body-bold text-primary text-dark-8 font-OTabolas ">
              Suura
            </p>
          </Link>
          <div className="flex justify-evenly items-center w-full">
            <p className="text-base text-dark-5 font-TTHovesM  text-left">
              Features for photographers
            </p>
            <p className="text-base text-dark-5 font-TTHovesM text-left">
              Pricing
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center h-full w-[60%]">
          <div className="flex items-center text-dark-5 w-72">
            <IconSearch />
            <input
              type="text"
              placeholder="Search for photographers"
              className={styles.searchInput}
            />
          </div>
          <div className="flex justify-evenly items-center">
            <CustomButton className="text-dark-5 border-tale-10 mx-2 px-7 ">
              Post a job
            </CustomButton>
            <Link to={"/signup"}>
              <CustomButton className="bg-tale-10 border-tale-10 text-white mx-2 px-7">
                Try for free
              </CustomButton>
            </Link>

            <Link to={"/login"}>
              <CustomButton className="bg-brown-10 border-brown-10 text-white mx-2 px-7">
                Login
              </CustomButton>
            </Link>
            <div className="flex items-center mx-2">
              <IconGlobe />
              <div className="uppercase text-dark-5 p-1">{locale}</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

{
  /* <nav
className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
aria-label="Global"
>
<div className="flex lg:flex-1">
  <a href="#" className="-m-1.5 p-1.5">
    <span className="sr-only">Your Company</span>
    <img
      className="h-8 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
      alt=""
    />
  </a>
</div>
<div className="flex lg:hidden">
  <button
    type="button"
    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    onClick={() => setMobileMenuOpen(true)}
  >
    <span className="sr-only">Open main menu</span>
    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  </button>
</div>
<Popover.Group className="hidden lg:flex lg:gap-x-12">
  <Popover className="relative">
    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
      Product
      <ChevronDownIcon
        className="h-5 w-5 flex-none text-gray-400"
        aria-hidden="true"
      />
    </Popover.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {products.map((item) => (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-auto">
                <a
                  href={item.href}
                  className="block font-semibold text-gray-900"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          {callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
            >
              <item.icon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>

  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
    Features for Photographers
  </a>
  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
    Pricing
  </a>
  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
    Post a job
  </a>
</Popover.Group>
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <Link
    to={"/login"}
    className="text-sm font-semibold leading-6 text-gray-900"
  >
    Log in <span aria-hidden="true">&rarr;</span>
  </Link>
</div>
</nav>
<Dialog
as="div"
className="lg:hidden"
open={mobileMenuOpen}
onClose={setMobileMenuOpen}
>
<div className="fixed inset-0 z-10" />
<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
  <div className="flex items-center justify-between">
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt=""
      />
    </a>
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
      onClick={() => setMobileMenuOpen(false)}
    >
      <span className="sr-only">Close menu</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
  <div className="mt-6 flow-root">
    <div className="-my-6 divide-y divide-gray-500/10">
      <div className="space-y-2 py-6">
        <Disclosure as="div" className="-mx-3">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Product
                <ChevronDownIcon
                  className={
                    open
                      ? "rotate-180 h-5 w-5 flex-none"
                      : "h-5 w-5 flex-none"
                  }
                  aria-hidden="true"
                />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-2 space-y-2">
                {[...products, ...callsToAction].map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <a
          href="#"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Features for a photographers
        </a>
        <a
          href="#"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Prcicing
        </a>
        <a
          href="#"
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Post a job
        </a>
      </div>
      <div className="py-6">
        <Link
          to={"/login"}
          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          Log in
        </Link>
      </div>
    </div>
  </div>
</Dialog.Panel>
</Dialog> */
}
