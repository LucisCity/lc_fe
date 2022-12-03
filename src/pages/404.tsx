import PageLayout from "../components/layout/PageLayout";
import Error404 from "../components/error/400/Error404";

export default function Custom404() {
	return (
		<PageLayout isShowHeader={false} isShowFooter={false} hasBottomNav={false}>
			<Error404 />
		</PageLayout>
	);}
