import React from 'react'
import Progress from './Progress'

const FormInput2 = ({category, step, nextStep, onChange}) => {
    const next = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <>
            <form className="Form-Container" onSubmit={next}>
                <Progress step={step - 1} />
                <input className="Input-Title" type="text" placeholder={category} onChange={onChange} />
                <div className="Input-Group">
                    <input type="text" placeholder="$100 Question" onChange={onChange} />
                    <input type="text" placeholder="$100 Answer" onChange={onChange} />
                    <hr/>
                    <input type="text" placeholder="$200 Question" onChange={onChange} />
                    <input type="text" placeholder="$200 Answer" onChange={onChange} />
                    <hr/>
                    <input type="text" placeholder="$300 Question" onChange={onChange} />
                    <input type="text" placeholder="$300 Answer" onChange={onChange} />
                    <hr/>
                    <input type="text" placeholder="$400 Question" onChange={onChange} />
                    <input type="text" placeholder="$400 Answer" onChange={onChange} />
                    <hr/>
                    <input type="text" placeholder="$500 Question" onChange={onChange} />
                    <input type="text" placeholder="$500 Answer" onChange={onChange} />
                </div>
                <input type="submit" value="Next" />
            </form>
        </>
    )
}

export default FormInput2
