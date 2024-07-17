import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/30 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            ShortMe requests you to
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              put your ideas and code {" "}
            </span>
            on to the board
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            ShortMe values your feedback and innovative ideas and happy to integrate your ideas into the codebase.
            You can contribute to the project via GitHub, you can report a bug, suggest new features or optimize the code.

          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto"><a href="https://github.com/AvadhKanaiya/shortme" target="_blank">Contribute to the Project - Frontend</a></Button>
          <Button
            className="w-full md:w-auto"
          >
            <a href="https://github.com/AvadhKanaiya/shortme_backend" target="_blank">Contribute to the Project - Backend</a>
          </Button>
        </div>

      </div>
    </section>
  );
};
