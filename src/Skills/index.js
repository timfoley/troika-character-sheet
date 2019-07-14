import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Skills.css";

import { Skill } from "./Skill";

export function Skills(props) {
	const [indexToFocus, setIndexToFocus] = useState(null);

	const setSkillName = (i, name) => {
		const newSkills = props.skills;
		newSkills[i] = { ...newSkills[i], name };
		props.updateCharacter("skills", newSkills);
	};

	const setSkillRank = (i, rank) => {
		const newSkills = props.skills;
		newSkills[i] = {
			...newSkills[i],
			rank,
		};
		props.updateCharacter("skills", newSkills);
	};

	const addSkill = () => {
		setIndexToFocus(props.skills.length);
		props.updateCharacter("skills", [
			...props.skills,
			{ name: "", rank: 0 },
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
						key={skill + index}
						skill={skill}
						index={index}
						setSkillName={setSkillName}
						setSkillRank={setSkillRank}
						skillStat={props.skillStat}
						shouldFocus={indexToFocus === index}
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
	updateCharacter: PropTypes.func,
};

Skills.defaultProps = {
	skills: [
		{ name: "", rank: 0 },
		{ name: "", rank: 0 },
		{ name: "", rank: 0 },
		{ name: "", rank: 0 },
		{ name: "", rank: 0 },
	],
	skillStat: 0,
};
