"use client"

import Link from "next/link"
import CustomDropdown from "./custom-dropdown"
import NotificationDropdown from "./notification-dropdown"

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <Link href="/dashboard" className="text-2xl font-bold mb-2 sm:mb-0">
          Ched Credit Union
        </Link>
        <nav className="flex items-center space-x-4">
          <NotificationDropdown />
          <CustomDropdown />
        </nav>
      </div>
    </header>
  )
}

