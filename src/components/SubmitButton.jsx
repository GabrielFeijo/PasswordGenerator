import styles from './SubmitButton.module.css'
import { BsArrowRightShort } from 'react-icons/bs';

export default function SubmitButton({ text, handleClick }) {
    return (
        <button className={styles.btn} onClick={handleClick}>{text}  <BsArrowRightShort /></button>
    )
}