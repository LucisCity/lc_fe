/* eslint-disable */
import {useState} from "react";
import type {NextPage} from "next";
import { NoSsr, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import {appEnv, appVersionCommitId} from "../utils/env";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";
import { ContactPage } from "../components/contact";
import Button from "@mui/material/Button";


const DebugPage: NextPage = () => {
  const [errorComponentVisible, setErrorComponentVisible] = useState(false);

  const makeAppCrash = () => {
    setErrorComponentVisible(true);
  }

  return (
    <>
      <DocHead />
      <PageLayout>
        <NoSsr>
          <section className="lucis-container" style={{marginTop: "120px"}}>
            <div>
              <h1>Debug Page</h1>
              <div>
                <h3>App</h3>
                <div>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Key</TableCell>
                        <TableCell align="center">Value</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell align="center">Version (commit id)</TableCell>
                          <TableCell align="center">{appVersionCommitId}</TableCell>
                        </TableRow>
                      <TableRow>
                        <TableCell align="center">APP_ENV</TableCell>
                        <TableCell align="center">{appEnv}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>


                <h1>Error debug</h1>
                <div>
                  <Button variant="contained" onClick={makeAppCrash}>Test 500 Error</Button>
                  {errorComponentVisible && <DebugErrorComponent />}
                </div>
              </div>
            </div>
          </section>
        </NoSsr>
      </PageLayout>
    </>
  );
};

function DebugErrorComponent() {
  throw new Error("Force cause error");

  return (
    <h1>Crash</h1>
  );
}

export default DebugPage;
