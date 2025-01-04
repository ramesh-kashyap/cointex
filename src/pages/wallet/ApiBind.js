import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Api from '../../Requests/Api';
export default function ApiBind() {
  const navigate = useNavigate();
    const location = useLocation();
    const { exchangeName } = location.state || {};
      // Render a fallback message if exchangeName is not available
   const [data, setData] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [secretKey, setSecretKey] = useState('');
  
   

  const handleApiKeyChange = (e) => setApiKey(e.target.value);
  const handleSecretKeyChange = (e) => setSecretKey(e.target.value);
  const formSubmit = async (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    // Get user data from JWT in local storage
    const token = localStorage.getItem('authToken'); // JWT token stored in localStorage
    if (!exchangeName) {
    return <div>Error: No exchange selected. Please go back and select one.</div>;
  }

    // Decode JWT to extract user_id
    const decoded = jwtDecode(token);
    const user_id = decoded.userId; // Extracting user_id from decoded token

    // Form data to submit
    const formData = {
      user_id,
      apiKey,
      apiSecret :secretKey,
      
       remark: exchangeName,
    };
    try {
        // You can replace the following line with an actual API call (e.g., using axios or fetch)
        console.log('Submitting data:', formData);
        const response = await Api.post('/apiBind', formData); // Make API request
            console.log('Registration successful:', response.data);
        // Handle the response as needed (e.g., show a success message)
        navigate('/');
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
        
  
}


useEffect(() => {
  // Fetch account info from backend
 const token = localStorage.getItem('authToken');
         const decoded = jwtDecode(token);
         const userId = decoded.userId;// Extracting user_id from decoded token 
  const fetchAccountInfo = async () => {
      try {
         
        
          const response2 = await Api.get(`/future-account-info?userId=${userId}`);
          setData(response2.data);
          console.log('Future Account Info:', response2.data);
      } catch (err) {
         
          console.error(err);
      }
  };

  fetchAccountInfo();
}, []);
  return (
    <div>
        
          {exchangeName && (
            <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3> {exchangeName} </h3>
      </div>
      
      <div className="pt-45 pb-90">
        <div className="tf-container">
          <ul className="mt-20">
            <li>
              <a href="recharge.html" className="accent-box item-check-style3 bg-menuDark">
                <label htmlFor="radio1" className="content d-flex justify-content-between">
                  <div className="flex-grow-1">
                    <h6 className="mt-8 d-flex align-items-center gap-4">API import Guide</h6>
                  </div>
                  <h6>View</h6>
                </label>
              </a>
            </li>
          </ul>

          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <h6>Please Activate trading Authority</h6>
            <br />

            <li className="d-flex align-items-center justify-content-between">
              <span className="text-small">
                Crypto regulation around the world.
                Importance of securing your crypto assets.
                Avoiding scams and phishing attacks.
                <br />
                Crypto regulation around the world.
                Importance of securing your crypto assets.
                Avoiding scams and phishing attacks.
              </span>
            </li>
          </ul>

          <br />
          <br />
          <form>
          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <li className="d-flex align-items-center justify-content-between"></li>
            <br />
            <h6>API Key</h6>
            <br />
            <input
              type="text"
              placeholder="Please Enter Api Key"
              style={{
                border: "2px solid #7e8088",
                color: "white",
                padding: "5px",
                backgroundColor: "transparent",
              }}
              name="apiKey"
              value={apiKey}
        onChange={handleApiKeyChange}
            />
            <br />
            <br />
            <br />
            <h6>Secret Key</h6>
            <br />
            <input
              type="text"
              placeholder="Please Enter Secret Key"
              style={{
                border: "2px solid #7e8088",
                color: "white",
                padding: "5px",
                backgroundColor: "transparent",
              }}
                  value={secretKey}
        onChange={handleSecretKeyChange}
              name="secretKey"
            />
           
            <br />
            <br />
            <br />
            <div className="inner-bar">
              <button className="tf-btn lg primary" onClick={formSubmit}  >
                Import
              </button>
            </div>
            <br />
          </ul>
  
          </form>

          <li>
            <a href="recharge.html" className="accent-box item-check-style3 bg-menuDark">
              <label htmlFor="radio1" className="content d-flex justify-content-between">
                <div className="flex-grow-1">
                  <span className="text-small">Trust IPs Only (Recommended)</span>
                  <p className="mt-8 d-flex align-items-center gap-4">
                  {data?.publicIP || '0'}
                    <br />
                   
                  </p>
                </div>
                <p>copy</p>
              </label>
            </a>
          </li>

          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <span className="text-small">Tips</span>
            <br />
            <br />
            <li className="d-flex align-items-center justify-content-between">
              <span className="text-small">
                Crypto regulation around the world. Importance of securing your
                <br />
                crypto assets. Avoiding scams and phishing attacks. Crypto regulation around the world. Importance of
                <br />
                securing your crypto assets. Avoiding scams and phishing attacks.
              </span>
            </li>
            <br />
          </ul>
        </div>
      </div>
</>
)}
      {/* <div className="modal fade action-sheet sheet-down" id="otpPin">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header d-flex justify-content-center align-items-center">
              <span className="left icon-cancel" data-bs-dismiss="modal"></span>
              <h3>Enter your pin</h3>
            </div>
            <div className="modal-body">
              <div className="digit-group">
                <input required type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" value="3" />
                <input required type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" value="6" />
                <input required type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />
                <input required type="text" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" />
              </div>
              <p className="text-center text-small text-white mt-16">Enter your PIN to proceed</p>
              <a href="#" className="mt-40 tf-btn lg primary" data-bs-toggle="modal">
                Confirm
              </a>
            </div>
          </div>
        </div>
      </div>
   */}
      {/* filter success */}
      <div className="modal fade modalCenter" id="success">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content success_box">
            <div className="icon-1 ani3">
              <span className="circle-box lg bg-circle check-icon bg-primary"></span>
            </div>
            <div className="icon-2 ani5">
              <span className="circle-box md bg-primary"></span>
            </div>
            <div className="icon-3 ani8">
              <span className="circle-box md bg-primary"></span>
            </div>
            <div className="icon-4 ani2">
              <span className="circle-box sm bg-primary"></span>
            </div>
            <div className="text-center">
              <h2 className="text-surface">Successful!</h2>
              <p className="text-small mt-8">Your transfer has been done!</p>
              <h5 className="mt-16 text-surface">Transfer amount</h5>
              <h1 className="mt-8 text-primary">$ 1200.0</h1>
              <p className="mt-16 text-surface text-button">Notification</p>
              <p className="text-small mt-4">BTC payment</p>
            </div>

            <a href="home.html" className="tf-btn lg primary mt-40">
              Done
            </a>
          </div>
        </div>
      </div>

     
          
    </div>
  );
}
