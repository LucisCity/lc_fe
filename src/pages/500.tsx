import PageLayout from "../components/layout/PageLayout";
import Error500 from "../components/error_page/500/error_500";
import {NextPage} from "next";

const Custom500: NextPage = () => {
	return (
		<PageLayout isShowHeader={true} isShowFooter={false} hasBottomNav={false}>
			<Error500 />
		</PageLayout>
	);
};

export default Custom500;