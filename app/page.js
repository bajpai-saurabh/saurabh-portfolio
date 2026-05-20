export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
              Saurabh Bajpai
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              PCRF & Telecom Core Specialist | Cloud-Native PCRF & OCS consultant | Kubernetes & OpenShift Enthusiast
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-white text-slate-900 px-6 py-3 rounded-2xl shadow-lg font-semibold hover:scale-105 transition"
              >
                Contact Me
              </a>

              <a
                href="#experience"
                className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-slate-900 transition"
              >
                View Experience
              </a>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">Quick Overview</h2>

            <div className="space-y-4 text-gray-100">
              <div>
                <span className="font-semibold">Experience:</span> 13+ Years
              </div>
              <div>
                <span className="font-semibold">Specialization:</span> 5G Core, EPC, Diameter, PCRF/PCF
              </div>
              <div>
                <span className="font-semibold">Cloud Native:</span> Kubernetes, OpenShift, CNFs
              </div>
              <div>
                <span className="font-semibold">Domains:</span> Telecom Core Networks & Cloud Transformation
              </div>
              <div>
                <span className="font-semibold">Location:</span> Taiwan / India
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-10 tracking-tight">About Me</h2>

          <div className="bg-white rounded-3xl shadow-xl p-8 leading-8 text-lg">
            I am a Telecom Core and Policy Charging Specialist with over 13 years of experience in telecom core networks, subscriber migration, charging systems, and large-scale operator deployments across Asia and Africa. I specialize in PCRF/PCF architecture and integration, Diameter signaling, Packet Core operations, VoLTE and data service deployments, and CHF (Charging Function) implementations in modern 4G/5G converged networks.

            I have hands-on experience across both legacy and cloud-native core environments, including PCF/PCRF policy control, CHF-based charging architecture, tariff and rating configuration, and end-to-end charging system planning. I have been involved in designing and delivering online/offline charging solutions, policy-based charging control, and seamless integration of charging systems within operator ecosystems.

            I have also worked on VoLTE deployments and data service rollouts, covering IMS integration, session management, QoS enforcement, and subscriber experience optimization in LTE and VoLTE networks.

            I have successfully delivered critical telecom transformation programs for major operators including Taiwan Mobile, Vodafone, MTN, IDEA, and other global telecom providers, spanning EPC modernization and 5G core evolution.

            In addition, I have strong expertise in Kubernetes and OpenShift-based telecom cloud-native transformations, enabling scalable deployments of core network functions such as PCRF/PCF and CHF.

            Overall, I specialize in bridging traditional telecom core systems with modern cloud-native architectures, automation frameworks, and next-generation policy, charging, VoLTE, and data service platforms.
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-14 text-center tracking-tight">Core Expertise</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Telecom Core',
                skills: ['5G Core', 'EPC', 'IMS', 'PCRF/PCF', 'Diameter', 'AAA', 'Roaming']
              },
              {
                title: 'Cloud Native',
                skills: ['Kubernetes', 'OpenShift', 'CNF', 'Docker', 'Helm', 'Linux']
              },
              {
                title: 'Architecture & Delivery',
                skills: ['Subscriber Migration', 'Solution Design', 'Troubleshooting', 'OSS/BSS', 'Automation', 'Integration']
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-6">{card.title}</h3>

                <div className="flex flex-wrap gap-3">
                  {card.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-14 tracking-tight">Professional Experience</h2>

          <div className="space-y-10">

            <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-slate-900">
              <h3 className="text-3xl font-black mb-3">Solution Consultant — Shanda Information Co. LTD / YUWEI Information Technology</h3>
              <p className="text-slate-500 text-lg mb-5">November 2023 – Present | Taipei, Taiwan</p>

              <ul className="list-disc ml-6 space-y-3 text-lg leading-8 text-slate-700">
                <li>Working on Nokia telecom core and cloud-native projects involving PCRF/NPC, Diameter, EPC migration, and roaming migration activities.</li>
                <li>Successfully completed Taiwan Mobile North, South, and Central Nokia IMS PCRF upgrades with zero major outage.</li>
                <li>Provided troubleshooting and integration support for telecom core platforms and customer escalations.</li>
                <li>Worked on Kubernetes/OpenShift-based telecom infrastructure and CNF environments.</li>
                <li>Worked on Openstack-based telecom infrastructure and VNF environments.</li>
                <li>Supported telecom deployments involving OpenStack, VNFs, Linux, and cloud-native telecom infrastructure.</li>
                <li>Collaborated with customers, R&D teams, and global integration teams for deployment planning and issue resolution.</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-slate-800">
              <h3 className="text-3xl font-black mb-3">Technical Consultant — Relay Telecommunication Limited</h3>
              <p className="text-slate-500 text-lg mb-5">May 2020 – November 2023</p>

              <ul className="list-disc ml-6 space-y-3 text-lg leading-8 text-slate-700">
                <li>Assigned on Nokia-related telecom projects including PCRF, VoWiFi AAA, EPC migration, and subscriber migration activities.</li>
                <li>Led successful migrations involving approximately 10 million subscribers to Nokia Policy products.</li>
                <li>Worked on automation initiatives to improve operational efficiency and reduce deployment timelines.</li>
                <li>Provided global L3/L4 support and customer troubleshooting for telecom core platforms.</li>
                <li>Worked on telecom cloud infrastructure involving OpenStack, VNFs, Linux, and Kubernetes environments.</li>
                <li>Supported telecom integrations involving Diameter signaling, AAA, policy control, and roaming systems.</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-slate-700">
              <h3 className="text-3xl font-black mb-3">Module Lead — Mindtree</h3>
              <p className="text-slate-500 text-lg mb-5">April 2019 – June 2020 | Gurugram, India</p>

              <ul className="list-disc ml-6 space-y-3 text-lg leading-8 text-slate-700">
                <li>Worked on service management platforms and OSS/BSS systems for telecom environments.</li>
                <li>Handled AAA, PCRF, Radius, Diameter, charging systems, and telecom operational support activities.</li>
                <li>Monitored telecom applications and database servers for critical operational issues.</li>
                <li>Supported customer escalations and operational troubleshooting while maintaining SLA compliance.</li>
                <li>Worked on telecom platform optimization and integration activities.</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-slate-600">
              <h3 className="text-3xl font-black mb-3">Senior Intelligent Network Engineer — Ericsson</h3>
              <p className="text-slate-500 text-lg mb-5">May 2015 – January 2019 | India, Zambia, Ivory Coast</p>

              <ul className="list-disc ml-6 space-y-3 text-lg leading-8 text-slate-700">
                <li>Worked as Solution Integrator and Support Engineer for Ericsson Charging Systems.</li>
                <li>Handled Ericsson platforms including SDP, AIR, OCC, CCN, NGVS, and CSNMT.</li>
                <li>Successfully completed charging system swap and online charging system migrations from Huawei to Ericsson platforms.</li>
                <li>Worked on MTN Zambia and MTN Ivory Coast telecom deployments and integrations.</li>
                <li>Handled customer support, troubleshooting, deployment planning, and telecom integrations.</li>
                <li>Worked on SAPC integrations, charging systems, policy control, and telecom core platforms.</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-slate-500">
              <h3 className="text-3xl font-black mb-3">Technical Support Engineer — ZTE Telecom</h3>
              <p className="text-slate-500 text-lg mb-5">July 2013 – April 2015 | Chandigarh, India</p>

              <ul className="list-disc ml-6 space-y-3 text-lg leading-8 text-slate-700">
                <li>Supported ZTE Intelligent Network and Online Charging Systems for IDEA Punjab telecom operations.</li>
                <li>Worked on ZXIN10 product involving Diameter, IN systems, billing integrations, and subscriber routing.</li>
                <li>Handled system upgrades, maintenance, troubleshooting, cluster management, and operational support.</li>
                <li>Managed telecom operations involving UNIX, Linux, Windows servers, backups, and security policies.</li>
                <li>Successfully completed IDEA IN/OCS optimization project with zero outage and received customer appreciation.</li>
                <li>Worked on hardware installations, system expansions, telecom integrations, and customer issue resolution.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>

          <p className="text-xl text-gray-300 mb-10">
            Open to Cloud-Native Packet Core, Telecom Architecture, and CNS opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg">
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="/SAURABH_BAJPAI_CV.pdf"
                target="_blank"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 px-6 py-4 text-lg font-bold shadow-xl hover:scale-105 transition-transform duration-300"
              >
                Download Resume PDF
              </a>
            </div>

            <p className="mt-8">saurabh_bajpai@hotmail.com</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg">
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p>linkedin.com/in/saurabh-bajpai</p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg">
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p>Taipei, Taiwan / India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
