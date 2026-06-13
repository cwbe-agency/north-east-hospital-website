import React from "react";
import Seo from "@/components/seo/Seo";
import PageHeader from "@/components/shared/PageHeader";
import BlogCard from "@/components/shared/BlogCard";
import CtaSection from "@/components/shared/CtaSection";
import blog from "@/data/blog";

const BlogPage = () => (
  <>
    <Seo
      title="Health Blog"
      description="Health tips, patient guides and expert commentary from the doctors at North East Multispeciality Hospital, Siliguri."
      path="/blog"
    />
    <PageHeader
      eyebrow="Health blog"
      title="Practical advice from people you can trust."
      description="Short, useful reads from our doctors — designed to help you make confident health decisions for you and your family."
    />
    <section className="section-sm">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {blog.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
    <CtaSection variant="compact" />
  </>
);

export default BlogPage;
