
const Affiliate = () => {
    return (
        <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <h2 className="text-2xl font-semibold mb-4">Join Our Affiliate Program</h2>
        <p className="text-gray-600 mb-4">
            Are you passionate about food? Join our affiliate program and start earning commissions by promoting our delicious products. Help us spread the love for good food!
        </p>
        <ul className="list-disc ml-6 mb-4">
            <li>Earn 10% commission on every sale made through your referral link.</li>
            <li>Access to high-quality promotional materials and banners.</li>
            <li>Monthly payouts and detailed performance reports.</li>
            <li>24/7 support from our affiliate team.</li>
        </ul>
        <div className="mt-6">
            <a href="#affiliate-signup" className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Join Now
            </a>
        </div>
    </div>
    );
};

export default Affiliate;