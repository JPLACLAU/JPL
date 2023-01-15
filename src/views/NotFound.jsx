import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import useDocumentTitle from "../components/useDocumentTitle";

const NotFound = () => {
  useDocumentTitle("Not Found || React Personal Portfolio Template");
  return (
    <>
      <section className="error-page-wrapper">
        <div className="container">
          <div className="row justify-content-center full-screen align-items-center">
            <div className="col-lg-8 text-center">
              <div className="inner">
                <h1 className="display-7 white-color m-15px-b">
                  This site is a work in progress.
                </h1>
                <p className="h4">Stuff can break.</p>
                <p className="h4">I understand and agree.</p>

                <div className="btn-bar mt-4">
                  <Link className="px-btn px-btn-white" to="/">
                    GO TO HOME
                  </Link>
                  {/* End purchase_button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page Wrapper */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End footer */}
    </>
  );
};

export default NotFound;
