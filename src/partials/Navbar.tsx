import {
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';


const Navbar = () => (
  
  <Section>
    <NavbarTwoColumns>
      <a className='text-teal-500 text-2xl flex justify-center' href="/"> 
      <img className='w-10' src="/assets/images/logo-kydev.png"
        />
        <span  className='bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text text-4xl pt-3 font-jersey-15 font-normal'>yDev</span>
      </a>
<div className='mr-4'>
      <NavMenu >
      <a
      href="/"
      className="text-teal-500 text-lg {currentPath === '/' ? 'active' : ''} linkNavbar"
      >
      Home
    </a>
    <a
      href="/projects/"
      className="text-teal-500  text-lg {currentPath === '/projects/' ? 'active' : ''} linkNavbar"
      >
      Projects
    </a>
      </NavMenu>
</div>
    </NavbarTwoColumns>
  </Section>
      
);

export { Navbar };
