import { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let msg = '';

    if (value === '') {
      msg = field + ' is required';
    } else if (field === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      msg = 'Invalid email format';
    } else if (field === 'password' && value.length < 6) {
      msg = 'Password must be at least 6 characters';
    } else if (field === 'name' && value.length < 3) {
      msg = 'Name must be at least 3 characters';
    }

    setErrors({ ...errors, [field]: msg });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate(name, value);            // validates on EVERY keystroke
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noErrors = Object.values(errors).every(v => v === '');
    const allFilled = Object.values(form).every(v => v !== '');

    alert(noErrors && allFilled ? 'Form submitted successfully' : 'Fix the errors first');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>

      <input name="name" value={form.name} onChange={handleChange}
        placeholder="Name" />
      <p style={{ color: 'red' }}>{errors.name}</p>

      <input name="email" value={form.email} onChange={handleChange}
        placeholder="Email" />
      <p style={{ color: 'red' }}>{errors.email}</p>

      <input name="password" type="password" value={form.password}
        onChange={handleChange} placeholder="Password" />
      <p style={{ color: 'red' }}>{errors.password}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
