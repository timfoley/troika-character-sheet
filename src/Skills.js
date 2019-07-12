import React from "react";
import PropTypes from "prop-types";

import "./Skills.css";

export function Skills(props) {
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

	const getTotalClass = rank => {
		let className = "skill__box skill__box--total ";
		return rank === 0 ? className + "zero-to-hide" : className;
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
					<React.Fragment key={skill + index}>
						<div className="skill__name">
							<input
								aria-label="skill name"
								className="skill__name__input"
								type="text"
								value={skill.name}
								onChange={e =>
									setSkillName(index, e.target.value)
								}
							/>
						</div>
						<input
							aria-label="skill rank"
							className={`skill__box skill__box--rank hide-spinners ${
								skill.rank === 0 ? "zero-to-hide" : ""
							}`}
							type="number"
							value={skill.rank}
							onChange={e =>
								setSkillRank(index, parseInt(e.target.value))
							}
						/>
						<div
							aria-label="skill stat"
							className={`skill__box skill__box--skill-stat ${
								props.skillStat === 0 ? "zero-to-hide" : ""
							}`}
						>
							{isNaN(props.skillStat) ? "-" : props.skillStat}
						</div>
						<div
							aria-label="skill total"
							className={getTotalClass(skill.rank)}
						>
							{isNaN(props.skillStat)
								? "-"
								: props.skillStat + skill.rank}
						</div>
					</React.Fragment>
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
