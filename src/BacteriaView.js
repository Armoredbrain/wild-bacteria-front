import React, { useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import ProfileChanger from './components/ProfileChanger';

export default function BacteriaView() {

    const images= [
        './assets/img/bacteria_1.jpg',
        './assets/img/bacteria_2.jpg',
        './assets/img/bacteria_3.jpg',
        './assets/img/bacteria_4.jpg',
        './assets/img/bacteria_5.jpg',
    ]

    const [profileImage, setProfileImage] = useState(images[0]);

    function handleImageChange(profileImage) {
        setProfileImage(profileImage)
    }

    return (
        <Container>
                <Image src={profileImage} 
                    style={{
                        marginRight: "auto",
                        marginLeft: "auto",
                        marginBottom: "4%"
                    }}
                    centered circular
                />
            <ProfileChanger 
                handleImageChange={handleImageChange} 
                images={images}
            />
        </Container>
    )
}