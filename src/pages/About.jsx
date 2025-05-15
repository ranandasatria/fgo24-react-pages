import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <blockquote className="italic text-gray-600 text-lg border-l-4 border-gray-400 pl-4 mb-8">
          "There is no friend as loyal as a book." <br />
          <span className="block mt-2 text-right">— Ernest Hemingway</span>
        </blockquote>

        <div className="bg-white shadow-md rounded p-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            We believe books open minds, shape perspectives, and connect people across time and space. 
            Through this project, we aim to share that spirit by showcasing some of the most impactful titles 
            of today.
          </p>

          <h2 className="text-xl font-semibold mb-2">Why The New York Times?</h2>
          <p className="text-gray-700 mb-4">
            Since 1931, the <strong>New York Times Best Sellers</strong> list has been a trusted source for 
            discovering the most talked-about books in America. It's curated based on sales across a wide range of 
            bookstores and platforms, reflecting what readers are truly buying and enjoying.
          </p>

          <p className="text-gray-700 mb-4">
            The list is updated weekly and includes fiction, non-fiction, and children's books — making it 
            a reliable guide for anyone who wants to find their next great read.
          </p>

          <p className="text-gray-700">
            Whether you're looking for a gripping novel, a deep memoir, or simply curious what others are reading — 
            we've got you covered.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
