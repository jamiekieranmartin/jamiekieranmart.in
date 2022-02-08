import React from "react";
import { NextPage } from "next";
import Image from "next/image";

const Component: NextPage = () => (
  <section className="w-full">
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-16">
      <Image
        className="max-w-sm mx-auto w-full"
        src="/icon.svg"
        width={350}
        height={350}
        alt="work together"
      />
      <div className="grid place-items-start text-blue px-4">
        <h1 className="text-6xl mb-6 font-bold">Let&apos;s work together.</h1>
        <p className="my-0 text-3xl">Get in touch below.</p>
      </div>
    </div>

    <iframe
      className="max-w-prose mx-auto"
      title="Contact Form"
      src="https://plugins.crisp.chat/urn:crisp.im:contact-form:0/contact/327d059c-2a0d-4bb3-a4f6-bd6973119ef4"
      referrerPolicy="origin"
      sandbox="allow-forms allow-popups allow-scripts"
      width="100%"
      height="600px"
      frameBorder="0"
    />
  </section>
);

export default Component;
