// lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)
  return files.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContents)
    return data
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const htmlContent = processedContent.toString()

  return {
    ...data,
    htmlContent,
  }
}