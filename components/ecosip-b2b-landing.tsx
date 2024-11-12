'use client'

import React from 'react'
import { ArrowRight, Droplet, Building, Mail, Recycle, Users, BarChart, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function EcosipB2bLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      {/* Navigation with Logo */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Recycle className="h-8 w-8 text-[#4c6c9a] mr-2" />
            <span className="text-2xl font-bold text-[#4c6c9a]">EcoSip</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" className="text-[#4c6c9a] hover:text-[#3a5276]">
              Solutions
            </Button>
            <Button variant="ghost" className="text-[#4c6c9a] hover:text-[#3a5276]">
              Case Studies
            </Button>
            <Button variant="ghost" className="text-[#4c6c9a] hover:text-[#3a5276]">
              About Us
            </Button>
            <Button className="bg-[#4c6c9a] hover:bg-[#3a5276] text-white">
              Request Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4c6c9a] mb-4">
          Elevate Your Sustainable Construction Projects
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Partner with EcoSip to integrate cutting-edge greywater recycling systems in Dutch residential developments
        </p>
        <Button className="bg-[#4c6c9a] hover:bg-[#3a5276] text-white">
          Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4c6c9a] mb-12">
            Why Partner with EcoSip?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Droplet className="h-12 w-12 text-blue-500" />}
              title="Advanced Water Recycling"
              description="Our systems reuse greywater for toilets and gardens, reducing water consumption by up to 40%"
            />
            <FeatureCard
              icon={<Building className="h-12 w-12 text-[#4c6c9a]" />}
              title="Space-Efficient Design"
              description="Compact solutions tailored for Dutch apartments and houses, maximizing limited space"
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-teal-500" />}
              title="End-User Satisfaction"
              description="Low-maintenance systems that seamlessly integrate into residents' daily lives"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4c6c9a] mb-12">
            Benefits for Construction Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitItem title="Increased Property Value">
              Eco-friendly features attract environmentally conscious buyers and investors
            </BenefitItem>
            <BenefitItem title="Regulatory Compliance">
              Meet and exceed Dutch water conservation regulations with ease
            </BenefitItem>
            <BenefitItem title="Competitive Edge">
              Differentiate your projects in the growing sustainable housing market
            </BenefitItem>
            <BenefitItem title="Simplified Integration">
              Our team provides full support from design to installation and maintenance
            </BenefitItem>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#4c6c9a] mb-8">
            Success Stories
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            See how leading Dutch construction companies have boosted their projects with EcoSip
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <CaseStudyCard
              title="GreenBuild NL"
              description="Increased property value by 15% with EcoSip integration in a 200-unit apartment complex"
            />
            <CaseStudyCard
              title="EcoHomes Amsterdam"
              description="Achieved 45% water savings in a luxury townhouse development, exceeding client expectations"
            />
          </div>
          <Button className="bg-[#4c6c9a] hover:bg-[#3a5276] text-white">
            View All Case Studies
          </Button>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4c6c9a] mb-12">
            Our Partnership Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep number={1} title="Consultation">
              We assess your project needs and sustainability goals
            </ProcessStep>
            <ProcessStep number={2} title="Custom Design">
              Our engineers create a tailored EcoSip system for your development
            </ProcessStep>
            <ProcessStep number={3} title="Integration">
              Seamless installation with minimal disruption to your construction timeline
            </ProcessStep>
            <ProcessStep number={4} title="Ongoing Support">
              We provide maintenance and support to ensure long-term success
            </ProcessStep>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-bold text-center text-[#4c6c9a] mb-8">
            Ready to Elevate Your Projects?
          </h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="text" placeholder="Company Name" />
            <Textarea placeholder="Tell us about your project" />
            <Button className="w-full bg-[#4c6c9a] hover:bg-[#3a5276] text-white">
              Request Partnership Info <Mail className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4c6c9a] text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 EcoSip. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#4c6c9a]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

interface BenefitItemProps {
  title: string;
  children: React.ReactNode;
}

function BenefitItem({ title, children }: BenefitItemProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-[#4c6c9a]">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  )
}

interface CaseStudyCardProps {
  title: string;
  description: string;
}

function CaseStudyCard({ title, description }: CaseStudyCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <h3 className="text-xl font-semibold mb-2 text-[#4c6c9a]">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Button variant="link" className="mt-4 text-[#4c6c9a] hover:text-[#3a5276] p-0">
        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

interface ProcessStepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

function ProcessStep({ number, title, children }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-[#4c6c9a] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#4c6c9a]">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  )
}