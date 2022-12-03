import PageLayout from "../components/layout/PageLayout";
import Error500 from "../components/error/500/Error500";
import {NextPage} from "next";

const Custom500: NextPage = () => {
	return (
		<PageLayout isShowHeader={false} isShowFooter={false} hasBottomNav={false}>
			<Error500 />
		</PageLayout>
	);
};

export default Custom500;