/* eslint-disable */
import type { NextPage } from "next";

// export async function getServerSideProps() {
// 	// Fetch data from external API
// 	const res = await fetch('https://dummyjson.com/products/1');
// 	const data = await res.json();
//
// 	if (data !== '!!!!') {
// 		throw new Error('Internal Server Error');
// 	}
// 	// Pass data to the page via props
// 	return { props: { data } };
// }

const DebugPage: NextPage = () => {

	const handClick = () => {
		//@ts-ignore
		undefinedFunc();
	}

	return (
		<section className="lucis-container" style={{marginTop: "120px"}}>
			<div>
				<h1>Debug Page</h1>
				<div>
					<h3>App</h3>
					<button onClick={handClick}>Test 500 Error</button>
				</div>
			</div>
		</section>
	);
};

export default DebugPage;