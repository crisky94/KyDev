import {
  NavbarTwoColumns,
  NavMenu,
  
} from 'astro-boilerplate-components';


const Navbar = () => (


    <NavbarTwoColumns>
      <a className='text-teal-500 text-2xl flex justify-center' href="/">
      <div className='flex ml-10'>

        <img className='w-10' src="/assets/images/logo-kydev.png"
        />
        <span className='bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text text-4xl pt-3 font-jersey-15 font-normal'>yDev</span>
        </div>
      </a>
      <div className='mr-4'>
        <NavMenu >
          <div className='flex mr-10 gap-6'>

          <a
            href="/"
            className="text-teal-500 text-lg hover:bg-white hover:rounded-md"
            >
            <span className='bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text p-2'>Home</span>
          </a>
          <a
            href="/projects/"
            className="text-teal-500  text-lg hover:bg-white hover:rounded-md"
            >
            <span className='bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text p-2'>Projects</span>

          </a>
            </div>
        </NavMenu>
      </div>
    </NavbarTwoColumns>
 

);

export { Navbar };
