/* eslint-disable */
import type { NextPage } from "next";
import { appEnv } from "../utils/env";

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
			// @ts-ignore
			undefinedFunc();
	}

	return (
		<section className="lucis-container" style={{marginTop: "120px"}}>
			<div>
				<h1>Debug Page</h1>
				<div>
					<h3>App</h3>
					<div>
						<table>
							<tr><th>Key:</th><th>Value</th></tr>
							<tr><td>Version (commit id)</td><td>LUCIS_VERSION_COMMIT_ID</td></tr>
							<tr><td>APP_ENV</td><td>{appEnv}</td></tr>
						</table>
					</div>
					<button onClick={handClick}>Test 500 Error</button>
				</div>
			</div>
		</section>
	);
};

export default DebugPage;