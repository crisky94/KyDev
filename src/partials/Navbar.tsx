import { NavbarTwoColumns } from 'astro-boilerplate-components';

const Navbar = () => (
  <NavbarTwoColumns>
    <a className='text-teal-500 text-lg flex justify-center' href="/">
      <div className='flex ml-4'>
        <img
          className='w-10  mb-10 md:mb-0 transition-all duration-300 ease-in-out transform hover:scale-110'
          src="/assets/images/logo-kydev.png"
          alt="Logo"
        />
        <span className='bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text text-4xl pt-3  font-jersey-15'>
          yDev
        </span>
      </div>
    </a>

    <div>
        <div className='flex justify-center md:text-end gap-8'>
        <a
            href="/#stack"
            className="text-lg font-semibold text-white relative p-6 transition-all duration-300 ease-in-out group"
          >
            <span className="group-hover:text-teal-200">Stack</span>
            <span className="absolute bottom-4 left-0 w-0 h-1 bg-teal-600  bg-opacity-30 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="/#projects"
            className="text-lg font-semibold text-white relative p-6 transition-all duration-300 ease-in-out group"
          >
            <span className="group-hover:text-purple-200">Projects</span>
            <span className="absolute bottom-4 left-0 w-0 h-1 bg-purple-600  bg-opacity-30 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="/#education"
            className="text-lg font-semibold text-white relative p-6 transition-all duration-300 ease-in-out group"
          >
            <span className="group-hover:text-cyan-500">Education</span>
            <span className="absolute bottom-4 left-0 w-0 h-1 bg-cyan-600  bg-opacity-30 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="/#contact"
            className="text-lg font-semibold text-white relative p-6 transition-all duration-300 ease-in-out group"
          >
            <span className="group-hover:text-pink-500">Contact</span>
            <span className="absolute bottom-4 left-0 w-0 h-1 bg-pink-500  bg-opacity-30 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </div>
    </div>
  </NavbarTwoColumns>
);

export { Navbar };
