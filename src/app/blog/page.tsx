import path from 'path'
import fs from 'fs'
import Link from 'next/link'
import matter from 'gray-matter'
import Image from 'next/image'
export default async function BlogIndex() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map((filename, i) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContents)

    return {
      id: i,
      title: data.title,
      description: data.description || '',
      slug: data.slug,
      date: data.date,
      datetime: data.datetime || data.date,
      imageUrl: data.imageUrl || '/images/default-blog.jpg',
    }
  })

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            News, updates and insight from the Lambert & Wright team.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  alt={post.title}
                  src={post.imageUrl}
                  width={600}
                  height={400}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  priority={false}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
              </div>

              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </div>

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm text-gray-600">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}