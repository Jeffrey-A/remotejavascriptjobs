import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Card from "./Card";
import CardBody from "./CardBody";

import slugify from "slugify";

import { JOBS_PAGE_PATH } from "../../config/constants";

export default function JobListing({ jobs }) {
  const router = useRouter();

  useEffect(() => {
    // TODO: use regex
    if (window.location.href.includes("job=")) {
      router.push("/jobs/" + window.location.href.split("job=")[1], undefined, {
        shallow: true,
      });
    }
  }, []);

  return (
    <div className="accordion" id="accordionExample-2">
      {jobs.map((jobPost, index) => {
        const { id, title, description } = jobPost;

        const accordionKey = "job-title-" + id;

        return (
          <div key={title + "-" + index} className="accordion-item">
            <h2 className="accordion-header" id={accordionKey}>
              <button
                onClick={() => {
                  const path = `${id}-${slugify(title)}`;
                  const current = router.query.job; 
                  path === current ? router.replace('', undefined, { shallow: true }) : router.replace('?job=' + path, undefined, { shallow: true });
                }}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseOne2" + accordionKey}
                aria-expanded="false"
                aria-controls={"collapseOne2" + accordionKey}
              >
                <Card {...jobPost} />
              </button>
            </h2>
            <div
              id={"collapseOne2" + accordionKey}
              className="accordion-collapse collapse"
              aria-labelledby="headingOne2"
            >
              <div className="accordion-body">
                <CardBody content={description} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
