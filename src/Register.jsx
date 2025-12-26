import { useState } from "react";

export default function Register() {
  const genders = ["Male", "Female", "Others"];
  const hobbiesList = ["Music", "Movies", "Plastic Models"];
  const roles = ["General Staff", "Developer", "System Analyst"];

  const [form, setForm] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    role: ""
  });

  const [hobbies, setHobbies] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onHobbiesToggle(e) {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setHobbies(prev => [...prev, value]);
    } else {
      setHobbies(prev => prev.filter(h => h !== value));
    }
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <input name="username" placeholder="Username" onChange={handleChange} /><br />
      <input name="firstname" placeholder="Firstname" onChange={handleChange} /><br />
      <input name="lastname" placeholder="Lastname" onChange={handleChange} /><br />

      <p>Gender</p>
      {genders.map(g => (
        <label key={g}>
          <input
            type="radio"
            name="gender"
            value={g}
            onChange={handleChange}
          /> {g}
        </label>
      ))}

      <p>Hobbies</p>
      {hobbiesList.map(h => (
        <label key={h}>
          <input
            type="checkbox"
            value={h}
            onChange={onHobbiesToggle}
          /> {h}
        </label>
      ))}

      <p>Role</p>
      <select name="role" onChange={handleChange}>
        <option value="">Select role</option>
        {roles.map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <hr />

      <h3>Live Preview</h3>
      <p>Username: {form.username}</p>
      <p>Firstname: {form.firstname}</p>
      <p>Lastname: {form.lastname}</p>
      <p>Gender: {form.gender}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Role: {form.role}</p>
    </div>
  );
}
