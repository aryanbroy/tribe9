export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen gap-6 px-36 pt-16">
        <p className="text-9xl font-bold tracking-wider" id="design">
          DESIGN
        </p>
        <p className="text-8xl tracking-wider font-extrabold text-develop">
          DEVELOP
        </p>
        <p className="text-7xl tracking-widest font-extrabold" id="deliver">
          DELIVER.
        </p>
      </div>
      <div className="flex items-center h-screen" id="tree">
        <div className="flex flex-col mb-20 gap-6 w-1/4 ml-96">
          <h1 className="text-5xl font-bold text-design">We are-</h1>
          <p className="font-bold text-2xl">
            A passionate and innovative group of individuals dedicated to
            transforming your digital presence.
          </p>
        </div>
      </div>
    </div>
  );
}
