import React from 'react';
import { Form } from 'semantic-ui-react'

export default function NameChanger({handleNameChange}) {
    
    return (
        <div className="NameChanger">
            <Form>
                <Form.Field
                    style= {{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <input placeholder='Name' onChange={(event) => handleNameChange(event.target.value)} />
                </Form.Field>
            </Form>
            <br/>
            <br/>
        </div>
    )  
}