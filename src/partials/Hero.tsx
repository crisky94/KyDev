import {
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <div className='text-3xl sm:text-6xl text-center mt-10'>
          <p className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text ml-32">Cris Labrador</p>
        </div>
      }
      description={
        <div className='text-center mt-14 ml-16'>
          Passionate <span className="text-teal-500 underline">
            FullStack
          </span>{' '} and lover of <span className="text-teal-500 underline">
            logic and problem-solving
          </span>. Programming turned my curiosity into a career, blending creativity with technical expertise. Explore my journey as I turn ideas into reality!
        </div>
      }
    />
    <div className="flex flex-col items-center mt-4 mb-20">
      <div className='flex items-center'>
        <p className="text-lg font-medium text-gray-500">Know me better</p>
        <p className='text-4xl'>👇</p>
      </div>
      <a
        href="/assets/files/cv_2025.pdf"
        download="KyDev_CV"
        className="mt-2 inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600  text-sm font-medium rounded-lg shadow-lg hover:scale-105 hover:from-cyan-600 hover:to-teal-500 transition-transform duration-200"
      >
        <img
          src="/assets/images/download-1.png"
          alt="Download icon"
          className="w-5 h-5 mr-1"
        />
        Download CV
      </a>
    </div>
  </Section>
);

export { Hero };
