import ErrorScreen from "../error_page/500/error_500";

type Props = {
  code: string;
  message: string;
};
export default function ErrorSection(props: Props) {
  const { code, message } = props;
  return (
    <div>
      <div>
        <ErrorScreen errorTitle="5xx" code={code} message={message}/>
      </div>
    </div>
  );
}
