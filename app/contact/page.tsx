"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email anytime",
    value: "contact@telecominsider.com",
    href: "mailto:contact@telecominsider.com",
  },
  {
    icon: MapPin,
    title: "Address",
    description: "Our headquarters",
    value: "123 Tech Boulevard, Suite 456, San Francisco, CA 94105",
    href: null,
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Mon-Fri, 9am-5pm PST",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question, suggestion, or want to collaborate? We would love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we will get back to you within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                    <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for contacting us. We will respond to your message within 24-48 hours.
                    </p>
                    <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="What is this about?"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={6}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                We are here to help and answer any questions you might have. Reach out to us using any of the methods
                below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 text-sm text-primary hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle>Subscribe to Our Newsletter</CardTitle>
                <CardDescription>
                  Get the latest telecom news and insights delivered to your inbox weekly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="mt-3 text-xs text-muted-foreground">
                  By subscribing, you agree to our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  . Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <div>
              <h3 className="font-semibold text-foreground">Business Hours</h3>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 5:00 PM PST</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
