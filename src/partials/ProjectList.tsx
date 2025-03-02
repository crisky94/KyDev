import { ColorTags, Section, Tags } from 'astro-boilerplate-components';


const ProjectList = () => (
  <Section
    title={
      <h1 className="text-3xl sm:text-4xl pt-14 text-center p-8 font-extrabold tracking-wide">
        <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
          Featured Projects 🏆
        </span>
      </h1>
    }
  >
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6">
      {[
        {
          name: 'FreedayQuiz',
          url: '/projects/project-3/',
          description:
            'A live quiz platform for interactive question-and-answer experiences, offering full customization for administrators and players.',
          tags: [
            { label: 'Next.js', color: ColorTags.VIOLET },
            { label: 'Tailwind', color: ColorTags.SKY },
            { label: 'Socket.io', color: ColorTags.YELLOW },
            { label: 'Prisma', color: ColorTags.EMERALD },
            { label: 'SQL', color: ColorTags.ROSE },
          ],
        },
        {
          name: 'FilmGeek',
          url: '/projects/project-2/',
          description:
            'An app to explore and discover a vast selection of movies from different genres with rich metadata and recommendations.',
          tags: [
            { label: 'React', color: ColorTags.SKY },
            { label: 'JavaScript', color: ColorTags.YELLOW },
          ],
        },
        {
          name: 'Wanderlust',
          url: '/projects/project-1/',
          description:
            'A social network for travel enthusiasts to share trips, hidden gems, and authentic experiences worldwide.',
          tags: [
            { label: 'React', color: ColorTags.SKY },
            { label: 'Node', color: ColorTags.EMERALD },
            { label: 'Express', color: ColorTags.LIME },
            { label: 'SQL', color: ColorTags.ROSE },
          ],
        },
      ].map((project, index) => (
        <a
          key={index}
          href={project.url}
          className="bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 block"
        >
          <div>
            <h2 className="text-2xl sm:text-xl font-semibold text-center mb-3">
              {project.name}
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tags.map((tag, i) => (
                <Tags key={i} color={tag.color}>
                  {tag.label}
                </Tags>
              ))}
            </div>
            <p className="text-gray-300 mt-4 text-sm sm:text-base">{project.description}</p>
          </div>
        </a>
      ))}
    </div>

    <div className="text-lg text-center mt-10">
      <a
        href="/projects/"
        className="text-slate-400 hover:text-white transition-colors font-semibold"
      >
        View all Projects →
      </a>
    </div>
  </Section>
);

export { ProjectList };
