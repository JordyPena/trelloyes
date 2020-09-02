import React from "react";
import ReactDOM from "react-dom";
import List from "./List.js"



it("renders without crashing", () => {
  const div = document.createElement("div");
let data =  {
  id: '1',
  header: 'First list',
  cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
}
let cards = [
  { id: 'a', title: 'First card', content: 'lorem ipsum' },
  { id: 'b', title: 'Second card', content: 'lorem ipsum' },
  { id: 'c', title: 'Third card', content: 'lorem ipsum' } ]
  ReactDOM.render(<List header={data.header} cards={cards} />, div);

  ReactDOM.unmountComponentAtNode(div);
});