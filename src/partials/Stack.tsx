import { ColorTags, Tags } from 'astro-boilerplate-components';

const Stack = () => (
    <div className="w-full text-xl pt-32">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10 pt-10">
            <span className='text-3xl font-extrabold font-serif'>
                My Stack 💻 
            </span>
        </h2>
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-6 sm:px-12 w-full">
            {[
                { label: 'HTML', color: ColorTags.RED, img: '../../public/assets/images/html5.svg' },
                { label: 'CSS', color: ColorTags.BLUE, img: '../../public/assets/images/css_old.svg' },
                { label: 'JavaScript', color: ColorTags.YELLOW, img: '../../public/assets/images/javascript.svg' },
                { label: 'TypeScript', color: ColorTags.BLUE, img: '../../public/assets/images/typescript.svg' },
                { label: 'Python', color: ColorTags.YELLOW, img: '../../public/assets/images/python.svg' },
                { label: 'Next.js', color: ColorTags.SLATE, img: '../../public/assets/images/nextjs_icon_dark.svg' },
                { label: 'React', color: ColorTags.BLUE, img: '../../public/assets/images/React_dark.svg' },
                { label: 'Node.js', color: ColorTags.EMERALD, img: '../../public/assets/images/nodejs.svg' },
                { label: 'Socket.io', color: ColorTags.GRAY, img: '../../public/assets/images/Socket.io_dark.svg' },
                { label: 'TailwindCSS', color: ColorTags.TEAL, img: '../../public/assets/images/tailwindcss.svg' },
                { label: 'Bootstrap', color: ColorTags.PURPLE, img: '../../public/assets/images/bootstrap.svg' },
                { label: 'MaterialUI', color: ColorTags.BLUE, img: '../../public/assets/images/materialui.svg' },
                { label: 'MySQL', color: ColorTags.INDIGO, img: '../../public/assets/images/mysql.svg' },
                { label: 'Prisma', color: ColorTags.BLUE, img: '../../public/assets/images/Prisma_dark.svg' },
                { label: 'MongoDB', color: ColorTags.GREEN, img: '../../public/assets/images/mongodb.svg' },
            ].map((tech, index) => (
                <div
                    key={index}
                    className="bg-gray-800 p-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 flex flex-col items-center"
                >
                    <img src={tech.img} alt={tech.label} className="w-12 h-12 mb-2" />
                    <Tags color={tech.color}>
                        {tech.label}
                    </Tags>
                </div>
            ))}
        </div>
    </div>
);

export { Stack };
