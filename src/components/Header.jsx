import PropTypes from "prop-types";

const Header = ({ headerClass, info = "HRnet" }) => {
  return (
    <>
      <div className={headerClass}>
        <h1>{info}</h1>
      </div>
    </>
  );
};
Header.propTypes = {
  headerClass: PropTypes.string,
  info: PropTypes.string,
};

export default Header;
