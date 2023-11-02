const heading2 = React.createElement("h2",{id:"heading2",className:"redfont"},"Hello WOrld from React H2");
const heading = React.createElement("h1",{id:"heading",className:"redfont"},"Hello WOrld from React h1");
const child = React.createElement("div",{id:"child",className:"redfont"},[heading,heading2]);
const child1 = React.createElement("div",{id:"child1",className:"redfont"},[heading,heading2]);
const parent = React.createElement("div",{id:"parent"},[child,child1]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);