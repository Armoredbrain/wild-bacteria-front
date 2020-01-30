import React from 'react';
import { Image } from 'semantic-ui-react';

export default function ProfileChanger({images, handleImageChange}) {

    return (
        <div className="ProfileChanger">
            <Image.Group
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                {images.map((image, index) => {
                    return (
                        <Image src={`./assets/img/${image}`} alt="bacteria" circular key={index.toString()}
                            onClick={() => handleImageChange(image)}
                        />
                    )
                })}
            </Image.Group>
        </div>
    )  
}