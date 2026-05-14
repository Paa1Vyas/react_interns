import { useState, useCallback, useMemo } from 'react';

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    skills: '',
    summary: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => {
      if (prev[name]) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
  }, []);

  const isFormValid = useMemo(() => {
    const f = formData;
    return (
      f.fullName.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) &&
      /^\d{10}$/.test(f.phone.replace(/\D/g, '')) &&
      f.skills.trim().length > 0 &&
      f.summary.trim().length >= 10
    );
  }, [formData]);

  const skillCount = useMemo(() => {
    if (!formData.skills) return 0;
    return formData.skills.split(',').filter(skill => skill.trim() !== '').length;
  }, [formData.skills]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      console.log('✅ Payload sent to backend:', formData);

      setFormData({ fullName: '', email: '', phone: '', skills: '', summary: '' });
      setErrors({});
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error('❌ Submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isFormValid, isSubmitting]);

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg space-y-5">
      <h2 className="text-2xl font-bold text-gray-800">Resume Builder</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text" name="fullName" value={formData.fullName}
          onChange={handleInputChange}
          className={`w-full p-2.5 border rounded-lg outline-none transition ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`}
          placeholder="e.g. Rohan Sharma"
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email" name="email" value={formData.email}
          onChange={handleInputChange}
          className={`w-full p-2.5 border rounded-lg outline-none transition ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`}
          placeholder="rohan@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone (10 digits)</label>
        <input
          type="tel" name="phone" value={formData.phone}
          onChange={handleInputChange}
          className={`w-full p-2.5 border rounded-lg outline-none transition ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`}
          placeholder="9876543210"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Skills (comma separated) <span className="text-gray-400 text-xs">({skillCount} detected)</span>
        </label>
        <input
          type="text" name="skills" value={formData.skills}
          onChange={handleInputChange}
          className={`w-full p-2.5 border rounded-lg outline-none transition ${errors.skills ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`}
          placeholder="React, Node.js, SQL, Figma"
        />
        {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
        <textarea
          name="summary" value={formData.summary} rows="3"
          onChange={handleInputChange}
          className={`w-full p-2.5 border rounded-lg outline-none transition ${errors.summary ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`}
          placeholder="2+ years experience in frontend development..."
        />
        {errors.summary && <p className="text-red-500 text-xs mt-1">{errors.summary}</p>}
      </div>

      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
      >
        {isSubmitting ? '⏳ Submitting...' : '🚀 Submit Resume'}
      </button>

      {showSuccess && (
        <div className="mt-3 p-3 bg-green-100 text-green-700 rounded-lg text-center text-sm font-medium animate-fadeIn">
          ✅ Resume submitted successfully! Form cleared.
        </div>
      )}
    </form>
  );
}
