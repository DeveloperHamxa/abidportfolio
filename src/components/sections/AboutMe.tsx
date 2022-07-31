export const AboutMe = () => {
	return (
		<section id="about" className="about section is-medium">
			<div className="about-container container">
				<h1 className="title">About</h1>
				<div className="columns">
					<div className="column is-2">
						<a href="https://www.behance.net/abid_hx" target="_blank" className="button btn-alt">
							Behance
						</a>
						<a href="https://pin.it/3t6jWez" target="_blank" className="button btn-alt">
							Pinterest
						</a>
						<a href="https://www.linkedin.com/in/abidhx" target="_blank" className="button btn-alt">
							LinkedIn
						</a>
						<a href="https://twitter.com/Abid_hx" target="_blank" className="button btn-alt">
							Twitter
						</a>
						<a href="https://www.facebook.com/Abid.hx" target="_blank" className="button btn-alt">
							Facebook
						</a>
						<a href="https://www.instagram.com/abid_hx/" target="_blank" className="button btn-alt">
							Instagram
						</a>
						<a href="mailto:abidh9480@gmail.com" className="button btn-alt">
							Email Me
						</a>
					</div>
					<div className="column is-8">
						<div className="content">
							<p>
								Hello! I am a Software Engineer and a Graphic Designer
								<br />
								My real name is <span className="blue-text">Abid Hussain</span>
								<br />
								<br />I have been Designing and Developing for about <span className="blue-text">4 years</span> now.
								<br />
								<span>Here is my current tech-stack.</span>
								<div
									className="columns is-multiline tech-stack"
									style={{ marginTop: "1%", flexWrap: "wrap", display: "flex" }}
								>
									<div className="column is-4">
										<div className="box">
											<img src="images/ps.png" alt="" />
											<span>Adobe Photoshop</span>
										</div>
									</div>
									<div className="column is-4">
										<div className="box">

											<img src="images/ai.png" alt="" />
											<span>Illustrator</span>
										</div>
									</div>
									<div className="column is-4">
										<div className="box">

											<img src="images/html.png" alt="" />
											<span>HTML</span>
										</div>
									</div>
									<div className="column is-4">
										<div className="box">

											<img src="images/css.png" alt="" />
											<span>CSS</span>
										</div>
									</div>
									<div className="column is-4">
										<div className="box">

											<img src="images/bootstrap.png" alt="" />
											<span>Bootstrap</span>
										</div>
									</div>

								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
