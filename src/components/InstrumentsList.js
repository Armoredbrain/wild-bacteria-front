import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function InstrumentsList() {
    const [instruments, setInstruments] = useState([]);
    const [status, setStatus] = useState(false);

    const Player = ({sound}) => (
        <AudioPlayer
          src={`../assets/sound/${sound}`}
          onPlay={e => console.log("onPlay")}
          showVolumeControl={false}
          showLoopControl={false}
          showSkipControls={false}
          showJumpControls={false}
          showDownloadProgress={false}
        />
      );

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
             { instruments.map((instrument, index) => (
                 <Card key={index.toString()}>
                     <Card.Content>
                        <Card.Header>
                            <h2>{instrument.name}</h2>
                        </Card.Header>
                        <Player sound={instrument.sound}/>
                     </Card.Content>
                 </Card>
             ))}
             </Card.Group>
        </Container>
    )
}