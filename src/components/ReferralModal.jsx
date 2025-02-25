import { useState } from "react"
import axios from 'axios';
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { toast } from 'react-toastify';

const ReferralModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  })

  const [submitting, setSubmitting] = useState(false)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission logic here

    try {
      setSubmitting(true)
      await axios.post(`${import.meta.env.VITE_API_URL}/api/referrals`, formData);
      setSubmitting(false)
      toast.success('Referral submitted successfully!');
      closeModal();
    } catch (error) {
      setSubmitting(false)
      toast.error(error.response.data.error);
    }
    setSubmitting(false)
    console.log("Form submitted:", formData)
    closeModal()
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Refer a Course
                </Dialog.Title>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="referrerName"
                      name="referrerName"
                      value={formData.referrerName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="text"
                      id="referrerEmail"
                      name="referrerEmail"
                      value={formData.referrerEmail}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700 mb-1">
                      Friend's Name
                    </label>
                    <input
                      type="text"
                      id="refereeName"
                      name="refereeName"
                      value={formData.refereeName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Friend's Email <span className="text-slate-500">(you can refer an email only one time)</span>
                    </label>
                    <input
                      type="email"
                      id="refereeEmail"
                      name="refereeEmail"
                      value={formData.refereeEmail}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                      Course to Refer
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select a course</option>
                      <option value="React Fundamentals">React Fundamentals</option>
                      <option value="Node.js Masterclass">Node.js Masterclass</option>
                      <option value="Express for Beginners">Express for Beginners</option>
                      <option value="MySQL Basics">MySQL Basics</option>
                    </select>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      disabled={submitting}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 disabled:opacity-50"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 disabled:opacity-50"
                    >
                      {submitting ? 'Wait...':'Refer Now'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ReferralModal

