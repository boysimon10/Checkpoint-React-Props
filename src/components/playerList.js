import Player from "./player";
import Players from "./players";

const PlayersList = () => {
return (
        <>                     
    
        {Players.map(Players =>(
    
        <Player key ={Players} Players={Players} />
        ))

        }
    </>
);
};

export default PlayersList;