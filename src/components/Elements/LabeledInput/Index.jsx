import PropTypes from 'prop-types';
import Input from "./Input";
import Label from "./Label";

const LabeledInput = (props) => {
  const { label, name, type, placeholder } = props;

  return (
    <>
     <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
     
    </>
  );
};

// Define prop types
LabeledInput.propTypes = {
  label: PropTypes.string.isRequired, // label is required
  name: PropTypes.string.isRequired, // name is required
  type: PropTypes.string, // type is optional
  placeholder: PropTypes.string, // placeholder is optional
};

// Define default props if needed
LabeledInput.defaultProps = {
  type: 'text', // Default type if not provided
  placeholder: '', // Default placeholder if not provided
};

export default LabeledInput;
