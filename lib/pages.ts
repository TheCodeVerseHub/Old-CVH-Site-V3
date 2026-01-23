import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/pages');

export function getPageSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory);
}

export function getPageBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Page not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    content,
    ...data,
  };
}

export function getAllPages() {
  const slugs = getPageSlugs();
  const pages = slugs
    .filter(slug => slug.endsWith('.md'))
    .map((slug) => getPageBySlug(slug));
  return pages;
}
