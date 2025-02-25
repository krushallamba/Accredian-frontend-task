const HowItWorks = () => {
    const steps = [
      { number: "1", title: "Refer a Friend", description: "Share your unique referral link with friends and family" },
      { number: "2", title: "They Enroll", description: "When your referral enrolls in a course, you get credited" },
      { number: "3", title: "Earn Rewards", description: "Receive your rewards once the enrollment is confirmed" },
    ]
  
    return (
      <section id="howitworks" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default HowItWorks
  
  