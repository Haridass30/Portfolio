// import React from 'react';
// import './LogoStripe.css';

// const LogoStripe = () => {
//   const logos = [
//     { name: 'AWS', file: 'icons8-aws-logo-48.png', alt: 'AWS Logo' },
//     { name: 'Docker', file: 'docker.png', alt: 'Docker Logo' },
//     { name: 'Kubernetes', file: 'kubernetes.png', alt: 'Kubernetes Logo' },
//     { name: 'Python', file: 'python.png', alt: 'Python Logo' },
//     { name: 'Java', file: 'java.png', alt: 'Java Logo' },
//     { name: 'MySQL', file: 'mysql.png', alt: 'MySQL Logo' },
//     { name: 'GitHub', file: 'github.png', alt: 'GitHub Logo' },
//     { name: 'Grafana', file: 'grafana.png', alt: 'Grafana Logo' },
//     { name: 'Prometheus', file: 'prometheus.png', alt: 'Prometheus Logo' },
//     { name: 'Bootstrap', file: 'bootstrap.png', alt: 'Bootstrap Logo' },
//   ];

//   const duplicatedLogos = [...logos, ...logos, ...logos];

//   return (
//     <div className="logo-stripe-wrapper">
//       <div className="logo-stripe-container">
//         <div className="logo-stripe">
//           {duplicatedLogos.map((logo, index) => (
//             <div key={index} className="logo-item">
//               <img
//                 src={`/icons/${logo.file}`}
//                 alt={logo.alt}
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="logo-fallback">{logo.name}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogoStripe;
