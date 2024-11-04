import PropTypes from 'prop-types';

const Label = (props) => {
  const { htmlFor, children } = props;

  return (
    <label htmlFor={htmlFor} className="block text-sm mb-2">
      {children}
    </label>
  );
};

// Define prop types
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired, // htmlFor is required
  children: PropTypes.node.isRequired, // children is required
};

export default Label;
