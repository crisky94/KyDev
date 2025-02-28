import {
    Section,
    Project,
    ColorTags,
    Tags
} from 'astro-boilerplate-components';

const Education = () => (
    <Section
        title={
            <h1 className="text-2xl sm:text-3xl pt-24 text-center uppercase mb-8">
                <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text">
                    Education 🎓
                </span>{' '}

            </h1>
        }
    >
        <div className="flex flex-col gap-4 mb-20">

            <Project
                name="Certificate - Bootcamp Hack A Boss "
                description="2023-2024"
                // img={{ src: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTB2cDlkb2gwaXcwemduazJjaHJkOWg5dnZzMXhjdDVzamhicGV2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ft7tFRfVMNAFWLpVFU/giphy.gif', alt: 'Certificate icon' }}
                link='certificates/certificate-1/'
                category={
                    <>
                        <Tags color={ColorTags.SKY}>React</Tags>
                        <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
                        <Tags color={ColorTags.EMERALD}>Node.js</Tags>
                        <Tags color={ColorTags.LIME}>Express</Tags>
                        <Tags color={ColorTags.ROSE}>SQL</Tags>
                    </>
                }
            />
            <Project
                name="Certificate - JavaScript desde cero Udemy"
                description="DIC 2023"
                // img={{ src: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTB2cDlkb2gwaXcwemduazJjaHJkOWg5dnZzMXhjdDVzamhicGV2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ft7tFRfVMNAFWLpVFU/giphy.gif', alt: 'patata' }}
                link='certificates/certificate-2/'
                category={
                    <>
                        <Tags color={ColorTags.ROSE}>HTML</Tags>
                        <Tags color={ColorTags.SKY}>CSS</Tags>
                        <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
                        <Tags color={ColorTags.EMERALD}>Node.js</Tags>
                    </>
                }
            />
        </div>
    </Section>
);

export { Education };
