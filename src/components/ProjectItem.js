import React from 'react';

function ProjectItem(props) {
	const technologies = props.technologies.map((tech, index) => {
		return <span key={index}>{tech}</span>;
	});
	return (
		<div className='project-item'>
			<h3>{props.name}</h3>
			<p>{props.about}</p>
			<div className='technologies'>{technologies}</div>
		</div>
	);
}

export default ProjectItem;
