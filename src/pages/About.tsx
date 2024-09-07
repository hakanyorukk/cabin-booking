import ScrollToTop from "../utils/utils";

const About = () => {
  ScrollToTop();
  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-emerald-950 h-full p-12 ">
      <main className=" max-w-[100rem] mx-auto h-full flex flex-col gap-28 ">
        <div className="flex w-full mt-16 mb-12 p-12 justify-center place-items-center">
          <div className="flex w-[120rem]  h-full">
            <img
              src="/about/about-winter.jpg"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <div className="px-16 text-emerald-50 felx flex-col animate-moveInRight">
            <h3 className="text-4xl font-bold mb-12">
              Your Trusted Cabin Booking Companion
            </h3>
            <div className="flex flex-col gap-6">
              <p className="text-xl">
                At Woodwise, we are passionate about helping you reconnect with
                nature through unforgettable cabin stays. Founded in 2023, our
                platform was built on the idea that finding a peaceful retreat
                in the great outdoors should be as simple and enjoyable as the
                trip itself. Whether you're craving the solitude of a secluded
                forest cabin, the charm of a lakeside escape, or the adventure
                of mountain-top lodging, Woodwise is here to make it happen.
              </p>
              <p className="text-xl">
                Our goal is to make nature accessible to everyone, from weekend
                adventurers to seasoned travelers. We partner with property
                owners around the world to offer a handpicked selection of
                cabins that range from rustic getaways to luxurious retreats.
                Each cabin listed on our platform is personally vetted to ensure
                it meets the highest standards of comfort, cleanliness, and
                environmental sustainability.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="px-16 text-emerald-50 flex flex-col animate-moveInLeft">
            <h3 className="text-4xl font-bold mb-12">Why Woodwise?</h3>
            <div className="flex flex-col gap-6">
              <p className="text-xl">
                With a growing network of over 250 cabins spread across the U.S.
                and Europe, Woodwise provides travelers with diverse options
                suited to their unique preferences. Whether you're booking a
                romantic weekend for two or a family vacation in the mountains,
                our intuitive search filters make it easy to find the perfect
                match. From cozy cottages to modern eco-friendly cabins, we
                ensure that each stay provides an authentic connection to nature
                without compromising on comfort.
              </p>
              <p className="text-xl">
                Woodwise isn&apos;t just about booking a place to stay;
                it&apos;s about crafting an experience. Our team of nature
                lovers and travel enthusiasts works around the clock to enhance
                your journey by providing personalized recommendations, curated
                local guides, and a seamless booking experience. With the rise
                of eco-conscious travel, we have implemented sustainable
                practices at every step, ensuring that your stay contributes to
                preserving the beauty of the environment.
              </p>
            </div>
          </div>
          <div className="flex w-[120rem] h-full mr-16">
            <img
              src="/about/about-forest.jpg"
              className="flex w-full h-full "
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex w-[120rem] h-full pl-16">
            <img
              src="/about/about-north-light.jpg"
              className="flex h-full "
              loading="lazy"
            />
          </div>
          <div className="px-16 text-emerald-50 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-12">
              Our Commitment to Sustainability
            </h3>
            <div className="flex flex-col gap-6">
              <p className="text-xl">
                At Woodwise, sustainability is at the heart of what we do. We
                are deeply committed to promoting eco-friendly travel and
                sustainable tourism practices. Many of our listed cabins utilize
                renewable energy, employ water conservation measures, and are
                built using environmentally responsible materials. We work
                closely with hosts who share our vision for protecting the
                planet while providing memorable nature experiences.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
