import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
	constructor() {
		super()
		this.state = {
			users: {},
			stories:[],
			body:[]
		}
	}

	componentWillMount() {
		const url = 'https://reqres.in/api/users/2'
		const url2 = 'https://jsonplaceholder.typicode.com/posts?id=1'
		axios.get(url)
			.then(users => {
				this.setState({
					users: users.data.data
				})
			})
		axios.get(url2)
			.then(stories => {
				this.setState({
					stories: stories.data[0].title
				})
			})
			axios.get(url2)
			.then(body => {
				this.setState({
					body: body.data[0].body
				})
			})
	}
	render() {
		console.log(this.state.body)
		return (
			<div>
				<section id="body" class=""></section>
				<div class="container">
					<div class="main-menu" id="main-menu">
						<ul class="main-menu-list">
							<li><a href="#page-resume" class="link-home">Home</a></li>
							<li><a href="#page-resume" class="link-page">Resume</a></li>
							<li><a href="#page-skills" class="link-page">Skills</a></li>
							<li><a href="#page-portfolio" class="link-page">Portfolio</a></li>
							<li><a href="#page-blog" class="link-page">Blog</a></li>
							<li><a href="#page-contact" class="link-page">Contact</a></li>
						</ul>
					</div>
					<div class="section-vcardbody section-home" id="section-home">
						<div class="vcard-profile-pic">
							<img src={this.state.users.avatar} id="profile2" alt="" />
							<img src={this.state.users.avatar} id="profile1" class="profileActive" alt="" />
						</div>
						<div class="vcard-profile-description">
							<h1 class="profile-title">Hi, i'm <span class="color1">{this.state.users.first_name} {this.state.users.last_name}</span></h1>
							<h2 class="profile-subtitle">{this.state.stories}</h2>
							<hr class="hr1" />
							<div class="vcard-profile-description-text">
								<p>{this.state.body}</p>
							</div>
							<div class="vcard-profile-description-feature">
								<div class="vcard-profile-description-ft-item">
									<p>{this.state.users.email}</p>
								</div>
							</div>
						</div>
						<div class="vcard-footer">
							<div class="footer-social-icons">
								<a href="#"><i class="fa fa-instagram"></i></a>
								<a href="#"><i class="fa fa-facebook"></i></a>
								<a href="#"><i class="fa fa-twitter"></i></a>
								<a href="#"><i class="fa fa-linkedin"></i></a>
								<a href="#"><i class="fa fa-youtube"></i></a>
							</div>
						</div>
					</div>
					<div class="section-vcardbody section-page" id="page-resume">


						<div class="section-education">

							<h2 class="section-title">Resume</h2>
							<div class="resume-buttons header-page-buttons">

								<a href="#" class="btn btn-default btn-default2"><i class="fa fa-download"></i>&nbsp; Download my resume</a>


								<a href="#page-contact" class="btn btn-default btn-default2 link-page"><i class="fa fa-download"></i>&nbsp;  Get in Touch</a>

							</div>


							<h2 class="section-title2"><i class="fa fa-university"></i>&nbsp; Education</h2>

							<div class="resume-item">

								<h3 class="section-item-title-1">Graphic Design</h3>

								<h4 class="graduation-time">St. Patrick University (2 Years Course) - <span class="graduation-date">Graduation May 2013</span></h4>


								<div class="graduation-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>

							</div>
							<div class="resume-item">
								<h3 class="section-item-title-1">Master of Web Design</h3>
								<h4 class="graduation-time">St. Patrick University (2 Years Course) - Graduation May 2013</h4>
								<div class="graduation-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
						</div>
						<div class="section-education">

							<h2 class="section-title2"><i class="fa fa-flag"></i>&nbsp; Work Experience</h2>
							<div class="resume-item">
								<h3 class="section-item-title-1">DotRex Co.</h3>
								<h4 class="job">Lead Designer - <span class="job-date">June 2012 - Current</span></h4>
								<div class="graduation-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
							<div class="resume-item">
								<h3 class="section-item-title-1">Oasis Ltda.</h3>
								<h4 class="job">Front-end Developer - <span class="job-date">Jan 2010 - Apr 2012</span></h4>
								<div class="graduation-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
							<div class="resume-item">
								<h3 class="section-item-title-1">Dupstudio</h3>
								<h4 class="job">Designer - <span class="job-date">Jan 2010 - Apr 2012</span></h4>
								<div class="graduation-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
							<div class="resume-item">
								<h3 class="section-item-title-1">Black Tie Corp.</h3>
								<h4 class="job">Web Designer - <span class="job-date">Jan 2010 - Apr 2012</span></h4>
								<div class="graduation-description">
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
								</div>
							</div>
						</div>
						<h2 class="section-title2"><i class="fa fa-commenting"></i>&nbsp; Testimonials</h2>
						<div class="testimonials">
							<div class="testimonial-slides" id="testimonial-carousel">
								<div class="testimonial-item">
									<div class="testimonial-content">
										<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
									</div>
									<div class="testimonial-credits">
										<div class="testimonial-picture">
											<img src="img/team2.jpg" alt="" />
										</div>
										<p class="testimonial-author">Melissa Alvarez</p>
										<p class="testimonial-firm">Trexus Co.</p>
									</div>
								</div>
								<div class="testimonial-item">
									<div class="testimonial-content">
										<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
									</div>
									<div class="testimonial-credits">
										<div class="testimonial-picture">
											<img src="img/team1.jpg" alt="" />
										</div>
										<p class="testimonial-author">John Rex</p>
										<p class="testimonial-firm">DotRex Co.</p>
									</div>
								</div>
								<div class="testimonial-item">
									<div class="testimonial-content">
										<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
									</div>
									<div class="testimonial-credits">
										<div class="testimonial-picture">
											<img src="img/team3.jpg" alt="" />
										</div>
										<p class="testimonial-author">Jhonathan Smith</p>
										<p class="testimonial-firm">RedWings Co.</p>
									</div>
								</div>
							</div>
						</div>

						<div class="page-footer">
							<div class="resume-buttons">
								<a href="#" class="btn btn-default btn-default2"><i class="fa fa-download"></i>&nbsp; Download my resume</a>
								<a href="#page-contact" class="btn btn-default btn-default2 link-page"><i class="fa fa-download"></i>&nbsp;  Get in Touch</a>
							</div>
							<p class="footer-quote">"The best way to predict the future is to create it" <br /><i>Peter Drucker</i></p>
						</div>

					</div>
				</div>

			</div>
		);
	}
}

export default Home;