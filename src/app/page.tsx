import Image from "next/image";
import Searchbar from "./components/Searchbar";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image
                alt="arrow-right"
                src="/assets/icons/arrow-right.svg"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash te Power of{" "}
              <span className="text-primary">PriceWise</span>
            </h1>
            <p className="mt-6">
              Powerfull, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["Apple", "Adidas", "Rebook"].map((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
}
