export default function NorthEast({darkMode = true}: {darkMode: boolean}) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill={darkMode ? "#000" : "#fff"}
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="24" height="24" fill={darkMode ? "#fff" : "#000"} />
			<path
				d="M8.99922 4.80005V6.72005H15.3256L4.19922 17.8464L5.55282 19.2001L16.6792 8.07365V14.4001H18.5992V4.80005H8.99922Z"
				fill={darkMode ? "#000" : "#fff"}
			/>
		</svg>
	);
}
