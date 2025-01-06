import { useEffect, useState } from "react";
import "./TradeContainer.css";
import Modal from "./Modal";
import Fly from "./assets/Fly.png";
import Ride from "./assets/Ride.png";
import Neon from "./assets/Neon.png";
import Mega from "./assets/Mega.png";

const TradeContainer = ({ value, setValue }) => {
  // Array representing the grid items
  const [gridItems, setGridItems] = useState([]); // Generates 10 items
  const [showModal, setModal] = useState(false);
  const [addVal, setAddVal] = useState(true);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/pets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("All Pets: ", data);
        setPets(data);
      });
  }, []);

  const renderContent = (currentID, previousID) => {
    if (gridItems[currentID]) {
      return (
        <>
          <img
            src={`../public/images/${gridItems[currentID].pet.pet_image}`}
            alt=""
            className="dragon-image"
          />
          <div className="pet-info">
            <>
              {gridItems[currentID].neon || gridItems[currentID].mega ? (
                <img
                  src={gridItems[currentID].neon ? Neon : Mega}
                  alt=""
                  className="pet-info-images"
                />
              ) : null}

              {gridItems[currentID].fly ? (
                <img src={Fly} alt="" className="pet-info-images" />
              ) : null}

              {gridItems[currentID].ride ? (
                <img src={Ride} alt="" className="pet-info-images" />
              ) : null}
            </>
          </div>
        </>
      );
    }
    if (gridItems[previousID]) {
      return <span>+</span>;
    }
    return null;
  };

  const handleClick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  useEffect(() => {
    if (gridItems.length > 0 && addVal) {
      // Prevents errors when gridItems is empty
      const lastItemValue = Number(gridItems[gridItems.length - 1].petVal);
      console.log("Last item value:", lastItemValue);

      setValue((prevValue) => prevValue + lastItemValue);
    }
  }, [gridItems]); // Removed setValue from dependencies

  const removePet = (id) => {
    setAddVal(false);
    console.log("remove petvalue", id.petVal);
    setValue((prevValue) => prevValue - id.petVal);
    setGridItems((prevItems) => prevItems.filter((item) => item !== id)); // Remove item by value
  };

  return (
    <>
      <div className="scrollable-container">
        <div className="container">
          <div
            className="add-icon grid-item"
            onClick={
              gridItems[0]
                ? () => removePet(gridItems[0])
                : (e) => handleClick(e)
            }
          >
            {gridItems[0] ? (
              <>
                <img
                  src={`../public/images/${gridItems[0].pet.pet_image}`}
                  alt=""
                  className="dragon-image"
                />
                <div className="pet-info">
                  <>
                    {gridItems[0].neon || gridItems[0].mega ? (
                      <img
                        src={gridItems[0].neon ? Neon : Mega}
                        alt=""
                        className="pet-info-images"
                      />
                    ) : null}

                    {gridItems[0].fly ? (
                      <img src={Fly} alt="" className="pet-info-images" />
                    ) : null}

                    {gridItems[0].ride ? (
                      <img src={Ride} alt="" className="pet-info-images" />
                    ) : null}
                  </>
                </div>
              </>
            ) : (
              <span>+</span>
            )}
          </div>
          <div
            className="add-icon grid-item"
            onClick={
              gridItems[1]
                ? () => removePet(gridItems[1])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(1, 0)}</div>
          </div>

          <div
            className="add-icon grid-item"
            onClick={
              gridItems[2]
                ? () => removePet(gridItems[2])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(2, 1)}</div>
          </div>

          <div
            className="add-icon grid-item"
            onClick={
              gridItems[3]
                ? () => removePet(gridItems[3])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(3, 2)}</div>
          </div>

          <div
            className="add-icon grid-item"
            onClick={
              gridItems[4]
                ? () => removePet(gridItems[4])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(4, 3)}</div>
          </div>

          <div
            className="add-icon grid-item"
            onClick={
              gridItems[5]
                ? () => removePet(gridItems[5])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(5, 4)}</div>
          </div>

          <div
            className="add-icon grid-item"
            onClick={
              gridItems[6]
                ? () => removePet(gridItems[6])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(6, 5)}</div>
          </div>

          <div
            className="add-icon grid-item"
            onClick={
              gridItems[7]
                ? () => removePet(gridItems[7])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(7, 6)}</div>
          </div>

          <div
            className="add-icon grid-item"
            onClick={
              gridItems[8]
                ? () => removePet(gridItems[8])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(8, 7)}</div>
          </div>

          <div
            className={`add-icon ${
              gridItems.length < 9 ? "display-none" : "grid-item"
            }`}
            onClick={
              gridItems[9]
                ? () => removePet(gridItems[9])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(9, 8)}</div>
          </div>

          <div
            className={`add-icon ${
              gridItems.length < 10 ? "display-none" : "grid-item"
            }`}
            onClick={
              gridItems[10]
                ? () => removePet(gridItems[10])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(10, 9)}</div>
          </div>

          <div
            className={`add-icon ${
              gridItems.length < 11 ? "display-none" : "grid-item"
            }`}
            onClick={
              gridItems[11]
                ? () => removePet(gridItems[11])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(11, 10)}</div>
          </div>

          <div
            className={`add-icon ${
              gridItems.length < 12 ? "display-none" : "grid-item"
            }`}
            onClick={
              gridItems[12]
                ? () => removePet(gridItems[12])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(12, 11)}</div>
          </div>

          <div
            className={`add-icon ${
              gridItems.length < 13 ? "display-none" : "grid-item"
            }`}
            onClick={
              gridItems[13]
                ? () => removePet(gridItems[13])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(13, 12)}</div>
          </div>

          <div
            className={`add-icon ${
              gridItems.length < 14 ? "display-none" : "grid-item"
            }`}
            onClick={
              gridItems[14]
                ? () => removePet(gridItems[14])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(14, 13)}</div>
          </div>

          <div
            className={`add-icon ${
              gridItems.length < 15 ? "display-none" : "grid-item"
            }`}
            onClick={
              gridItems[15]
                ? () => removePet(gridItems[15])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(15, 14)}</div>
          </div>

          <div
            className={`add-icon ${
              gridItems.length < 16 ? "display-none" : "grid-item"
            }`}
            onClick={
              gridItems[16]
                ? () => removePet(gridItems[16])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(16, 15)}</div>
          </div>

          <div
            className={`add-icon ${
              gridItems.length < 17 ? "display-none" : "grid-item"
            }`}
            onClick={
              gridItems[17]
                ? () => removePet(gridItems[17])
                : (e) => handleClick(e)
            }
          >
            <div>{renderContent(17, 16)}</div>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={() => setModal(false)}
        setGridItems={setGridItems}
        setAddVal={setAddVal}
        pets={pets}
        setPets={setPets}
      />
    </>
  );
};

export default TradeContainer;
