import {
  GlobeAltIcon,
  LightningBoltIcon,
  AcademicCapIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/danferg",
    icon: (props) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/danielferguson/yoogle",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const features = [
  {
    name: "High quality captions",
    description:
      "We capture high-quality captions in order to help our users find what they're looking for, fast.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description: "This platform is completely free!",
    icon: ScaleIcon,
  },
  {
    name: "Instant search",
    description:
      "We use industry-class search engines in order to deliver results within a fraction of a second.",
    icon: LightningBoltIcon,
  },
  {
    name: "Quickly reference",
    description:
      "With fast search comes faster referencing. YouTube is a great way for finding community-sourced information. Find it, then use it.",
    icon: AcademicCapIcon,
  },
];

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          Find the substance you're looking for, without the scrubbing | Yoogle;
          caption search
        </title>
        <meta
          name="description"
          content="Find the content you need, fast - without the need to scrub through full videos and waste time."
        />
      </Head>

      {/* Hero */}
      <div className="relative bg-gray-50 overflow-hidden">
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <Popover>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav
                className="relative flex items-center justify-between sm:h-10 md:justify-center"
                aria-label="Global"
              >
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex md:space-x-10"></div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"></div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <Link
                    href="/app"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    View app
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-16 mx-auto max-w-4xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Find the videos and content you want,
                </span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  when you want it
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                A captions-based search engine and ingestion pipeline for
                YouTube videos.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link href="/app">
                    <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Start Searching
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              We&apos;ve got some lovely nice stats for you...
            </h2>
            <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
              I&apos;d love to say that these stats were meaningful, but
              honestly don&apos;t read into them too much.
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                Channels
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">2</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                Captions Ingested
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                24/7
              </dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                Views
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                100k+
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <svg
            className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
            />
          </svg>

          <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to find the videos you need.
              </h2>
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2021 danferg.com - All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
