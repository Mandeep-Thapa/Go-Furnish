export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Funiro.</h3>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral
              <br />
              Gables, FL 33134 USA
            </p>
          </div>
          <div>
            <h4 className="text-gray-500 mb-6">Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-600 hover:text-gray-900">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 mb-6">Help</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 mb-6">Newsletter</h4>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-b border-gray-300 pb-2 focus:outline-none"
              />
              <button type="submit" className="text-gray-900 font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 text-center">2023 furino. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

