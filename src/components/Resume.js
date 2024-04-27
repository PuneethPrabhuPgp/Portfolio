import React from "react";

const Resume = () => {
	return (
		<div>
			<p className="text-gray-500 text-center text-4xl m-auto mt-9">Download my Resume</p>
			<div className="mt-5 ">
				<a
					href="https://github.com/PuneethPrabhuPgp/PuneethPrabhuPgp/blob/main/images/Puneeth_Prabhu_Resume.pdf"
					target="_blank"
					rel="noreferrer"
				>
					<img
						alt="resume"
						src="download.png"
						className="w-[7%] m-auto mt-5"
					/>
				</a>
			</div>
		</div>
	);
};

export default Resume;
