import React, {useContext} from 'react'
import {GameContext} from '../GameContext'

const FormInput1 = ({ nextStep, onChange}) => {
    const [setGame] = useContext(GameContext)

    const next = e => {
        e.preventDefault();
        // setGame({teams: e.target.value})
        nextStep();
    }

    const teamName = () => {

    }

    return (
        <>
            <form className="Team-Container" onSubmit={next}>
                <div className="Input-Teams">
					<label>Team Name:</label>
					<input name="teamName" type="text" placeholder="(optional)" onChange={setGame.teams.team} />
					<input type="button" value="&#43; Add Team" />
				</div>
            </form>
        </>
    )
}

export default FormInput1
