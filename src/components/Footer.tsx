import shortme from "../assets/shortme_128.png";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img src={shortme} alt="logo" width={40} className="mx-4 mt-[-5px]" />
            ShortMe
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/avadhkanaiya"
              className="opacity-60 hover:opacity-100"
              target="_blank"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://x.com/AvadhKanaiya"
              className="opacity-60 hover:opacity-100"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>


        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#create-your-own"
              className="opacity-60 hover:opacity-100"
            >
              Create your own extension
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#existing-extension"
              className="opacity-60 hover:opacity-100"
            >
              Use Extension
            </a>
          </div>

        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Mail Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="mailto:avadhkanaiya@gmail.com"
              className="opacity-60 hover:opacity-100"
            >
              avadhkanaiya@gmail.com
            </a>
          </div>
        </div>

      </section>

      <section className="container pb-14 text-center">
        <h3>
          ShortMe&copy; 2024 |{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/avadhkanaiya"
            className="text-orange-500 transition-all border-primary hover:border-b-2"
          >
            Avadh kanaiya
          </a>
        </h3>
      </section>
    </footer>
  );
};
