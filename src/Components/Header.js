// import React from 'react';

// export default function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">

//         {/* Logo on the left */}
//         <a className="navbar-brand d-flex align-items-center" href="/">
//           <img src="/saraswati_devi_.png" alt="Logo" width="60" height="60" className="me-2" />
//         </a>

//         {/* School Name - Visible ONLY on large screens */}
//         <div className="d-none d-lg-block w-100 text-center">
//           <h4 className="mb-0 fw-bold">Mahatma Vidya Mandir & Somnag Prashala</h4>
//         </div>

//         {/* Toggle button for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Menu - collapsible */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" href="/">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/faculty">Faculty</a>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Gallery
//               </a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="/photo-gallery">Photo Gallery</a></li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li><a className="dropdown-item" href="/video-gallery">Video Gallery</a></li>
//               </ul>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Event
//               </a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="/event-2024">2024 Event</a></li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li><a className="dropdown-item" href="/event-2025">2025 Event</a></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/about">About</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* School Name visible ONLY on small screens */}
//       <div className="d-block d-lg-none w-100 text-center">
//         <h6 className="my-2 fw-semibold">Mahatma Vidya Mandir & Somnag Prashala</h6>
//       </div>
//     </nav>
//   );
// }


// import React from 'react';
// import { NavLink } from 'react-router-dom';

// export default function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
//       <div className="container-fluid">

//         {/* Logo on the left */}
//         <NavLink className="navbar-brand d-flex align-items-center" to="/">
//           <img src="/saraswati_devi_.png" alt="Logo" width="100" height="100" className="me-2" />
//         </NavLink>

//         {/* School Name - visible on large screens */}
//         <div className="d-none d-lg-block text-center flex-grow-1">
//           <h4 className="mb-0 fw-bold">Mahatma Vidya Mandir & Somnag Prashala</h4>
//         </div>

//         {/* Toggle button for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation Links */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/faculty"
//               >
//                 Faculty
//               </NavLink>
//             </li>
//             <li className="nav-item dropdown">
//               <NavLink
//                 className="nav-link dropdown-toggle"
//                 to="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Gallery
//               </NavLink>
//               <ul className="dropdown-menu">
//                 <li><NavLink className="dropdown-item" to="/photo-gallery">Photo Gallery</NavLink></li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li><NavLink className="dropdown-item" to="/video-gallery">Video Gallery</NavLink></li>
//               </ul>
//             </li>
//             <li className="nav-item dropdown">
//               <NavLink
//                 className="nav-link dropdown-toggle"
//                 to="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Event
//               </NavLink>
//               <ul className="dropdown-menu">
//                 <li><NavLink className="dropdown-item" to="/event-2024">2024 Event</NavLink></li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li><NavLink className="dropdown-item" to="/event-2025">2025 Event</NavLink></li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/about"
//               >
//                 About
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* School Name - visible on small screens */}
//       <div className="d-block d-lg-none w-100 text-center">
//         <h6 className="my-2 fw-semibold">Mahatma Vidya Mandir & Somnag Prashala</h6>
//       </div>
//     </nav>
//   );
// }

















// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import './Header.css'; // Optional: For custom styles

// export default function Header() {
//   const location = useLocation(); // Get current route

//   // Define active routes for Gallery and Event dropdowns
//   const isGalleryActive = ['/photo-gallery', '/video-gallery'].includes(location.pathname);
//   const isEventActive = ['/event-2024', '/event-2025'].includes(location.pathname);

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
//       <div className="container-fluid">
//         {/* Logo on the left */}
//         <NavLink className="navbar-brand d-flex align-items-center" to="/">
//           <img src="/saraswati_devi_.png" alt="Logo" width="100" height="100" className="me-2" />
//         </NavLink>

//         {/* School Name - visible on large screens */}
//         <div className="d-none d-lg-block text-center flex-grow-1">
//           <h4 className="mb-0 fw-bold">Mahatma Vidya Mandir & Somnag Prashala</h4>
//         </div>

//         {/* Toggle button for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation Links */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/faculty"
//               >
//                 Faculty
//               </NavLink>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className={`nav-link dropdown-toggle${isGalleryActive ? ' active fw-bold text-primary' : ''}`}
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Gallery
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/photo-gallery"
//                   >
//                     Photo Gallery
//                   </NavLink>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/video-gallery"
//                   >
//                     Video Gallery
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className={`nav-link dropdown-toggle${isEventActive ? ' active fw-bold text-primary' : ''}`}
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Event
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/event-2024"
//                   >
//                     2024 Event
//                   </NavLink>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/event-2025"
//                   >
//                     2025 Event
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/about"
//               >
//                 About
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* School Name - visible on small screens */}
//       <div className="d-block d-lg-none w-100 text-center">
//         <h6 className="my-2 fw-semibold">Mahatma Vidya Mandir & Somnag Prashala</h6>
//       </div>
//     </nav>
//   );
// }



// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import './Header.css'; // Custom CSS for styling

// export default function Header() {
//   const location = useLocation(); // Get current route

//   // Define active routes for Gallery and Event dropdowns
//   const isGalleryActive = ['/photo-gallery', '/video-gallery'].includes(location.pathname);
//   const isEventActive = ['/event-2024', '/event-2025'].includes(location.pathname);

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
//       <div className="container-fluid">
//         {/* Logo and Toggler Row */}
//         <div className="d-flex align-items-center w-100">
//           <NavLink className="navbar-brand d-flex align-items-center" to="/">
//             <img src="/saraswati_devi_.png" alt="Logo" width="100" height="100" className="me-2" />
//           </NavLink>
//           <button
//             className="navbar-toggler ms-auto"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>

//         {/* School Name - visible on large screens */}
//         <div className="d-none d-lg-block text-center flex-grow-1">
//           <h4 className="mb-0 fw-bold">Mahatma Vidya Mandir & Somnag Prashala</h4>
//         </div>

//         {/* School Name - visible on small screens, below logo and toggler */}
//         <div className="d-block d-lg-none w-100 text-center school-name-mobile">
//           <h6 className="my-2 fw-semibold">Mahatma Vidya Mandir & Somnag Prashala</h6>
//         </div>

//         {/* Navigation Links */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/faculty"
//               >
//                 Faculty
//               </NavLink>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className={`nav-link dropdown-toggle${isGalleryActive ? ' active fw-bold text-primary' : ''}`}
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Gallery
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/photo-gallery"
//                   >
//                     Photo Gallery
//                   </NavLink>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/video-gallery"
//                   >
//                     Video Gallery
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className={`nav-link dropdown-toggle${isEventActive ? ' active fw-bold text-primary' : ''}`}
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Event
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/event-2024"
//                   >
//                     2024 Event
//                   </NavLink>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/event-2025"
//                   >
//                     2025 Event
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/about"
//               >
//                 About
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }





// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import './Header.css'; // Custom CSS for styling

// export default function Header() {
//   const location = useLocation(); // Get current route

//   // Define active routes for Gallery and Event dropdowns
//   const isGalleryActive = ['/photo-gallery', '/video-gallery'].includes(location.pathname);
//   const isEventActive = ['/event-2024', '/event-2025'].includes(location.pathname);

//   return (
//     <div className="navbar-wrapper">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
//         <div className="container-fluid d-flex align-items-center">
//           {/* Logo */}
//           <NavLink className="navbar-brand d-flex align-items-center" to="/">
//             <img src="/saraswati_devi_.png" alt="Logo" width="100" height="100" className="me-2" />
//           </NavLink>

//           {/* School Name - visible on large screens */}
//           <div className="d-none d-lg-flex school-name-desktop justify-content-center flex-grow-1">
//             <h4 className="mb-0 fw-bold">Mahatma Vidya Mandir & Somnag Prashala</h4>
//           </div>

//           {/* Toggler for mobile */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>

//         {/* School Name - visible on small screens, below logo and toggler */}
//         <div className="d-block d-lg-none w-100 text-center school-name-mobile">
//           <h6 className="my-2 fw-semibold">Mahatma Vidya Mandir & Somnag Prashala</h6>
//         </div>

//         {/* Navigation Links */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/faculty"
//               >
//                 Faculty
//               </NavLink>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className={`nav-link dropdown-toggle${isGalleryActive ? ' active fw-bold text-primary' : ''}`}
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Gallery
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/photo-gallery"
//                   >
//                     Photo Gallery
//                   </NavLink>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/video-gallery"
//                   >
//                     Video Gallery
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className={`nav-link dropdown-toggle${isEventActive ? ' active fw-bold text-primary' : ''}`}
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Event
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/event-2024"
//                   >
//                     2024 Event
//                   </NavLink>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   <NavLink
//                     className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
//                     to="/event-2025"
//                   >
//                     2025 Event
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
//                 to="/about"
//               >
//                 About
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }



import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css'; // Custom CSS for styling

export default function Header() {
  const location = useLocation(); // Get current route
  const collapseRef = useRef(null); // Reference to the navbar collapse element

  // Define active routes for Gallery and Event dropdowns
  const isGalleryActive = ['/photo-gallery', '/video-gallery'].includes(location.pathname);
  //const isEventActive = ['/event-2024', '/event-2025'].includes(location.pathname);

  // Function to close the navbar collapse
  const closeNavbar = () => {
    const collapseElement = collapseRef.current;
    if (collapseElement && collapseElement.classList.contains('show')) {
      collapseElement.classList.remove('show'); // Remove 'show' class to collapse the navbar
      // Reset the aria-expanded attribute of the toggler button
      const toggler = document.querySelector('.navbar-toggler');
      if (toggler) {
        toggler.setAttribute('aria-expanded', 'false');
      }
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid d-flex align-items-center">
          {/* Logo */}
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img src="/saraswati_devi_.png" alt="Logo" width="100" height="100" className="me-2" />
          </NavLink>

          {/* School Name - visible on large screens */}
          <div className="d-none d-lg-flex school-name-desktop justify-content-center flex-grow-1">
            <h4 className="mb-0 fw-bold">Mahatma Vidya Mandir & Somnag Prashala</h4>
          </div>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* School Name - visible on small screens, below logo and toggler */}
        <div className="d-block d-lg-none w-100 text-center school-name-mobile">
          <h6 className="my-2 fw-semibold">Mahatma Vidya Mandir & Somnag Prashala</h6>
        </div>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
                to="/"
                onClick={closeNavbar} // Close navbar on click
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
                to="/faculty"
                onClick={closeNavbar} // Close navbar on click
              >
                Faculty
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle${isGalleryActive ? ' active fw-bold text-primary' : ''}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gallery
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
                    to="/photo-gallery"
                    onClick={closeNavbar} // Close navbar on click
                  >
                    Photo Gallery
                  </NavLink>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <NavLink
                    className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
                    to="/video-gallery"
                    onClick={closeNavbar} // Close navbar on click
                  >
                    Video Gallery
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle${isEventActive ? ' active fw-bold text-primary' : ''}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Event
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
                    to="/event-2024"
                    onClick={closeNavbar} // Close navbar on click
                  >
                    2024 Event
                  </NavLink>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <NavLink
                    className={({ isActive }) => 'dropdown-item' + (isActive ? ' active fw-bold text-primary' : '')}
                    to="/event-2025"
                    onClick={closeNavbar} // Close navbar on click
                  >
                    2025 Event
                  </NavLink>
                </li>
              </ul>
            </li> */}

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
                to="/event"
                onClick={closeNavbar} // Close navbar on click
              >
                Event
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => 'nav-link' + (isActive ? ' active fw-bold text-primary' : '')}
                to="/about"
                onClick={closeNavbar} // Close navbar on click
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}