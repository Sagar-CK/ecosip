'use client'

import React from 'react'
import { ArrowRight, Droplet, Home, Leaf, Building, Mail, Recycle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function EcosipLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Navigation with Logo */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Recycle className="h-8 w-8 text-[#4c6c9a] mr-2" />
            <span className="text-2xl font-bold text-[#4c6c9a]">EcoSip</span>
          </div>
          <Button className="bg-[#4c6c9a] hover:bg-[#3a5276] text-white">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4c6c9a] mb-4">
        Sustainable Living, Made Simple.
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          EcoSip: Space-efficient greywater recycling systems for Dutch households!
        </p>
        <Button className="bg-[#4c6c9a] hover:bg-[#3a5276] text-white">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4c6c9a] mb-12">
            Why Choose EcoSip?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Droplet className="h-12 w-12 text-blue-500" />}
              title="Water Recycling"
              description="Reuse sink water for toilets and gardens, reducing water waste"
            />
            <FeatureCard
              icon={<Home className="h-12 w-12 text-[#4c6c9a]" />}
              title="Space-Efficient"
              description="Designed specifically for apartments, maximizing limited space"
            />
            <FeatureCard
              icon={<Leaf className="h-12 w-12 text-teal-500" />}
              title="Low-Maintenance"
              description="Seamless solution for sustainable living with minimal upkeep"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4c6c9a] mb-12">
            Benefits for Dutch Households
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitItem title="Reduced Water Bills">
              Save money on your monthly water expenses
            </BenefitItem>
            <BenefitItem title="Eco-Friendly Living">
              Contribute to a more sustainable future
            </BenefitItem>
            <BenefitItem title="Space Optimization">
              Perfect for compact apartment living
            </BenefitItem>
            <BenefitItem title="Government Compliance">
              Meet and exceed water conservation regulations
            </BenefitItem>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#4c6c9a] mb-8">
            Partnering with Construction Companies
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We work directly with construction companies to integrate our systems into new and existing buildings.
          </p>
          <Building className="h-24 w-24 text-[#4c6c9a] mx-auto mb-8" />
          <Button className="bg-[#4c6c9a] hover:bg-[#3a5276] text-white">
            Partner With Us
          </Button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-bold text-center text-[#4c6c9a] mb-8">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button className="w-full bg-[#4c6c9a] hover:bg-[#3a5276] text-white">
              Send Message <Mail className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4c6c9a] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EcoSip. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#4c6c9a]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function BenefitItem({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-[#4c6c9a]">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  )
}