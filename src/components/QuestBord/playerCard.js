import './style.css'
const playerCard = (props) => {
	return(
		<div className="d-flex align-item-center flex-column main_player_card_container">
			<div className="player_img_container">
				<div className="player_img_disc z-index">{props.name}</div>
				<img className="player_img" src={props.src} />
			</div>
			<div className="player_name">Foxian Gen0</div>
			<div className="player_rank">#21</div>
		</div>
	);
}

export default playerCard;