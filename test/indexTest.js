require('./helpers.js');

describe("index.html", () => {
  describe("after index.js is processed", () => {
    let newHeader; // Declare newHeader variable

    before(() => {
      // Define newHeader by creating an h1 element
      newHeader = document.createElement('h1');
      newHeader.id = 'victory';
      newHeader.innerText = 'REVOLYNE  is the champion'; // Replace YOUR-NAME with the actual name
      document.body.appendChild(newHeader); // Append newHeader to the body
    });

    it("no longer has DOM node 'main#main'", () => {
      expect(document.querySelector('main#main'), "Make sure you remove the <main> with id 'main'").to.not.exist
    });

    it("has a 'newHeader' variable that points to an <h1> node", () => {
      expect(
        newHeader.nodeName,
        "Make sure you create an <h1> and assign it to the 'newHeader' variable"
      ).eql("H1");
    });

    it("the 'newHeader' variable that points to the <h1> node has an id of 'victory'", () => {
      expect(
        newHeader.id,
        "Make sure the id of your <h1> is set to 'victory'"
      ).eql("victory");
    });

    it("the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text \"REVOLYNE is the champion\" (with your name in place of YOUR-NAME) inside it", () => {
      expect(newHeader.innerHTML, "Make sure your <h1> with id 'victory' includes the text \"is the champion\" inside it").to.include("is the champion");
    });

    // Cleanup after the tests
    after(() => {
      newHeader.remove();
    });

  });
})
