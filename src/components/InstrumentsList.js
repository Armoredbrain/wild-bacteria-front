import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';

export default function InstrumentsList() {
    const [instruments, setInstruments] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        axios
            .get(`https://127.0.0.1:8000/api/instruments?pagination=false`)
            .then(res => {
                setInstruments(res.data);
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
             { instruments.map(instrument => (
                 <Card key={instrument.id}>
                     <Card.Content>
                         <Card.Header>
                            <h2>{instrument.name}</h2>
                         </Card.Header>
                     </Card.Content>
                 </Card>
             ))}
             </Card.Group>
        </Container>
    )
}