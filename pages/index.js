import Head from "next/head";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import AboutUsPage from "../components/AboutUs";
import ServicesPage from "../components/ServicesPage";
import PartnersPage from "../components/PartnersPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fischer Telesec</title>
        <meta name="description" content="For a better tomorrow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider
        slides={SliderData}
        heading="Fischer Telesec"
        message="For a Better Tomorrow."
      />
      <ServicesPage />
      <AboutUsPage />
      <PartnersPage/>
    </div>
  );
}