import { useEffect, useState } from "react";
import "./Modal.css";
import dragon from "./assets/Dragon_Pet.webp";

const Modal = ({ show, onClose, setGridItems }) => {
  if (!show) return null;

  const [pets, setPets] = useState([]);
  const [fly, setFly] = useState(false);
  const [ride, setRide] = useState(false);
  const [neon, setNeon] = useState(false);
  const [mega, setMega] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("All Pets: ", data[0].pet_image);
        setPets(data);
      });
  }, []);

  const handleClick = (pet) => {
    setGridItems((prevItems) => [
      ...prevItems,
      { pet, fly: fly, ride: ride, neon: neon, mega: mega },
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
        <input type="text" />
        <div></div>
        <div className="container-modal">
          {pets.map((pet) => (
            <div
              className="grid-item"
              key={pet.id}
              onClick={() => handleClick(pet)}
            >
              <img
                src={`../public/images/${pet.pet_image}`}
                alt=""
                className="dragon-image"
              />
            </div>
          ))}
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
