import {
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section >
    <HeroAvatar
      title={
<div className='`text-3xl sm:text-4xl'>
  Hi there,
  <p className='pt-2'>
    I'm{' '}
  <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text">Cris Labrador {' '}</span>
  👋
  </p>
  <p>but my friends call me  <span className="text-teal-600 text-6xl pt-1 font-jersey-15 font-normal">Ky {' '}</span></p>
</div>
      }
      description={
        <>
          Passionate <span className="text-teal-500 hover:underline">
            web developer
          </span>{' '} and lover of <span className="text-teal-500 hover:underline">
            logic and problem-solving
          </span>. Programming turned my curiosity into a career, blending creativity with technical expertise. Explore my journey as I turn ideas into reality!
        </>
      }
      avatar={
      <div className='bg-gradient-to-b from-teal-500 to-cyan-600 rounded-full'>
        <img
          className="h-70 w-64 rounded-full border-4 border-transparent"
          src="/assets/images/me-1.jpg"
          alt="Avatar image"
          loading="lazy"
          />
          </div>
      }
      socialButtons={
        <div className='flex gap-6 mb-8'>
          <a href="https://www.linkedin.com/in/cristinalabradorordonez/" target='blank'>
            <HeroSocial
              src="/assets/images/linkedin.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/crisky94" target='blank'>
          <HeroSocial
              src="/assets/images/github.png"
              alt="Linkedin icon"
            /></a>
          <a href="https://gitlab.com/criistiiniilla.1994" target='blank'>
          <HeroSocial
              src="/assets/images/gitlab-1.png"
              alt="Linkedin icon"
            />
          </a>
        </div>
      }
    />
    <div className="flex flex-col items-center mt-4">
      <div className='flex items-center'>
      <p className="text-lg font-medium text-gray-500">Know me better</p>
      <p className='text-4xl'>👇</p>
      </div>
      <a
        href="/assets/files/cv_KyDev_2025.pdf"
        download="KyDev_CV"
        className="mt-2 inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600  text-sm font-medium rounded-lg shadow-lg hover:scale-105 hover:from-cyan-600 hover:to-teal-500 transition-transform duration-200"
      >
        <img
          src="/assets/images/download-1.png"
          alt="Download icon"
          className="w-5 h-5 mr-2"
        />
        Download CV
      </a>
    </div>
  </Section>
);

export { Hero };
