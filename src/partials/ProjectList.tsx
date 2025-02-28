import {
  ColorTags,
  Section,
  Tags,
} from 'astro-boilerplate-components';
import '../styles/navbar.css';

const ProjectList = () => (
  <Section
    title={
      <h1 className="text-2xl sm:text-3xl pt-14 text-center p-12 uppercase">
        <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text">
          Projects 🏆
        </span>
      </h1>
    }
  >
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Proyecto 1: FreedayQuiz */}
      <div className="bg-gray-800 rounded-lg flex flex-wrap md:flex-nowrap p-2">
        <div className="flex-shrink-0 w-full md:w-auto">
          <img
            className="w-full rounded-lg h-52 md:w-80"
            src="/assets/images/freedayQuiz.png"
            alt="Project FreedayQuiz"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 ml-4">
          <a
            href="/projects/project-3/"
            className="text-2xl text-center md:text-left font-semibold transition duration-300 hover:underline  mt-2"
          >
            FreedayQuiz
          </a>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.SKY}>Tailwind</Tags>
            <Tags color={ColorTags.YELLOW}>Socket.io</Tags>
            <Tags color={ColorTags.EMERALD}>Prisma</Tags>
            <Tags color={ColorTags.ROSE}>SQL</Tags>
          </div>
          <p className="text-gray-400">
            This app is for creating and playing quizzes in virtual live. This
            game management system is ideal for creating interactive question
            and answer experiences, providing customization options for both
            administrators and players. Each profile is designed to facilitate
            the flow of the game, ensuring a dynamic and entertaining
            experience.
          </p>
        </div>
      </div>

      {/* Proyecto 2: FilmGeek */}
      <div className="bg-gray-800 rounded-lg flex flex-wrap p-2">
        <div className="flex-shrink-0 w-full md:w-auto">
          <img
            className="w-full rounded-lg h-48 md:w-80"
            src="/assets/images/film-geek-image.png"
            alt="Project FilmGeek"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 ml-4">
          <a
            href="/projects/project-2/"
            className="text-2xl text-center md:text-left font-semibold transition duration-300 hover:underline  mt-2"
          >
            FilmGeek
          </a>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <Tags color={ColorTags.SKY}>React</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </div>
          <p className="text-gray-400">
            FilmGeek is an app that allows you to explore, discover, and enjoy a
            wide variety of movies from different genres.
          </p>
        </div>
      </div>

      {/* Proyecto 3: Wanderlust */}
      <div className="bg-gray-800 rounded-lg flex flex-wrap md:flex-nowrap p-2">
        <div className="flex-shrink-0 w-full md:w-auto">
          <img
            className="rounded-lg h-48 w-full md:w-80"
            src="/assets/images/wanderlust.png"
            alt="Project Wanderlust"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 ml-4">
          <a
            href="/projects/project-1/"
            className="text-2xl text-center md:text-left font-semibold transition duration-300 hover:underline mt-2"
          >
            Wanderlust
          </a>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <Tags color={ColorTags.SKY}>React</Tags>
            <Tags color={ColorTags.EMERALD}>Node</Tags>
            <Tags color={ColorTags.LIME}>Express</Tags>
            <Tags color={ColorTags.ROSE}>SQL</Tags>
          </div>
          <p className="text-gray-400">
            Wanderlust is a social network designed for exploration enthusiasts
            to share their trips, excursions, experiences, and hidden gems.
            Whether you’re a seasoned traveler or looking for inspiration, find
            authentic suggestions from our community of adventurers.
          </p>
        </div>
      </div>
    </div>

    <div className="text-lg text-center mt-6">
      <a href="/projects/">
        View all Projects →
      </a>
    </div>
  </Section>
);

export { ProjectList };
