import PropTypes from "prop-types";
import s from './ContactList.module.css'

const ContactList =
    ({ contacts,onDeleteContact }) =>
        
        <ul className={s.List}>{contacts.map(({ id, name, number }) => (
            <div key={id} className={s.ContactContainer}>
                <li  className={s.ContactItem} >
                <p className={s.ContactText}>{name}</p>
                <p className={s.ContactText}>{number}</p>
                </li>
                <button className={s.ContactBtn} onClick={()=>onDeleteContact(id)}>Видалити</button>
            </div>
            ))}
        </ul>;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number:PropTypes.string.isRequired
        })
    ),
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;