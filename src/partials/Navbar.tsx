const Navbar = () => (
  <div className="flex flex-col md:flex-row justify-between w-full shadow-md border-b-2 border-gray-500 border-opacity-50">
    {/* Logo */}
    <a className="text-teal-500 text-lg" href="/">
      <div className="flex items-center gap-4 p-6 md:ml-10">
        <img
          className="w-10 transition-all duration-300 ease-in-out transform hover:scale-110"
          src="/assets/images/logo-kydev.png"
          alt="Logo"
        />
        <span className="bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text text-3xl font-jersey">
          yDev
        </span>
      </div>
    </a>

    {/* Links */}
    <div className="flex flex-col md:flex-row items-center md:justify-end gap-4 md:gap-8 p-6 md:mr-10">
      {[
        { href: "/#stack", label: "Stack", hover: "text-teal-200", bar: "bg-teal-600" },
        { href: "/#projects", label: "Projects", hover: "text-purple-200", bar: "bg-purple-600" },
        { href: "/#education", label: "Education", hover: "text-cyan-500", bar: "bg-cyan-600" },
        { href: "/#contact", label: "Contact", hover: "text-pink-500", bar: "bg-pink-500" },
      ].map(({ href, label, hover, bar }) => (
        <a
          key={label}
          href={href}
          className="text-lg font-semibold text-white relative px-2 py-2 transition-all duration-300 ease-in-out group"
        >
          <span className={`group-hover:${hover}`}>{label}</span>
          <span className={`absolute bottom-0 left-0 w-0 h-1 ${bar} bg-opacity-30 transition-all duration-300 ease-in-out group-hover:w-full`}></span>
        </a>
      ))}
    </div>
  </div>
);

export { Navbar };
