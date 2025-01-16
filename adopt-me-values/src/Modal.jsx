import { useEffect, useState } from "react";
import "./Modal.css";
import dragon from "./assets/Dragon_Pet.webp";

const Modal = ({
  show,
  onClose,
  gridItems,
  setGridItems,
  setAddVal,
  pets,
  setPets,
}) => {
  if (!show) return null;

  const [fly, setFly] = useState(false);
  const [ride, setRide] = useState(false);
  const [neon, setNeon] = useState(false);
  const [mega, setMega] = useState(false);

  const search = (e) => {
    if (e.target.value) {
      fetch(`http://127.0.0.1:8000/api/pets/search/${e.target.value}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("All Pets with: ", e.target.value, data);
          setPets(data);
        });
    } else {
      fetch("http://127.0.0.1:8000/api/pets")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("All Pets: ", data);
          setPets(data);
        });
    }
  };

  const handleClick = (pet) => {
    console.log(gridItems.length);
    if (gridItems.length == 17) {
      console.log("inside close");
      onClose();
    }

    setAddVal(true);
    let value;

    if (!pet.values || pet.values.length === 0) {
      console.error("Pet values are undefined or empty:", pet);
      return; // Avoid further execution if values are invalid
    }

    const petValues = pet.values[0]; // Safely access the first item

    if (mega && !fly && !ride) {
      value = petValues.mega_no_potion;
    } else if (mega && fly && !ride) {
      value = petValues.mega_fly;
    } else if (mega && !fly && ride) {
      value = petValues.mega_ride;
    } else if (mega && fly && ride) {
      value = petValues.mega_fly_ride;
    } else if (neon && !fly && !ride) {
      value = petValues.neon_no_potion;
    } else if (neon && fly && !ride) {
      value = petValues.neon_fly;
    } else if (neon && !fly && ride) {
      value = petValues.neon_ride;
    } else if (neon && fly && ride) {
      value = petValues.neon_fly_ride;
    } else if (!neon && !mega && !fly && !ride) {
      value = petValues.normal_no_potion;
    } else if (!neon && !mega && fly && !ride) {
      value = petValues.normal_fly;
    } else if (!neon && !mega && !fly && ride) {
      value = petValues.normal_ride;
    } else if (!neon && !mega && fly && ride) {
      value = petValues.normal_fly_ride;
    }
    console.log(value);

    setGridItems((prevItems) => [
      ...prevItems,
      { pet, fly: fly, ride: ride, neon: neon, mega: mega, petVal: value },
    ]);
  };

  const handleFlyButtonClick = () => {
    setFly(!fly);
  };

  const handleRideButtonClick = () => {
    setRide(!ride);
  };

  const handleNormalButtonClick = () => {
    setNeon(false);
    setMega(false);
  };

  const handleNeonButtonClick = () => {
    setNeon(true);
    setMega(false);
  };

  const handleMegaButtonClick = () => {
    setNeon(false);
    setMega(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <input
          type="text"
          onChange={(e) => search(e)}
          className="modal-search"
        />

        <div className="container-modal">
          {pets && pets.length > 0 ? (
            pets.map((pet) => (
              <div
                className="modal-grid-items"
                key={pet.id}
                onClick={() => handleClick(pet)}
              >
                <img
                  src={`../public/images/${pet.pet_image}`}
                  alt=""
                  className="modal-images"
                />
              </div>
            ))
          ) : (
            <p>No pets found.</p>
          )}
        </div>

        <div className="buttons-section">
          <button
            onClick={() => handleFlyButtonClick()}
            className={
              fly ? "fly-button-selected" : "normal-button unselected-color"
            }
          >
            Fly
          </button>
          <button
            onClick={() => handleRideButtonClick()}
            className={
              ride ? "ride-button-selected" : "normal-button unselected-color"
            }
          >
            Ride
          </button>
          <button
            onClick={() => handleNormalButtonClick()}
            className={
              neon == false && mega == false
                ? "normal-button-selected"
                : "normal-button unselected-color"
            }
          >
            Normal
          </button>
          <button
            onClick={() => handleNeonButtonClick()}
            className={
              neon ? "neon-button-selected" : "normal-button unselected-color"
            }
          >
            Neon
          </button>
          <button
            onClick={() => handleMegaButtonClick()}
            className={
              mega ? "mega-button-selected" : "normal-button unselected-color"
            }
          >
            Mega
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
