// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import {
  Phone,
  Camera,
  Fingerprint,
  Wrench,
  ShieldCheck,
  Clock,
} from "lucide-react";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARP IT Solutions – CCTV & Biometric Installation Experts",
  description:
    "ARP IT Solutions specializes in CCTV cameras, biometric attendance systems, access control, and IT security solutions. Trusted installation & support for homes and businesses.",
  keywords: [
    "CCTV installation",
    "biometric attendance",
    "fingerprint access",
    "security systems",
    "IT solutions",
    "ARP IT Solutions",
    "surveillance",
  ],
  authors: [{ name: "ARP IT Solutions" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/cctv.jpg",
  },
  openGraph: {
    title: "ARP IT Solutions – CCTV & Biometric Installation Experts",
    description:
      "Professional CCTV and biometric system installations for offices, schools, and homes. Secure your premises with ARP IT Solutions.",
    url: "https://yourdomain.com",
    siteName: "ARP IT Solutions",
    images: [
      {
        url: "/cctv.jpg",
        width: 1200,
        height: 630,
        alt: "ARP IT Solutions – CCTV & Biometric Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARP IT Solutions – CCTV & Biometric Installation",
    description:
      "Trusted CCTV, biometric attendance, and security solutions provider in India. ARP IT Solutions keeps your business safe.",
    images: ["/cctv.jpg"],
    creator: "@im7Digital", // replace with real if available
  },
  metadataBase: new URL("https://yourdomain.com"),
};



const LandingPage = () => {
  return (
    <>
      <Head>
        <title>ARP Solutions - CCTV & Biometric Installation</title>
        <meta
          name="description"
          content="Your trusted partner for professional CCTV and biometric security installations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen font-sans">
        {/* Navbar */}
        <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-700 tracking-wide">
              ARP <span className="text-gray-800">Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8 font-medium">
              <a href="#services" className="text-gray-600 hover:text-blue-700">
                Services
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-700">
                About Us
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-700"
              >
                Testimonials
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-700">
                Contact
              </a>
            </div>
            <a
              href="tel:+919876543210"
              className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Call Now
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          className="relative pt-32 pb-24 bg-cover bg-center"
          style={{ backgroundImage: "url('/arp_bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Secure Your World with Advanced Technology
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-gray-200">
              Professional CCTV & Biometric Installation Services.
            </p>
            <a
              href="tel:+919876543210"
              className="mt-8 inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              📞 Get a Free Quote
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="flex justify-center mb-4">
                  <Camera className="text-blue-600 w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  CCTV Installation
                </h3>
                <p className="text-gray-600 text-center">
                  High-definition surveillance systems for homes and businesses.
                  Expert setup & 24/7 monitoring solutions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="flex justify-center mb-4">
                  <Fingerprint className="text-blue-600 w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  Biometric Solutions
                </h3>
                <p className="text-gray-600 text-center">
                  Access control and time attendance using advanced fingerprint
                  and facial recognition.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="flex justify-center mb-4">
                  <Wrench className="text-blue-600 w-16 h-16" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  Security Audits & Maintenance
                </h3>
                <p className="text-gray-600 text-center">
                  Comprehensive audits & routine maintenance to ensure your
                  systems are always operational.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 w-full">
              <Image
                src="/cctv.jpg"
                alt="About ARP Solutions"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About Us
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                At <span className="font-semibold">ARP Solutions</span>,
                we provide cutting-edge security technology to protect what
                matters most.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our certified team ensures seamless installation, reliable
                support, and ongoing system optimization.
              </p>
              <p className="text-gray-600 text-lg">
                We pride ourselves on **attention to detail**, **quality
                products**, and **customer satisfaction**.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              Why Choose ARP?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <ShieldCheck className="mx-auto text-blue-600 w-16 h-16 mb-4" />
                <h3 className="font-semibold text-lg text-gray-800">
                  Trusted Expertise
                </h3>
                <p className="text-gray-600 mt-2">
                  Certified technicians with years of industry experience.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <Clock className="mx-auto text-blue-600 w-16 h-16 mb-4" />
                <h3 className="font-semibold text-lg text-gray-800">
                  24/7 Support
                </h3>
                <p className="text-gray-600 mt-2">
                  Always available to handle your service & support needs.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <Wrench className="mx-auto text-blue-600 w-16 h-16 mb-4" />
                <h3 className="font-semibold text-lg text-gray-800">
                  End-to-End Service
                </h3>
                <p className="text-gray-600 mt-2">
                  From consultation to installation and maintenance, we’ve got
                  you covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-100 p-6 rounded-xl shadow">
                <p className="text-gray-700 italic">
                  "ARP upgraded our office security flawlessly.
                  Professional, fast, and reliable!"
                </p>
                <h4 className="mt-4 font-semibold text-gray-800">
                  – Rajesh K.
                </h4>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow">
                <p className="text-gray-700 italic">
                  "The biometric attendance system has made employee tracking
                  effortless."
                </p>
                <h4 className="mt-4 font-semibold text-gray-800">– Pooja S.</h4>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow">
                <p className="text-gray-700 italic">
                  "Very responsive team! Regular maintenance keeps our CCTV
                  always up."
                </p>
                <h4 className="mt-4 font-semibold text-gray-800">– Ankit M.</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
<section id="contact" className="py-20 bg-gray-100">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
      Get in Touch
    </h2>

    <div className="bg-white p-10 rounded-2xl shadow-md space-y-8">
      <div className="flex items-center justify-center space-x-4">
        <span className="text-blue-600 text-3xl">📞</span>
        <a
          href="tel:+919876543210"
          className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
        >
          +91 98765 43210
        </a>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <span className="text-blue-600 text-3xl">✉️</span>
        <a
          href="mailto:info@techsecure.com"
          className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
        >
          info@techsecure.com
        </a>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <span className="text-blue-600 text-3xl">📍</span>
        <p className="text-lg font-medium text-gray-700">
          TechSecure Solutions, 2nd Floor, IT Park, New Delhi, India
        </p>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <span className="text-blue-600 text-3xl">🕒</span>
        <p className="text-lg font-medium text-gray-700">
          Mon – Sat: 9:00 AM – 7:00 PM
        </p>
      </div>

      <div className="mt-8">
        <a
          href="tel:+919876543210"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          📞 Call Us Now
        </a>
      </div>
    </div>
  </div>
</section>


        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p>&copy; 2025 ARP Solutions. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default LandingPage;
