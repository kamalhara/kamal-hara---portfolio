export default function Services() {
  return (
    <section
      id="services"
      className="py-20 text-(--primary) bg-(--background) font-(--font-poppins)"
    >
      {/* Section Heading */}
      <div className="max-w-6xl -mx-4 md:mx-auto text-4xl flex flex-col md:flex-row justify-between items-center mb-12 px-4 md:px-0">
        <div className="flex items-center gap-4 w-full font-semibold">
          <h2 className="text-3xl font-mono text-white relative inline-block whitespace-nowrap mx-5">
            <span className="text-(--purple)">#</span>services
          </h2>
          <div className="flex-1 h-[2px] bg-(--purple) mr-5"></div>
        </div>
      </div>


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">

        <div className="border border-(--border) p-6 hover:border-(--purple) transition-colors font-mono">
          <h3 className="text-xl font-semibold text-(--white) mb-4">
            Web Development
          </h3>
          <p className="text-(--primary) text-base leading-relaxed ">
            Building responsive web applications using React.js, Next.js, and modern frontend tools. Focus on performance, accessibility, and user experience.
          </p>
          <ul className="text-(--primary) text-sm mt-4 space-y-1">
            <li>• React.js</li>
            <li>• Next.js</li>
            <li>• Redux</li>
            <li>• React-Hook-Form</li>
          </ul>
        </div>

        {/* Mobile App Development */}
        <div className="border border-(--border) p-6 hover:border-(--purple) transition-colors font-mono">
          <h3 className="text-xl font-semibold text-(--white) mb-4">
            Mobile App Development
          </h3>
          <p className="text-(--primary) text-base leading-relaxed">
            Developing cross-platform mobile applications with React Native and Expo. Integrating Firebase, Supabase, and push notifications.
          </p>
          <ul className="text-(--primary) text-sm mt-4 space-y-1">
            <li>• React Native</li>
            <li>• Expo</li>
            <li>• Firebase</li>
            <li>• Supabase</li>
            <li>• FCM</li>
          </ul>
        </div>

        {/* Backend/API Development */}
        <div className="border border-(--border) p-6 hover:border-(--purple) transition-colors font-mono">
          <h3 className="text-xl font-semibold text-(--white) mb-4">
            Backend/API Development
          </h3>
          <p className="text-(--primary) text-base leading-relaxed">
            Creating robust backend systems with Node.js, Express.js, databases, and authentication. Managing APIs, cloud services, and real-time communication.
          </p>
          <ul className="text-(--primary) text-sm mt-4 space-y-1">
            <li>• Node.js</li>
            <li>• Express.js</li>
            <li>• REST APIs</li>
            <li>• Socket.io</li>
            <li>• MySQL</li>
            <li>• MongoDB</li>
            <li>• AWS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
