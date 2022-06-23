import Layout from '../../../components/layouts/admin.layout'
import Breadcrumbs from '../../../components/widgets/breadcrumbs/admin.breadcrumb'
const breadcrumbPages = [
  {
    href: "/admin",
    name: "home"
  },
  {
    href: "/admin/settings",
    name: "settings"
  }
];
export default function Page() {

  return (
    <>
      <main className="lg:col-span-10 xl:col-span-10 ">
        <Breadcrumbs breadcrumbs={breadcrumbPages} />
        Settings
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
