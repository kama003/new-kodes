import Link from 'next/link';

export const metadata = {
    title: 'Terms & Conditions | Kodes Tech',
    description: 'Terms and Conditions for Kodes Tech',
};

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-[#0B0E14] text-slate-300 font-sans selection:bg-blue-500/30">
            <div className="container mx-auto px-4 py-24 max-w-3xl">
                <Link href="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">&larr; Back to Home</Link>

                <article className="prose prose-invert lg:prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Terms & Conditions</h1>

                    <p className="text-slate-400 mb-12"><strong>Last Updated:</strong> February 26, 2026</p>

                    <p className="mb-6 leading-relaxed">
                        Welcome to Kodes Tech (“we”, “our”, “us”). By accessing or using <a href="https://kodes.tech" className="text-blue-500 hover:underline">https://kodes.tech</a>, you agree to the following terms and conditions.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">1. Services</h3>
                    <p className="mb-4">Kodes Tech provides:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Website development and maintenance</li>
                        <li>WhatsApp automation setup</li>
                        <li>CRM integration</li>
                        <li>AI chatbot implementation</li>
                        <li>Technical consulting</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">All services are provided based on agreed scope and pricing.</p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">2. No Guarantee of Results</h3>
                    <p className="mb-4">While we aim to improve website performance and lead generation, we do not guarantee:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Specific revenue increases</li>
                        <li>Guaranteed sales</li>
                        <li>Search engine ranking positions</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">Results depend on market conditions and client cooperation.</p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">3. Client Responsibilities</h3>
                    <p className="mb-4">Clients agree to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Provide accurate information</li>
                        <li>Give required access (hosting, domain, CRM, etc.)</li>
                        <li>Approve deliverables in timely manner</li>
                        <li>Make payments as agreed</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">Delays in response may affect project timelines.</p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">4. Payments</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>All payments are non-refundable unless otherwise agreed in writing.</li>
                        <li>Monthly retainers must be paid in advance.</li>
                        <li>Late payments may result in service suspension.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">5. Intellectual Property</h3>
                    <p className="mb-4">Upon full payment:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Clients own the final delivered website or system.</li>
                        <li>Kodes Tech retains the right to showcase work in portfolio unless agreed otherwise.</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">6. Limitation of Liability</h3>
                    <p className="mb-4">Kodes Tech is not liable for:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Business losses</li>
                        <li>Revenue loss</li>
                        <li>Indirect damages</li>
                        <li>Third-party platform outages</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">Use of services is at your own risk.</p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">7. Termination</h3>
                    <p className="mb-4">We reserve the right to terminate services if:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Payments are not made</li>
                        <li>Terms are violated</li>
                        <li>Misuse or abuse occurs</li>
                    </ul>
                    <p className="mb-6 leading-relaxed">Clients may cancel services with written notice.</p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">8. Changes</h3>
                    <p className="mb-6 leading-relaxed">We may update these Terms at any time. Continued use of the website implies acceptance.</p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">9. Contact</h3>
                    <p className="mb-6 leading-relaxed">
                        <strong>Kodes Tech</strong><br />
                        Mohali, India<br />
                        Email: <a href="mailto:kamaljeetsingh0001@gmail.com" className="text-blue-500 hover:underline">kamaljeetsingh0001@gmail.com</a>
                    </p>
                </article>
            </div>
        </div>
    );
}
