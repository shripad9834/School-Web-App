// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-3 mt-auto">
//       <p className="text-center mb-0">
//         &copy; 2025 Mahatma Vidya Mandir & Somnag Prashala
//       </p>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Using react-icons for social media icons

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="fw-bold mb-2">Address</h5>
            <p className="mb-0">
              Mahatma Vidya Mandir & Somnag Prashala<br />
              Sunil Nagar<br />
              Solapur, Maharashtra, India<br />
              Pin: 413006
            </p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="fw-bold mb-2">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quote Section */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="fw-bold mb-2">Quote</h5>
            <p className="mb-0 fst-italic">
              "Education is the most powerful weapon which you can use to change the world." <br />
              — Nelson Mandela
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3 pt-3 border-top border-secondary">
          <p className="mb-0">
            © 2025 Mahatma Vidya Mandir & Somnag Prashala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;