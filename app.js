// NIST 800-171 Rev. 3 Controls Tracker Application

// Complete NIST 800-171 Rev. 3 Controls Data
const controlsData = {
    "AC": {
        name: "Access Control",
        description: "Controls access to systems and information to protect the confidentiality of CUI.",
        controls: [
            {
                id: "03.01.01",
                title: "Account Management",
                description: "Manage system accounts including creation, enabling, modification, disabling, and removal.",
                requirement: "a. Define the types of system accounts allowed and prohibited.\nb. Create, enable, modify, disable, and remove system accounts in accordance with policy, procedures, prerequisites, and criteria.\nc. Specify: 1. Authorized users of the system, 2. Group and role membership, and 3. Access authorizations (i.e., privileges) for each account.\nd. Authorize access to the system based on: 1. A valid access authorization and 2. Intended system usage.\ne. Monitor the use of system accounts.\nf. Disable system accounts when: 1. The accounts have expired, 2. The accounts have been inactive for [Assignment: organization-defined time period], 3. The accounts are no longer associated with a user or individual, 4. The accounts are in violation of organizational policy, or 5. Significant risks associated with individuals are discovered.\ng. Notify account managers and designated personnel or roles within: 1. [Assignment: organization-defined time period] when accounts are no longer required. 2. [Assignment: organization-defined time period] when users are terminated or transferred. 3. [Assignment: organization-defined time period] when system usage or the need-to-know changes for an individual.\nh. Require that users log out of the system after [Assignment: organization-defined time period] of expected inactivity or when [Assignment: organization-defined circumstances].",
                status: "not-started"
            },
            {
                id: "03.01.02",
                title: "Access Enforcement",
                description: "Enforce approved authorizations for logical access to CUI and system resources in accordance with applicable access control policies.",
                requirement: "Enforce approved authorizations for logical access to CUI and system resources in accordance with applicable access control policies.",
                status: "not-started"
            },
            {
                id: "03.01.03",
                title: "Information Flow Enforcement",
                description: "Enforce approved authorizations for controlling the flow of CUI within the system and between connected systems.",
                requirement: "Enforce approved authorizations for controlling the flow of CUI within the system and between connected systems.",
                status: "not-started"
            },
            {
                id: "03.01.04",
                title: "Separation of Duties",
                description: "Separate duties of individuals to reduce the risk of malevolent activity without collusion.",
                requirement: "a. Identify the duties of individuals requiring separation.\nb. Define system access authorizations to support separation of duties.",
                status: "not-started"
            },
            {
                id: "03.01.05",
                title: "Least Privilege",
                description: "Employ the principle of least privilege, including for specific security functions and privileged accounts.",
                requirement: "a. Allow only authorized system access for users (or processes acting on behalf of users) that is necessary to accomplish assigned organizational tasks.\nb. Authorize access to [Assignment: organization-defined security functions] and [Assignment: organization-defined security-relevant information].\nc. Review the privileges assigned to roles or classes of users [Assignment: organization-defined frequency] to validate the need for such privileges.\nd. Reassign or remove privileges, as necessary.",
                status: "not-started"
            },
            {
                id: "03.01.06",
                title: "Least Privilege – Privileged Accounts",
                description: "Restrict privileged accounts on the system to specific personnel or roles.",
                requirement: "a. Restrict privileged accounts on the system to [Assignment: organization-defined personnel or roles].\nb. Require that users (or roles) with privileged accounts use non-privileged accounts when accessing non-security functions or non-security information.",
                status: "not-started"
            },
            {
                id: "03.01.07",
                title: "Least Privilege – Privileged Functions",
                description: "Prevent non-privileged users from executing privileged functions and log the execution of privileged functions.",
                requirement: "a. Prevent non-privileged users from executing privileged functions.\nb. Log the execution of privileged functions.",
                status: "not-started"
            },
            {
                id: "03.01.08",
                title: "Unsuccessful Logon Attempts",
                description: "Enforce a limit on consecutive invalid logon attempts and automatically lock accounts or nodes when exceeded.",
                requirement: "a. Enforce a limit of [Assignment: organization-defined number] consecutive invalid logon attempts by a user during a [Assignment: organization-defined time period].\nb. Automatically [Selection (one or more): lock the account or node for an [Assignment: organization-defined time period]; lock the account or node until released by an administrator; delay next logon prompt; notify system administrator; take other action] when the maximum number of unsuccessful attempts is exceeded.",
                status: "not-started"
            },
            {
                id: "03.01.09",
                title: "System Use Notification",
                description: "Display a system use notification message with privacy and security notices before granting access.",
                requirement: "Display a system use notification message with privacy and security notices consistent with applicable CUI rules before granting access to the system.",
                status: "not-started"
            },
            {
                id: "03.01.10",
                title: "Device Lock",
                description: "Prevent access to the system by initiating a device lock after a period of inactivity.",
                requirement: "a. Prevent access to the system by [Selection (one or more): initiating a device lock after [Assignment: organization-defined time period] of inactivity; requiring the user to initiate a device lock before leaving the system unattended].\nb. Retain the device lock until the user reestablishes access using established identification and authentication procedures.\nc. Conceal, via the device lock, information previously visible on the display with a publicly viewable image.",
                status: "not-started"
            },
            {
                id: "03.01.11",
                title: "Session Termination",
                description: "Terminate a user session automatically after organization-defined conditions or trigger events.",
                requirement: "Terminate a user session automatically after [Assignment: organization-defined conditions or trigger events requiring session disconnect].",
                status: "not-started"
            },
            {
                id: "03.01.12",
                title: "Remote Access",
                description: "Establish usage restrictions, configuration requirements, and connection requirements for remote access.",
                requirement: "a. Establish usage restrictions, configuration requirements, and connection requirements for each type of allowable remote system access.\nb. Authorize each type of remote system access prior to establishing such connections.\nc. Route remote access to the system through authorized and managed access control points.\nd. Authorize the remote execution of privileged commands and remote access to security-relevant information.",
                status: "not-started"
            },
            {
                id: "03.01.16",
                title: "Wireless Access",
                description: "Establish usage restrictions and requirements for wireless access to the system.",
                requirement: "a. Establish usage restrictions, configuration requirements, and connection requirements for each type of wireless access to the system.\nb. Authorize each type of wireless access to the system prior to establishing such connections.\nc. Disable, when not intended for use, wireless networking capabilities prior to issuance and deployment.\nd. Protect wireless access to the system using authentication and encryption.",
                status: "not-started"
            },
            {
                id: "03.01.18",
                title: "Access Control for Mobile Devices",
                description: "Establish usage restrictions and implement encryption to protect CUI on mobile devices.",
                requirement: "a. Establish usage restrictions, configuration requirements, and connection requirements for mobile devices.\nb. Authorize the connection of mobile devices to the system.\nc. Implement full-device or container-based encryption to protect the confidentiality of CUI on mobile devices.",
                status: "not-started"
            },
            {
                id: "03.01.20",
                title: "Use of External Systems",
                description: "Establish requirements for use of external systems to access organizational systems.",
                requirement: "a. Prohibit the use of external systems unless the systems are specifically authorized.\nb. Establish the following security requirements to be satisfied on external systems prior to allowing use of or access to those systems by authorized individuals: [Assignment: organization-defined security requirements].\nc. Permit authorized individuals to use external systems to access the organizational system or to process, store, or transmit CUI only after: 1. Verifying that the security requirements on the external systems as specified in the organization's system security plans have been satisfied and 2. Retaining approved system connection or processing agreements with the organizational entities hosting the external systems.\nd. Restrict the use of organization-controlled portable storage devices by authorized individuals on external systems.",
                status: "not-started"
            },
            {
                id: "03.01.22",
                title: "Publicly Accessible Content",
                description: "Train authorized individuals and review publicly accessible systems for CUI.",
                requirement: "a. Train authorized individuals to ensure that publicly accessible information does not contain CUI.\nb. Review the content on publicly accessible systems for CUI and remove such information, if discovered.",
                status: "not-started"
            }
        ]
    },
    "AT": {
        name: "Awareness and Training",
        description: "Ensure personnel are trained in their security responsibilities.",
        controls: [
            {
                id: "03.02.01",
                title: "Literacy Training and Awareness",
                description: "Provide security literacy training to system users including insider threat awareness.",
                requirement: "a. Provide security literacy training to system users: 1. As part of initial training for new users and [Assignment: organization-defined frequency] thereafter, 2. When required by system changes or following [Assignment: organization-defined events], and 3. On recognizing and reporting indicators of insider threat, social engineering, and social mining.\nb. Update security literacy training content [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].",
                status: "not-started"
            },
            {
                id: "03.02.02",
                title: "Role-Based Training",
                description: "Provide role-based security training to organizational personnel.",
                requirement: "a. Provide role-based security training to organizational personnel: 1. Before authorizing access to the system or CUI, before performing assigned duties, and [Assignment: organization-defined frequency] thereafter 2. When required by system changes or following [Assignment: organization-defined events].\nb. Update role-based training content [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].",
                status: "not-started"
            }
        ]
    },
    "AU": {
        name: "Audit and Accountability",
        description: "Create, protect, and retain system audit records.",
        controls: [
            {
                id: "03.03.01",
                title: "Event Logging",
                description: "Specify and log selected event types within the system.",
                requirement: "a. Specify the following event types selected for logging within the system: [Assignment: organization-defined event types].\nb. Review and update the event types selected for logging [Assignment: organization-defined frequency].",
                status: "not-started"
            },
            {
                id: "03.03.02",
                title: "Audit Record Content",
                description: "Include specified content in audit records.",
                requirement: "a. Include the following content in audit records: 1. What type of event occurred 2. When the event occurred 3. Where the event occurred 4. Source of the event 5. Outcome of the event 6. Identity of the individuals, subjects, objects, or entities associated with the event\nb. Provide additional information for audit records as needed.",
                status: "not-started"
            },
            {
                id: "03.03.03",
                title: "Audit Record Generation",
                description: "Generate audit records for specified event types and retain for specified time period.",
                requirement: "a. Generate audit records for the selected event types and audit record content specified in 03.03.01 and 03.03.02.\nb. Retain audit records for a time period consistent with the records retention policy.",
                status: "not-started"
            },
            {
                id: "03.03.04",
                title: "Response to Audit Logging Process Failures",
                description: "Alert personnel and take additional actions in response to audit logging process failures.",
                requirement: "a. Alert organizational personnel or roles within [Assignment: organization-defined time period] in the event of an audit logging process failure.\nb. Take the following additional actions: [Assignment: organization-defined additional actions].",
                status: "not-started"
            },
            {
                id: "03.03.05",
                title: "Audit Record Review, Analysis, and Reporting",
                description: "Review and analyze system audit records and report findings.",
                requirement: "a. Review and analyze system audit records [Assignment: organization-defined frequency] for indications and the potential impact of inappropriate or unusual activity.\nb. Report findings to organizational personnel or roles.\nc. Analyze and correlate audit records across different repositories to gain organization-wide situational awareness.",
                status: "not-started"
            },
            {
                id: "03.03.06",
                title: "Audit Record Reduction and Report Generation",
                description: "Implement capability for audit record reduction and report generation.",
                requirement: "a. Implement an audit record reduction and report generation capability that supports audit record review, analysis, reporting requirements, and after-the-fact investigations of incidents.\nb. Preserve the original content and time ordering of audit records.",
                status: "not-started"
            },
            {
                id: "03.03.07",
                title: "Time Stamps",
                description: "Use internal system clocks to generate time stamps for audit records.",
                requirement: "a. Use internal system clocks to generate time stamps for audit records.\nb. Record time stamps for audit records that meet [Assignment: organization-defined granularity of time measurement] and that use Coordinated Universal Time (UTC), have a fixed local time offset from UTC, or include the local time offset as part of the time stamp.",
                status: "not-started"
            },
            {
                id: "03.03.08",
                title: "Protection of Audit Information",
                description: "Protect audit information and audit logging tools from unauthorized access.",
                requirement: "a. Protect audit information and audit logging tools from unauthorized access, modification, and deletion.\nb. Authorize access to management of audit logging functionality to only a subset of privileged users or roles.",
                status: "not-started"
            }
        ]
    },
    "CA": {
        name: "Assessment, Authorization, and Monitoring",
        description: "Assess, authorize, and monitor the security of organizational systems.",
        controls: [
            {
                id: "03.12.01",
                title: "Security Assessment",
                description: "Assess the security requirements for the system and its environment of operation.",
                requirement: "Assess the security requirements for the system and its environment of operation [Assignment: organization-defined frequency] to determine if the requirements have been satisfied.",
                status: "not-started"
            },
            {
                id: "03.12.02",
                title: "Plan of Action and Milestones",
                description: "Develop and update a plan of action and milestones for the system.",
                requirement: "a. Develop a plan of action and milestones for the system: 1. To document the planned remediation actions to correct weaknesses or deficiencies noted during security assessments and 2. To reduce or eliminate known system vulnerabilities.\nb. Update the existing plan of action and milestones based on the findings from: 1. Security assessments, 2. Audits or reviews, and 3. Continuous monitoring activities.",
                status: "not-started"
            },
            {
                id: "03.12.03",
                title: "Continuous Monitoring",
                description: "Develop and implement a system-level continuous monitoring strategy.",
                requirement: "Develop and implement a system-level continuous monitoring strategy that includes ongoing monitoring and security assessments.",
                status: "not-started"
            },
            {
                id: "03.12.05",
                title: "Information Exchange",
                description: "Approve and manage the exchange of CUI between systems using agreements.",
                requirement: "a. Approve and manage the exchange of CUI between the system and other systems using [Selection (one or more): interconnection security agreements; information exchange security agreements; memoranda of understanding or agreement; service-level agreements; user agreements; non-disclosure agreements; other types of agreements].\nb. Document interface characteristics, security requirements, and responsibilities for each system as part of the exchange agreements.\nc. Review and update the exchange agreements [Assignment: organization-defined frequency].",
                status: "not-started"
            }
        ]
    },
    "CM": {
        name: "Configuration Management",
        description: "Establish and maintain baseline configurations and inventories.",
        controls: [
            {
                id: "03.04.01",
                title: "Baseline Configuration",
                description: "Develop and maintain a current baseline configuration of the system.",
                requirement: "a. Develop and maintain under configuration control, a current baseline configuration of the system.\nb. Review and update the baseline configuration of the system [Assignment: organization-defined frequency] and when system components are installed or modified.",
                status: "not-started"
            },
            {
                id: "03.04.02",
                title: "Configuration Settings",
                description: "Establish and document configuration settings for the system.",
                requirement: "a. Establish, document, and implement the following configuration settings for the system that reflect the most restrictive mode consistent with operational requirements: [Assignment: organization-defined configuration settings].\nb. Identify, document, and approve any deviations from established configuration settings.",
                status: "not-started"
            },
            {
                id: "03.04.03",
                title: "Configuration Change Control",
                description: "Control changes to the system through a formal change control process.",
                requirement: "a. Define the types of changes to the system that are configuration-controlled.\nb. Review proposed configuration-controlled changes to the system, and approve or disapprove such changes with explicit consideration for security impacts.\nc. Implement and document approved configuration-controlled changes to the system.\nd. Monitor and review activities associated with configuration-controlled changes to the system.",
                status: "not-started"
            },
            {
                id: "03.04.04",
                title: "Impact Analyses",
                description: "Analyze changes to the system to determine potential security impacts.",
                requirement: "a. Analyze changes to the system to determine potential security impacts prior to change implementation.\nb. Verify that the security requirements for the system continue to be satisfied after the system changes have been implemented.",
                status: "not-started"
            },
            {
                id: "03.04.05",
                title: "Access Restrictions for Change",
                description: "Define and enforce physical and logical access restrictions for changes to the system.",
                requirement: "Define, document, approve, and enforce physical and logical access restrictions associated with changes to the system.",
                status: "not-started"
            },
            {
                id: "03.04.06",
                title: "Least Functionality",
                description: "Configure the system to provide only mission-essential capabilities.",
                requirement: "a. Configure the system to provide only mission-essential capabilities.\nb. Prohibit or restrict use of the following functions, ports, protocols, connections, and services: [Assignment: organization-defined functions, ports, protocols, connections, and services].\nc. Review the system [Assignment: organization-defined frequency] to identify unnecessary or nonsecure functions, ports, protocols, connections, and services.\nd. Disable or remove functions, ports, protocols, connections, and services that are unnecessary or nonsecure.",
                status: "not-started"
            },
            {
                id: "03.04.08",
                title: "Authorized Software – Allow by Exception",
                description: "Identify and implement a deny-all, allow-by-exception policy for software execution.",
                requirement: "a. Identify software programs authorized to execute on the system.\nb. Implement a deny-all, allow-by-exception policy for the execution of authorized software programs on the system.\nc. Review and update the list of authorized software programs [Assignment: organization-defined frequency].",
                status: "not-started"
            },
            {
                id: "03.04.10",
                title: "System Component Inventory",
                description: "Develop and maintain an inventory of system components.",
                requirement: "a. Develop and document an inventory of system components.\nb. Review and update the system component inventory [Assignment: organization-defined frequency].\nc. Update the system component inventory as part of installations, removals, and system updates.",
                status: "not-started"
            },
            {
                id: "03.04.11",
                title: "Information Location",
                description: "Identify and document the location of CUI and system components.",
                requirement: "a. Identify and document the location of CUI and the system components on which the information is processed and stored.\nb. Document changes to the system or system component location where CUI is processed and stored.",
                status: "not-started"
            },
            {
                id: "03.04.12",
                title: "System and Component Configuration for High-Risk Areas",
                description: "Issue systems with specific configurations for high-risk locations.",
                requirement: "a. Issue systems or system components with the following configurations to individuals traveling to high-risk locations: [Assignment: organization-defined system configurations].\nb. Apply the following security requirements to the systems or components when the individuals return from travel: [Assignment: organization-defined security requirements].",
                status: "not-started"
            }
        ]
    },
    "IA": {
        name: "Identification and Authentication",
        description: "Identify and authenticate users and devices.",
        controls: [
            {
                id: "03.05.01",
                title: "User Identification and Authentication",
                description: "Uniquely identify and authenticate system users.",
                requirement: "a. Uniquely identify and authenticate system users, and associate that unique identification with processes acting on behalf of those users.\nb. Re-authenticate users when [Assignment: organization-defined circumstances or situations requiring re-authentication].",
                status: "not-started"
            },
            {
                id: "03.05.02",
                title: "Device Identification and Authentication",
                description: "Uniquely identify and authenticate devices before establishing system connections.",
                requirement: "Uniquely identify and authenticate [Assignment: organization-defined devices or types of devices] before establishing a system connection.",
                status: "not-started"
            },
            {
                id: "03.05.03",
                title: "Multi-Factor Authentication",
                description: "Implement multi-factor authentication for access to privileged and non-privileged accounts.",
                requirement: "Implement multi-factor authentication for access to privileged and non-privileged accounts.",
                status: "not-started"
            },
            {
                id: "03.05.04",
                title: "Replay-Resistant Authentication",
                description: "Implement replay-resistant authentication mechanisms.",
                requirement: "Implement replay-resistant authentication mechanisms for access to privileged and non-privileged accounts.",
                status: "not-started"
            },
            {
                id: "03.05.05",
                title: "Identifier Management",
                description: "Manage individual, group, role, service, and device identifiers.",
                requirement: "a. Receive authorization from organizational personnel or roles to assign an individual, group, role, service, or device identifier.\nb. Select and assign an identifier that identifies an individual, group, role, service, or device.\nc. Prevent the reuse of identifiers for [Assignment: organization-defined time period].\nd. Manage individual identifiers by uniquely identifying each individual as [Assignment: organization-defined characteristic identifying individual status].",
                status: "not-started"
            },
            {
                id: "03.05.07",
                title: "Password Management",
                description: "Maintain list of compromised passwords and enforce composition rules.",
                requirement: "a. Maintain a list of commonly-used, expected, or compromised passwords, and update the list [Assignment: organization-defined frequency] and when organizational passwords are suspected to have been compromised.\nb. Verify that passwords are not found on the list of commonly used, expected, or compromised passwords when users create or update passwords.\nc. Transmit passwords only over cryptographically protected channels.\nd. Store passwords in a cryptographically protected form.\ne. Select a new password upon first use after account recovery.\nf. Enforce the following composition and complexity rules for passwords: [Assignment: organization-defined composition and complexity rules].",
                status: "not-started"
            },
            {
                id: "03.05.11",
                title: "Authentication Feedback",
                description: "Obscure feedback of authentication information during the authentication process.",
                requirement: "Obscure feedback of authentication information during the authentication process.",
                status: "not-started"
            },
            {
                id: "03.05.12",
                title: "Authenticator Management",
                description: "Manage authenticators including initial distribution and lifecycle management.",
                requirement: "a. Verify the identity of the individual, group, role, service, or device receiving the authenticator as part of the initial authenticator distribution.\nb. Establish initial authenticator content for any authenticators issued by the organization.\nc. Establish and implement administrative procedures for initial authenticator distribution; for lost, compromised, or damaged authenticators; and for revoking authenticators.\nd. Change default authenticators at first use.\ne. Change or refresh authenticators [Assignment: organization-defined frequency] or when the following events occur: [Assignment: organization-defined events].\nf. Protect authenticator content from unauthorized disclosure and modification.",
                status: "not-started"
            }
        ]
    },
    "IR": {
        name: "Incident Response",
        description: "Establish incident response capability including preparation, detection, analysis, containment, eradication, and recovery.",
        controls: [
            {
                id: "03.06.01",
                title: "Incident Handling",
                description: "Implement an incident-handling capability consistent with the incident response plan.",
                requirement: "Implement an incident-handling capability that is consistent with the incident response plan and includes preparation, detection and analysis, containment, eradication, and recovery.",
                status: "not-started"
            },
            {
                id: "03.06.02",
                title: "Incident Monitoring, Reporting, and Response Assistance",
                description: "Track, document, and report system security incidents.",
                requirement: "a. Track and document system security incidents.\nb. Report suspected incidents to the organizational incident response capability within [Assignment: organization-defined time period].\nc. Report incident information to [Assignment: organization-defined authorities].\nd. Provide an incident response support resource that offers advice and assistance to system users on handling and reporting incidents.",
                status: "not-started"
            },
            {
                id: "03.06.03",
                title: "Incident Response Testing",
                description: "Test the effectiveness of the incident response capability.",
                requirement: "Test the effectiveness of the incident response capability [Assignment: organization-defined frequency].",
                status: "not-started"
            },
            {
                id: "03.06.04",
                title: "Incident Response Training",
                description: "Provide incident response training to system users.",
                requirement: "a. Provide incident response training to system users consistent with assigned roles and responsibilities: 1. Within [Assignment: organization-defined time period] of assuming an incident response role or responsibility or acquiring system access, 2. When required by system changes, and 3. [Assignment: organization-defined frequency] thereafter.\nb. Review and update incident response training content [Assignment: organization-defined frequency] and following [Assignment: organization-defined events].",
                status: "not-started"
            },
            {
                id: "03.06.05",
                title: "Incident Response Plan",
                description: "Develop, distribute, and update an incident response plan.",
                requirement: "a. Develop an incident response plan that: 1. Provides the organization with a roadmap for implementing its incident response capability, 2. Describes the structure and organization of the incident response capability, 3. Provides a high-level approach for how the incident response capability fits into the overall organization, 4. Defines reportable incidents, 5. Addresses the sharing of incident information, and 6. Designates responsibilities to organizational entities, personnel, or roles.\nb. Distribute copies of the incident response plan to designated incident response personnel (identified by name and/or by role) and organizational elements.\nc. Update the incident response plan to address system and organizational changes or problems encountered during plan implementation, execution, or testing.\nd. Protect the incident response plan from unauthorized disclosure.",
                status: "not-started"
            }
        ]
    },
    "MA": {
        name: "Maintenance",
        description: "Perform periodic and timely maintenance on systems and system components.",
        controls: [
            {
                id: "03.07.04",
                title: "Maintenance Tools",
                description: "Approve, control, and monitor the use of system maintenance tools.",
                requirement: "a. Approve, control, and monitor the use of system maintenance tools.\nb. Check media with diagnostic and test programs for malicious code before it is used in the system.\nc. Prevent the removal of system maintenance equipment containing CUI by verifying that there is no CUI on the equipment, sanitizing or destroying the equipment, or retaining the equipment within the facility.",
                status: "not-started"
            },
            {
                id: "03.07.05",
                title: "Nonlocal Maintenance",
                description: "Approve and monitor nonlocal maintenance and diagnostic activities.",
                requirement: "a. Approve and monitor nonlocal maintenance and diagnostic activities.\nb. Implement multi-factor authentication and replay resistance in the establishment of nonlocal maintenance and diagnostic sessions.\nc. Terminate session and network connections when nonlocal maintenance is completed.",
                status: "not-started"
            },
            {
                id: "03.07.06",
                title: "Maintenance Personnel",
                description: "Establish a process for maintenance personnel authorization.",
                requirement: "a. Establish a process for maintenance personnel authorization.\nb. Maintain a list of authorized maintenance organizations or personnel.\nc. Verify that non-escorted personnel who perform maintenance on the system possess the required access authorizations.\nd. Designate organizational personnel with required access authorizations and technical competence to supervise the maintenance activities of personnel who do not possess the required access authorizations.",
                status: "not-started"
            }
        ]
    },
    "MP": {
        name: "Media Protection",
        description: "Protect system media containing CUI.",
        controls: [
            {
                id: "03.08.01",
                title: "Media Storage",
                description: "Physically control and securely store system media that contain CUI.",
                requirement: "Physically control and securely store system media that contain CUI.",
                status: "not-started"
            },
            {
                id: "03.08.02",
                title: "Media Access",
                description: "Restrict access to CUI on system media to authorized personnel or roles.",
                requirement: "Restrict access to CUI on system media to authorized personnel or roles.",
                status: "not-started"
            },
            {
                id: "03.08.03",
                title: "Media Sanitization",
                description: "Sanitize system media containing CUI prior to disposal, release, or reuse.",
                requirement: "Sanitize system media that contain CUI prior to disposal, release out of organizational control, or release for reuse.",
                status: "not-started"
            },
            {
                id: "03.08.04",
                title: "Media Marking",
                description: "Mark system media containing CUI to indicate distribution limitations and handling caveats.",
                requirement: "Mark system media that contain CUI to indicate distribution limitations, handling caveats, and applicable CUI markings.",
                status: "not-started"
            },
            {
                id: "03.08.05",
                title: "Media Transport",
                description: "Protect and control system media containing CUI during transport.",
                requirement: "a. Protect and control system media that contain CUI during transport outside of controlled areas.\nb. Maintain accountability of system media that contain CUI during transport outside of controlled areas.\nc. Document activities associated with the transport of system media that contain CUI.",
                status: "not-started"
            },
            {
                id: "03.08.07",
                title: "Media Use",
                description: "Restrict or prohibit the use of types of system media on systems or system components.",
                requirement: "a. Restrict or prohibit the use of [Assignment: organization-defined types of system media].\nb. Prohibit the use of removable system media without an identifiable owner.",
                status: "not-started"
            },
            {
                id: "03.08.09",
                title: "System Backup – Cryptographic Protection",
                description: "Protect the confidentiality of backup information using cryptographic mechanisms.",
                requirement: "a. Protect the confidentiality of backup information.\nb. Implement cryptographic mechanisms to prevent the unauthorized disclosure of CUI at backup storage locations.",
                status: "not-started"
            }
        ]
    },
    "PE": {
        name: "Physical Protection",
        description: "Limit physical access to systems, equipment, and operating environments.",
        controls: [
            {
                id: "03.10.01",
                title: "Physical Access Authorizations",
                description: "Develop, approve, and maintain a list of individuals with authorized access to the facility.",
                requirement: "a. Develop, approve, and maintain a list of individuals with authorized access to the facility where the system resides.\nb. Issue authorization credentials for facility access.\nc. Review the facility access list [Assignment: organization-defined frequency].\nd. Remove individuals from the facility access list when access is no longer required.",
                status: "not-started"
            },
            {
                id: "03.10.02",
                title: "Monitoring Physical Access",
                description: "Monitor physical access to the facility containing the system.",
                requirement: "a. Monitor physical access to the facility where the system resides to detect and respond to physical security incidents.\nb. Review physical access logs [Assignment: organization-defined frequency] and upon occurrence of [Assignment: organization-defined events or potential indications of events].",
                status: "not-started"
            },
            {
                id: "03.10.06",
                title: "Alternate Work Site",
                description: "Determine alternate work sites allowed for use by employees and employ security requirements.",
                requirement: "a. Determine alternate work sites allowed for use by employees.\nb. Employ the following security requirements at alternate work sites: [Assignment: organization-defined security requirements].",
                status: "not-started"
            },
            {
                id: "03.10.07",
                title: "Physical Access Control",
                description: "Enforce physical access authorizations at entry and exit points to the facility.",
                requirement: "a. Enforce physical access authorizations at entry and exit points to the facility where the system resides by: 1. Verifying individual physical access authorizations before granting access to the facility and 2. Controlling ingress and egress with physical access control systems, devices, or guards.\nb. Maintain physical access audit logs for entry or exit points.\nc. Escort visitors, and control visitor activity.\nd. Secure keys, combinations, and other physical access devices.\ne. Control physical access to output devices to prevent unauthorized individuals from obtaining access to CUI.",
                status: "not-started"
            },
            {
                id: "03.10.08",
                title: "Access Control for Transmission",
                description: "Control physical access to system distribution and transmission lines.",
                requirement: "Control physical access to system distribution and transmission lines within organizational facilities.",
                status: "not-started"
            }
        ]
    },
    "PS": {
        name: "Personnel Security",
        description: "Ensure that personnel are trustworthy and meet established security criteria.",
        controls: [
            {
                id: "03.09.01",
                title: "Personnel Screening",
                description: "Screen individuals prior to authorizing access to the system.",
                requirement: "a. Screen individuals prior to authorizing access to the system.\nb. Rescreen individuals in accordance with [Assignment: organization-defined conditions requiring rescreening].",
                status: "not-started"
            },
            {
                id: "03.09.02",
                title: "Personnel Termination and Transfer",
                description: "Manage personnel termination and transfer processes.",
                requirement: "a. When individual employment is terminated: 1. Disable system access within [Assignment: organization-defined time period], 2. Terminate or revoke authenticators and credentials associated with the individual, and 3. Retrieve security-related system property.\nb. When individuals are reassigned or transferred to other positions in the organization: 1. Review and confirm the ongoing operational need for current logical and physical access authorizations to the system and facility, and 2. Modify access authorization to correspond with any changes in operational need.",
                status: "not-started"
            }
        ]
    },
    "RA": {
        name: "Risk Assessment",
        description: "Assess risks to organizational operations, assets, and individuals.",
        controls: [
            {
                id: "03.11.01",
                title: "Risk Assessment",
                description: "Assess the risk of unauthorized disclosure resulting from processing, storage, or transmission of CUI.",
                requirement: "a. Assess the risk (including supply chain risk) of unauthorized disclosure resulting from the processing, storage, or transmission of CUI.\nb. Update risk assessments [Assignment: organization-defined frequency].",
                status: "not-started"
            },
            {
                id: "03.11.02",
                title: "Vulnerability Monitoring and Scanning",
                description: "Monitor and scan the system for vulnerabilities and remediate them within specified response times.",
                requirement: "a. Monitor and scan the system for vulnerabilities [Assignment: organization-defined frequency] and when new vulnerabilities affecting the system are identified.\nb. Remediate system vulnerabilities within [Assignment: organization-defined response times].\nc. Update system vulnerabilities to be scanned [Assignment: organization-defined frequency] and when new vulnerabilities are identified and reported.",
                status: "not-started"
            },
            {
                id: "03.11.04",
                title: "Risk Response",
                description: "Respond to findings from security assessments, monitoring, and audits.",
                requirement: "Respond to findings from security assessments, monitoring, and audits.",
                status: "not-started"
            }
        ]
    },
    "SC": {
        name: "System and Communications Protection",
        description: "Monitor, control, and protect communications and system components.",
        controls: [
            {
                id: "03.13.01",
                title: "Boundary Protection",
                description: "Monitor and control communications at external and key internal interfaces.",
                requirement: "a. Monitor and control communications at external managed interfaces to the system and key internal managed interfaces within the system.\nb. Implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks.\nc. Connect to external systems only through managed interfaces that consist of boundary protection devices arranged in accordance with an organizational security architecture.",
                status: "not-started"
            },
            {
                id: "03.13.04",
                title: "Information in Shared System Resources",
                description: "Prevent unauthorized and unintended information transfer via shared system resources.",
                requirement: "Prevent unauthorized and unintended information transfer via shared system resources.",
                status: "not-started"
            },
            {
                id: "03.13.06",
                title: "Network Communications – Deny by Default – Allow by Exception",
                description: "Deny network communications traffic by default and allow by exception.",
                requirement: "Deny network communications traffic by default, and allow network communications traffic by exception.",
                status: "not-started"
            },
            {
                id: "03.13.08",
                title: "Transmission and Storage Confidentiality",
                description: "Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI.",
                requirement: "Implement cryptographic mechanisms to prevent the unauthorized disclosure of CUI during transmission and while in storage.",
                status: "not-started"
            },
            {
                id: "03.13.09",
                title: "Network Disconnect",
                description: "Terminate network connections at the end of the session or after a period of inactivity.",
                requirement: "Terminate the network connection associated with a communications session at the end of the session or after [Assignment: organization-defined time period] of inactivity.",
                status: "not-started"
            },
            {
                id: "03.13.10",
                title: "Cryptographic Key Establishment and Management",
                description: "Establish and manage cryptographic keys in accordance with key management requirements.",
                requirement: "Establish and manage cryptographic keys in the system in accordance with the following key management requirements: [Assignment: organization-defined requirements for key generation, distribution, storage, access, and destruction].",
                status: "not-started"
            },
            {
                id: "03.13.11",
                title: "Cryptographic Protection",
                description: "Implement cryptography to protect the confidentiality of CUI.",
                requirement: "Implement the following types of cryptography to protect the confidentiality of CUI: [Assignment: organization-defined types of cryptography].",
                status: "not-started"
            },
            {
                id: "03.13.12",
                title: "Collaborative Computing Devices and Applications",
                description: "Prohibit remote activation of collaborative computing devices with specified exceptions.",
                requirement: "a. Prohibit the remote activation of collaborative computing devices and applications with the following exceptions: [Assignment: organization-defined exceptions where remote activation is to be allowed].\nb. Provide an explicit indication of use to users physically present at the devices.",
                status: "not-started"
            },
            {
                id: "03.13.13",
                title: "Mobile Code",
                description: "Define acceptable mobile code and mobile code technologies.",
                requirement: "a. Define acceptable mobile code and mobile code technologies.\nb. Authorize, monitor, and control the use of mobile code.",
                status: "not-started"
            },
            {
                id: "03.13.15",
                title: "Session Authenticity",
                description: "Protect the authenticity of communications sessions.",
                requirement: "Protect the authenticity of communications sessions.",
                status: "not-started"
            }
        ]
    },
    "SI": {
        name: "System and Information Integrity",
        description: "Identify, report, and correct information and system flaws in a timely manner.",
        controls: [
            {
                id: "03.14.01",
                title: "Flaw Remediation",
                description: "Identify, report, and correct system flaws and install security-relevant updates.",
                requirement: "a. Identify, report, and correct system flaws.\nb. Install security-relevant software and firmware updates within [Assignment: organization-defined time period] of the release of the updates.",
                status: "not-started"
            },
            {
                id: "03.14.02",
                title: "Malicious Code Protection",
                description: "Implement malicious code protection mechanisms at system entry and exit points.",
                requirement: "a. Implement malicious code protection mechanisms at system entry and exit points to detect and eradicate malicious code.\nb. Update malicious code protection mechanisms as new releases are available in accordance with configuration management policies and procedures.\nc. Configure malicious code protection mechanisms to: 1. Perform scans of the system [Assignment: organization-defined frequency] and real-time scans of files from external sources at endpoints or system entry and exit points as the files are downloaded, opened, or executed; and 2. Block malicious code, quarantine malicious code, or take other mitigation actions in response to malicious code detection.",
                status: "not-started"
            },
            {
                id: "03.14.03",
                title: "Security Alerts, Advisories, and Directives",
                description: "Receive and generate security alerts, advisories, and directives as necessary.",
                requirement: "a. Receive system security alerts, advisories, and directives from external organizations on an ongoing basis.\nb. Generate and disseminate internal system security alerts, advisories, and directives, as necessary.",
                status: "not-started"
            },
            {
                id: "03.14.06",
                title: "System Monitoring",
                description: "Monitor the system to detect attacks, indicators of potential attacks, and unauthorized connections.",
                requirement: "a. Monitor the system to detect: 1. Attacks and indicators of potential attacks and 2. Unauthorized connections.\nb. Identify unauthorized use of the system.\nc. Monitor inbound and outbound communications traffic to detect unusual or unauthorized activities or conditions.",
                status: "not-started"
            },
            {
                id: "03.14.08",
                title: "Information Management and Retention",
                description: "Manage and retain CUI in accordance with applicable requirements.",
                requirement: "Manage and retain CUI within the system and CUI output from the system in accordance with applicable laws, Executive Orders, directives, regulations, policies, standards, guidelines, and operational requirements.",
                status: "not-started"
            }
        ]
    },
    "PL": {
        name: "Planning",
        description: "Develop, document, periodically update, and implement security plans for organizational systems.",
        controls: [
            {
                id: "03.15.01",
                title: "Policy and Procedures",
                description: "Develop, document, and disseminate policies and procedures for protecting CUI.",
                requirement: "a. Develop, document, and disseminate to organizational personnel or roles the policies and procedures needed to satisfy the security requirements for the protection of CUI.\nb. Review and update policies and procedures [Assignment: organization-defined frequency].",
                status: "not-started"
            },
            {
                id: "03.15.02",
                title: "System Security Plan",
                description: "Develop, review, update, and protect a system security plan.",
                requirement: "a. Develop a system security plan that: 1. Defines the constituent system components; 2. Identifies the information types processed, stored, and transmitted by the system; 3. Describes specific threats to the system that are of concern to the organization; 4. Describes the operational environment for the system and any dependencies on or connections to other systems or system components; 5. Provides an overview of the security requirements for the system; 6. Describes the safeguards in place or planned for meeting the security requirements; 7. Identifies individuals that fulfill system roles and responsibilities; and 8. Includes other relevant information necessary for the protection of CUI.\nb. Review and update the system security plan [Assignment: organization-defined frequency].\nc. Protect the system security plan from unauthorized disclosure.",
                status: "not-started"
            },
            {
                id: "03.15.03",
                title: "Rules of Behavior",
                description: "Establish rules that describe responsibilities and expected behavior for system usage.",
                requirement: "a. Establish rules that describe the responsibilities and expected behavior for system usage and protecting CUI.\nb. Provide rules to individuals who require access to the system.\nc. Receive a documented acknowledgement from individuals indicating that they have read, understand, and agree to abide by the rules of behavior before authorizing access to CUI and the system.\nd. Review and update the rules of behavior [Assignment: organization-defined frequency].",
                status: "not-started"
            }
        ]
    },
    "SA": {
        name: "System and Services Acquisition",
        description: "Allocate sufficient resources and apply system security engineering principles.",
        controls: [
            {
                id: "03.16.01",
                title: "Security Engineering Principles",
                description: "Apply systems security engineering principles to development or modification of systems.",
                requirement: "Apply the following systems security engineering principles to the development or modification of the system and system components: [Assignment: organization-defined systems security engineering principles].",
                status: "not-started"
            },
            {
                id: "03.16.02",
                title: "Unsupported System Components",
                description: "Replace system components when support is no longer available from the developer, vendor, or manufacturer.",
                requirement: "a. Replace system components when support for the components is no longer available from the developer, vendor, or manufacturer.\nb. Provide options for risk mitigation or alternative sources for continued support for unsupported components that cannot be replaced.",
                status: "not-started"
            },
            {
                id: "03.16.03",
                title: "External System Services",
                description: "Require external service providers to comply with organizational security requirements.",
                requirement: "a. Require the providers of external system services used for the processing, storage, or transmission of CUI to comply with the following security requirements: [Assignment: organization-defined security requirements].\nb. Define and document user roles and responsibilities with regard to external system services, including shared responsibilities with external service providers.\nc. Implement processes, methods, and techniques to monitor security requirement compliance by external service providers on an ongoing basis.",
                status: "not-started"
            }
        ]
    },
    "SR": {
        name: "Supply Chain Risk Management",
        description: "Manage supply chain risks associated with the research, development, design, manufacturing, acquisition, delivery, integration, operations, maintenance, and disposal of systems.",
        controls: [
            {
                id: "03.17.01",
                title: "Supply Chain Risk Management Plan",
                description: "Develop a plan for managing supply chain risks.",
                requirement: "a. Develop a plan for managing supply chain risks associated with the research and development, design, manufacturing, acquisition, delivery, integration, operations, maintenance, and disposal of the system, system components, or system services.\nb. Review and update the supply chain risk management plan [Assignment: organization-defined frequency].\nc. Protect the supply chain risk management plan from unauthorized disclosure.",
                status: "not-started"
            },
            {
                id: "03.17.02",
                title: "Acquisition Strategies, Tools, and Methods",
                description: "Develop and implement acquisition strategies, contract tools, and procurement methods.",
                requirement: "Develop and implement acquisition strategies, contract tools, and procurement methods to identify, protect against, and mitigate supply chain risks.",
                status: "not-started"
            },
            {
                id: "03.17.03",
                title: "Supply Chain Requirements and Processes",
                description: "Establish a process for identifying and addressing supply chain weaknesses or deficiencies.",
                requirement: "a. Establish a process for identifying and addressing weaknesses or deficiencies in the supply chain elements and processes.\nb. Enforce the following security requirements to protect against supply chain risks to the system, system components, or system services and to limit the harm or consequences from supply chain-related events: [Assignment: organization-defined security requirements].",
                status: "not-started"
            }
        ]
    }
};

// Application State
class NIST800171Tracker {
    constructor() {
        this.controlsData = controlsData;
        this.currentFilter = '';
        this.currentFamilyFilter = '';
        this.currentStatusFilter = '';
        this.expandedControls = new Set();
        this.init();
    }

    init() {
        this.loadProgress();
        this.bindEvents();
        this.renderControls();
        this.updateStats();
    }

    bindEvents() {
        // Search functionality
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.currentFilter = e.target.value.toLowerCase();
            this.renderControls();
        });

        // Family filter
        document.getElementById('family-filter').addEventListener('change', (e) => {
            this.currentFamilyFilter = e.target.value;
            this.renderControls();
        });

        // Status filter
        document.getElementById('status-filter').addEventListener('change', (e) => {
            this.currentStatusFilter = e.target.value;
            this.renderControls();
        });

        // Export progress
        document.getElementById('export-btn').addEventListener('click', () => {
            this.exportProgress();
        });

        // Reset progress
        document.getElementById('reset-btn').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all progress? This action cannot be undone.')) {
                this.resetProgress();
            }
        });
    }

    loadProgress() {
        const saved = localStorage.getItem('nist-800-171-progress');
        if (saved) {
            try {
                const progress = JSON.parse(saved);
                // Update control statuses from saved progress
                Object.keys(this.controlsData).forEach(familyKey => {
                    this.controlsData[familyKey].controls.forEach(control => {
                        if (progress[control.id]) {
                            control.status = progress[control.id];
                        }
                    });
                });
            } catch (e) {
                console.warn('Failed to load progress from localStorage:', e);
            }
        }
    }

    saveProgress() {
        const progress = {};
        Object.keys(this.controlsData).forEach(familyKey => {
            this.controlsData[familyKey].controls.forEach(control => {
                progress[control.id] = control.status;
            });
        });
        localStorage.setItem('nist-800-171-progress', JSON.stringify(progress));
    }

    updateControlStatus(controlId, status) {
        Object.keys(this.controlsData).forEach(familyKey => {
            const control = this.controlsData[familyKey].controls.find(c => c.id === controlId);
            if (control) {
                control.status = status;
            }
        });
        this.saveProgress();
        this.updateStats();
        this.updateProgressBar();
    }

    updateStats() {
        let totalControls = 0;
        let completedControls = 0;

        Object.keys(this.controlsData).forEach(familyKey => {
            this.controlsData[familyKey].controls.forEach(control => {
                totalControls++;
                if (control.status === 'completed') {
                    completedControls++;
                }
            });
        });

        const progressPercentage = totalControls > 0 ? Math.round((completedControls / totalControls) * 100) : 0;

        document.getElementById('total-controls').textContent = totalControls;
        document.getElementById('completed-controls').textContent = completedControls;
        document.getElementById('progress-percentage').textContent = `${progressPercentage}%`;
    }

    updateProgressBar() {
        let totalControls = 0;
        let completedControls = 0;

        Object.keys(this.controlsData).forEach(familyKey => {
            this.controlsData[familyKey].controls.forEach(control => {
                totalControls++;
                if (control.status === 'completed') {
                    completedControls++;
                }
            });
        });

        const progressPercentage = totalControls > 0 ? (completedControls / totalControls) * 100 : 0;
        document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
    }

    renderControls() {
        const container = document.getElementById('controls-container');
        container.innerHTML = '';

        const filteredFamilies = this.getFilteredFamilies();

        if (filteredFamilies.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <h3>No controls found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }

        filteredFamilies.forEach(familyData => {
            const familyElement = this.createFamilyElement(familyData);
            container.appendChild(familyElement);
        });
    }

    getFilteredFamilies() {
        const filtered = [];

        Object.keys(this.controlsData).forEach(familyKey => {
            const family = this.controlsData[familyKey];
            
            // Apply family filter
            if (this.currentFamilyFilter && familyKey !== this.currentFamilyFilter) {
                return;
            }

            const filteredControls = family.controls.filter(control => {
                // Apply search filter
                if (this.currentFilter) {
                    const searchText = `${control.id} ${control.title} ${control.description} ${control.requirement}`.toLowerCase();
                    if (!searchText.includes(this.currentFilter)) {
                        return false;
                    }
                }

                // Apply status filter
                if (this.currentStatusFilter && control.status !== this.currentStatusFilter) {
                    return false;
                }

                return true;
            });

            if (filteredControls.length > 0) {
                filtered.push({
                    key: familyKey,
                    name: family.name,
                    description: family.description,
                    controls: filteredControls,
                    totalControls: family.controls.length,
                    completedControls: family.controls.filter(c => c.status === 'completed').length
                });
            }
        });

        return filtered;
    }

    createFamilyElement(familyData) {
        const familyDiv = document.createElement('div');
        familyDiv.className = 'family-group';
        familyDiv.innerHTML = `
            <div class="family-header" onclick="this.parentElement.querySelector('.family-controls').classList.toggle('hidden')">
                <div>
                    <h2>${familyData.key} - ${familyData.name}</h2>
                    <p>${familyData.description}</p>
                </div>
                <div class="family-stats">
                    <span>${familyData.completedControls}/${familyData.totalControls} Complete</span>
                    <span>${Math.round((familyData.completedControls / familyData.totalControls) * 100)}%</span>
                </div>
            </div>
            <div class="family-controls">
                ${familyData.controls.map(control => this.createControlElement(control)).join('')}
            </div>
        `;
        return familyDiv;
    }

    createControlElement(control) {
        const isExpanded = this.expandedControls.has(control.id);
        return `
            <div class="control-item">
                <div class="control-header">
                    <div class="control-title">
                        <div class="control-id">${control.id}</div>
                        <div class="control-name">${control.title}</div>
                        <div class="control-description">${control.description}</div>
                    </div>
                    <div class="control-actions">
                        <select class="status-select status-${control.status}" onchange="app.updateControlStatus('${control.id}', this.value)">
                            <option value="not-started" ${control.status === 'not-started' ? 'selected' : ''}>Not Started</option>
                            <option value="in-progress" ${control.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                            <option value="completed" ${control.status === 'completed' ? 'selected' : ''}>Completed</option>
                        </select>
                        <button class="expand-btn" onclick="app.toggleControlDetails('${control.id}')">
                            ${isExpanded ? '−' : '+'}
                        </button>
                    </div>
                </div>
                <div class="control-details ${isExpanded ? 'expanded' : ''}" id="details-${control.id}">
                    <div class="control-requirement">
                        <h4>Requirement:</h4>
                        <pre>${control.requirement}</pre>
                    </div>
                    <div class="control-links">
                        <a href="https://doi.org/10.6028/NIST.SP.800-171r3#section-3" target="_blank" class="control-link">
                            📖 View in Official Publication
                        </a>
                        <a href="https://doi.org/10.6028/NIST.SP.800-171Ar3" target="_blank" class="control-link">
                            🔍 Assessment Procedures
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    toggleControlDetails(controlId) {
        const detailsElement = document.getElementById(`details-${controlId}`);
        const isExpanded = detailsElement.classList.contains('expanded');
        
        if (isExpanded) {
            detailsElement.classList.remove('expanded');
            this.expandedControls.delete(controlId);
        } else {
            detailsElement.classList.add('expanded');
            this.expandedControls.add(controlId);
        }

        // Update the expand button
        const button = detailsElement.previousElementSibling.querySelector('.expand-btn');
        button.textContent = isExpanded ? '+' : '−';
    }

    exportProgress() {
        const progress = {};
        let totalControls = 0;
        let completedControls = 0;
        let inProgressControls = 0;

        Object.keys(this.controlsData).forEach(familyKey => {
            const family = this.controlsData[familyKey];
            progress[familyKey] = {
                name: family.name,
                controls: family.controls.map(control => {
                    totalControls++;
                    if (control.status === 'completed') completedControls++;
                    if (control.status === 'in-progress') inProgressControls++;
                    
                    return {
                        id: control.id,
                        title: control.title,
                        status: control.status
                    };
                })
            };
        });

        const exportData = {
            exportDate: new Date().toISOString(),
            summary: {
                totalControls,
                completedControls,
                inProgressControls,
                notStartedControls: totalControls - completedControls - inProgressControls,
                completionPercentage: Math.round((completedControls / totalControls) * 100)
            },
            families: progress
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `nist-800-171-progress-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    resetProgress() {
        Object.keys(this.controlsData).forEach(familyKey => {
            this.controlsData[familyKey].controls.forEach(control => {
                control.status = 'not-started';
            });
        });
        localStorage.removeItem('nist-800-171-progress');
        this.renderControls();
        this.updateStats();
        this.updateProgressBar();
    }
}

// Initialize the application when the DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new NIST800171Tracker();
});

// Export for global access
window.app = app;