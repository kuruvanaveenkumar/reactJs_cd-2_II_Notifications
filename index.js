const Notification = (props) => {
  const { imgUrl, imgSize, text, box } = props;
  return (
    <div className={`box-card ${box}`}>
      <img src={imgUrl} className={imgSize} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="notifications-container">
    <div className="content-card">
      <h1>Notifications</h1>
      <div className="box-container">
        <Notification
          imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          text="Information Message"
          box="box-1"
          imgSize="img-size"
        />
        <Notification
          imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          text="Success Message"
          box="box-2"
          imgSize="img-size"
        />
        <Notification
          imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          text="Warning Message"
          box="box-3"
          imgSize="img-size"
        />
        <Notification
          imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          text="Error Message"
          box="box-4"
          imgSize="img-size"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
