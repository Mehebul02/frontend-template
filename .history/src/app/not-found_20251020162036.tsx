"use client"

import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Animated 404 */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[150px] font-bold text-slate-900 dark:text-slate-50 leading-none mb-4">
              404
            </h1>
            <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-balance">
            Page Not Found
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto text-balance">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
          >
            <Home size={20} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 font-semibold rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

       
      </div>
    </main>
  )
}
