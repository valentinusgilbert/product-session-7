import { FaInstagram, FaGithub, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import type { Metadata } from "next";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto py-10 px-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Saya</h1>
        <div className="flex flex-col gap-5">
          <a
            href="https://instagram.com/valetninusgilbert"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-700 hover:text-pink-600 transition"
          >
            <FaInstagram className="text-2xl" />
            instagram.com/valetninusgilbert
          </a>
          <a
            href="https://github.com/valentinusgilbert"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-700 hover:text-black transition"
          >
            <FaGithub className="text-2xl" />
            github.com/valentinusgilbert
          </a>
          <a
            href="https://wa.me/62853367768686"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-700 hover:text-green-600 transition"
          >
            <FaWhatsapp className="text-2xl" />
            0853-3677-6866
          </a>
          <a
            href="https://valentinusgilbert.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600 transition"
          >
            <FaGlobe className="text-2xl" />
            valentinusgilbert.vercel.app
          </a>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Productify - Contact",
  description: "Hubungi kami di Productify untuk pertanyaan dan dukungan.",
}; 