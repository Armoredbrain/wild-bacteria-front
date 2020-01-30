import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Container, Card, Image } from 'semantic-ui-react';

export default function BacteriaView() {

    const [avatar, setAvatar] = useState([])
    const [name, setName] = useState([]);
    const images = [
        'assets/img/bacteria_1.jpg',
        'assets/img/bacteria_2.jpg',
        'assets/img/bacteria_3.jpg',
        'assets/img/bacteria_4.jpg',
        'assets/img/bacteria_5.jpg',
    ]

    function handleAvatarChange(event) {
        setAvatar(event.target.value);
        console.log(avatar)
    } 

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        alert(name)
        event.preventDefault();
    }

    return (
        <Container>
            <Card.Group>
                { images.map((image, index) => (
                    <Card key={index.toString()}>
                        <Card.Content>
                            <Image src={image} value={image} onClick={handleAvatarChange}/>
                        </Card.Content>
                    </Card>
                )) }
            </Card.Group>
            <Form onSubmit={handleSubmit}>
                <label>
                Name :
                <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <input type="submit" value="Send" />
            </Form>
        </Container>
    )
}