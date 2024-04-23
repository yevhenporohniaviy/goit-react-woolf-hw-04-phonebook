import { useForm } from 'react-hook-form';

const ContactForm = ({ onAddContact }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      number: '',
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(data => {
          onAddContact(data);
          reset();
        })}
        noValidate
      >
        <label>
          Name
          <input
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: 'Required name field',
              },
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message:
                  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
              },
            })}
          />
          <p style={{ color: 'red' }}>{errors.name?.message}</p>
        </label>
        <label>
          Phone
          <input
            type="tel"
            {...register('number', {
              required: {
                value: true,
                message: 'Required number field',
              },
              pattern: {
                value:
                  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                message:
                  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
              },
            })}
          />
          <p style={{ color: 'red' }}>{errors.number?.message}</p>
        </label>

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default ContactForm;
