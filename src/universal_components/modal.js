import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');


class Modal extends React.Component{

    constructor(props){
        super(props);
        this.el = document.createElement('div');
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        // Append the element into the DOM on mount. We'll render
        // into the modal container element (see the HTML tab).
        modalRoot.appendChild(this.el);
        let modal=document.getElementById("modal")
        // window.onclick = (event) => {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //         this.props.onClick(event)
        //     }
        // }
    }

    componentWillUnmount() {
        // Remove the element from the DOM when we unmount
        if(document.getElementById("modal")){
            modalRoot.removeChild(this.el);
        }
    }

    closeModal(){
        if(document.getElementById("modal"))
            modalRoot.removeChild(this.el);
    }

    render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
        // Any valid React child: JSX, strings, arrays, etc.
        <div className="modal" id="modal">
            {this.props.children}
        </div>,
        // A DOM element
        this.el,
    );

    }
}

export default Modal;
