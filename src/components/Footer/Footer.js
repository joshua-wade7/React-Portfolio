import React from "react";

const styles = {
  footer: {
    // backgroundColor: "#cccccc",
    background: "#4F4557",
  },
};

function Footer() {
  return (
    <div className="">
      <footer className="vw-100 d-flex" style={styles.footer}>
        This is my Footer
      </footer>
    </div>
  );
}

export default Footer;
