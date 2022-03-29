import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return { 
		props: {
			allPostsData
		}
	}
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a chill, relaxed developer dude. Sometimes I skate, and make food. I wish to write a book, but I cannot make myseld do that, because I don't know how to start.</p>
        <p>
				I have traveled to Spain, England, Colombia, El Salvador, and Canada. My favorite trip has been in El Salvador, where I learned to stand up on a surf and catch waves. However, right now I would like to function and have responsibilities, ideally be self-employed.
        </p>
     </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
