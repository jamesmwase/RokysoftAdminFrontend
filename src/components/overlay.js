import React from "react";

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { change: true };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.open === false) {
            document.getElementById('overlay').style.display = 'none';
        } else {
            document.getElementById('overlay').style.display = 'block';
        }
    }
    render() {
        return (
            <div>
                <div id="overlay">
                    <div id="text">{this.props.content}</div>
                </div>
            </div>
        );
    }
}

export default Overlay;
