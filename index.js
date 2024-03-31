let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerText = 'REVOLYNE is the champion'; // Replace 'REVOLYNE' with your actual name
document.body.appendChild(newHeader); // Append newHeader to the body

it("the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text \"REVOLYNE is the champion\" inside it", () => {
  expect(newHeader.innerText, "Make sure your <h1> with id 'victory' includes the text \"is the champion\" inside it").to.include("is the champion");
});
