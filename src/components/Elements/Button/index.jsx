import PropTypes from 'prop-types';

const Button = (props) => {
  const { children, variant, type } = props;

  return (
    <button className={`h-12 rounded-md text-sm ${variant}`} type={type}>
      {children}
    </button>
  );
};

// Define prop types
Button.propTypes = {
  children: PropTypes.node.isRequired, // children is required
  variant: PropTypes.string, // variant is optional
  type: PropTypes.string, // type is optional
};

// Define default props
Button.defaultProps = {
  variant: '', // Default variant if not provided
  type: 'button', // Default type
};

export default Button;
