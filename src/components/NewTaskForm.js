import React, { useState } from "react";

function NewTaskForm({ categories = [], onTaskFormSubmit }) {
  const defaultCategory = categories.length > 0 ? categories[0] : "";
  const [formData, setFormData] = useState({
    text: "",
    category: defaultCategory // Set default category
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onTaskFormSubmit === 'function') {
      onTaskFormSubmit(formData);
      setFormData({
        text: "",
        category: defaultCategory
      });
    }
  };

  // Event listener for form submission
  document.addEventListener('submit', handleSubmit);

  // Event listener for input changes
  document.addEventListener('change', handleInputChange);

  return (
    <form className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
