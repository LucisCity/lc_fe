import Error500 from "../error_page/500/error_500";

type Props = {
  code: string;
  message: string;
};
export default function ErrorSection(props: Props) {
  const { code, message } = props;
  return (
    <div>
      <div>
        <Error500 code={code} message={message}/>
      </div>
    </div>
  );
}
