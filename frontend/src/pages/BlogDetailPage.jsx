import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User2 } from "lucide-react";
import Seo from "@/components/seo/Seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BlogCard from "@/components/shared/BlogCard";
import CtaSection from "@/components/shared/CtaSection";
import blog, { getBlogBySlug } from "@/data/blog";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  if (!post) return <Navigate to="/blog" replace />;
  const related = blog.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
      />
      <Breadcrumbs
        items={[
          { label: "Blog", to: "/blog" },
          { label: post.title, to: `/blog/${post.slug}` },
        ]}
      />

      <article className="container-page py-10 md:py-14 max-w-3xl">
        <span className="chip mb-5">{post.category}</span>
        <h1 className="h1-display">{post.title}</h1>
        <div className="mt-5 flex items-center flex-wrap gap-5 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <User2 size={14} /> {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} /> {post.readTime}
          </span>
        </div>

        <div className="aspect-[16/9] rounded-3xl overflow-hidden mt-8 border border-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="prose prose-slate max-w-none mt-10 space-y-6 text-slate-700 leading-relaxed text-[1.0625rem]">
          <p>{post.excerpt}</p>
          <p>
            This is a placeholder article. Real content will be added soon by
            our medical team. In the meantime, please use the information below
            as a starting point and always consult a qualified doctor for
            personalised advice.
          </p>
          <h2 className="h3-display !text-slate-900 pt-4">Key takeaways</h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-700">
            <li>Small, consistent habits matter more than dramatic changes.</li>
            <li>Regular check-ups detect problems before they become serious.</li>
            <li>Speak openly with your doctor — there are no silly questions.</li>
          </ul>
          <p>
            For a personalised consultation with one of our specialists, please{" "}
            <Link to="/appointment" className="text-emerald-800 underline">
              book an appointment
            </Link>
            .
          </p>
        </div>

        <Link
          to="/blog"
          data-testid="blog-back-link"
          className="btn btn-ghost !px-3 mt-10 inline-flex"
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>
      </article>

      {related.length > 0 && (
        <section
          className="section"
          style={{ backgroundColor: "rgb(var(--color-alt))" }}
        >
          <div className="container-page">
            <h2 className="h2-display mb-8">Related reads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection variant="compact" />
    </>
  );
};

export default BlogDetailPage;
