import React from "react";
import Header from "../header/header";
import Banner from "../banner/banner";
import Converter from "../converter/converter";
import ConversionHistory from "../conversion-history/conversion-history";
import Footer from "../footer/footer";

const CurrencyConverterScreen = () => {
  return (
    <>
      <Header/>

      <main>
        <Banner/>

        <Converter/>

        <ConversionHistory/>
      </main>

      <Footer/>
    </>
  );
};

export default CurrencyConverterScreen;
