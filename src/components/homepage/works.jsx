import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">

						<div className="work">
							<img
								src="./jidoka.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Jidoka System</div>
							<div className="work-subtitle">
								Mobile Develper
							</div>
							<div className="work-duration">2023</div>
						</div>

						<div className="work">
							<img
								src="./bangkit.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Bangkit Academy - Distinction</div>
							<div className="work-subtitle">
								Mobile Development Cohort
							</div>
							<div className="work-duration">2023</div>
						</div>

						<div className="work">
							<img
								src="./suitmedia.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Suitmedia Digital Agency</div>
							<div className="work-subtitle">
								Mobile Develper
							</div>
							<div className="work-duration">2022</div>
						</div>

						<div className="work">
							<img
								src="./kodev.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">KodeV Academy</div>
							<div className="work-subtitle">
								Mobile Develper
							</div>
							<div className="work-duration">2022</div>
						</div>

						<div className="work">
							<img
								src="./no-img-corp.gif"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Momby</div>
							<div className="work-subtitle">
								Mobile Develper
							</div>
							<div className="work-duration">2021</div>
						</div>

						<div className="work">
							<img
								src="./istana.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Istana Kepresidenan Cipanas</div>
							<div className="work-subtitle">
								IT Support
							</div>
							<div className="work-duration">2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
