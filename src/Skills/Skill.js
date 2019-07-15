import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const Skill = props => {
	const skillNameInput = useRef(null);

	useEffect(() => {
		props.shouldFocus && skillNameInput.current.focus();
	}, [props.shouldFocus]);

	const setName = e => props.setSkillName(props.index, e.target.value);
	const setRank = e =>
		props.setSkillRank(props.index, parseInt(e.target.value));

	const getTotalClass = rank => {
		let className = "skill__box skill__box--total ";
		return rank === 0 ? className + "zero-to-hide" : className;
	};

	return (
		<React.Fragment>
			<div className="skill__name">
				<input
					ref={skillNameInput}
					aria-label="skill name"
					className="skill__name__input"
					type="text"
					value={props.skill.name}
					onChange={setName}
				/>
			</div>
			<input
				aria-label="skill rank"
				className={`skill__box skill__box--rank hide-spinners ${
					props.skill.rank === 0 ? "zero-to-hide" : ""
				}`}
				type="number"
				value={props.skill.rank}
				onChange={setRank}
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
				className={getTotalClass(props.skill.rank)}
			>
				{isNaN(props.skillStat)
					? "-"
					: props.skillStat + props.skill.rank}
			</div>
		</React.Fragment>
	);
};

Skill.propTypes = {
	skill: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	setSkillName: PropTypes.func.isRequired,
	setSkillRank: PropTypes.func.isRequired,
	skillStat: PropTypes.number,
};
