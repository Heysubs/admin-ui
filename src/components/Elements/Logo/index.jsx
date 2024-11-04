import PropTypes from 'prop-types';

const Logo = ({ variant = "text-primary text-4xl" }) => (
  <div className={`flex justify-center font-poppins tracking-wide ${variant}`}>
    <span className="font-bold">FINE</span>bank
    <span className="font-bold">.IO</span>
  </div>
);

Logo.propTypes = {
  variant: PropTypes.string, // Validate that 'variant' is a string
};

export default Logo;
