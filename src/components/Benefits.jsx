import { GiftIcon, CurrencyDollarIcon, AcademicCapIcon } from "@heroicons/react/24/outline"

const Benefits = () => {
  const benefits = [
    { icon: GiftIcon, title: "Earn Rewards", description: "Get exciting rewards for every successful referral" },
    {
      icon: CurrencyDollarIcon,
      title: "Cash Bonuses",
      description: "Receive cash bonuses based on your referral performance",
    },
    {
      icon: AcademicCapIcon,
      title: "Free Courses",
      description: "Unlock free courses as you reach referral milestones",
    },
  ]

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Referring</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <benefit.icon className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits

