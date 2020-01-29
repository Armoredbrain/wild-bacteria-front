import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Card, Image } from 'semantic-ui-react';

export default function BacteriasList() {
    const [bacterias, setBacterias] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        axios
            .get(`https://127.0.0.1:8000/api/bacterias?pagination=false`)
            .then(res => {
                setBacterias(res.data);
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
             { bacterias.map(bacteria => (
                 <Card key={bacteria.id}>
                     <Card.Content>
                         <Card.Header>
                            <h2>{bacteria.name}</h2>
                         </Card.Header>
                         <Image src={"assets/img/" + bacteria.avatar}/>
                     </Card.Content>
                 </Card>
             ))}
             </Card.Group>
        </Container>
    )
}