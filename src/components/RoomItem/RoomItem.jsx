import "./RoomItem.css";

const RoomItem = ({ apartment, chooseApartment, deleteApartment }) => {
  return (
    <>
      <div className="RoomItem" key={apartment.id}>
        <div className="RoomItem__description">
          <div className="RoomItem__description__name">{`${apartment.name}`}</div>
          <p> / </p>
          <div className="RoomItem__description__rooms">{`${apartment.rooms} ${
            apartment.rooms > 1 ? "rooms" : "room"
          }`}</div>
          <p> / </p>
          <div className="RoomItem__description__price">{`${apartment.price}$`}</div>
          <p>{`${apartment.description ? " / " : ""}`}</p>
          <div className="RoomItem__description__description">{`${apartment.description}`}</div>
        </div>
        <div className="RoomItem__buttons">
          <button
            className="RoomItem__buttons-rent button-list"
            onClick={() => {
              chooseApartment(apartment.id);
            }}
          >
            Rent
          </button>
          <button
            className="RoomItem__buttons-delete button-list"
            onClick={() => {
              deleteApartment(apartment.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomItem;
