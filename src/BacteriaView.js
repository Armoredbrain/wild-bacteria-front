import React, { useState } from 'react';
import { Container, Image, Header, Button } from 'semantic-ui-react';
import ProfileChanger from './components/ProfileChanger';
import NameChanger from './components/NameChanger';
import axios from 'axios';

export default function BacteriaView() {

    const images= [
        'bacteria_1.jpg',
        'bacteria_2.jpg',
        'bacteria_3.jpg',
        'bacteria_4.jpg',
        'bacteria_5.jpg',
    ]

    const [profileImage, setProfileImage] = useState('');
    const [profileName, setProfileName] = useState('')

    function handleImageChange(profileImage) {
        setProfileImage(profileImage)
    }

    function handleNameChange(profileName) {
        setProfileName(profileName)
    }

    function handleValidate() {
        axios
            .post(`https://127.0.0.1:8000/api/bacterias`, {
                name: profileName,
                avatar: profileImage,
            })
            .then(function (response) {

                alert("your bacteria is alive")

                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Container>
            <Image src={`./assets/img/${profileImage}`} 
                style={{
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginBottom: "4%"
                }}
                centered circular
            />
            <Header>{profileName}</Header>
            <NameChanger 
                handleNameChange={handleNameChange}
            />
            <ProfileChanger 
                handleImageChange={handleImageChange} 
                images={images}
            />
            <Button onClick={handleValidate}>Validate</Button>
        </Container>
    )
}