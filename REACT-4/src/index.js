import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";


function colorfulParagraph(props) {
    return <p>Make me colorful</p>;
}

class ColorChooser extends React.Component {
    
}

ReactDOM.render(
    <ColorChooser />,
    document.getElementById('root')
);


registerServiceWorker();
