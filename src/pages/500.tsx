import PageLayout from "../components/layout/PageLayout";
import ErrorScreen from "../components/error_page/500/error_500";
import {NextPage} from "next";

const Custom500: NextPage = () => {
	return (
		<PageLayout isShowHeader={true} isShowFooter={false} hasBottomNav={false}>
			<ErrorScreen errorTitle="500" code="Unknown" message="Please reload the app" />
		</PageLayout>
	);
};

export default Custom500;
