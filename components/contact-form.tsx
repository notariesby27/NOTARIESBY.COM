"use client"

import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [state, handleSubmit] = useForm("xrbrgjla")

  if (state.succeeded) {
    return (
      <div className="bg-green-50 border-2 border-green-600 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
        <p className="text-gray-700 mb-4">We'll respond within 24 hours.</p>
        <p className="text-sm text-gray-600">Urgent? Call (727) 710-5455</p>
      </div>
    )
  }

  if (state.errors && state.errors.length > 0) {
    return (
      <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
        <AlertCircle className="w-6 h-6 text-red-600 mb-2" />
        <h3 className="font-semibold text-red-900 mb-2">Submission Failed</h3>
        <p className="text-sm text-red-800">Call us at (727) 710-5455</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-10000px" }} aria-hidden="true" />
      
      <div className="space-y-2">
        <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
        <Input id="email" name="email" type="email" required disabled={state.submitting} className="border-2" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone <span className="text-red-600">*</span></Label>
        <Input id="phone" name="phone" type="tel" required disabled={state.submitting} className="border-2" />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message <span className="text-red-600">*</span></Label>
        <Textarea id="message" name="message" required disabled={state.submitting} rows={6} className="border-2" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <input type="hidden" name="_subject" value="NotariesBy Contact" />
      <input type="hidden" name="_cc" value="info@notariesby.com" />

      <Button type="submit" disabled={state.submitting} className="w-full bg-gray-900 text-white py-3">
        {state.submitting ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" />Sending...</>) : "Send Message"}
      </Button>
    </form>
  )
}
