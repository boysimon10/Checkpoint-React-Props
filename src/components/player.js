// Import du composant Card depuis la bibliothèque React-Bootstrap
import Card from 'react-bootstrap/Card';

// Définition du composant en prenant props en paramètre
const Player = (props) => {
    return (
        <div className="App" style={{ }}>
            {/* Utilisation du composant Card de React Bootstrap pour afficher les détails du joueur */}
            <Card className="Card" style={{ width: '18rem', marginTop: '20px', textAlign: 'center' }}>
                {/* Affichage de l'image du joueur à partir de l'URL passée via les props */}
                <Card.Img variant="top" src={props.Players.imageURL}  />
                <Card.Body>
                    {/* Affichage du nom du joueur */}
                    <Card.Title>{props.Players.name}</Card.Title>
                </Card.Body>
                
                {/* Affichage des détails du joueur tels que l'équipe, la nationalité, le numéro de maillot et l'âge */}
                <p> <strong>Equipe:</strong>   {props.Players.team}</p>
                <p> <strong>Nationalité:</strong>  {props.Players.nationality}</p>
                <p> <strong>Numero de Maillot:</strong> {props.Players.jerseyNumber}</p>
                <p> <strong>Age:</strong>       {props.Players.age}</p>
            </Card>
        </div>
    );
}
export default Player;
