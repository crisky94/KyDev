import {
    ColorTags,
    Tags
} from 'astro-boilerplate-components';

const Stack = () => (
    <div className='w-full bg-gray-800 flex mb-12'>
        <div className='w-full text-center mx-auto flex flex-wrap p-12 gap-1'>
            <Tags color={ColorTags.RED}>HTML</Tags>
            <Tags color={ColorTags.BLUE}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.SKY}>TypeScript</Tags>
            <Tags color={ColorTags.AMBER}>Python</Tags>
            <Tags color={ColorTags.ORANGE}>COLAB</Tags>
            <Tags color={ColorTags.SLATE}>Next.js</Tags>
            <Tags color={ColorTags.VIOLET}>Vite</Tags>
            <Tags color={ColorTags.CYAN}>React</Tags>
            <Tags color={ColorTags.ROSE}>React Router</Tags>
            <Tags color={ColorTags.SKY}>Context-API</Tags>
            <Tags color={ColorTags.EMERALD}>Node.js</Tags>
            <Tags color={ColorTags.RED}>NPM</Tags>
            <Tags color={ColorTags.GREEN}>Nodemon</Tags>
            <Tags color={ColorTags.NEUTRAL}>JWT</Tags>
            <Tags color={ColorTags.INDIGO}>Express</Tags>
            <Tags color={ColorTags.GRAY}>Socket.io</Tags>
            <Tags color={ColorTags.TEAL}>TailwindCSS</Tags>
            <Tags color={ColorTags.PURPLE}>Bootstrap</Tags>
            <Tags color={ColorTags.BLUE}>MaterialUI</Tags>
            <Tags color={ColorTags.YELLOW}>ESLINT</Tags>
            <Tags color={ColorTags.INDIGO}>MySQL</Tags>
            <Tags color={ColorTags.BLUE}>Prisma</Tags>
            <Tags color={ColorTags.GREEN}>MongoDB</Tags>
            <Tags color={ColorTags.ORANGE}>POSTMAN</Tags>
            <Tags color={ColorTags.ROSE}>Git</Tags>
            <Tags color={ColorTags.ZINC}>GitHub</Tags>
            <Tags color={ColorTags.FUCHSIA}>GitLab</Tags>
            <Tags color={ColorTags.NEUTRAL}>Railway</Tags>
            <Tags color={ColorTags.LIME}>Render</Tags>
            <Tags color={ColorTags.STONE}>Vercel</Tags>
            <Tags color={ColorTags.PINK}>Figma</Tags>
            <Tags color={ColorTags.INDIGO}>Trello</Tags>
            <Tags color={ColorTags.CYAN}>Canva</Tags>
            <Tags color={ColorTags.SLATE}>Notion</Tags>
        </div>
    </div>

);

export { Stack };
