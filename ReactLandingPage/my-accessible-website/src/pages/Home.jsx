import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto y botones */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Actions for Accessibility in Design</h1>
          <p className="text-lg text-gray-600 mb-8">The fastest way to build and deploy websites with reusable components.</p>
          <div className="flex justify-center md:justify-start">
            <Link to="/get-started" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-200 transform hover:scale-105 mr-4">
              GET STARTED
            </Link>
            <Link to="/live-demo" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-md transition duration-200 transform hover:scale-105">
              Get live demo
            </Link>
          </div>
          <div className="flex justify-center md:justify-start mt-4">
            <p className="text-gray-500 text-sm">* No credit card required</p>
            <p className="text-gray-500 text-sm ml-4">* No software to install</p>
          </div>
        </div>
        
        {/* Sección de testimonios */}
        <div className="text-center md:text-left">
          {/* Testimonios */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <img src="https://via.placeholder.com/100" alt="Edwin Mack" className="w-12 h-12 rounded-full shadow-lg mr-4" />
            <div>
              <p className="font-bold text-gray-800">Edwin Mack</p>
              <p className="text-gray-500">UX/UI Designer</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <img src="https://via.placeholder.com/100" alt="Heidi Fisher" className="w-12 h-12 rounded-full shadow-lg mr-4" />
            <div>
              <p className="font-bold text-gray-800">Heidi Fisher</p>
              <p className="text-gray-500">Creative Director</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-4">
            <p className="text-gray-500">Sending...</p>
            <p className="text-gray-500 ml-4 font-semibold">66%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
