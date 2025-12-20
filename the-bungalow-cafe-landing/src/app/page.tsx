import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import SocialProof from '@/components/sections/social-proof'
import Features from '@/components/sections/features'
import Menu from '@/components/sections/menu'
import Gallery from '@/components/sections/gallery'
import FAQ from '@/components/sections/faq'
import Location from '@/components/sections/location'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Menu />
      <Gallery />
      <FAQ />
      <Location />
      <Footer />
    </main>
  )
}
