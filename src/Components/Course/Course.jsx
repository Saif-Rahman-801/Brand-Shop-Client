
const Course = () => {
    return (
        <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Food Management Course</div>
                <p className="mt-2 text-gray-500">Learn essential skills for managing a successful food business. This course covers menu planning, inventory management, food safety, and more.</p>
                <div className="mt-4">
                    <div className="flex items-center text-gray-600">
                        
                        <p className="text-sm">Self-paced online course</p>
                    </div>
                </div>
                <div className="mt-4">
                    <span className="text-gray-500">$99</span>
                    <span className="ml-2 text-gray-400 line-through">$129</span>
                </div>
                <div className="mt-6">
                    <a href="#" className="inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700">Enroll Now</a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Course;