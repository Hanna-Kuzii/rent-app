import RoomItem from "../RoomItem/RoomItem";
import "./RoomsList.css";

const RoomsList = ({
  apartments,
  chooseApartment,
  choosedApartment,
  deleteApartment,
  sort,
  setSortType,
  sortType,
  filterNumber,
  setFilterNumber,
  filter,
}) => {
  return (
    <>
      <div className="RoomsList">
        <div className="RoomsList__header">
          <h2 className="header">Avalaible apartments ({apartments.length})</h2>
          <div className="RoomsList__header__add">
            <div className="RoomsList__header__add-filter">
              <label for="filter" className="RoomsList__header__add-title">
                Filter by rooms (1-5):
              </label>
              <input
                type="number"
                id="filter"
                name="filter"
                min="0"
                max="5"
                value={JSON.parse(localStorage?.getItem("filterNumber")) || ''}
                onChange={(event) => {
                  setFilterNumber((filterNumber = event.target.value));
                  filter(filterNumber);
                }}
              ></input>
            </div>
            <div className="RoomsList__header__add-sort">
              <label for="sort" className="RoomsList__header__add-title">
                Sort:
              </label>
              <select
                name="sort"
                id="sort"
                value={JSON.parse(localStorage?.getItem("sortType")) || "default"}
                className="RoomsList__header__add-sort-select"
                onChange={(event) => {
                  setSortType((sortType = event.target.value));
                  sort(sortType);
                }}
              >
                <option value="default" selected="selected" hidden disabled>
                  by default
                </option>
                <option value="lowestAlphabet">Alphabet - A to Z</option>
                <option value="highestAlphabet">Alphabet - Z to A</option>
                <option value="lowestPrice">Price - lowest to highest</option>
                <option value="highestPrice">Price - highest to lowest</option>
                <option value="smallerRooms">Rooms - smaller to larger</option>
                <option value="largerRooms">Rooms - larger to smaller</option>
              </select>
            </div>
          </div>
        </div>

        {apartments.map((apartment) => (
            <RoomItem
              key={apartment.id}
              apartment={apartment}
              chooseApartment={chooseApartment}
              deleteApartment={deleteApartment}
            />
        ))}
      </div>
    </>
  );
};

export default RoomsList;
