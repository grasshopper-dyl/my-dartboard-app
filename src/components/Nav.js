import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import mainLogo from '../images/mainLogo.png'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-dark-green border-b-2 pb-2 border-solid border-[#C6A155] shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                <Image className="w-16 h-16 flex"
  src={mainLogo}
  />                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-[#C6A155] text-gray-900", Default: "border-transparent text-warm-gold hover:border-[#C6A155] hover:text-warm-gold" */}
                  <a
                    href="/"
                    className="inline-flex items-center border-b-2 border-[#C6A155] px-1 pt-1 text-lg font-medium text-warm-gold"
                  >
                    Home
                  </a>
                  <a
                    href="/scoreboard"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-warm-gold hover:border-[#C6A155] hover:text-warm-gold"
                  >
                    Scoreboard
                  </a>
                  <a
                    href="/rules"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-warm-gold hover:border-[#C6A155] hover:text-warm-gold"
                  >
                    Game Rules
                  </a>
                  <a
                    href="/statistics"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-lg font-medium text-warm-gold hover:border-[#C6A155] hover:text-warm-gold"
                  >
                    Statistics
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <a
                  type="button"
                  href='/api/auth/signin'
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-warm-gold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Login or Register</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-dark-green text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-warm-gold')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-warm-gold')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-warm-gold')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-warm-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-warm-gold hover:bg-gray-50 hover:border-[#C6A155] hover:text-warm-gold" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-[#C6A155] bg-dark-green py-2 pl-3 pr-4 text-base font-medium text-warm-gold"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/scoreboard"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-warm-gold hover:border-[#C6A155] hover:bg-gray-50 hover:text-warm-gold"
              >
                Scoreboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="rules"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-warm-gold hover:border-[#C6A155] hover:bg-gray-50 hover:text-warm-gold"
              >
                Game Rules
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="statistics"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-warm-gold hover:border-[#C6A155] hover:bg-gray-50 hover:text-warm-gold"
              >
                Statistics
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-lg font-medium text-warm-gold">Tom Cook</div>
                  <div className="text-lg font-medium text-warm-gold">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-warm-gold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-warm-gold hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-warm-gold hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-warm-gold hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
