import { useState, useRef } from "react";

export default function FormSubmit() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    role: "",
    others: "",
    hobbies: []
  });

  const hobbyRef = useRef([]);

  const hobbies = ["Music", "Movies", "Plastic Models"];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedHobbies = hobbyRef.current
      .filter(el => el && el.checked)
      .map(el => el.value);

    setData({ ...data, hobbies: selectedHobbies });
    setSubmitted(true);
  };

  return (
    <>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>

          <label>Username</label><br />
          <input name="username" onChange={handleChange} /><br /><br />

          <label>Firstname</label><br />
          <input name="firstname" onChange={handleChange} /><br /><br />

          <label>Lastname</label><br />
          <input name="lastname" onChange={handleChange} /><br /><br />

          <label>Gender</label><br />
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          /> Female
          <br /><br />

          <label>Hobbies</label><br />
          {hobbies.map((h, i) => (
            <div key={i}>
              <input
                type="checkbox"
                value={h}
                ref={el => hobbyRef.current[i] = el}
              /> {h}
            </div>
          ))}
          <br />

          <label>Role</label><br />
          <select name="role" onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="General Staff">General Staff</option>
            <option value="Manager">Manager</option>
          </select>
          <br /><br />

          <label>Others</label><br />
          <textarea name="others" onChange={handleChange} />
          <br /><br />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Submitted Data</h2>
          <p><b>Username:</b> {data.username}</p>
          <p><b>Firstname:</b> {data.firstname}</p>
          <p><b>Lastname:</b> {data.lastname}</p>
          <p><b>Gender:</b> {data.gender}</p>
          <p><b>Hobbies:</b> {data.hobbies.join(", ")}</p>
          <p><b>Role:</b> {data.role}</p>
          <p><b>Others:</b> {data.others}</p>

          <button onClick={() => setSubmitted(false)}>Back</button>
        </div>
      )}
    </>
  );
}
