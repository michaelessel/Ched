export default function FooterBanner() {
  return (
    <div className="bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-2 sm:mb-0">
            <h3 className="text-lg font-semibold">Need Help?</h3>
            <p className="text-sm">Our support team is here for you 24/7</p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm">Call us: (555) 123-4567</p>
            <p className="text-sm">Email: support@chedcreditunion.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

