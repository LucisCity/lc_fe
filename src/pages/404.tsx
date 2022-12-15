import PageLayout from "../components/layout/PageLayout";
import Error404 from "../components/error_page/400/error_404";

export default function Custom404() {
	return (
		<PageLayout isShowHeader={true} isShowFooter={false} hasBottomNav={false}>
			<Error404 />
		</PageLayout>
	);}
