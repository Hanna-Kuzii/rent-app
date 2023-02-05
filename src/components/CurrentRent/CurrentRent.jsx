import "./CurrentRent.css"

const CurrentRent = ({choosedApartment, chooseApartment}) => {
	return (
		<>
			<div className="CurrentRent">
				<h2 className="header">Choosed apartments</h2>
				{choosedApartment ?
					(
						<div className="choosedRoom">
						<div className="choosedRoom__description">
								<div className="choosedRoom__description__name">{`${choosedApartment.name}`}</div>/
								<div className="choosedRoom__description__rooms">{`${choosedApartment.rooms} ${choosedApartment.rooms > 1 ? "rooms" : "room"}`}</div> / 
								<div className="choosedRoom__description__price">{`${choosedApartment.price}$`}</div> / 
								<div className="choosedRoom__description__description">{`${choosedApartment.description}`}</div>
		
						</div>
							<button 
								className="choosedRoom__button-cancel"
								onClick={() => {
									chooseApartment(-1);
								}}
							>
							Cancel rent</button>
						</div>
					) : (
						<div className="CurrentRent__noRoom">You have not selected anything yet</div>
					)
			}

			</div>

		</>
	)
};

export default CurrentRent;