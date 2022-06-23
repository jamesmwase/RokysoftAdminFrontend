import Layout from '../../components/layouts/admin.layout'

export default function Page() {

  return (
    <>
      <main className="lg:col-span-10 xl:col-span-10 ">
      Home
      </main>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
