import { useState } from "react";
import "./Create.css";
import FlyImage from "../assets/Fly.png";
import RideImage from "../assets/Ride.png";
import NeonImage from "../assets/Neon.png";
import MegaImage from "../assets/Mega.png";

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
    console.log(e);
    if (e.target.files?.length > 0) {
      const src = URL.createObjectURL(event.target.files[0]);
      const preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
      upload.style.display = "block";
    }
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
    <div className="main-page-create">
      <header className="create-header">
        <div className="page-title">Create Pet Value</div>
        <div className="btn-container">
          <button className="back-button">Go Back</button>
        </div>
      </header>
      <div className="create-page-content">
        <form className="separate-up-down" onSubmit={handleSubmit}>
          <div className="main-div">
            <label>
              Select Image <br />
              <div className="img-container">
                <img
                  src=""
                  alt=""
                  id="file-ip-1-preview"
                  className="preview-image"
                />
              </div>
            </label>
            <input
              type="file"
              name="pet_image"
              hidden=""
              id="upload"
              accept="image/*"
              onChange={handleChange}
            />
            <label>
              <input
                name="pet_name"
                value={formData.pet_name}
                onChange={(e) => handleChange(e)}
                placeholder="Pet Name"
              />
            </label>
          </div>
          <div className="pet-attributes">
            <label className="specific-attribute-container">
              <div className="specific-attributes">No Potion Normal: </div>
              <input
                name="normal_no_potion"
                value={formData.normal_no_potion}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={FlyImage} alt="" className="attribute-image" />
                </div>
              </div>

              <input
                name="normal_fly"
                value={formData.normal_fly}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={RideImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="normal_ride"
                value={formData.normal_ride}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={FlyImage} alt="" className="attribute-image" />
                  <img src={RideImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="normal_fly_ride"
                value={formData.normal_fly_ride}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={NeonImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="neon_no_potion"
                value={formData.neon_no_potion}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={NeonImage} alt="" className="attribute-image" />
                  <img src={FlyImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="neon_fly"
                value={formData.neon_fly}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={NeonImage} alt="" className="attribute-image" />
                  <img src={RideImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="neon_ride"
                value={formData.neon_ride}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={NeonImage} alt="" className="attribute-image" />
                  <img src={FlyImage} alt="" className="attribute-image" />
                  <img src={RideImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="neon_fly_ride"
                value={formData.neon_fly_ride}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={MegaImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="mega_no_potion"
                value={formData.mega_no_potion}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={MegaImage} alt="" className="attribute-image" />
                  <img src={FlyImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="mega_fly"
                value={formData.mega_fly}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={MegaImage} alt="" className="attribute-image" />
                  <img src={RideImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="mega_ride"
                value={formData.mega_ride}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
            <label className="specific-attribute-container">
              <div className="specific-attributes">
                <div className="attribute-img-container">
                  <img src={MegaImage} alt="" className="attribute-image" />
                  <img src={FlyImage} alt="" className="attribute-image" />
                  <img src={RideImage} alt="" className="attribute-image" />
                </div>
              </div>
              <input
                name="mega_fly_ride"
                value={formData.mega_fly_ride}
                onChange={handleChange}
                className="attribute-text-box"
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="right-content">These are the contents</div>
      </div>
    </div>
  );
};

export default Create;
