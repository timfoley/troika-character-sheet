import React from "react";
import PropTypes from "prop-types";

import "./Skills.css";

export function Skills(props) {
	return (
		<div className="skills">
			<h2>Advanced Skills and Spells</h2>
			<div className="skills__grid">
				<div className="skills__grid__heading skill__box--rank">Rank</div>
				<div className="skills__grid__heading skill__box--skill">Skill</div>
				<div className="skills__grid__heading skill__box--total">Total</div>
				{props.skills.map(skill => (
					<React.Fragment key={skill.name}>
						<div className="skill__name">
							<input
								aria-label="skill name"
								type="text"
								value={skill.name}
							/>
						</div>
						<input
							aria-label="skill rank"
							className="skill__box skill__box--rank"
							type="number"
							value={skill.rank}
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
				))}
			</div>
		</div>
	);
}

Skills.propTypes = {
    skills: PropTypes.array,
    skillStat: PropTypes.number
}
