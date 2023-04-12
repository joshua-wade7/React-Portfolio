import React from "react";

const styles = {};

function Projects() {
  return (
    <div>
      <section>
        <div class="container">
          <h2 id="Work">Work</h2>
          <a href="https://jamesgeneser.github.io/book-search/">
            <h3 id="img-1">Digital Librarian</h3>
            <img
              class="img-1"
              src="./assets/images/book_librarian.PNG"
              alt="Photo of a webpage for researching books"
            />
          </a>
        </div>
        <div class="container div">
          <a href="https://github.com/joshua-wade7">
            <h3 id="img-2">CSS on Display</h3>
            <img
              class="img-2"
              src="./assets/images/02-photo.avif"
              alt="Photo of Macbook with lines of html code on the screen."
            />
          </a>
          <a href="https://github.com/joshua-wade7">
            <h3 id="img-3">The Next Big Thing</h3>
            <img
              class="img-3"
              src="./assets/images/03-photo.avif"
              alt="Photo of person using a tablet."
            />
          </a>
          <a href="https://github.com/joshua-wade7">
            <h3 id="img-4">JS Wizardry</h3>
            <img
              class="img-4"
              src="./assets/images/04-photo.avif"
              alt="Close up photo of lines of code on a computer screen."
            />
          </a>
          <a href="https://github.com/joshua-wade7">
            <h3 id="img-5">Beautiful HTML</h3>
            <img
              class="img-5"
              src="./assets/images/05-photo.avif"
              alt="Poster stating get the creativity flowing."
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
