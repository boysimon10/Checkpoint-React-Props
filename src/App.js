import React from 'react';
import PlayersList from "./components/playerList";

function App(){
    return (
    <div>
        <h1>Liste des Joueurs</h1>
        {/* Composant PlayersList pour afficher la liste des joueurs */}
        <PlayersList />
    </div>
);
};

export default App;