import Card from 'react-bootstrap/Card';
const Player = (props) => {
    
        return (
        <div className="App" style={{ }}>
        <Card className="Card" style={{ width: '18rem', marginTop: '20px', textAlign: 'center' }}>
            <Card.Img variant="top" src={props.Players.imageURL}  />
            <Card.Body>
            <Card.Title>{props.Players.name}</Card.Title>
        </Card.Body>

            <p> <strong>Equipe:</strong>   {props.Players.team}</p>
            <p> <strong>Nationalité:</strong>  {props.Players.nationality}</p>
            <p> <strong>Numero de Maillot:</strong> {props.Players.jerseyNumber}</p>
            <p> <strong>Age:</strong>       {props.Players.age}</p>
        
        </Card>
        </div>
    );
    }

export default Player;