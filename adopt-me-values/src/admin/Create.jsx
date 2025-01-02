import { useState } from "react";
import "./Create.css";

const Create = () => {
  const [formData, setFormData] = useState({
    pet_name: "",
    pet_image: "",
    normal_no_potion: "",
    normal_fly: "",
    normal_ride: "",
    normal_fly_ride: "",
    neon_no_potion: "",
    neon_fly: "",
    neon_ride: "",
    neon_fly_ride: "",
    mega_no_potion: "",
    mega_fly: "",
    mega_ride: "",
    mega_fly_ride: "",
  });

  const handleChange = (e) => {
    console.log("changing", formData);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Request failed:", error.data);
    }
  };

  return (
    <form className="main-div" onSubmit={handleSubmit}>
      <label>
        Pet Name:{" "}
        <input
          name="pet_name"
          value={formData.pet_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Pet Image:{" "}
        <input
          type="file"
          name="pet_image"
          value={formData.pet_image}
          onChange={handleChange}
        />
      </label>
      <hr />
      <label>
        No Potion Normal:{" "}
        <input
          name="normal_no_potion"
          value={formData.normal_no_potion}
          onChange={handleChange}
        />
      </label>
      <label>
        Normal Fly:{" "}
        <input
          name="normal_fly"
          value={formData.normal_fly}
          onChange={handleChange}
        />
      </label>
      <label>
        Normal Ride:{" "}
        <input
          name="normal_ride"
          value={formData.normal_ride}
          onChange={handleChange}
        />
      </label>
      <label>
        Normal Fly Ride:{" "}
        <input
          name="normal_fly_ride"
          value={formData.normal_fly_ride}
          onChange={handleChange}
        />
      </label>
      <label>
        No Potion Neon:{" "}
        <input
          name="neon_no_potion"
          value={formData.neon_no_potion}
          onChange={handleChange}
        />
      </label>
      <label>
        Neon Fly:{" "}
        <input
          name="neon_fly"
          value={formData.neon_fly}
          onChange={handleChange}
        />
      </label>
      <label>
        Neon Ride:{" "}
        <input
          name="neon_ride"
          value={formData.neon_ride}
          onChange={handleChange}
        />
      </label>
      <label>
        Neon Fly Ride:{" "}
        <input
          name="neon_fly_ride"
          value={formData.neon_fly_ride}
          onChange={handleChange}
        />
      </label>
      <label>
        No Potion Mega:{" "}
        <input
          name="mega_no_potion"
          value={formData.mega_no_potion}
          onChange={handleChange}
        />
      </label>
      <label>
        Mega Fly:{" "}
        <input
          name="mega_fly"
          value={formData.mega_fly}
          onChange={handleChange}
        />
      </label>
      <label>
        Mega Ride:{" "}
        <input
          name="mega_ride"
          value={formData.mega_ride}
          onChange={handleChange}
        />
      </label>
      <label>
        Mega Fly Ride:{" "}
        <input
          name="mega_fly_ride"
          value={formData.mega_fly_ride}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Create;
