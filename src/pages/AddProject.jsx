import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProject = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem("projectData")) || [];

    const newEntry = {
      id: Date.now(),
      title,
      details,
      category,
      image,
    };

    const updateData = [...existingData, newEntry];

    localStorage.setItem("projectData", JSON.stringify(updateData));
    toast.success("Data submitted successfully!", {
      autoClose: 1000,
    });
    navigate("/projects");
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Add Project</h1>
        <p>You can add project details from here.</p>
      </div>
      <div className="w-1/2 mt-3">
        <form action="#" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter project title"
              className="border-2 border-gray-300 p-2 rounded-md"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="details">Details</label>
            <textarea
              rows={5}
              type="text"
              name="details"
              placeholder="Enter project details"
              className="border-2 border-gray-300 p-2 rounded-md"
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="category">Details</label>
            <select
              name="category"
              className="border-2 border-gray-300 p-2 rounded-md"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select Category...</option>
              <option value="category_one">Category One</option>
              <option value="category_two">Category Two</option>
              <option value="category_three">Category Three</option>
            </select>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="banner">Banner</label>
            <input
              type="file"
              name="banner"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-green-500 px-4 py-2 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
