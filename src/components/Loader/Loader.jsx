import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
}
