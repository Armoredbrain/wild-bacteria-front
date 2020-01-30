import React, {useEffect, useState} from 'react';
import { Container, Card, Image } from 'semantic-ui-react';

export default function AvatarSelector() {
    const [avatar, setAvatar] = useState([]);
    const images = [
        'assets/img/bacteria_1.jpg',
        'assets/img/bacteria_2.jpg',
        'assets/img/bacteria_3.jpg',
        'assets/img/bacteria_4.jpg',
        'assets/img/bacteria_5.jpg',
    ]

    return (
        <Container>
            { console.log(images) }
            <Card.Group>
                { images.map((image, index) => (
                    <Card key={index.toString()}>
                        <Card.Content>
                            <Image src={image} />
                        </Card.Content>
                    </Card>
                )) }
            </Card.Group>
        </Container>
    )
}