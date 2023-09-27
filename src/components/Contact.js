import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
  return (
      <div className="flex flex-col justify-center items-center mt-24">
      <h1 className="font-bold text-4xl p-2">Contact us</h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                <input className="p-2 my-2 border-2 w-96 border-red-600 rounded-md" type="text" placeholder="Name" required/>
                    <input className="p-2 my-2 border-2 w-96 border-red-600 rounded-md"  type="email" placeholder="Email" required/>
                    <textarea className="p-2 my-2 border-2 w-96 border-red-600 rounded-md"  placeholder="Type your Message here..." required></textarea>
                    <button className="p-2 my-2 border-2 w-96 border-red-600 rounded-md bg-orange-600"  type="submit">Submit</button>
                    {message && <span className="mt-8">Thanks for contacting, We will get back to you soon.</span>}
                </form>
      </div>
  );
};

export default Contact;