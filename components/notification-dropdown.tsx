"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const notifications = {
  inbox: [
    { id: 1, message: "New message from support", time: "2 hours ago" },
    { id: 2, message: "You have a new follower", time: "1 day ago" },
  ],
  security: [
    { id: 3, message: "Recent login from new device", time: "3 hours ago" },
    { id: 4, message: "Password changed successfully", time: "2 days ago" },
  ],
  payment: [
    { id: 5, message: "Payment received: $500.00", time: "1 day ago" },
    { id: 6, message: "Payment pending: $250.00", time: "2 days ago" },
  ],
}

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="text-white hover:text-gray-200" onClick={() => setIsOpen(!isOpen)}>
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <Tabs defaultValue="inbox" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="inbox">Inbox</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
            <TabsContent value="inbox">
              {notifications.inbox.map((notification) => (
                <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="security">
              {notifications.security.map((notification) => (
                <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="payment">
              {notifications.payment.map((notification) => (
                <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}

