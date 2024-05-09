import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
    if (!Array.isArray(blogs)) {
        console.error("Expected blogs to be an array but got:", typeof blogs, blogs);
        return [];
    }

    return blogs
        .slice()
        .sort((a, b) =>
            compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
        );
};
