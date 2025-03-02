import {
    Section,
    ColorTags,
    Tags
} from 'astro-boilerplate-components';

const Education = () => (
    <Section
        title={
            <h1 className="text-3xl sm:text-4xl pt-14 text-center p-8 font-extrabold tracking-wide">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                    Education 🎓
                </span>
            </h1>
        }
    >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6">
            {[
                {
                    title: "Certificate Bootcamp Hack A Boss",
                    description: "2023-2024",
                    link: 'certificates/certificate-1/',
                    tags: [
                        { label: 'React', color: ColorTags.SKY },
                        { label: 'JavaScript', color: ColorTags.YELLOW },
                        { label: 'Node.js', color: ColorTags.EMERALD },
                        { label: 'Express', color: ColorTags.LIME },
                        { label: 'SQL', color: ColorTags.ROSE },
                    ],
                },
                {
                    title: "Certificate JavaScript desde cero Udemy",
                    description: "DIC 2023",
                    link: 'certificates/certificate-2/',
                    tags: [
                        { label: 'HTML', color: ColorTags.ROSE },
                        { label: 'CSS', color: ColorTags.SKY },
                        { label: 'JavaScript', color: ColorTags.YELLOW },
                        { label: 'Node.js', color: ColorTags.EMERALD },
                    ],
                },
            ].map((cert, index) => (
                <a
                    key={index}
                    href={cert.link}
                    className="bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 block"
                >
                    <div>
                        <h2 className="text-2xl sm:text-xl font-semibold text-center mb-3">
                            {cert.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {cert.tags.map((tag, i) => (
                                <Tags key={i} color={tag.color}>
                                    {tag.label}
                                </Tags>
                            ))}
                        </div>
                        <p className="text-gray-300 mt-4 text-sm sm:text-base text-center">
                            {cert.description}
                        </p>
                    </div>
                </a>
            ))}
        </div>
    </Section>
);

export { Education };
