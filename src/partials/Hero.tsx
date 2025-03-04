import {
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
        <div className='flex justify-center text-4xl sm:text-5xl md:text-6xl text-center mt-20'>
          <p className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text text-center">Cris Labrador</p>
        </div>  
        <div className='flex justify-center text-2xl sm:text-5xl md:text-6xl text-center mt-4'>
          <p className=" text-center">My friends call me <span className='bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text text-center font-jersey-15'> Ky</span></p>
        </div>   
        <div className='text-center mt-6 sm:mt-8'>
          Passionate <span className="text-teal-500 ">
            FullStack
          </span>{' '} and lover of <span className="text-teal-500 ">
            logic and problem-solving
          </span>. Programming turned my curiosity into a career, blending creativity with technical expertise. Explore my journey as I turn ideas into reality!
          <div className="flex justify-center mt-4 gap-4 sm:gap-6">
            <a
                href="https://www.linkedin.com/in/cristinalabradorordonez"
                target="_blank"
                className="hover:scale-110 transform transition-all duration-300"
            >
                <img
                    src={"/assets/images/linkedin.png"}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-all duration-300"
                />
            </a>

            <a
                href="https://github.com/crisky94?tab=repositories"
                target="_blank"
                className="hover:scale-110 transform transition-all duration-300"
            >
                <img
                    src={"/assets/images/github.png"}
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-all duration-300"
                />
            </a>

            <a
                href="https://gitlab.com/dashboard/projects"
                target="_blank"
                className="hover:scale-110 transform transition-all duration-300"
            >
                <img
                    src={"/assets/images/gitlab-1.png"}
                    alt="GitLab"
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-all duration-300"
                />
            </a>
        </div>
        </div>
 
    <div className="flex flex-col items-center mt-8 mb-12">
      <a
        href="/assets/files/cv_2025.pdf"
        download="KyDev_CV"
        className="border mt-4 inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-sm font-medium rounded-lg shadow-lg hover:scale-105 hover:from-cyan-600 hover:to-teal-500 transition-transform duration-200"
      >
        <img
          src="/assets/images/download-1.png"
          alt="Download icon"
          className="w-5 h-5"
        />
        Download CV
      </a>
    </div>
  </Section>
);

export { Hero };
