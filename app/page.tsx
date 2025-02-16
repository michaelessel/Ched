import Image from "next/image"
import { Sparkles, PiggyBank, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import FooterBanner from "@/components/footer-banner"
import Footer from "@/components/footer"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero section with logo */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Welcome to Ched Credit Union</h1>
              <p className="text-xl mb-8">Your Trusted Financial Partner</p>
              <Link href="/account-options">
                <Button variant="default" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Ched Credit Union Logo"
                width={200}
                height={200}
                className="rounded-full bg-white p-4"
              />
            </div>
          </div>
        </section>

        {/* Built-in benefits section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-center mb-12 flex items-center justify-center gap-2 text-xl font-semibold">
            <Sparkles className="h-6 w-6" />
            Built-in benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none">
              <CardContent className="space-y-4">
                <div className="w-32 h-20 relative mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Image placeholder for credit cards */}
                    <div className="w-20 h-12 bg-blue-600 rounded-lg" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center">Explore card offers</h3>
                <p className="text-center text-gray-600">
                  See if you're eligible for credit card offers with our pre-approval tool.
                </p>
                <div className="text-center">
                  <Button variant="link" className="text-blue-600 hover:text-blue-800">
                    See if you're pre-approved →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none">
              <CardContent className="space-y-4">
                <div className="w-32 h-20 relative mx-auto">
                  <PiggyBank className="w-20 h-20 mx-auto text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-center">Bank with confidence</h3>
                <p className="text-center text-gray-600">
                  Enjoy no fees or minimums for checking and savings accounts.
                </p>
                <div className="text-center">
                  <Button variant="link" className="text-blue-600 hover:text-blue-800">
                    Explore banking →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none">
              <CardContent className="space-y-4">
                <div className="w-32 h-20 relative mx-auto">
                  <Car className="w-20 h-20 mx-auto text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-center">Find a car you love</h3>
                <p className="text-center text-gray-600">
                  Shop cars and pre-qualify for financing with Auto Navigator.
                </p>
                <div className="text-center">
                  <Button variant="link" className="text-blue-600 hover:text-blue-800">
                    Start shopping →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Find the right card section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">FIND THE RIGHT CARD</h2>
                <h3 className="text-4xl font-bold">More built-in benefits</h3>
                <p className="text-lg text-gray-600">
                  Narrow your search based on what you're looking for—like rewards, low intro APR or credit growing
                  cards.
                </p>
                <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Compare credit cards
                </Button>
              </div>
              <div className="relative h-[400px] bg-blue-50 rounded-lg" />
            </div>
          </div>
        </section>

        {/* Business section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">SIMPLIFY YOUR BUSINESS FINANCES</h2>
                <h3 className="text-4xl font-bold">Only the best for your business</h3>
                <p className="text-lg text-gray-600">
                  Earn unlimited rewards—travel or cash—with every card. Explore banking options that can help move your
                  business forward.
                </p>
                <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore business solutions
                </Button>
              </div>
              <div className="relative h-[400px] bg-gray-100 rounded-lg" />
            </div>
          </div>
        </section>

        {/* Digital tools section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-12">DIGITAL TOOLS BUILT FOR EASE</h2>
            <Link href="/account-options">
              <div className="relative max-w-md mx-auto h-[600px] bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
                {/* This is a placeholder for the statue image. Replace with an actual image in a real application */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🗽</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Auto refinance section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] bg-gray-100 rounded-lg" />
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">AUTO REFINANCE</h2>
                <h3 className="text-4xl font-bold">Same car, lower payment</h3>
                <p className="text-lg text-gray-600">
                  Preview how much you could save without impacting your credit score.
                </p>
                <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Check eligibility
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterBanner />
      <Footer />
    </div>
  )
}

