"use client";

export default function QuotePage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      {/* Chat Widget */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-4">Need Immediate Assistance?</h2>
        <p className="text-gray-600 text-center mb-6">
          Chat with our team directly for instant answers to your questions.
        </p>
        <div className="max-w-2xl mx-auto">
          <iframe
            src="https://pre.dev/iframe/enterprise/chat/c98883fb-ba46-4cdc-a151-d9b60cddb75a"
            className="w-full"
            style={{
              height: '800px',
            }}
            title="Chat with COMMAND LABS"
          />
        </div>
      </div>
    </div>
  );
} 