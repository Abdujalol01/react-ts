import { styles } from "../util/style";
import {FC} from "react"
interface Props {
  title:string;
  logo:JSX.Element
}
const Clientcard:FC<Props> = ({ logo, title }) => {
  return (
    <div
      className={`${styles.flexCenter} flex sm:min-w-[192px] min-w-[120px] m-5 cursor-pointer`}
    >
      {logo}
      <p className={`${styles.paragraph} font-semibold text-gradient`}>
        {title}
      </p>
    </div>
  );
};

export default Clientcard;
