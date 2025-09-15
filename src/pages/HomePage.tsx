import FeaturesCardsList from "../components/FeaturesCardsList";
import Footer from "../components/Footer";
import HeroHeading from "../components/HeroHeading";
import SignUpForHomePage from "../components/HomePageSignUp";
import HomePageStats from "../components/HomePageStats";

function HomePage() {
  return (
    <div className="mt-8">
      <HeroHeading />
      <FeaturesCardsList />
      <HomePageStats />
      <SignUpForHomePage />

      {/* This is just a responsive line break */}
      <div className="flex justify-center mx-auto mb-8 max-xl:container">
        <hr className="border-t border-gray-300 w-6xl max-xl:mx-4" />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
