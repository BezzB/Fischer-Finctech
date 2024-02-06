import Image from "next/image";
import Head from "next/head";

const handleHoverEffect = (e) => {
  const element = e.currentTarget;
  element.style.transition = "transform 0.3s ease-in-out";

  if (e.type === "mouseenter") {
    element.style.transform = "scaleX(1)";
  } else if (e.type === "mouseleave") {
    element.style.transform = "scaleX(0.01)"; // Use a small value instead of 0
  }
};

const ServiceButton = ({ text }) => (
  <button
    className="btn btn-primary py-5 position-relative hover:bg-opacity-50"
    style={{ position: "relative", overflow: "hidden" }}
    onMouseEnter={(e) => handleHoverEffect(e)}
  >
    {text}
  </button>
);


const ListServiceCard = ({ icon, title, items }) => (
  <div className="border border-primary rounded-md overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg hover:border-opacity-0 flex flex-row items-center">
    <div className="p-4">
      <Image src={icon} alt={`${title} Icon`} width={80} height={80} />
    </div>
    <div className="flex-1 p-4">
      <h2 className="text-3xl font-bold mb-4 text-primary">{title}</h2>
      <ul className="list-inside text-xl text-gray-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);


const ServicesPage = () => {
  return (
    <div className="max-container py-6">
      <Head>
        <title>Fischer Telesec - Services</title>
        <meta
          name="description"
          content="Explore Fischer Telesec's comprehensive Telecommunications, IT, and Datacenter services. Wired and wireless installations, IT infrastructure setup, Datacenter design, and more."
        />
        {/* Add more SEO metadata as needed */}
      </Head>

      <section className="hero-section relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <Image
          src="/telesec7.jpg" // Replace with your actual hero image
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
        />
        <div className="hero-content absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center px-4 py-8 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Empowering Business Continuity Through High-Tech Technical Services
          </h1>
          <p className="text-base text-gray-300 mb-8">
            Fischer Telesec offers a suite of ICT services to ensure
            organizational resilience.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-center md:gap-4">
            <ServiceButton text="Explore Telecommunications" />
            <ServiceButton text="Discover IT Services" />
            <ServiceButton text="Explore Datacenter Solutions" />
            <ServiceButton text="Explore MaaS Services" />
          </div>
        </div>
      </section>

      <section className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
        <ListServiceCard
          icon="/telecomunication.jpg"
          title="Telecommunications Services"
          items={[
            "Wired and wireless installations",
            "Configurations, activation, and maintenance including Fiber, Copper, Wireless technologies",
            "Satellite services.",
          ]}
        />
        <ListServiceCard
          icon="/comunications.png"
          title="Communication Services"
          items={[
            "Tower maintenance",
            "Power setup and maintenance",
            "Alarm systems",
            "Unified CCTV surveillance",
          ]}
        />
        <ListServiceCard
          icon="/itservices.png"
          title="Communication Site Maintenance"
          items={[
            "Technical surveys, quality checks, commissioning, network audits",
            "Project planning, and management",
            "Onsite and off-site support.",
          ]}
        />

        <ListServiceCard
          icon="/itservices.png"
          title="IT Services"
          items={[
            "Office-To-Office VPN setups",
            "IT infrastructure setup and maintenance, wired and wireless LAN setup",
            "LAN and WAN diagnostics",
            "Firewall and server setup, diagnostics, and maintenance.",
          ]}
        />

        <ListServiceCard
          icon="/maas.webp"
          title="Management As A Service (MaaS)"
          items={[
            "Complete management of day-to-day office network infrastructure",
            "Advisory on turnkey solutions for effective office automation",
            "Onsite and Offsite support services",
          ]}
        />
        <ListServiceCard
          icon="/datacenter.png"
          title="Datacenter Services"
          items={[
            "Design and setup, equipment supply, installation, configuration, and maintenance.",
            "Biometrics and Access Control",
            "Management As A Service (MaaS) - complete management of day-to-day office network infrastructure",
            "Advisory on turnkey solutions for effective office automation, onsite and offsite support services.",
          ]}
        />
      </section>
    </div>
  );
};

export default ServicesPage;
