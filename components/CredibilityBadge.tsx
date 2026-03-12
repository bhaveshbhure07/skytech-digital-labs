import Link from "next/link";

export default function CredibilityBadge() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-slate-100">
          <div className="p-8 text-center">
            {/* Briefcase Icon */}
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 1.953-1.75 1.953H5.5a1.953 1.953 0 01-1.75-1.953v-4.25m19.5 0a2.25 2.25 0 00-2.25-2.25h-14.5A2.25 2.25 0 002.25 14.15v4.25A2.25 2.25 0 004.5 20.5h14.5A2.25 2.25 0 0021.75 18.4v-4.25zM12 10.5v-4c0-.829-.302-1.587-.806-2.165A2.25 2.25 0 009.75 3.75h4.5a2.25 2.25 0 012.194 1.585c.504.578.806 1.336.806 2.165v4" />
              </svg>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Registered Employer on 
              <span className="block bg-gradient-to-r from-blue-600 to-navy-500 bg-clip-text text-transparent mt-1">
                National Career Service (Government of India)
              </span>
            </h3>
            
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              Official verification of our commitment to structured skill development programs
            </p>
            
            <Link
              href="https://betacloud.ncs.gov.in/job-view/2582059"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-navy-500 hover:from-blue-700 hover:to-navy-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-.608.522-1.183 1.081-1.611l1.9-1.9a3.704 3.704 0 014.586-.884 2.251 2.251 0 012.147.485 4.196 4.196 0 016.033 6.609l-.706-.706a4.217 4.217 0 01-1.27-3.473 1.964 1.964 0 00-.435-1.316l-.94-.94a1.026 1.026 0 00-1.473.191c-.272.281-.682.572-1.147.872l-1.9 1.9c-.39.39-.908.609-1.452.609s-1.063-.22-1.452-.61l-.706-.705c-.195-.195-.291-.45-.3-.714a1.964 1.964 0 00-.163-1.102l-.06-.112c-.044-.106-.024-.216.035-.293l.724-.724a.764.764 0 01.539-.22 1.964 1.964 0 011.479 1.035l.136.256c.256.522.753.9 1.304.9s1.048-.378 1.304-.9l.005-.007c.194-.385.297-.872.297-1.381 0-.713-.211-1.383-.57-1.952l-.936-.936A4.064 4.064 0 0010.968 3H6.184a1.586 1.586 0 00-1.095.46l-.724.723A1.964 1.964 0 003.084 6.817V14.15c0 .572.31 1.088.806 1.363l.092.051c.214.113.437.188.668.223l.253.018c.573.042 1.023.528 1.023 1.11v3.105c0 .614.487 1.112 1.088 1.112h.654c.601 0 .987-.493.987-1.112V15.99a.6.6 0 00-.267-.527l-.735-.492a.6.6 0 00-.816.014l-.739.49a.6.6 0 00-.27.527v3.105c0 .614.386 1.112.987 1.112h2.831c.601 0 .987-.493.987-1.112V15.99a.6.6 0 00-.266-.526l-.734-.492a.6.6 0 00-.815.015l-.74.49a.6.6 0 00-.27.526v3.105c0 .614.386 1.112.987 1.112H19.91c.601 0 .987-.493.987-1.112v-3.11c0-.582-.43-1.068-1.023-1.11l-.253-.018a1.964 1.964 0 00-.668-.223l-.092-.051A1.964 1.964 0 0018.22 14.15V6.817a1.964 1.964 0 00-1.092-.878l-.723-.723a1.586 1.586 0 00-1.096-.46h-4.784a4.064 4.064 0 00-2.408.927l-.936.935c-.36.57-.57 1.24-.57 1.953 0 .51.103.997.297 1.382l.005.007c.256.522.753.9 1.304.9.551 0 1.048-.378 1.304-.9l.136-.256a1.964 1.964 0 001.479-1.035 1.027 1.27 0 01.539.22l.724.724c.059.077.079.187.035.293l-.06.112a1.964 1.964 0 00-.163 1.102 1.026 1.026 0 00-.3.714l-.706.705c-.389.39-.908.61-1.452.61s-1.063-.22-1.452-.61l-1.9-1.9a2.251 2.251 0 01-.435-1.316 1.026 1.026 0 00-.191-1.473l-.94-.94c-.281-.272-.572-.682-.872-1.147z" clipRule="evenodd" />
              </svg>
              View Official Listing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

