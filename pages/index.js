import Head from "next/head";

export default function Home() {
  return (
    <main className="h-screen bg-white">
      <Head>
        <title>Sagar Rana | Portfolio</title>
      </Head>
      <h3 className="flex justify-center pt-5 text-4xl font-bold	text-black-1000 italic	">
        Sagar Rana
      </h3>
      <h5 className="flex justify-center pt-5 text-sm font-bold text-[#767676] sm:text-2xl">
        Personal Portfolio
        <span className="text-black px-1"> React NextJS </span> Template
      </h5>
      <div className="flex flex-col md:flex-row pt-10 justify-center w-full">
        <div
          className="flex grayscale justify-center drop-shadow-sm p-4 md:w-1/2 hover:grayscale-0"
          style={{ maxHeight: "450px", maxWidth: "450px" }}
        >
          <img
            src="/nextjs.png"
            alt="next js"
            className="cursor-pointer"
            onClick={() => window.open("https://google.com", "_blank")}
          />
        </div>
        <div
          className="flex grayscale justify-center drop-shadow-md	p-4 md:w-1/2 hover:grayscale-0"
          style={{ maxHeight: "450px", maxWidth: "450px" }}
        >
          <img
            src="/reactjs.png"
            alt="react js"
            className="cursor-pointer"
            onClick={() => window.open("https://google.com", "_blank")}
          />
        </div>
      </div>
    </main>
  );
}
