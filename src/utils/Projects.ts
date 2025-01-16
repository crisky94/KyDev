import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';

export const sortByDate = (projects: MarkdownInstance<IFrontmatter>[]) => {
  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
