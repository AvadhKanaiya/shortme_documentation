import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { DatabaseIcon, LoadUnpackIcon, ArrowRightFromLine, CloneIcon, DirectoryStructureIcon, CodeIcone } from "./Icons";

interface ServiceProps {
  title: string;
  description: JSX.Element;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Step 1",
    description: (
      <>
        <p>Clone the <span className="font-bold">frontend</span>  code from Github Repository: <span className='text-blue-300 underline'> <a href="https://github.com/AvadhKanaiya/shortme" target="_blank" rel="noopener noreferrer">SHORTME - Frontend</a>.</span></p>
        <p>Clone the <span className="font-bold">backend</span>  code from Github Repository: <span className='text-blue-300 underline'> <a href="https://github.com/AvadhKanaiya/shortme_backend" target="_blank" rel="noopener noreferrer">SHORTME - Backend</a>.</span></p>
      </>
    ),
    icon: < CloneIcon />,
  },
  {
    title: "Step 2",
    description: (
      <>
        <p>Create <span className="text-orange-500 font-bold">.env</span> file in the root directory.</p>
        <p className="underline">Directory structure will look like</p>
        <ol className=' py-3'>
          <li className='text-2xl font-bold'>backend</li>
          <li><ArrowRightFromLine />controllers</li>
          <li><ArrowRightFromLine />models</li>
          <li><ArrowRightFromLine />node_modules</li>
          <li><ArrowRightFromLine />routes</li>
          <li className='font-bold text-orange-500 text-2xl'><ArrowRightFromLine />.env</li>
          <li><ArrowRightFromLine />.gitignore</li>
          <li><ArrowRightFromLine />connect.js</li>
          <li><ArrowRightFromLine />index.js</li>
          <li><ArrowRightFromLine />package-lock.json</li>
          <li><ArrowRightFromLine />package.json</li>
        </ol>
      </>
    ),
    icon: <DirectoryStructureIcon />,
  },
  {
    title: "Step 3",
    description: (
      <>
        <p>Make environment variable for your MongoDB database connection: <p className='font-bold'> `MONGOURL = "Your-connection-string"`</p></p>
      </>
    ),
    icon: <DatabaseIcon />,
  },
  {
    title: "Step 4",
    description: (
      <>
        <p className="underline">Your extension is ready to use at this point you have two options:</p>
        <ol className='py-3 mx-5 list-decimal'>
          <li className="text-xl font-bold">Deploy your backend and load the extension to your browser</li>
          <p>To do this you can deploy your backend free at <span className='font-bold text-blue-400'><a href="https://render.com/" target='_blank'>Render</a></span></p>
          <ol className="py-2">
            <li>Make sure you change the <span className='font-bold'>fetch url in popup.js in shortme(frontend)</span>
              <ol className="list-disc mx-4">
                <li><span className='underline'>At line no. 8:</span></li>
                <p className="font-bold">const response = await fetch('your-deployed-backend-url/url')</p>
                <li><span className='underline'>At line no. 16:</span></li>
                <p className="font-bold">const shortURL = `your-deployed-backend-url/${'{'}data.id{'}'}`;</p>
              </ol>
            </li>
          </ol>
          <li className="text-xl font-bold">Run your backend on localhost and load the extension.</li>
          <p>To do this you can run your backend locally <p>For that move to backend directory and <span className='underline'>open terminal and type command</span> <span className='font-bold italic'>node index.js</span></p></p>
          <ol className="py-2">
            <li>Make sure you change the <span className='font-bold'>fetch url in popup.js in shortme(frontend)</span>
              <ol className="list-disc mx-4">
                <li><span className='underline'>At line no. 8:</span></li>
                <p className="font-bold">const response = await fetch('http://localhost:5001/url')</p>
                <li><span className='underline'>At line no. 16:</span></li>
                <p className="font-bold">const shortURL = `http://localhost:5001/${'{'}data.id{'}'}`;</p>
              </ol>
            </li>
          </ol>
        </ol>
      </>
    ),
    icon: <CodeIcone />,
  },
  {
    title: "Step 5",
    description: (
      <>
        <p>Build and load the extension into your browser <p>To refer how to load extension in browser checkout <a href="#existing-extension" className='text-blue-400 font-bold'>Use Existing Extension</a></p></p>
      </>
    ),
    icon: <LoadUnpackIcon />,
  },
];


export const Services2 = () => {
  return (
    <section className="container py-24 sm:py-32" id="create-your-own">
      <div className="mx-5">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Create your own{" "}
            </span>
            Extension
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            You can create your own extension with your own database.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
