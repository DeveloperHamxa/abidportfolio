import { RepoIcon, StarFillIcon } from '@primer/octicons-react'
import React from 'react'

function Projects(props) {
	const MyCollection = [
		{
		  label: "First Picture",
		  imgPath:
	  "images/structure.jpg",
		},
		{
		  label: "Second Picture",
		  imgPath:
	  "images/sharx.jpg",
		},
		{
		  label: "Third Picture",
		  imgPath:
	  "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
		},
	  ];
	return (
		<section id="projects" className="projects section is-medium">
			<div className="projects-container">
				<h1>Logo Projects</h1>
				<div className="card " style={{ display: "block-inline" }}>
					<div className="card-content">
						<div className="repo-title">
							<img
								src={MyCollection[0].imgPath}
								style={{
									height: 255,
									width: "100%",
									maxWidth: 400,
									display: "block",
									overflow: "hidden",
								}}
								alt={MyCollection[0].label}
							/>
							<img
								src={MyCollection[1].imgPath}
								style={{
									height: 255,
									width: "100%",
									maxWidth: 400,
									margin: 2,
									display: "block",
									overflow: "hidden",
								}}
								alt={MyCollection[1].label}
							/>
							<a href="https://www.behance.net/abidhussain67" target="_blank">
							</a>
						</div>
						<div className="repo-description">
						<a href="https://www.behance.net/abid_hx" target="_blank" style={{ textDecoration: "none" }}>Sharx Company Logo</a>

							<br />
							<div style={{ display: "flex" }}>
								<div style={{ marginRight: "3rem" }}>
									<i className=""></i> { }
								</div>
								
								{/* <div style={{ marginRight: "12px" }}>
                           <QuestionIcon size={16} /> {data.archived ? "Archived" : "Maintained"}
                        </div> */}
							</div>
						</div>
					</div>
				</div>
				<div className="card" style={{ display: "block-inline" }}>
					<div className="card-content">
						<div className="repo-title">
							<img
								src="images/capital structure.jpg"

							/>
							<img
								src="images/capital.jpg"
							/>
							<a href="https://www.behance.net/abid_hx" target="_blank">
							</a>
						</div>
						<div className="repo-description">
						<a href="https://www.behance.net/abid_hx" target="_blank" style={{ textDecoration: "none" }}>Capital Company Logo</a>

							<br />
							<div style={{ display: "flex" }}>
								<div style={{ marginRight: "3rem" }}>
									<i className=""></i> { }
								</div>
								
								{/* <div style={{ marginRight: "12px" }}>
                           <QuestionIcon size={16} /> {data.archived ? "Archived" : "Maintained"}
                        </div> */}
							</div>
						</div>
					</div>
				</div>
				<div className="card" style={{ display: "block-inline" }}>
					<div className="card-content">
						<div className="repo-title">
							<img
								src="images/real state.jpg"

							/>
							
							<a href="https://www.behance.net/abid_hx" target="_blank">
							</a>
						</div>
						<div className="repo-description">
						<a href="https://www.behance.net/abid_hx" target="_blank" style={{ textDecoration: "none" }}>Real State Company Logo</a>

							<br />
							<div style={{ display: "flex" }}>
								<div style={{ marginRight: "3rem" }}>
									<i className=""></i> { }
								</div>
								
								{/* <div style={{ marginRight: "12px" }}>
                           <QuestionIcon size={16} /> {data.archived ? "Archived" : "Maintained"}
                        </div> */}
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</section>
	)
}

export default Projects