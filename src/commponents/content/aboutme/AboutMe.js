import React from 'react';
import k from '../../../assets/about-me.jpg'


const AboutMe = (props) => {

    let onAddText = () => {
        props.addText();
    }

    let onTextChange = (event) => {
        let text = event.target.value;
        props.updateNewTextBody(text)
    }
    return (
        <div className="aboutme">
            <div>
                <img src={k} alt="" />
            </div>
            <div className="textarea">
                <textarea
                    value={props.newTextBody}
                    onChange={onTextChange}
                    placeholder="Enter A(My study) || 
                    B(My hobbies) ||
                    C(My goals)"
                >

                </textarea>
                <div className="button">
                    <button onClick={onAddText}>Enter</button>
                </div>
            </div>

            <div className='text'>
                <h3>
                    {props.headers}
                </h3>
                <p>
                    {props.newText}
                </p>
            </div>
        </div>
    )
}

export default AboutMe;