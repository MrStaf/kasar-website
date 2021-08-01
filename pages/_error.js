import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer/index";
import Image from "next/image";
import Nothing from "../img/Nothing.png";

function Error({ statusCode }) {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center flex-grow">
        <div className="relative w-1/2 mr-12 h-1/2">
          <Image src={Nothing} layout="fill" objectFit="contain" />
        </div>
        <div className="flex flex-col">
          <p className="mb-4 text-4xl">{statusCode ? `Error ${statusCode}` : "An error occurred on client"}</p>
          <div className="w-full h-2 rounded-sm bg-primary"></div>
          <p className="mt-2 text-2xl">
            Ooooooops <br />
            there is nothing here
          </p>
        </div>
      </div>
      <Footer fixed={false} />
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
