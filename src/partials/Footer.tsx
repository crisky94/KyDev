const Footer = () => (
    <footer className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 h-24 sm:h-28 p-4 sm:p-6 text-white shadow-md border-t-2 border-gray-500 border-opacity-50">
        <p className="text-sm sm:text-base font-light text-center">
            © 2025. All rights reserved.
        </p>

        <div className="flex gap-4 sm:gap-6">
            <a
                href="https://www.linkedin.com/in/cristinalabradorordonez"
                target="_blank"
                className="hover:scale-110 "
            >
                <img
                    src={"/assets/images/linkedin.png"}
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    
                />
            </a>

            <a
                href="https://github.com/crisky94?tab=repositories"
                target="_blank"
                className="hover:scale-110 "
            >
                <img
                    src={"/assets/images/github.png"}
                    alt="GitHub"
                    width={24}
                    height={24}
                    
                />
            </a>

            <a
                href="https://gitlab.com/dashboard/projects"
                target="_blank"
                className="hover:scale-110 "
            >
                <img
                    src={"/assets/images/gitlab-1.png"}
                    alt="GitLab"
                    width={24}
                    height={24}
                    
                />
            </a>
        </div>
    </footer>
);

export { Footer };
