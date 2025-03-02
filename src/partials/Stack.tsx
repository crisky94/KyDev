import { ColorTags, Tags } from 'astro-boilerplate-components';

const Stack = () => (
    <div className="w-full py-10">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10 sm:mb-20">
            <span className='text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text'>
                My Tech Stack 🚀
            </span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 px-6 sm:px-12 w-80 md:w-full">
            {[
                { label: 'HTML', color: ColorTags.RED },
                { label: 'CSS', color: ColorTags.BLUE },
                { label: 'JavaScript', color: ColorTags.YELLOW },
                { label: 'Next.js', color: ColorTags.SLATE },
                { label: 'Vite', color: ColorTags.VIOLET },
                { label: 'React', color: ColorTags.BLUE },
                { label: 'Node.js', color: ColorTags.EMERALD },
                { label: 'Socket.io', color: ColorTags.GRAY },
                { label: 'TailwindCSS', color: ColorTags.TEAL },
                { label: 'Bootstrap', color: ColorTags.PURPLE },
                { label: 'MaterialUI', color: ColorTags.BLUE },
                { label: 'MySQL', color: ColorTags.INDIGO },
                { label: 'Prisma', color: ColorTags.BLUE },
                { label: 'MongoDB', color: ColorTags.GREEN },
                { label: 'Git', color: ColorTags.ROSE },
                { label: 'GitHub', color: ColorTags.ZINC },
                { label: 'GitLab', color: ColorTags.ORANGE },
                { label: 'Figma', color: ColorTags.RED },
            ].map((tech, index) => (
                <div
                    key={index}
                    className="bg-gray-800 p-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
                >
                    <Tags color={tech.color}>
                        {tech.label}
                    </Tags>
                </div>
            ))}
        </div>
    </div>
);

export { Stack };
