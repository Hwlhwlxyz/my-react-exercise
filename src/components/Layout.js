
import MenuAppBar from './MenuAppBar'

export default function Layout({ children }) {
  return (
    <>
      <MenuAppBar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}