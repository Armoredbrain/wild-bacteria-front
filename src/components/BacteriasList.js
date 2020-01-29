import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';

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
             {console.log(bacterias)}
             { bacterias.map(bacteria => (
                 <Card key={bacteria.id}>
                     {bacteria.name}
                 </Card>
             ))}
        </Container>
    )
}