import _ from "lodash";
import { useRouter } from "next/router";
import { fetchGetJSON } from "../config/api-helper";
import useSWR from "swr";
import classNames from "classnames";

import styles from "../styles/JobPosting.module.css";

const ResultPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  const email = _.get(data, "customer_details.email");

  return (
    <>
      <div
        className={classNames(
          styles.resultPage,
          "container my-5 d-flex justify-content-center align-items-center"
        )}
      >
        <div className="text-center">
          <h1>Thank You!</h1>
          <p className="lead mt-3">
            A confirmation email had been sent to {email}
          </p>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
