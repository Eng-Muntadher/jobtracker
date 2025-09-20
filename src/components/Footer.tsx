import { ExternalLink, Github, Mail } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="content-info" className="container mx-auto">
      <div className="container grid items-center max-w-6xl grid-cols-3 mx-auto max-md:grid-cols-1">
        <div className="max-xl:ml-4 max-md:ml-0">
          <h3 className="flex items-center gap-2 mb-4 text-(--text-color) text-lg max-md:justify-center">
            <span aria-hidden="true">
              <Mail size={20} />
            </span>
            Contact Me
          </h3>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--text-color-secondary) hover:text-(--text-color) block max-md:mb-8 max-md:text-center"
          >
            email@example.com
          </a>
        </div>

        <div>
          <h3 className="flex items-center gap-2 mb-4 text-(--text-color) text-lg justify-center">
            <span aria-hidden="true">
              <ExternalLink size={20} />
            </span>
            See More Projects
          </h3>
          <a
            className="text-(--text-color-secondary) flex items-center gap-1 text-center justify-center hover:text-(--text-color) max-md:mb-8"
            href=""
            target="_blank"
            aria-label="View portfolio (opens in new window)"
          >
            My Portfolio
            <span aria-hidden="true">
              <ExternalLink size={16} />
            </span>
          </a>
        </div>

        <div className="max-xl:mr-4 max-md:mr-0">
          <h3 className="flex items-center gap-2 mb-4 text-(--text-color) text-lg justify-end max-md:justify-center">
            <span aria-hidden="true">
              <Github size={20} />
            </span>
            View Code
          </h3>
          <a
            className="text-(--text-color-secondary) flex items-center gap-1 justify-end hover:text-(--text-color) max-md:justify-center"
            href=""
            target="_blank"
            aria-label="View source code on GitHub (opens in new window)"
          >
            GitHub
            <span aria-hidden="true">
              <Github size={16} />
            </span>
          </a>
        </div>
      </div>

      <div className="mt-8 text-sm text-center text-(--text-color-secondary)">
        <p className="mb-3">
          Project built with React, TypeScript, Tailwind CSS, and more
        </p>
        <p className="mb-16">
          &copy; {year} Muntadher Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
