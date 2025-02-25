import { UserIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* <a href="#"><div className=" cursor-pointer text-2xl font-bold text-indigo-600">Accredian</div></a> */}
        <a href="#">
          <img src="/logo.webp" alt="logo" className="h-[36px] w-[125px] cursor-pointer"/>
        </a>
        <div className="flex items-center space-x-4">
          <a href="#howitworks" className="text-gray-600 font-medium hover:text-indigo-600 sm:block hidden">
            How it works
          </a>
          <a href="#benefits" className="text-gray-600 font-medium hover:text-indigo-600 sm:block hidden">
            Benefits
          </a>
          <a href="#" className="flex items-center font-medium text-gray-600 hover:text-indigo-600">
            <UserIcon className="h-4 w-5 mr-1" />
            Login
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header

