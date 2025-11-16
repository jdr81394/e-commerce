export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">ASHION</h3>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="flex gap-2">
              <img
                src="/payment-1.png"
                alt="Payment"
                className="h-6 w-auto opacity-70"
              />
              <img
                src="/payment-2.png"
                alt="Payment"
                className="h-6 w-auto opacity-70"
              />
              <img
                src="/payment-3.png"
                alt="Payment"
                className="h-6 w-auto opacity-70"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h5 className="text-white font-semibold mb-4">Account</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/account" className="hover:text-white transition">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Orders Tracking
                </a>
              </li>
              <li>
                <a href="/checkout" className="hover:text-white transition">
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-white font-semibold mb-4">NEWSLETTER</h5>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded mb-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fa fa-youtube-play"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This
            template is made with <i className="fa fa-heart text-red-500"></i>{" "}
            by ASHION
          </p>
        </div>
      </div>
    </footer>
  );
}
