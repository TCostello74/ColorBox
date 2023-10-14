// NewBoxForm.js
import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    width: "",
    height: "",
    color: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    addBox({ ...formData, id: Date.now() });
    setFormData({ width: "", height: "", color: "" });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="width"
        value={formData.width}
        onChange={handleChange}
        placeholder="Width"
      />
      <input
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="Height"
      />
      <input
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
