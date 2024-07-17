// import { Statistics } from "./Statistics";
// import url from "../assets/url.jpg";
import shortmelogo from "../assets/shortme_logo.png";
export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/150  rounded-lg py-2">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={shortmelogo}
            alt="logo"
            className="w-[300px] object-contain rounded-lg sm:block hidden sm:w-[128px]"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                ShortMe
              </h2>
              <div className="text-xl text-muted-foreground mt-4 ">
                <p className=""> Making Link sharing smart and efficient with ShortMe</p>
                <p>Short Me is a sleek browser extension designed to simplify the process of sharing URLs. With a single click, it transforms long, cumbersome links into concise, easy-to-share URLs.</p>
                <p className="font-bold underline"> Whether you need to share links with friends, colleagues, or your boss, Short Me enhances readability and convenience.</p>
              </div>
              {/* <p className="text-2xl text-center mt-4">Who can use ...?</p> */}
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
