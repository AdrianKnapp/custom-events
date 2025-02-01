import { FeedbackModal } from '@/components/common/FeedbackModal'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Content } from './components/Content'

export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <FeedbackModal />
    </>
  )
}
