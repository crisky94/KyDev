import {
    ColorTags,
    Tags
} from 'astro-boilerplate-components';

const Stack = () => (
    <div className='w-full bg-gray-800 flex mb-12'>
        <div className='w-full text-center justify-center mx-auto flex flex-wrap p-12 gap-1 hover:text-lg'>
            <Tags color={ColorTags.RED}>HTML</Tags>
            <Tags color={ColorTags.BLUE}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.VIOLET}>Vite</Tags>
            <Tags color={ColorTags.BLUE}>React</Tags>
            <Tags color={ColorTags.EMERALD}>Node.js</Tags>
            <Tags color={ColorTags.GRAY}>Socket.io</Tags>
            <Tags color={ColorTags.TEAL}>TailwindCSS</Tags>
            <Tags color={ColorTags.PURPLE}>Bootstrap</Tags>
            <Tags color={ColorTags.BLUE}>MaterialUI</Tags>
            <Tags color={ColorTags.INDIGO}>MySQL</Tags>
            <Tags color={ColorTags.BLUE}>Prisma</Tags>
            <Tags color={ColorTags.GREEN}>MongoDB</Tags>
            <Tags color={ColorTags.ROSE}>Git</Tags>
            <Tags color={ColorTags.ZINC}>GitHub</Tags>
            <Tags color={ColorTags.ORANGE}>GitLab</Tags>
            <Tags color={ColorTags.RED}>Figma</Tags>
        </div>
    </div>

);

export { Stack };
