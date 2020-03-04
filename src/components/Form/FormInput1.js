import React, {useContext} from 'react'
import {GameContext} from '../GameContext'
import {TeamContext} from '../TeamContext'

const FormInput1 = ({ nextStep, onChange}) => {
    const [setGame] = useContext(GameContext)
    const [setTeam] = useContext(TeamContext)

    const next = e => {
        e.preventDefault();
        setTeam({teams: e.target.value})
        nextStep();
    }

    const teamName = () => {

    }

    return (
        <>
            <form className="Form-Container" onSubmit={next}>
            <div className="Input-Teams">
					<label>Team Name</label>
					<input name="teamName" type="text" placeholder="(optional)" onChange={setTeam.teams.team} />
					<input type="button" value="&#43; Add Team" />
				</div>
				<div className="Input-Categories">
                    <div className="Input-Questions">
                        <input name="categoryName" className="Input-Title" type="text" placeholder='Category 1' onChange={onChange} />
                        <div className="Input-Group">
                            <input name="question100" type="text" placeholder='$100 Question' onChange={setGame} />
                            <input name="answer100" type="text" placeholder='$100 Answer' onChange={onChange} />
                        </div>
                        <div className="Input-Group">
                            <input name="question200" type="text" placeholder="$200 Question" onChange={onChange} />
                            <input name="answer200" type="text" placeholder="$200 Answer" onChange={onChange} />
                        </div>
                        <div className="Input-Group">
                            <input name="question300" type="text" placeholder="$300 Question" onChange={onChange} />
                            <input name="answer300" type="text" placeholder="$300 Answer" onChange={onChange} />
                        </div>
                        <div className="Input-Group">
                            <input name="question400" type="text" placeholder="$400 Question" onChange={onChange} />
                            <input name="answer400" type="text" placeholder="$400 Answer" onChange={onChange} />
                        </div>
                        <div className="Input-Group">
                            <input name="question500" type="text" placeholder="$500 Question" onChange={onChange} />
                            <input name="answer500" type="text" placeholder="$500 Answer" onChange={onChange} />
                        </div>
                        <input type="button" value="Next" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormInput1
