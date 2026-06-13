import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Seo from "@/components/seo/Seo";

const NotFoundPage = () => (
  <>
    <Seo
      title="Page not found"
      description="The page you're looking for doesn't exist. Return to the North East Hospital home page."
      path="/404"
    />
    <section className="container-page py-24 text-center">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="h1-display">Page not found</h1>
      <p className="body-lg mt-5 max-w-xl mx-auto">
        The page you were looking for moved or doesn&apos;t exist. Try heading back
        home or contact us if you need help.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link to="/" data-testid="404-home-link" className="btn btn-primary">
          <Home size={16} /> Back to home
        </Link>
        <Link
          to="/contact"
          data-testid="404-contact-link"
          className="btn btn-outline"
        >
          <ArrowLeft size={16} /> Contact us
        </Link>
      </div>
    </section>
  </>
);

export default NotFoundPage;
