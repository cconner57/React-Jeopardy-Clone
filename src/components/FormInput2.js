import React from 'react'

function FormInput2({category, prevStep, nextStep, onChange}) {
    const back = e => {
        e.preventDefault();
        prevStep();
    }
    
    const next = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <>
            <form className="Form-Container">
                <div className="Input-Categories">
                    <div className="Input-Questions">
                        <input className="Input-Title" type="text" placeholder={category} onChange={onChange} />
                        <div className="Input-Group">
                            <input type="text" placeholder="$100 Question" onChange={onChange} />
                            <input type="text" placeholder="$100 Answer" onChange={onChange} />
                        </div>
                        <div className="Input-Group">
                            <input type="text" placeholder="$200 Question" onChange={onChange} />
                            <input type="text" placeholder="$200 Answer" onChange={onChange} />
                        </div>
                        <div className="Input-Group">
                            <input type="text" placeholder="$300 Question" onChange={onChange} />
                            <input type="text" placeholder="$300 Answer" onChange={onChange} />
                        </div>
                        <div className="Input-Group">
                            <input type="text" placeholder="$400 Question" onChange={onChange} />
                            <input type="text" placeholder="$400 Answer" onChange={onChange} />
                        </div>
                        <div className="Input-Group">
                            <input type="text" placeholder="$500 Question" onChange={onChange} />
                            <input type="text" placeholder="$500 Answer" onChange={onChange} />
                        </div>
                        <input type="button" value="Back" onClick={back} />
                        <input type="button" value="Next" onClick={next} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormInput2
