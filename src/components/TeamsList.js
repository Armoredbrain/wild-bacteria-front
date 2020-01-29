import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';

export default function TeamsList() {
    const [teams, setTeams] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        axios
            .get(`https://127.0.0.1:8000/api/teams?pagination=false`)
            .then(res => {
                setTeams(res.data);
                setStatus(true)
            });
    }, []);
   
    return !status ? (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50%'
            }}
        >
            Loading...
        </div>
    ) : (
        <Container>
            <Card.Group>
             { teams.map((team, index) => (
                 <Card key={index.toString()}>
                     <Card.Content>
                         <Card.Header>
                            <h2>{team.name}</h2>
                         </Card.Header>
                         {team.bacterias.map((bacteria, index) => (
                             <div key={index.toString()}>
                                 <h5>{bacteria}</h5>
                             </div>
                         ))}
                     </Card.Content>
                 </Card>
             ))}
             </Card.Group>
        </Container>
    )
}