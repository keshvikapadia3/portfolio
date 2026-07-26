import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <section className="card">

      <h2>Contact Us</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Enter Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setShowHelp(!showHelp)}>
        {showHelp ? "Hide Help" : "Show Help"}
      </button>

      {showHelp && (
        <p>Please fill in all the fields before submitting.</p>
      )}

      <hr />

      <h3>Live Preview</h3>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>

    </section>
  );
}

export default Contact;