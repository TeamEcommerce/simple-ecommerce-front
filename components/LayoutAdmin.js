import Link from 'next/link'
import Head from 'next/head'
import stylesheet from '../styles/index.css';

export default ({ children, title = 'Simple Ecommerce' }) => (
  <div>
    <style jsx global>{stylesheet}</style>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    { children }
  </div>
)
