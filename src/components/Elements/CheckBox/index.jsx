import PropTypes from 'prop-types';

const CheckBox = (props) => {
  const { label, name } = props;

  return (
    <>
      <input
        type="checkbox"
        className="text-sm accent-primary"
        name={name}
        id={name}
      />
      <label htmlFor={name} className="text-sm text-gray-01 ms-6">
        {label}
      </label>
    </>
  );
};

// Define prop types
CheckBox.propTypes = {
  label: PropTypes.string.isRequired, // label is required
  name: PropTypes.string.isRequired, // name is required
};

// Define default props if needed
CheckBox.defaultProps = {
  label: '', // Default label if not provided (optional)
  name: '', // Default name if not provided (optional)
};

export default CheckBox;