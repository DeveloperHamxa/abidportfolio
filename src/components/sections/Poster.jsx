import { RepoIcon, StarFillIcon } from '@primer/octicons-react'
import React from 'react'

function Poster(props) {
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
				<h1>Poster Projects</h1>
				<div className="card " style={{ display: "block-inline" }}>
					<div className="card-content">
						<div className="repo-title">
							<img
								src='images/new.jpg'
							/>
							<a href="https://www.behance.net/abidhussain67" target="_blank">
							</a>
						</div>
						<div className="repo-description">
                        <a href="https://www.behance.net/abid_hx" target="_blank" style={{ textDecoration: "none" }}>Oneskill Poster</a>

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
								src="images/mehkash.jpg"

							/>
							
						</div>
						<div className="repo-description">
                        <a href="https://www.behance.net/abid_hx" target="_blank" style={{ textDecoration: "none" }}>Furnitre Poster</a>

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
				
				<h1>Commissions</h1>
				<div className="columns">
					<div className="column is-full">
						<p
							style={{
								textAlign: "center",
								fontSize: "1.2rem"
							}}
						>
							You can check my Behance Profile for more..
							<br />
							<a href="https://www.behance.net/abid_hx">here</a>.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Poster