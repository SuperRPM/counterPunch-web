import { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 이메일 구독 처리
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <div className="bg-indigo-600 rounded-lg p-6 text-center mx-4 my-8">
      <h2 className="text-xl font-bold text-white mb-3">
        1개월 무료 구독권을 받아보세요!
      </h2>
      <p className="text-indigo-100 mb-4 text-sm">
        지금 사전등록하고 균형잡힌 뉴스를 경험하세요
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors"
          >
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm; 