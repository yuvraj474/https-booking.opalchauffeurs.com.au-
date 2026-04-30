import { MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          {/* Address */}
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-400 text-red-500">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-500 text-sm mt-1">
                Unit 603, Srijan Tech Park, DN 52, Sector V, Salt Lake,
                Kolkata-700091, India
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-red-400 text-red-500">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Contact Details</h3>
              <p className="text-gray-500 text-sm mt-1">
                (IN) +91 80375 65049 <br />
                (UK) +44 1224 015428 <br />
                (US) +1 337 283 7177
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us:</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 border rounded-full flex items-center justify-center">F</div>
              <div className="w-10 h-10 border rounded-full flex items-center justify-center">I</div>
              <div className="w-10 h-10 border rounded-full flex items-center justify-center">L</div>
              <div className="w-10 h-10 border rounded-full flex items-center justify-center">Y</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Leave Us Your Info.
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <textarea
              placeholder="Comment"
              rows="4"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              <span>
                You agree to our friendly{" "}
                <span className="text-red-500">privacy policy</span>
              </span>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
              Send Message →
            </button>
          </form>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="max-w-7xl mx-auto mt-20 bg-white p-8 rounded-2xl shadow flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-red-500">Sign up</span> for our newsletter
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Stay in the loop with everything you need to know.
          </p>
        </div>

        <div className="flex w-full md:w-auto gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border rounded-lg w-full md:w-80 focus:outline-none"
          />
          <button className="bg-red-500 text-white px-6 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}