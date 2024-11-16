import React, { useState } from "react";
import Mew from "../assets/Mew.png";
import eva from "../assets/Eva.png";
import kci from "../assets/Kci.png";
import arrowdown from "../assets/arrow-circle-down.png";
import arrowup from "../assets/arrow-circle-down (1).png";
import close from "../assets/close-circle.png";
import PositionData from "../component/homePageComponent/PositionData";

const HomePage = () => {
  const [openJobs, setOpenJobs] = useState({});

  const toggleJob = (index) => {
    setOpenJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const arr = [
    {
      positionName: "Account Payable Staff",
      jobDes: [
        { title: "Receive bills, pay checks" },
        { title: "Prepare withholding tax" },
        { title: "Prepare Value Added Tax" },
        { title: "Prepare petty cash documents" },
        { title: "Record debt and expense transactions" },
        { title: "Check the accuracy and completeness of monthly expenses" },
        { title: "Reconcile accounts and prepare various reports related to AP" },
        { title: "Support information and documents for auditor inspection" },
        { title: "Perform other accounting duties as assigned" },
      ],
      requirement: [
        { title: "Bachelor's degree in Accounting or Finance" },
        { title: "Experience in accounting of 1-2 years is an advantage." },
        { title: "Detail-oriented" },
      ],
    },
    {
      positionName: "Account Receivable Staff",
      jobDes: [
        { title: "Generate and issue invoices to customers accurately" },
        { title: "Receive and process customer payments" },
        { title: "Reconcile accounts receivable ledger" },
        { title: "Monitor and follow up on overdue accounts" },
        { title: "Evaluate and set credit limits for customers" },
        { title: "Interact with customers for billing inquiries" },
        { title: "Prepare and analyze accounts receivable reports" },
        { title: "Maintain organized records of customer transactions" },
      ],
      requirement: [
        { title: "Bachelor's degree in Accounting or Finance" },
        { title: "Experience in accounting of 1-2 years is an advantage." },
        { title: "Detail-oriented" },
      ],
    },
    {
      positionName: "Administrator",
      jobDes: [
        { title: "Prepare and summarize department reports" },
        { title: "Support the department's activities" },
        { title: "Coordinate with other departments" },
        { title: "Accurately enter data into computer programs" },
        { title: "Sort and organize documents according to standards" },
      ],
      requirement: [
        { title: "Higher vocational certificate or bachelor's degree" },
        { title: "Proficient in Microsoft Office and computers" },
        { title: "Detail-oriented" },
        { title: "Excellent communication skills" },
      ],
    },
    {
      positionName: "Application Developer",
      jobDes: [
        { title: "Design and implement user-friendly, responsive web applications" },
        { title: "Develop and maintain back-end infrastructure" },
        { title: "Collaborate with cross-functional teams to design, develop, and test new features and functionalities" },
        { title: "Utilize Zoho Deluge to integrate with Zoho applications" },
        { title: "Develop IoT projects using Arduino or Raspberry Pi" },
      ],
      requirement: [
        { title: "Bachelor's degree in Computer Science, Software Engineering or a related field" },
        { title: "Minimum of 2 years of professional experience in front-end and back-end development" },
        { title: "Proficiency in JavaScript, JSON, HTML, CSS, and PHP" },
        { title: "Experience with Zoho Deluge is a plus" },
        { title: "Experience with Arduino or Raspberry Pi development is a plus" },
        { title: "Strong analytical and problem-solving skills" },
        { title: "Ability to work independently and as part of a team" },
        { title: "Excellent communication and collaboration skills" },
      ],
    },
    {
      positionName: "Digital Media Creator",
      jobDes: [
        { title: "Conceptualize and design visually appealing graphics for various platforms, including digital and print media" },
        { title: "Create engaging marketing materials, such as banners, brochures, and promotional assets" },
        { title: "Ensure brand consistency across all design projects" },
        { title: "Develop and produce high-quality videos from concept to completion" },
        { title: "Collaborate with cross-functional teams to script, storyboard, and execute video projects" },
        { title: "Edit and enhance video content, incorporating graphics and visual effects as needed" },
        { title: "Integrate graphics and video elements seamlessly to create cohesive multimedia content" },
        { title: "Stay updated on industry trends and technologies to bring innovative ideas to the creative process" },
      ],
      requirement: [
        { title: "Experienced in graphic design and video production" },
        { title: "Proficient in using Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects)" },
        { title: "Skilled in camera operation, photography, and videography" },
        { title: "Strong communication and teamwork skills" },
        { title: "Capable of managing multiple projects and meeting deadlines" },
        { title: "Proficiency in BlackMagic DaVinci Resolve is a plus" },
      ],
    },
    {
      positionName: "Graphics Designer",
      jobDes: [
        { title: "Develop creative concepts and designs for a variety of marketing materials, including social media graphics, brochures, advertisements, and website visuals" },
        { title: "Ensure consistency in branding elements across all design materials to maintain a unified and professional image" },
        { title: "Work closely with cross-functional teams, including marketing, product development, and sales, to understand project requirements and deliver visually appealing solutions" },
        { title: "Keep abreast of industry trends, design tools, and technologies to continuously improve design quality and efficiency" },
        { title: "Ability to adapt design styles to suit different target audiences and project objectives" },

      ],
      requirement: [
        { title: "Bachelor's degree in Graphic Design, Fine Arts, or a related field" },
        { title: "Proven experience as a Graphics Designer with a strong portfolio showcasing a diverse range of design projects" },
        { title: "Proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign), and other relevant design tools" },
        { title: "Strong creative and conceptual thinking skills with the ability to bring fresh ideas to the table" },
        { title: "Meticulous, attention to detail, and a keen eye for aesthetics" },
        { title: "Excellent verbal and written communication skills to effectively convey design ideas and collaborate with team members" },
      ],
    },
    {
      positionName: "Senior Human Resources Staff",
      jobDes: [
        { title: "Oversee the entire payroll calculation system" },
        { title: "Manage recruitment and training (occasionally)" },
        { title: "Conduct employee orientation training" },
        { title: "Prepare and manage departmental documents" },
        { title: "Coordinate with relevant departments" },
        { title: "Organize company events" },
        { title: "Administer employee benefits" },

      ],
      requirement: [
        { title: "At least 5 years of experience in human resources" },
        { title: "Experience with payroll processing using the B-Plus system is an advantage" },
        { title: "Experience in recruitment and training is an advantage" },
        { title: "Knowledgeable in HR processes and policies" },
        { title: "Excellent interpersonal and communication skills" },
        { title: "Proficient in using HRIS and Microsoft Office" },
        { title: "Possesses good judgment and maintains confidentiality effectively" },
      ],
    },
    {
      positionName: "Human Resources Staff",
      jobDes: [
        { title: "Payroll calculations in the B-Plus system" },
        { title: "Conduct employee orientation training" },
        { title: "Prepare and manage various types of departmental documents" },
        { title: "Coordinate with relevant departments" },
        { title: "Organize company events" },
        { title: "Conduct internal personnel training" },
        { title: "Manage employee benefits" },
        { title: "Payroll experience is an advantage (especially with the B-Plus system)" },

      ],
      requirement: [
        { title: "Bachelor's degree in Human Resources, Business Administration, or a related field" },
        { title: "Experience in HR or related fields will be given special consideration" },
        { title: "Knowledge of human resource processes, policies, and best practices" },
        { title: "Good interpersonal and communication skills" },
        { title: "Proficient in using HRIS programs and Microsoft Office" },
        { title: "Good judgment and ability to maintain confidentiality" },
      ],
    },
    {
      positionName: "IT Manager",
      jobDes: [
        { title: "Manage the IT department, including recruiting, training, and supervising IT staff" },
        { title: "Develop and implement IT policies and procedures, ensuring compliance with industry standards and regulations" },
        { title: "Plan and manage IT projects, including budgeting, resource allocation, and project timelines" },
        { title: "Oversee the design, implementation, and maintenance of computer systems, networks, and servers" },
        { title: "Ensure that the IT infrastructure meets the organization's needs, including security, performance, and availability" },
        { title: "Monitor and manage software and hardware licenses" },
        { title: "Maintain inventory of hardware, software, and peripherals" },
        { title: "Develop and maintain disaster recovery and business continuity plans" },
        { title: "Keep up-to-date with emerging trends and technologies in the field" },

      ],
      requirement: [
        { title: "Bachelor's degree in Computer Science, Information Technology, or related field" },
        { title: "At least 8-10 years of experience in IT support and maintenance" },
        { title: "Strong knowledge of computer hardware, software, and networking systems" },
        { title: "Excellent analytical and problem-solving skills" },
        { title: "Good communication and interpersonal skills" },
        { title: "Ability to manage and lead a team" },
        { title: "Knowledge of ITIL and other best practices" },
        { title: "Experience in project management" },
        { title: "Experience in budgeting and resource allocation" },
      ],
    },
    {
      positionName: "IT Support",
      jobDes: [
        { title: "Install and maintain computer hardware, software, and peripherals" },
        { title: "Provide technical support to end-users on a timely basis" },
        { title: "Troubleshoot and resolve hardware and software issues" },
        { title: "Perform regular system backups and recovery operations" },
        { title: "Manage and maintain the network infrastructure including switches, routers, and firewalls" },
        { title: "Monitor network performance and security, and take corrective action as necessary" },
        { title: "Manage software and hardware licenses" },
        { title: "Maintain inventory of hardware, software, and peripherals" },
        { title: "Document IT procedures and processes" },
        { title: "Participate in planning and implementing IT projects" },
        { title: "Keep up-to-date with emerging trends and technologies in the field" },

      ],
      requirement: [
        { title: "Bachelor's degree in Computer Science, Information Technology, or related field" },
        { title: "At least 2-3 years of experience in IT support and maintenance" },
        { title: "Strong knowledge of computer hardware, software, and networking systems" },
        { title: "Excellent analytical and problem-solving skills" },
        { title: "Good communication and interpersonal skills" },
        { title: "Ability to work independently and in a team environment" },
        { title: "Knowledge of ITIL and other best practices is a plus" },
      ],
    },
    {
      positionName: "Prepress Staff",
      jobDes: [
        { title: "Create artwork, prepare files, and make printing plates" },
        { title: "Record daily work reports" },
        { title: "Contact suppliers and coordinate with relevant departments" },
        { title: "Create printing plates using CTP machine (occasionally)" },

      ],
      requirement: [
        { title: "Proficient in Adobe Illustrator" },
        { title: "Knowledge of color theory" },
        { title: "Ability to work as part of a team" },
        { title: "Detail-oriented" },
        { title: "Preference will be given to those with education in printing technology or experience in printing-related work" },
      ],
    },
    {
      positionName: "Purchasing Manager",
      jobDes: [
        { title: "Develop and execute procurement strategies aligned with organizational goals" },
        { title: "Analyze market trends and identify opportunities for cost savings and process improvements" },
        { title: "Negotiated and managed contracts with key suppliers, ensuring favorable terms and delivery schedules" },
        { title: "Implemented inventory control measures, leading to improved stock turnover and reduced carrying costs" },
        { title: "Collaborated with cross-functional teams to understand and address department-specific procurement needs" },
        { title: "Evaluate and select vendors based on performance, reliability, and quality standards" },
        { title: "Lead and mentor the procurement team, providing guidance and support" },
        { title: "Conduct regular cost analysis and implement measures to optimize procurement costs" },

      ],
      requirement: [
        { title: "Bachelor’s degree in Business Administration, Supply Chain Management, or a related field" },
        { title: "5 years of experience in procurement as a manager" },
        { title: "Solve immediate problems and communication skills" },
        { title: "Negotiation skills" },
        { title: "Strong understanding of supply chain management principles and procurement best practices" },
        { title: "Proficiency in procurement software and tools" },
        { title: "Excellent communication, leadership, and organizational skills" },
        { title: "Good command of English" },
      ],
    },
    {
      positionName: "Purchasing Supervisor",
      jobDes: [
        { title: "Negotiate price Terms of sale and delivery date with the supplier" },
        { title: "Seek new suppliers" },
        { title: "Monitor supplier performance to ensure quality, cost and delivery requirements are met" },
        { title: "Check inventory levels and orders" },
        { title: "Record the work activities of the purchasing department" },
        { title: "Analyze markets and trends to help make predictions" },

      ],
      requirement: [
        { title: "Bachelor’s degree in Business Administration, Supply Chain Management, or a related field" },
        { title: "5 years of experience in procurement" },
        { title: "At least 2 years of experience in purchasing as a supervisor" },
        { title: "Knowledge of procurement best practices, industry trends, and supply chain management principles" },
        { title: "Negotiation skills" },
        { title: "Proficient in using procurement software and tools" },
        { title: "Solve immediate problems and communication skills" },
        { title: "Good command of English" },
      ],
    },
    {
      positionName: "Purchasing Officer",
      jobDes: [
        { title: "Source and purchase goods and services at cost-effective prices and within the specified time frame" },
        { title: "Request quotes and negotiate with suppliers" },
        { title: "Adhere to purchasing policies and company quality standards" },
        { title: "Follow up on orders and evaluate supplier service performance" },
        { title: "Communicate and coordinate effectively with relevant departments" },

      ],
      requirement: [
        { title: "Higher vocational certificate up to bachelor’s degree, unlimited fields" },
        { title: "Proficient in Microsoft Office and computers" },
        { title: "Analytical planning skills" },
        { title: "Detail-oriented" },
        { title: "Excellent negotiation skills" },
        { title: "Great coordination skills" },
        { title: "Good command of English will be given special consideration" },
        { title: "Previous experience in procurement will be given special consideration" },
      ],
    },
    {
      positionName: "Sales Coordinator Manager",
      jobDes: [
        { title: "Monthly customer sticker sales" },
        { title: "Create satisfaction for the customers you care for" },
        { title: "Recommend stickers to have more value" },
        { title: "Lead and manage a team of Sales Coordinators, providing guidance, training, and support." },
        { title: "Supervise and optimize administrative processes, including order processing, documentation management, and customer communication, to enhance efficiency and accuracy." },
        { title: "Contact between the sales team and other departments, ensuring clear and effective communication channels." },
        { title: "Oversee customer interactions to address inquiries, provide updates on order status, and gather necessary information for the sales team." },
        { title: "Organize and coordinate sales meetings, preparing agendas." },

      ],
      requirement: [
        { title: "Bachelor's degree in any field" },
        { title: "5 years of experience in sales management" },
        { title: "Proficient in Microsoft Office and PDF programs" },
        { title: "Strong communication and presentation skills" },
        { title: "Good command in English" },
      ],
    },
    {
      positionName: "Sales Coordinator",
      jobDes: [
        { title: "Seek new customers and present products for sale" },
        { title: "Communicate with customers to get requirements or job details" },
        { title: "Coordinate between customers and various departments to successfully close sales" },
        { title: "Prepare and inspect various sales document work (such as checking orders, making quotations, checking delivery status, etc.)" },
        { title: "Support various activities related to sales work and other duties as assigned" },
        { title: "Summary of monthly sales, document storage and report various operational results" },

      ],
      requirement: [
        { title: "Bachelor's degree in any field" },
        { title: "Previous experience in sales" },
        { title: "Proficient in Microsoft Office and PDF" },
        { title: "Able to communicate and convey accurately" },
        { title: "Basic use of office equipment" },
        { title: "Excellent problem-solving skills" },
        { title: "Always be enthusiastic" },
        { title: "Be responsible for work as assigned" },
        { title: "Ability to communicate in English will be given special consideration" },
        { title: "Having a valid driver's license for cars will be given special consideration" },
      ],
    },
    {
      positionName: "Secretary",
      jobDes: [
        { title: "Manage and coordinate the executive's appointments and travel to ensure efficient time allocation" },
        { title: "Prepare, organize, and facilitate meetings, including scheduling, setting agendas, taking minutes, and following up on meeting outcomes" },
        { title: "Handle incoming phone calls, emails, and letters on behalf of the executive director, acting as the primary point of contact" },
        { title: "Maintain and organize a comprehensive filing system, both in paper and digital formats, to support smooth office operations" },
        { title: "Assist in preparing reports, presentations, and other important documents for executive decision-making" },
        { title: "Act as an intermediary between the executive and internal and external contacts to ensure smooth communication and coordination" },
        { title: "Maintain confidentiality and security of sensitive information, consistently adhering to high standards of discretion" },
        { title: "Utilize strong negotiation skills to manage contracts, agreements, and communications with contacts effectively" },

      ],
      requirement: [
        { title: "Bachelor's degree in Business Administration or other related fields" },
        { title: "At least 2-4 years of experience as an executive assistant" },
        { title: "Excellent coordination skills, interpersonal skills, and communication, including good presentation skills" },
        { title: "Knowledge of computers (basic programs, internet, email, etc.)" },
        { title: "Great English skills in listening, speaking, reading, and writing" },
        { title: "Excellent problem-solving skills" },
        { title: "Excellent management and time allocation skills" },
        { title: "Ability to maintain confidentiality and security of confidential information" },
        { title: "Excellent problem-solving skills" },
      ],
    },
    {
      positionName: "Sales Manager",
      jobDes: [
        { title: "Find new customers" },
        { title: "Close the balance according to the company's goals." },
        { title: "Provide advice about sales" },
        { title: "Support team members to make their work easier" },
        { title: "Develop sales and solve problems to close sales." },
        { title: "Training for new employees is organized. to have skills" },
        { title: "Team meeting to discuss problems encountered during the week" },
        { title: "Plan the team's sales to meet the goals set by the company." },

      ],
      requirement: [
        { title: "Bachelor's degree in business, marketing, or a related field (preferred)." },
        { title: "5 years experiences, in sales management" },
        { title: "MS Office (Word , Excel, Power Point)" },
        { title: "Can drive a car, have a driver's license" },
        { title: "Good Communication skills" },
        { title: "Coordination skills" },
        { title: "Leadership skills" },
        { title: "Good command in English" },
      ],
    },
    {
      positionName: "Sales",
      jobDes: [
        { title: "Find new customers" },
        { title: "Presenting products for sale" },
        { title: "Close the balance according to the company's goals." },
        { title: "Summary report of customer visits" },
        { title: "Able to solve problems for customers initially" },


      ],
      requirement: [
        { title: "Not less than Secondary 6" },
        { title: "Have experience in sales at least 1 year" },
        { title: "MS Office (Word , Excel, Power Point)" },
        { title: "Have the ability to drive a car, have a driver's license" },
        { title: "Have a passion for service" },
        { title: "Good Communication skills" },
        { title: "Good coordination and negotiation skills" },
        { title: "Discipline and punctuality" },
        { title: "Have responsibility for assigned tasks" },
        { title: "Have a positive attitude" },
      ],
    },
    {
      positionName: "Social Media Manager",
      jobDes: [
        { title: "Develop and produce visually stunning content that resonates with our brand ethos." },
        { title: "Keep our social media channels vibrant with regular postings and engaging interactions." },
        { title: "Implement and oversee targeted advertising campaigns to amplify brand awareness." },
        { title: "Actively manage social media platforms, engaging with users and fostering a supportive online community." },
        { title: "Remain informed about the latest social media trends to maintain our brand's leading edge." },


      ],
      requirement: [
        { title: "Bachelor's degree in business, marketing, or a related field (preferred)." },
        { title: "At least 2 years of experience in managing social media." },
        { title: "Exceptional writing abilities in both Thai and English for creating engaging content." },
        { title: "Skilled in using major social media platforms." },
        { title: "Proven track record in formulating and implementing effective social media strategies." },
        { title: "Competent in using contemporary tools for streamlined content management." },
      ],
    },
    {
      positionName: "Social Media Content Creator",
      jobDes: [
        { title: "Plan and create content that aligns with market trends." },
        { title: "Work together with In-house team to increase brand awareness and purchase intention." },
        { title: "Analyze market trends and continually monitor and study new trends and tools." },
        { title: "Manage and plan the production of online content for the company's various platforms, including offline advertising media." },
        { title: "Able to measure and report the effectiveness of produced content." },


      ],
      requirement: [
        { title: "Bachelor's degree in marketing, or a related field (preferred)." },
        { title: "At least 1-3 years of experience in Digital Marketing." },
        { title: "Proficient in using analytical tools such as Google Analytics, Facebook Insights, etc." },
        { title: "Excellent communication and coordination skills." },
        { title: "Ability to work as part of a team and adapt to a rapidly changing environment." },
      ],
    },
    {
      positionName: "Accounting Manager",
      jobDes: [
        { title: "Prepare and analysis of financial statements, ensuring compliance with accounting standards and regulatory requirements." },
        { title: "Supervise and mentor a team of accounting ,providing guidance, training, and support" },
        { title: "Plan and prepare financial budgets Including checking the accuracy and analyzing various impacts." },
        { title: "Oversee the month-end and year-end closing processes, including journal entries, reconciliations, and financial reporting." },
        { title: "Manage external audit processes, liaising with auditors and ensuring timely and accurate provision of required documentation." },
        { title: "Monitor and manage cash flow, optimizing working capital" },
        { title: "Conduct financial analysis and present key insights to executive management, supporting strategic planning and decision-making." },


      ],
      requirement: [
        { title: "Bachelor's degree in Accounting, Finance, or a related" },
        { title: "Proven experience in accounting, with a minimum of 5 years in a supervisor or manager" },
        { title: "analytical and problem-solving skills." },
        { title: "communication skills." },
        { title: "Leadership Skills." },
        { title: "Team management skills." },
        { title: "Proficient in accounting software and advanced knowledge of Microsoft Excel." },
        { title: "Have knowledge of tax law." },
      ],
    },
    {
      positionName: "Accounting Supervisor",
      jobDes: [
        { title: "Supervise and guide a team of accounting, fostering a collaborative and high-performance work environment." },
        { title: "Oversee the preparation of accurate and timely financial statements, ensuring compliance with accounting standards and organizational policies." },
        { title: "Maintain the integrity of the general ledger, including journal entries, account reconciliations, and month-end close processes." },
        { title: "Supervise the processing of invoices, payments, and receivables, ensuring efficient and accurate transactions." },
        { title: "Conduct regular financial analysis, providing insights and recommendations to support strategic decision-making." },
        { title: "Collaborate with internal and external auditors, ensuring timely provision of information and addressing audit findings." },
        { title: "Streamline accounting procedures for increased efficiency." },
        { title: "Assist in the development and monitoring of budgets, working closely with management to ensure financial goals are met." },
        { title: "Provide training and development opportunities for the accounting team to enhance skills and knowledge." },


      ],
      requirement: [
        { title: "Bachelor's degree in Accounting, Finance, or a related" },
        { title: "Have experience in accounting At the supervisor level, 5 years or more" },
        { title: "Leadership and team management skills, with the ability to motivate and develop." },
        { title: "Excellent analytical and problem-solving skills, with the ability to interpret complex financial data." },
        { title: "Communication skills for collaborating with cross-functional teams." },
        { title: "Proficient in accounting software and advanced knowledge of Microsoft Excel." },
      ],
    },
  ];

  return (
    <div className="w-full h-[100%] px-[2rem] py-[1rem] flex flex-col mb-[6rem]">
      <div className='flex flex-row justify-start'>
        <div className="font-medium text-[1.75rem] tracking-[0.1em]">Jobs</div>
      </div>

      {arr.map((data, i) => (
        <div key={i}>
          <div className="flex justify-between w-full items-center border-b-2 py-[1.25rem]">
            <div className="text-[0.7rem] tracking-[0.1em]">{data.positionName}</div>
            <img
              className="w-[1.25rem] h-[1.25rem] cursor-pointer"
              src={openJobs[i] ? arrowup : arrowdown}
              alt=""
              onClick={() => toggleJob(i)}
            />
          </div>          {openJobs[i] && (
            <PositionData
              onClose={() => toggleJob(i)}
              positionName={data.positionName}
              jobDes={data.jobDes}
              requirement={data.requirement}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
