import Navbar from '../components/Navbar'

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="border p-2 rounded" />
          <textarea placeholder="Your Message" className="border p-2 rounded h-32" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactUs