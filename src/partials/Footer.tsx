const Footer = () => (
    <footer className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 bg-gradient-to-b from-teal-500 to-cyan-600 w-full h-24 sm:h-28 p-4 sm:p-6 text-white">
        <p className="text-sm sm:text-base font-light text-center">
            © 2025. All rights reserved.
        </p>

        <div className="flex gap-4 sm:gap-6">
            <a
                href="https://www.linkedin.com/in/cristinalabradorordonez"
                target="_blank"
                className="hover:scale-110 transform transition-all duration-300"
            >
                <img
                    src={"/assets/images/linkedin.png"}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-all duration-300"
                />
            </a>

            <a
                href="https://github.com/crisky94?tab=repositories"
                target="_blank"
                className="hover:scale-110 transform transition-all duration-300"
            >
                <img
                    src={"/assets/images/github.png"}
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-all duration-300"
                />
            </a>

            <a
                href="https://gitlab.com/dashboard/projects"
                target="_blank"
                className="hover:scale-110 transform transition-all duration-300"
            >
                <img
                    src={"/assets/images/gitlab-1.png"}
                    alt="GitLab"
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition-all duration-300"
                />
            </a>
        </div>
    </footer>
);

export { Footer };
