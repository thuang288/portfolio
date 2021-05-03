import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react"
import lights from "../lights.jpg";

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio,
    }`).then((data) => setAuthor(data[0]))
    .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>

  return (
    <main className="relative">
      <img src={lights} alt="City Lights" className="absolute w-full" />
      <div className="p-5 lg:pt-40 container mx-auto relative">
        <section className="bg-green-500 rounded-lg shadow-2xl lg:flex p-20 ">
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-purple-300 mb-4">About me</h1>
            <div className="lg:prose-xl text-white">
              <BlockContent blocks={author.bio} projectId="5ny8ab4u" dataset="production"></BlockContent>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
