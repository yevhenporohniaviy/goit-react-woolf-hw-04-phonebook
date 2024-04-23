import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          {...contact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </ul>
  );
};
 
export default ContactList;