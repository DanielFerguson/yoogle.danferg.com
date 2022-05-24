import Link from "next/link";
import Head from "next/head";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  CodeIcon,
  XIcon,
  MenuAlt2Icon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  connectSearchBox,
  connectRefinementList,
  Highlight,
} from "react-instantsearch-dom";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  {
    name: "Project",
    href: "https://github.com/danielferguson/yoogle",
    icon: CodeIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SearchBox = ({ currentRefinement, refine }) => (
  <input
    type="search"
    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
    value={currentRefinement}
    onChange={(event) => refine(event.currentTarget.value)}
  />
);

const Hit = ({ hit }) => (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
    <div className="px-4 py-5 sm:px-6">
      <div className="flex gap-3">
        <img
          src={hit.channel_logo}
          alt={hit.channel_name}
          className="h-6 w-6 rounded-full"
        />
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {hit.channel_title}
        </h3>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        <a
          href={hit.channel_href}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Channel
        </a>
        <a
          className="ml-3 hover:underline"
          href={hit.href + "&t=" + parseInt(hit.start)}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Video
        </a>
      </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl className="sm:divide-y sm:divide-gray-200">
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Highlight tagName="mark" hit={hit} attribute="text" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

const RefinementListItem = ({ item, refine }) => (
  <div key={item.label} className="relative flex items-start py-2">
    <div className="min-w-0 flex-1 text-sm">
      <label className="font-medium text-gray-200 select-none">
        {item.label}
      </label>
    </div>
    <div className="ml-3 flex items-center h-5">
      <input
        id={`person-${item.label}`}
        name={`person-${item.label}`}
        type="checkbox"
        onClick={(event) => {
          event.preventDefault();
          refine(item.value);
        }}
        defaultChecked={item.isRefined}
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      />
    </div>
  </div>
);

const RefinementList = ({ items, currentRefinement, refine }) => (
  <fieldset className="p-4">
    <legend className="text-lg font-medium text-gray-100">Channels</legend>
    <div>{items.map((item) => RefinementListItem({ item, refine }))}</div>
  </fieldset>
);

const searchClient = algoliasearch(
  "JP46LI6HVU",
  "8f6e614ec9a4bc19441a22c30c0e1c85"
);
const CustomSearchBox = connectSearchBox(SearchBox);
const CustomRefinementList = connectRefinementList(RefinementList);

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Search videos now | Yoogle; caption search</title>
        <meta
          name="description"
          content="Don't wait! Find what you're looking for - now."
        />
      </Head>
      <InstantSearch indexName="videos" searchClient={searchClient}>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <Link href="/">
                    <a className="text-2xl font-bold text-white">Yoogle</a>
                  </Link>
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-indigo-800 text-white"
                            : "text-indigo-100 hover:bg-indigo-600",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Link href="/">
                <a className="text-2xl font-bold text-white">Yoogle</a>
              </Link>
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-indigo-800 text-white"
                        : "text-indigo-100 hover:bg-indigo-600",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
              <CustomRefinementList attribute="channel_title" />
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex">
                <div className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CustomSearchBox />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article>
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Results
                </h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <Hits hitComponent={Hit} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </InstantSearch>
    </>
  );
}
