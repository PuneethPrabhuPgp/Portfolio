import React from "react";
import Contactme from "./Contactme";

const Connect = () => {
	return (
		<div
			className="text-center"
			id="Connect with me"
		>
			<div className="text-5xl text-black mt-16">Connect with me.</div>
			<p className="text-center text-gray-500 text-2xl mt-7">
				I am always excited to work on some awesome projects, message me and let's discuss over
				coffee.
			</p>
			<Contactme />
		</div>
	);
};

export default Connect;
