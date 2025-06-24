import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  return filenames.map((filename) => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8')
    const { data } = matter(fileContents)
    return { slug: data.slug }
  })
}

interface BlogPostParams {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPost({ params }: BlogPostParams) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
  if (!fs.existsSync(fullPath)) return notFound()

  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)
  const processed = await remark().use(html).process(content)
  const htmlContent = processed.toString()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm text-lightBlue hover:text-customGold transition-colors inline-block mb-6"
        >
          ← Back to all blogs
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-customBlue">{data.title}</h1>
        <p className="text-sm text-gray-500 mb-10">{data.date}</p>

        <div className="mx-auto w-full max-w-4xl">
          {/* Blog Header Image */}
          {data.imageUrl && (
            <Image
              src={data.imageUrl}
              alt={data.title || 'Blog header image'}
              width={1200}
              height={600}
              className="mb-10 w-full rounded-lg object-cover"
              priority
            />
          )}

          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="w-full text-base leading-relaxed text-[#3B464B] 
              [&_p]:mb-5
              [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6
              [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-2
              [&_a]:text-lightBlue [&_a]:underline hover:[&_a]:text-customGold
              [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2
              [&_ol]:list-decimal [&_ol]:pl-6
              [&_hr]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic"
          />
        </div>
      </div>
    </div>
  )
}