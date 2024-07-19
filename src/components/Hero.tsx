import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="container grid place-items-center py-20 md:py-32 gap-10">

      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#f27e5e]  to-[#fb8e4e] text-transparent bg-clip-text">
              ShortMe
            </span>{" "}
            Docs
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#d7814e] via-[#f5a147] to-[#d97a1c] text-transparent bg-clip-text">
              Smart
            </span>{" "}
            People
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-11/12 mx-auto">
          This is the official documentation for the ShortMe extension. Feel free to use the extension.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center m-auto">
          <Button className="w-full md:w-1/3"><a href="#existing-extension" rel="noreferrer noopener">Use existing extension</a></Button>
          <Button className="w-full md:w-1/3" variant="outline">
            <a
              rel="noreferrer noopener"
              href="#create-your-own"
            >
              Create your own extension
            </a>
          </Button>
        </div>
      </div>
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
