import "./App.css";
import CurrentRent from "./components/CurrentRent/CurrentRent";
import Form from "./components/Form/Form";
import RoomsList from "./components/RoomsList/RoomsList";
import apartmentsList from "./api/apartments";
import { useState } from "react";

function App() {
  let [apartments, changeApartments] = useState(
    JSON.parse(localStorage?.getItem("apartments")) || apartmentsList
  );
  let [choosedApartment, chooseApartment] = useState(
    JSON.parse(localStorage?.getItem("choosedApartment")) || apartments[-1]
  );
  let [sortType, setSortType] = useState(JSON.parse(localStorage?.getItem("sortType")) || "");
  let [filterNumber, setFilterNumber] = useState(JSON.parse(localStorage?.getItem("filterNumber")) || 0);
  let [apartmentsShow, setShowApartments] = useState(
    JSON.parse(localStorage?.getItem("apartmentsShow")) || apartments
  );

  const onChooseApartment = (key) => {
    if (key >= 0) {
      apartments.forEach((apartment) => {
        if (apartment.id === key) {
          chooseApartment((choosedApartment = apartment));
          localStorage.setItem(
            "choosedApartment",
            JSON.stringify(choosedApartment)
          );
        }
      });
    } else {
      chooseApartment((choosedApartment = apartments[-1]));
      localStorage.removeItem("choosedApartment");
    }
  };

  const addApartment = (apartment) => {
    changeApartments((apartments = [...apartments, apartment]));
    setShowApartments((apartmentsShow = [...apartments]));
    localStorage.setItem("apartments", JSON.stringify(apartments));
    localStorage.setItem("apartmentsShow", JSON.stringify(apartmentsShow));
  };

  const deleteApartment = (number) => {
    const apartmentsNew = [];

    apartments.forEach((apartment) => {
      if (apartment.id !== number) {
        apartmentsNew.push(apartment);
      }
    });

    changeApartments((apartments = [...apartmentsNew]));
    setShowApartments((apartmentsShow = [...apartments]));

    if (!apartmentsNew.includes(choosedApartment)) {
      chooseApartment((choosedApartment = apartments[-1]));
    }

    localStorage.setItem("apartments", JSON.stringify(apartments));
    localStorage.setItem("apartmentsShow", JSON.stringify(apartmentsShow));
  };

  const sort = (sortType) => {
    const apartmentsSort = [...apartmentsShow];

    switch (sortType) {
      case "lowestPrice":
        apartmentsSort.sort((x, y) => x.price - y.price);
        break;
      case "highestPrice":
        apartmentsSort.sort((x, y) => y.price - x.price);
        break;
      case "smallerRooms":
        apartmentsSort.sort((x, y) => x.rooms - y.rooms);
        break;
      case "largerRooms":
        apartmentsSort.sort((x, y) => y.rooms - x.rooms);
        break;
      case "lowestAlphabet":
        apartmentsSort.sort((x, y) => x.name.localeCompare(y.name));
        break;
      case "highestAlphabet":
        apartmentsSort.sort((x, y) => y.name.localeCompare(x.name));
        break;
    }
    setShowApartments(apartmentsShow = [...apartmentsSort]);
    localStorage.setItem("sortType", JSON.stringify(sortType));
    localStorage.setItem("apartmentsShow", JSON.stringify(apartmentsShow));
  };

  const filter = (filterNumber) => {
    let apartmentsFilter = [];

    if (filterNumber == 0) {
      setShowApartments((apartmentsShow = [...apartments]));
    } else {
      apartmentsFilter = apartments.filter(
        (apartment) => apartment.rooms == filterNumber
      );
      setShowApartments((apartmentsShow = [...apartmentsFilter]));
    }
    localStorage.setItem("filterNumber", JSON.stringify(filterNumber));
    localStorage.setItem("apartmentsShow", JSON.stringify(apartmentsShow));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>What room you want to rent?</h1>
      </header>

      <Form addApartment={addApartment} />
      <CurrentRent
        choosedApartment={choosedApartment}
        chooseApartment={onChooseApartment}
      />
      <RoomsList
        apartments={apartmentsShow}
        chooseApartment={onChooseApartment}
        choosedApartment={choosedApartment}
        deleteApartment={deleteApartment}
        sort={sort}
        setSortType={setSortType}
        sortType={sortType}
        filterNumber={filterNumber}
        setFilterNumber={setFilterNumber}
        filter={filter}
      />
    </div>
  );
}

export default App;
