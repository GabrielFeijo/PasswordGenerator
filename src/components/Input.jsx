import styles from './Input.module.css'

import Checkbox from '@mui/material/Checkbox';

export default function Input({ text, name, handleOnChange, value }) {
    const label = { inputProps: { 'aria-label': 'Checkbox padrão' } };

    return (
        <div className={styles.form_control}>
            <Checkbox {...label} name={name} id={name} checked={value} onChange={handleOnChange} style={{ color: '#A5FFAF', width: 20 }} />
            <label htmlFor={name}>{text}</label>
        </div>
    )

}