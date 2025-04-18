
const Hero = () => (
  <section className="w-full pt-32 px-4">
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
      <img
        className="rounded-full w-[150px] h-[150px] object-fit border-4 border-teal-400 shadow-md"
        src="/assets/images/avatar.jpeg"
        alt="Avatar"
      />
      <p className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl font-sans text-center md:text-left">
        Cris Labrador
      </p>
    </div>

    <div className="flex justify-center text-3xl sm:text-4xl md:text-5xl text-center mt-6">
      <p>
      My friends refer to me as{' '}
        <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text">
          Ky
        </span>
      </p>
    </div>

    <div className="text-center mt-6 sm:mt-12 p-8 max-w-3xl mx-auto text-base sm:text-lg text-gray-200">
      I'm <span className="text-teal-500">FullStack</span>.I love solving problems and finding logical
solutions. Programming turned my curiosity into a
career, where I can combine creativity with
technical skills to build and improve things.
      <div className="flex justify-center mt-6 gap-6">
        {[
          {
            href: 'https://www.linkedin.com/in/cristinalabradorordonez',
            src: '/assets/images/linkedin.png',
            alt: 'LinkedIn',
          },
          {
            href: 'https://github.com/crisky94?tab=repositories',
            src: '/assets/images/github.png',
            alt: 'GitHub',
          },
          {
            href: 'https://gitlab.com/dashboard/projects',
            src: '/assets/images/gitlab-1.png',
            alt: 'GitLab',
          },
        ].map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition-all duration-300"
          >
            <img src={src} alt={alt} width={32} height={32} />
          </a>
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center mt-8 mb-12">
      <a
        href="/assets/files/KyDev_CV.pdf"
        download="KyDev_CV"
        className="border mt-4 inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-sm font-medium rounded-lg shadow-lg hover:scale-105 hover:from-cyan-600 hover:to-teal-500 transition-transform duration-200"
      >
        <img src="/assets/images/download-1.png" alt="Download icon" className="w-5 h-5 mr-2" />
        Download CV
      </a>
    </div>
  </section>
);

export { Hero };
