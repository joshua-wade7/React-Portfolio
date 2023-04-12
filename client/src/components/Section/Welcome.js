import React from "react";

const styles = {
  img: {
    width: "20%",
    marginLeft: "40%",
    border: "5 solid gray",
    margin: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "5px 5px #4b697d",
  },
  heading: {
    textAlign: "center",
    fontSize: "3rem",
  },
  section: {
    margin: "20px",
  },
};

function Welcome() {
  return (
    <>
      <section style={styles.section}>
        <h2 style={styles.heading}>About Me</h2>
        <img
          id="img-0"
          src="./assets/images/PXL_20230208_222012685_exported_0_1675894826851.jpg"
          alt="Photo of Developer"
        />
        <p>
          Aspiring young Web Developer with years of managerial and problem
          solving experience over numerous jobs. Tackling everyday issues is a
          joy and it is something that I continuoly look to grow and develop
          everyday. Allow me to help your company take the next step it needs in
          this ever-growing digital world.
        </p>
      </section>
    </>
  );
}

export default Welcome;
