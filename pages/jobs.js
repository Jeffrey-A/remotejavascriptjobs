import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";

import HTMLParser from "../components/HTMLParser";

import styles from "../styles/JobBoard.module.css";

function DropDown({ title }) {
  return (
    <div className="dropdown">
      <button
        className="btn  w-100 text-start btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}

const options = [
  "Employment type",
  "Development type",
  "Experience level",
  "Main technology",
  "Salary",
];

function Filters() {
  return (
    <div className={classNames(styles.filters, "p-4 sticky-top")}>
      <h3 className="mb-3">Filters</h3>
      <ul>
        {options.map((option) => (
          <li key={option} className="mb-2">
            <DropDown title={option} />
          </li>
        ))}
      </ul>
      <p>Reset filters</p>
    </div>
  );
}

const jobs = [
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
  {
    title: "Front end developer",
    company_name: "Motion Recruitment",
    date: "2d",
    employment_type: "Full-time",
    development_type: "Front-end",
    experience_level: "Mid level",
    salary: "$80k-$100k",
    technologies: ["React"],
    description: "<p>Test content</p>",
    apply_link: "https://example.com",
    logo_url: "https://via.placeholder.com/150",
    company_site: "https://example.com",
  },
];

function JobListing({ jobs }) {
  return (
    <div className="accordion" id="accordionExample-2">
      {jobs.map((accordion, index) => {
        const {
          title,
          company_name,
          date,
          technologies,
          salary,
          development_type,
          employment_type,
          logo_url,
          description,
        } = accordion;

        const accordionKey = "job-title-" + index;

        return (
          <div key={title + "-" + index} className="accordion-item">
            <h2 className="accordion-header" id={accordionKey}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseOne2" + accordionKey}
                aria-expanded="false"
                aria-controls={"collapseOne2" + accordionKey}
              >
                <div className="d-flex w-100">
                  <div className="me-4">
                    <Image className={styles.companyLogo} width="100px" height="100px" src={logo_url} />
                  </div>
                  <div className="flex-grow-1">
                    <div className="w-100 d-flex justify-content-between mb-3">
                      <p className="d-flex align-items-center">
                        <span className="icon-company_location"></span>
                        <span>{company_name}</span>
                      </p>
                      <p>{date}</p>
                    </div>

                    <h4 className="mb-3">{title}</h4>
                    <div className="d-flex">
                      <p className="me-3 btn btn-light">{employment_type}</p>
                      <p className="me-3 btn btn-light">{salary}</p>
                      <p className="me-3 btn btn-light">{technologies[0]}</p>
                      <p className="btn btn-light">{development_type}</p>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
            <div
              id={"collapseOne2" + accordionKey}
              className="accordion-collapse collapse"
              aria-labelledby="headingOne2"
              data-bs-parent="#accordionExample-2"
            >
              <div className="accordion-body">
                <HTMLParser>{description}</HTMLParser>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Jobs() {
  return (
    <div className="container mb-5">
      <h1 className="my-5">US Based Remote JavaScript Jobs</h1>
      <div className="row">
        <div className="col-lg-3 mb-3 mb-lg-0">
          <Filters />
        </div>
        <div className="col-lg-9 job-card-container">
          <JobListing jobs={jobs} />
        </div>
      </div>
    </div>
  );
}
