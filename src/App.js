import React from "react";

import HeroSection from "./presentation/home/widgets/HeroSection";
import ImageBanner from "./presentation/home/widgets/ImageBanner";
import WhyUsSection from "./presentation/home/widgets/WhyUsSection";


const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <ImageBanner />
      <WhyUsSection />
    </div>
  );
};

export default App;
