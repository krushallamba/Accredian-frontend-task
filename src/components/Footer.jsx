const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div >
                <img src="/logo.webp" alt="logo" className=" h-[36px] w-[125px] cursor-pointer"/>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#howitworks" className="text-gray-400 hover:text-white">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-gray-400 hover:text-white">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: support@accredian.com</p>
              <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            &copy; {new Date().getFullYear()} Accredian. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  