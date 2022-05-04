import HeaderContent from "../components/HeaderContent"
import FooterContent from "../components/FooterContent"
import NewsContent from "../components/NewsContent"
import TestimonialContent from "../components/TestimonialContent"
import NavigationBar from "../components/NavigationBar"

export default function LandingPage() {
  return (
    <>
      <NavigationBar />
      <HeaderContent />
      <TestimonialContent />
      <NewsContent />
      <FooterContent />
    </>
  )
}