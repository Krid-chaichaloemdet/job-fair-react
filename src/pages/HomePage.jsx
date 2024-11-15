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
  ];

  return (
    <div className="w-full px-[2rem] py-[1rem] flex flex-col mb-[6rem] overflow-y-scroll">
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
          </div>
          {openJobs[i] && (
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
