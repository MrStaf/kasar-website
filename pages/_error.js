import { Header } from "../components/Header/index";
import { Footer } from "../components/Footer/index";
import Image from "next/image";
import Nothing from "../img/Nothing.png";

function Error({ statusCode }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow sm:flex-row">
        <div className="relative w-2/3 sm:w-1/2 sm:mr-12 sm:h-1/2 h-2/3">
          <Image alt="error image" src={Nothing} layout="fill" objectFit="contain" />
        </div>
        <div className="flex flex-col">
          <p className="text-4xl sm:mb-4">{statusCode ? `Error ${statusCode}` : "An error occurred on client"}</p>
          <div className="w-full h-2 rounded-sm bg-primary"></div>
          <p className="mt-2 text-2xl">
            Ooooooops <br />
            there is nothing here
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
