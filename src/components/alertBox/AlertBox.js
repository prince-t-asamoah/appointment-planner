const AlertBox = ({msg, showMessage}) => {
    return (
        <div className="alert-box">
            <span className="alert-message">
                {msg}
            </span>
            <span className="close-btn" onClick={() => {showMessage(false)}}>&times;</span>
        </div>
    );
}

export default AlertBox;