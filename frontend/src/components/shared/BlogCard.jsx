import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const BlogCard = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    data-testid={`blog-card-${post.slug}`}
    className="card-base card-hover group flex flex-col overflow-hidden"
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <span className="chip mb-3 w-fit">{post.category}</span>
      <h3 className="font-semibold text-lg text-slate-900 leading-snug group-hover:text-emerald-800">
        {post.title}
      </h3>
      <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-1">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-4 mt-5 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1">
          <Calendar size={12} /> {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock size={12} /> {post.readTime}
        </span>
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800">
        Read article
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </div>
  </Link>
);

export default BlogCard;
