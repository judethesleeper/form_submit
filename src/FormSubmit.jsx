import { useState, useRef } from "react";

export default function FormSubmit() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ name: "", email: "", hobbies: [] });
  const hobbyRef = useRef([]);

  const hobbies = ["Reading", "Gaming", "Music"];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = hobbyRef.current
      .filter(el => el.checked)
      .map(el => el.value);

    setData({ ...data, hobbies: selected });
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />

          {hobbies.map((h, i) => (
            <div key={i}>
              <input
                type="checkbox"
                value={h}
                ref={el => hobbyRef.current[i] = el}
              /> {h}
            </div>
          ))}

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Hobbies: {data.hobbies.join(", ")}</p>
          <button onClick={() => setSubmitted(false)}>Back</button>
        </div>
      )}
    </>
  );
}
