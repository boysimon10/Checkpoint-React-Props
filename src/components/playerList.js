// Import des composants Player et Players
import Player from "./player";
import Players from "./players";

const PlayersList = () => {
    // Retourne le contenu JSX du composant
    return (
        <>                     
            {/* Boucle à travers chaque élément de Players */}
            {Players.map(Players =>(
                // Rendu du composant Player pour chaque élément avec une clé unique
                <Player key={Players} Players={Players} />
            ))}
        </>
    );
};
export default PlayersList;