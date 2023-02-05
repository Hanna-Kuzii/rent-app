import { useState } from "react";
import "./Form.css";

const Form = ({ addApartment }) => {
  const [nameValue, setName] = useState();
  const [roomsValue, setRooms] = useState();
  const [priceValue, setPrice] = useState();
  const [descriptionValue, setDescription] = useState();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeRooms = (event) => {
    setRooms(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    setName("");
    setRooms();
    setPrice();
    setDescription("");

    addApartment({
      id: Date.now() + Math.random(),
      rooms: roomsValue,
      name: nameValue,
      price: priceValue,
      description: descriptionValue || "",
    });
    event.preventDefault();
    document.forms[0].reset();
  };

  return (
    <>
      <div className="Form">
        <h2 className="Form__header header">You can add new apartment</h2>
        <form className="newRoom" onSubmit={handleSubmit}>
          <div className="newRoom__form">
            <label for="name" className="newRoom__form-element">
              Name of apartment:
              <input
                type="text"
                name="name"
                placeholder="Enter room name"
                className="newRoom__form-input"
                maxLength="99"
                required
                onChange={handleChangeName}
              />
            </label>
            <div className="newRoom__form-elements">
              <label for="roomDays" className="newRoom__form-element">
                Days:
                <input
                  type="number"
                  name="roomDays"
                  placeholder="How many days?"
                  className="newRoom__form-input"
                  min="1"
                  max="365"
                  required
                />
              </label>
              <label for="rooms" className="newRoom__form-element">
                Rooms:
                <input
                  type="number"
                  name="rooms"
                  placeholder="How many rooms?"
                  className="newRoom__form-input"
                  min="1"
                  max="5"
                  required
                  onChange={handleChangeRooms}
                />
              </label>
              <label for="price" className="newRoom__form-element">
                Rent Price:
                <div className="price-input">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="What is the cost?"
                    pattern="[0-9]{1,9}"
                    size="10"
                    className="newRoom__form-input"
                    required
                    onChange={handleChangePrice}
                  />
                  <p>$</p>
                </div>
              </label>
            </div>
            <label for="description" className="newRoom__element">
              Description:
              <input
                type="text"
                name="description"
                placeholder="Enter about the apartments"
                className="newRoom__form-input"
                maxLength="999"
                onChange={handleChangeDescription}
              />
            </label>
          </div>

          <button
            type="submit"
            value="Add apartments"
            className="newRoom__button"
          >
            Add apartments
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
