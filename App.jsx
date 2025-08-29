import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src="/images/logo-devansh.png" alt="Devansh Logo" className="h-12 inline mr-4" />
          <img src="/images/logo-diya.png" alt="Diya Logo" className="h-12 inline" />
          <h1 className="text-xl font-bold text-blue-600 ml-4">Devansh & Diya Enterprises</h1>
        </div>
        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/equipment">Equipment</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center bg-gray-50 min-h-screen flex flex-col justify-center">
      <h2 className="text-5xl font-extrabold mb-6 text-blue-600">Integrated Civil & Infrastructure Solutions</h2>
      <p className="text-lg max-w-3xl mx-auto mb-6">
        From foundations to finishes, we deliver turnkey solutions in piling, excavation, anchoring, guniting,
        and large-scale civil construction. Building tomorrow with quality and trust.
      </p>
      <img src="/images/devansh_page_2.jpg" alt="Construction Site" className="rounded-2xl shadow-lg mx-auto max-w-full" />
    </motion.div>
  );
}

function About() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <p className="mb-4 text-lg">
        Devansh & Diya Enterprises combine decades of expertise in infrastructure and construction,
        offering complete solutions for piling, excavation, rock anchoring, guniting, and civil works.
      </p>
      <p className="mb-4 text-lg">
        <strong>Vision:</strong> To set industry benchmarks for quality, safety, and sustainability while delivering projects
        that empower communities and foster growth.
      </p>
      <img src="/images/devansh_page_3.jpg" alt="Our Team" className="rounded-2xl shadow-md mt-6 max-w-full" />
    </div>
  );
}

function Services() {
  const services = [
    "Piling & Deep Foundations",
    "Rock Anchoring & Slope Stabilization",
    "Excavation (Soil, Soft & Hard Rock)",
    "Shotcrete & Guniting Works",
    "Civil Construction (Commercial, Residential, Industrial)",
    "Roadworks & Landscaping",
    "Land Reclamation & Earth Filing",
    "Supply of Raw Materials & Crusher Operations"
  ];
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="p-6 shadow rounded-2xl bg-white hover:shadow-lg transition">
            <img src={`/images/devansh_page_${(i%6)+1}.jpg`} alt={s} className="rounded-xl mb-4 max-w-full" />
            <h3 className="font-semibold text-lg">{s}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    { name: "ASRR Realty (Andheri MIDC)", img: "/images/devansh_page_6.jpg" },
    { name: "Britacel Silicon Ltd (Andheri MIDC)", img: "/images/diya_page_5.jpg" },
    { name: "Mumbai Airport Runway (N-3 & 09 Area)", img: "/images/diya_page_6.jpg" },
    { name: "ISKCON Temple (Mira Road)", img: "/images/diya_page_3.jpg" },
    { name: "Lodha Aqua Project (Dahisar)", img: "/images/diya_page_4.jpg" },
    { name: "Tata Group – Domestic Airport (Vile Parle East)", img: "/images/diya_page_7.jpg" },
    { name: "GHP Group (Powai & Hiranandani)", img: "/images/devansh_page_9.jpg" },
    { name: "Ongoing: Nirlon Ltd (Vikhroli), GHP Group (Powai), Pentagon Group (Worli)", img: "/images/diya_page_8.jpg" }
  ];
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="shadow rounded-2xl overflow-hidden bg-white">
            <img src={p.img} alt={p.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Equipment() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Equipment</h2>
      <ul className="space-y-3">
        <li>Excavators (TATA Hitachi, Kobelco, L&T Komatsu, JCB)</li>
        <li>Tata Tippers (Taurus Associate)</li>
        <li>Atlas Copco Air Compressors</li>
        <li>Concrete Pumps & Rock Breaker Units</li>
      </ul>
      <img src="/images/diya_page_2.jpg" alt="Construction Equipment" className="rounded-2xl shadow-md mt-6 max-w-full" />
    </div>
  );
}

function Gallery() {
  const gallery = [
    "/images/devansh_page_1.jpg",
    "/images/devansh_page_4.jpg",
    "/images/devansh_page_5.jpg",
    "/images/diya_page_1.jpg",
    "/images/diya_page_2.jpg",
    "/images/diya_page_3.jpg"
  ];
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gallery.map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${i+1}`} className="rounded-2xl shadow-md hover:scale-105 transition max-w-full" />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus({ type: "success", text: "Thanks! Your message has been sent." });
        form.reset();
      } else {
        setStatus({ type: "error", text: `Could not send: ${(data.errors || [data.error]).join(", ")}` });
      }
    } catch (err) {
      setStatus({ type: "error", text: "Network error. Please try again." });
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p className="mb-2"><strong>Address:</strong> Office No. 1, First Floor, Yadav Niwas, Opp. Shivam Aum Sct., Gokhle Nagar, IIT Main Gate, Powai, Mumbai – 400076</p>
      <p className="mb-2"><strong>Email:</strong> singh.durgendra16@gmail.com | durgendra.devanshemt@gmail.com</p>
      <p className="mb-4"><strong>Phone:</strong> +91 96199 02381 | +91 98190 94833</p>
      {status && (
        <div className={`p-4 mb-4 rounded-xl ${status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {status.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <input name="name" type="text" placeholder="Your Name" className="w-full p-3 border rounded-xl" required />
        <input name="email" type="email" placeholder="Your Email" className="w-full p-3 border rounded-xl" required />
        <input name="phone" type="tel" placeholder="Your Phone (optional)" className="w-full p-3 border rounded-xl" />
        <textarea name="message" placeholder="Your Message" rows="4" className="w-full p-3 border rounded-xl" required></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}