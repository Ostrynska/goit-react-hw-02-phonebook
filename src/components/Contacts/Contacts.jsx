import PropTypes from 'prop-types';

const Contacts = ({ contacts }) =>
{
    return (
        <section>
            <h2>Contacts</h2>
            <ul>
            {contacts.map(contact => (
            <li key={contact.id}>
                <div>
                <span>{contact.name} -</span>
                <span>{contact.number}</span>
                </div>
            </li>
            ))}
            </ul>
        </section>
    )
};

export default Contacts