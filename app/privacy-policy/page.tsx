import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Kodes Tech',
    description: 'Privacy Policy for Kodes Tech',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#0B0E14] text-slate-300 font-sans selection:bg-blue-500/30">
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">&larr; Back to Home</Link>

                <article className="prose prose-invert lg:prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Privacy Policy</h1>

                    <p className="text-slate-400 mb-12"><strong>Last Updated:</strong> February 26, 2026</p>

                    <p className="mb-6 leading-relaxed">
                        Kodes Tech (“we”, “our”, or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (<a href="https://kodes.tech" className="text-blue-500 hover:underline">https://kodes.tech</a>) or contact us for services.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Information We Collect</h2>
                    <p className="mb-4">We may collect the following information:</p>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">a) Information You Provide</h3>
                    <p className="mb-4">When you:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Fill out a contact form</li>
                        <li>Request a free audit</li>
                        <li>Contact us via WhatsApp or email</li>
                    </ul>
                    <p className="mb-4">We may collect:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Name</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                        <li>Business details</li>
                        <li>Website URL</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-8 mb-4">b) Automatically Collected Information</h3>
                    <p className="mb-4">When you visit our website, we may collect:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Pages visited</li>
                        <li>Time spent on website</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">This data is used for analytics and website improvement.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. How We Use Your Information</h2>
                    <p className="mb-4">We use your information to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Respond to inquiries</li>
                        <li>Provide requested services</li>
                        <li>Send follow-up communication</li>
                        <li>Improve our website performance</li>
                        <li>Analyze user behavior for optimization</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">We do not sell, rent, or trade your personal information.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. WhatsApp & Third-Party Services</h2>
                    <p className="mb-4">If you contact us via WhatsApp:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Your phone number and message content are processed through WhatsApp’s platform.</li>
                        <li>We may use automation tools to respond faster.</li>
                        <li>We do not share your data with unauthorized third parties.</li>
                    </ul>
                    <p className="mb-4">We may use third-party services such as:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Google Analytics</li>
                        <li>Google Sheets</li>
                        <li>Hosting providers</li>
                        <li>Email services</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">These providers process data according to their own privacy policies.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Cookies</h2>
                    <p className="mb-4">Our website may use cookies to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Improve performance</li>
                        <li>Analyze traffic</li>
                        <li>Enhance user experience</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">You can disable cookies in your browser settings.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Data Security</h2>
                    <p className="mb-4 leading-relaxed">We take reasonable technical and organizational measures to protect your information.</p>
                    <p className="mb-6 leading-relaxed">However, no online transmission is 100% secure. By using our website, you acknowledge this risk.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Data Retention</h2>
                    <p className="mb-4">We retain contact information only as long as necessary to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Provide services</li>
                        <li>Respond to inquiries</li>
                        <li>Maintain business records</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">You may request deletion at any time.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Your Rights</h2>
                    <p className="mb-4">You may:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Request access to your data</li>
                        <li>Request correction</li>
                        <li>Request deletion</li>
                        <li>Withdraw consent</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">To do so, contact us at:<br />📧 <a href="mailto:kamaljeetsingh0001@gmail.com" className="text-blue-500 hover:underline">kamaljeetsingh0001@gmail.com</a></p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. Third-Party Links</h2>
                    <p className="mb-6 leading-relaxed">Our website may contain links to other websites.<br />We are not responsible for the privacy practices of external sites.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">9. Changes to This Policy</h2>
                    <p className="mb-6 leading-relaxed">We may update this Privacy Policy periodically.<br />Changes will be posted on this page with a revised date.</p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6">10. Contact Us</h2>
                    <p className="mb-6 leading-relaxed">
                        If you have questions about this Privacy Policy, contact:<br /><br />
                        <strong>Kodes Tech</strong><br />
                        Mohali, India<br />
                        Email: <a href="mailto:kamaljeetsingh0001@gmail.com" className="text-blue-500 hover:underline">kamaljeetsingh0001@gmail.com</a>
                    </p>
                </article>
            </div>
        </div>
    );
}
