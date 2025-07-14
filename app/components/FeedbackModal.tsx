'use client';
import { useState } from 'react';

const DINGTALK_WEBHOOK = "https://oapi.dingtalk.com/robot/send?access_token=14796063801d713a54ec2a0baf8ea5ee7c6e3f9dbc6051b84f4b843d2df51da8";

interface FeedbackModalProps {
  onClose: () => void;
}

const FeedbackModal = ({ onClose }: FeedbackModalProps) => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = '请输入姓名';
    if (!form.phone.trim()) errs.phone = '请输入电话';
    else if (!/^1[3-9]\d{9}$/.test(form.phone.trim())) errs.phone = '请输入有效的手机号';
    if (!form.message.trim()) errs.message = '请输入留言内容';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(DINGTALK_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          msgtype: 'markdown',
          markdown: {
            title: '耒石官网留言',
            text: `**姓名：** ${form.name}\n**电话：** ${form.phone}\n**内容：** ${form.message}`,
          },
        }),
      });
      if (res.ok) {
        setFeedback('留言已成功发送，感谢您的反馈！');
        setForm({ name: '', phone: '', message: '' });
      } else {
        setFeedback('发送失败，请稍后重试');
      }
    } catch {
      setFeedback('发送失败，请检查网络或稍后重试');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="bg-white p-[32px] rounded-lg shadow-2xl w-full max-w-md m-[16px] relative transform transition-all duration-300 scale-100">
            <div className="flex justify-between items-center mb-[24px]">
              <h3 className="text-2xl font-bold text-gray-800">在线留言</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-800 text-3xl leading-none"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-[16px]">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-[8px]">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-100 rounded border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-lime-400`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-[4px]">{errors.name}</p>}
              </div>
              <div className="mb-[16px]">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-[8px]">
                  电话
                </label>
                <input
                  type="text"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-100 rounded border ${errors.phone ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-lime-400`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-[4px]">{errors.phone}</p>}
              </div>
              <div className="mb-[24px]">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-[8px]">
                  内容
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-100 rounded border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-lime-400`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-[4px]">{errors.message}</p>}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-lime-400 text-black font-bold py-[12px] px-[40px] rounded-full hover:bg-lime-500 transition-colors"
                  disabled={loading}
                >
                  {loading ? '发送中...' : '发送'}
                </button>
              </div>
              {feedback && <p className={`mt-4 text-center ${feedback.includes('成功') ? 'text-green-600' : 'text-red-500'}`}>{feedback}</p>}
            </form>
          </div>
        </div>
  )
}

export default FeedbackModal;