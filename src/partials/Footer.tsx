
const Footer = () => (
    <footer className='flex justify-center items-center gap-4 bg-gradient-to-b from-teal-500 to-cyan-600 w-full rounded-md h-20' >
        <p className="mr-4">© 2025. All rights reserved.</p>
        <a href="https://www.linkedin.com/in/cristinalabradorordonez" target="_blank"><img src={"/assets/images/linkedin.png"} width={30} height={30} /></a>
        <a href="https://github.com/crisky94?tab=repositories" target="_blank"><img src={"/assets/images/github.png"} width={30} height={30} /></a>
        <a href="https://gitlab.com/dashboard/projects" target="_blank"><img src={"/assets/images/gitlab-1.png"} width={30} height={30} /></a>
    </footer>

);

export { Footer };
