import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Skills.css";

function Skill(props) {
	const [skill, setSkill] = useState(props.skill);

	const setSkillName = e => {
		setSkill({ ...skill, name: e.target.value });
	};

	const setSkillRank = e => {
		setSkill({ ...skill, rank: parseInt(e.target.value) });
	};

	const updateCharacter = e => {
		const newSkills = props.skills;
		newSkills[props.index] = skill;
		props.updateCharacter("skills", newSkills);
	};

	return (
		<React.Fragment>
			<div className="skill__name">
				<input
					aria-label="skill name"
					class="skill__name__input"
					type="text"
					value={skill.name}
					onBlur={updateCharacter}
					onChange={setSkillName}
				/>
			</div>
			<input
				aria-label="skill rank"
				className="skill__box skill__box--rank"
				type="number"
				value={skill.rank}
				onBlur={updateCharacter}
				onChange={setSkillRank}
			/>
			<div
				aria-label="skill stat"
				className="skill__box skill__box--skill-stat"
			>
				{props.skillStat}
			</div>
			<div
				aria-label="skill total"
				className="skill__box skill__box--total"
			>
				{skill.rank + props.skillStat}
			</div>
		</React.Fragment>
	);
}

export function Skills(props) {
	const addSkill = () => {
		props.updateCharacter("skills", [
			...props.skills,
			{ name: "", rank: 1 }
		]);
	};

	const handleAddSkillKeyPress = e => {
		if (e.which === 32 || e.key === "enter") {
			addSkill();
		}
	};

	return (
		<div className="skills">
			<h2>Advanced Skills and Spells</h2>
			<div className="skills__grid">
				<div className="skills__grid__heading skill__box--rank">
					Rank
				</div>
				<div className="skills__grid__heading skill__box--skill">
					Skill
				</div>
				<div className="skills__grid__heading skill__box--total">
					Total
				</div>
				{props.skills.map((skill, index) => (
					<Skill
						key={skill.name}
						skill={skill}
						skills={props.skills}
						index={index}
						skillStat={props.skillStat}
						updateCharacter={props.updateCharacter}
						tabIndex="0"
					/>
				))}
			</div>
			<div
				className="skills__add-button clickable"
				area-label="click to add a skill"
				onClick={addSkill}
				onKeyPress={handleAddSkillKeyPress}
				tabIndex="0"
			>
				Add Skill
			</div>
		</div>
	);
}

Skills.propTypes = {
	skills: PropTypes.array,
	skillStat: PropTypes.number,
	updateCharacter: PropTypes.func
};

Skills.defaultProps = {
	skills: [{ name: "", rank: 1 }],
	skillStat: 0
};
