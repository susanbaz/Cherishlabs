import React from 'react';

const ContactForm = () => {
  const handleSendMessage = () => {
    // Add logic to handle sending the message here
  };

  return (
    <div className="hb_contact_wrapper">
      <div className="hb_contact_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right">
              <div className="hb_contact_form_div">
                <h3>Keep In Touch</h3>
                <div className="hb_contact_form">
                  <div className="form-group">
                    <input type="text" id="ur_name" className="form-control" placeholder="Name*" />
                  </div>
                  <div className="form-group">
                    <input type="text" id="ur_mail" className="form-control" placeholder="Email*" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="msg" placeholder="Message" rows="5"></textarea>
                  </div>
                  <div className="hb_btndiv">
                    <button className="hb_btn" id="send_btn" onClick={handleSendMessage}>
                      Send
                    </button>
                    <p id="err"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="real_map"></div>
    </div>
  );
};

export default ContactForm;
