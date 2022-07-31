import { RepoIcon, StarFillIcon, QuestionIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";




export const ProjectCard = (props) => {

	return (
		<div className="card">
			<div className="card-content">
				<div className="repo-title">
					<a href={props.url} target="_blank">
						<RepoIcon size={16} /> 
					</a>
				</div>
				<div className="repo-description">
					<p>{props.description}</p>
					<br />
					<div style={{ display: "flex" }}>
						<div style={{ marginRight: "3rem" }}>
							<i className={props.icon}></i> {props.designer}
						</div>
					
						{/* <div style={{ marginRight: "12px" }}>
                           <QuestionIcon size={16} /> {data.archived ? "Archived" : "Maintained"}
                        </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
