import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="portfolio-section text-center mt-11">
      <h2 className="text-4xl md:text-5xl bg-black pt-11 bg-gradient-to-r from-amber-200 to-amber-500 text-black font-serif font-bold z-10 relative italic hover:not-italic">
        I am a Latest Project Section!
      </h2>
      <div className="projects-grid flex flex-wrap justify-center pt-11 bg-gradient-to-r from-amber-200 to-amber-500 text-black font-serif font-semibold z-10 relative italic hover:not-italic">
        <div className="project-card mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4">
          <Image
            src="/project.jpg" // Ensure image is in public folder
            alt="Project picture"
            width={800} // Width for larger screens
            height={450} // Height for larger screens
            className="w-full h-auto mx-auto" // Responsive image
          />
          <h3 className="text-xl md:text-2xl font-semibold mt-4">Personal Portfolio</h3>
          <p className="mt-2 text-sm md:text-base">
            My personal portfolio project serves as a platform to showcase my
            skills and projects. The main purpose of this project is to present
            my abilities and work to potential employers and clients. The
            portfolio includes a collection of my completed projects, each
            accompanied by a brief description, the technologies used, and links
            to the live projects. This allows me to professionally present my
            work, helping others understand my expertise.
          </p>
          <a
            href="https://portfolio-by-next-js-97gw.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
