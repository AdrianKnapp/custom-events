import { Content } from '@/components/common/Content'
import { FeedbackModal } from '@/components/common/FeedbackModal'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <FeedbackModal />
    </div>
  )
}
