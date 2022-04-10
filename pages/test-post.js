import Head from "next/head";
import Image from "next/image";
import styles from "../styles/GettingHired.module.css";
import classNames from "classnames";

// function Tab() {
//   return (
//     <div className="container my-5">
//       <ul className="nav nav-tabs">
//         <li className="nav-item col-4 text-center">
//           <a className="nav-link active" aria-current="page" href="#">
//             Standing out
//           </a>
//         </li>
//         <li className="nav-item col-4 text-center">
//           <a className="nav-link" href="#">
//             Demonstrating competence
//           </a>
//         </li>
//         <li className="nav-item col-4 text-center">
//           <a className="nav-link" href="#">
//             Handling offers
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// const posts = [
//   {
//     title: "How to create a solid software developer portfolio",
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
//         consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
//         suspendisse interdum consectetur libero …….`,
//     url: "/test-post",
//   },
//   {
//     title: "How to create a solid software developer portfolio",
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
//         consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
//         suspendisse interdum consectetur libero …….`,
//     url: "/test-post",
//   },
//   {
//     title: "How to create a solid software developer portfolio",
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
//         consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
//         suspendisse interdum consectetur libero …….`,
//     url: "/test-post",
//   },
//   {
//     title: "How to create a solid software developer portfolio",
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
//         consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
//         suspendisse interdum consectetur libero …….`,
//     url: "/test-post",
//   },
//   {
//     title: "How to create a solid software developer portfolio",
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet
//         consectetur adipiscing elit ut aliquam. Porta non pulvinar neque laoreet
//         suspendisse interdum consectetur libero …….`,
//     url: "/test-post",
//   },
// ];

// function Card(props) {
//   const { title, content, url } = props;

//   return (
//     <a href={url}>
//       <div className="w-100 d-lg-flex">
//         <div
//           className={classNames(styles.image, "col col-lg-2 me-3 mb-3 mb-lg-0")}
//         >
//           Image
//         </div>
//         <div>
//           <h3 className="mb-3">{title}</h3>
//           <p>{content}</p>
//         </div>
//       </div>
//     </a>
//   );
// }

const breadCrumbs = [
  {
    title: "Parent",
    url: "/test-post",
  },
  {
    title: "How to create a solid software developer portfolio",
    url: "/test-post",
  },
];

function BreadCrumbs({ breadCrumbs }) {
  return (
    <ul className="my-4 d-flex">
      {breadCrumbs.map(({ title, url }) => (
        <li className={classNames(styles.breadCrumb)} key={title}>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Post(props) {
  const {
    title = "How to create a solid software developer portfolio",
    date = "May 18, 2020",
  } = props;

  return (
    <div className={styles.container}>
      <div className="container">
        <BreadCrumbs breadCrumbs={breadCrumbs} />
      </div>
      <div className="container">
        <h1 className="mb-2">{title}</h1>
        <p className="mb-5">{date}</p>
      </div>
      <div className="container">
        <ul className={classNames(styles.tableOfContent, "mb-5 mt-4 col-3")}>
          <h3>Table of Content</h3>
          <p>
            <a>Test 1</a>
          </p>
          <p>
            <a>Test 2</a>
          </p>
          <p>
            <a>Test 3</a>
          </p>
          <p>
            <a>Test 4</a>
          </p>
        </ul>

        <div className="mb-5">
          <h3 className="mb-3">Test 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="mb-3">Test 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="mb-3">Test 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="mb-3">Test 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
            sit amet consectetur adipiscing elit ut aliquam. Porta non pulvinar
            neque laoreet suspendisse interdum consectetur libero id. Lorem
            mollis aliquam ut porttitor.
          </p>
        </div>
      </div>
    </div>
  );
}
