import React from 'react'

function FormInput1({category, question1, answer1, nextStep, onChange}) {
    const next = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <>
            <form className="Form-Container">
            <div className="Input-Teams">
					<label>Team Name</label>
					<input type="text" placeholder="(optional)" />
					<input type="button" value="&#43; Add Team" />
				</div>
				<div className="Input-Categories">
                    <div className="Input-Questions">
                        <input className="Input-Title" type="text" placeholder={category} onChange={onChange} />
                        <div className="Input-Group">
                            <input type="text" placeholder={question1} onChange={onChange} />
                            <input type="text" placeholder={answer1} onChange={onChange} />
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
                        <input type="button" value="Next" onClick={next} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormInput1
