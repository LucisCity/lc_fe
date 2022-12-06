/* eslint-disable */
import {useState} from "react";
import type {NextPage} from "next";
import {NoSsr} from "@mui/material";
import {appEnv, appVersionCommitId} from "../utils/env";


const DebugPage: NextPage = () => {
  const [errorComponentVisible, setErrorComponentVisible] = useState(false);

  const makeAppCrash = () => {
    setErrorComponentVisible(true);
  }

	return (
		<NoSsr>
		<section className="lucis-container" style={{marginTop: "120px"}}>
			<div>
				<h1>Debug Page</h1>
				<div>
					<h3>App</h3>
					<div>
						<table>
							<tbody>
							<tr><th>Key:</th><th>Value</th></tr>
							<tr><td>Version (commit id)</td><td>{appVersionCommitId}</td></tr>
							<tr><td>APP_ENV</td><td>{appEnv}</td></tr>
							</tbody>
						</table>
					</div>

					<hr/>
					<h1>Error debug</h1>
					<div>
						<button onClick={makeAppCrash}>Test 500 Error</button>
						{errorComponentVisible && <DebugErrorComponent />}
					</div>
				</div>
			</div>
		</section>
		</NoSsr>
	);
};

function DebugErrorComponent() {
	throw new Error("Force cause error");

	return (
		<h1>this is error</h1>
	);
}

export default DebugPage;
