import React, { useEffect, useState } from "react";
import lights from "../lights.jpg";

export default function About() {

  return (
    <main className="relative">
      <img src={lights} alt="City Lights" className="absolute w-full" />
      <div className="p-5 lg:pt-40 container mx-auto relative">
        <section className="bg-green-500 rounded-lg shadow-2xl lg:flex p-20 ">
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-purple-300 mb-4">About Me</h1>
            <div className="lg:prose-xl text-white">
              My name is Tommy Huang and I love technology, sports, games and anything that contains action. My
              main focus is the field of Software Engineer. I am familiar
              with cloud technologies such as Amazon Web Service. During free time I love to go outside to travel and explore and learn new things.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
