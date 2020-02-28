import React, {useContext} from 'react'
import {GameContext} from './GameContext'

const FormInput1 = ({ nextStep, onChange}) => {
    const [setGame, setTeam] = useContext(GameContext)

    const next = e => {
        e.preventDefault();
        nextStep();
    }

    // const addTeam = () => {

    // }

    return (
        <>
            <form className="Form-Container">
            <div className="Input-Teams">
					<label>Team Name</label>
					<input type="text" placeholder="(optional)" onChange={setTeam} />
					<input type="button" value="&#43; Add Team" />
				</div>
				<div className="Input-Categories">
                    <div className="Input-Questions">
                        <input className="Input-Title" type="text" placeholder='Category 1' onChange={onChange} />
                        <div className="Input-Group">
                            <input type="text" placeholder='$100 Question' onChange={setGame} />
                            <input type="text" placeholder='$100 Answer' onChange={onChange} />
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
