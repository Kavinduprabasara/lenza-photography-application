"use client";
import Image from "next/image";
import Link from "next/link";
import { Tab } from "@headlessui/react";

export default function Home() {
  const tabs = [
    { key: "all", display: "all" },
    { key: "nature", display: "nature" },
    { key: "people", display: "people" },
    { key: "urban", display: "urban" },
  ];
  return (
    <div className="flex flex-col h-full bg-black bg-center bg-cover">
      <header className="flex justify-between item-center p-10">
        <div className="space-y-2 hover:cursor-pointer">
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
        <div>Photography Website</div>
        <Link
          href="#"
          className="bg-white hover:bg-slate-100 text-black py-2 px-4 rounded-3xl"
        >
          Login
        </Link>
      </header>
      <main className="grow">
        <div className="flex flex-col items-center h-full w-full ">
          <Tab.Group>
            <Tab.List className="flex items-center gap-8">
              {tabs.map(tab => (
                <Tab key={tab.key} className='px-1'>
                  {({ selected }) => (
                    <span className={selected ? "text-white" : "text-slate-400"}>
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
             
            </Tab.List>
            <Tab.Panels className="h-full bg-stone-800 bg-opacity-80 max-w-[1000px] w-full p-2 sm:p-4 m-2 rounded-md">
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
              <Tab.Panel>Content 4</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center align-center">Footer Content</footer>
    </div>
  );
}
