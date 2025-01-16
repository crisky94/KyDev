import {
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';


const Navbar = () => (
  
  <Section>
    <NavbarTwoColumns>
      <a className='text-teal-500 text-2xl flex justify-center' href="/"> 
      <img className='w-10' src="/assets/images/kydev.png"
        />
        <p  className='text-teal-600 text-4xl pt-1 font-jersey-15 font-normal'>KyDev</p>
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
