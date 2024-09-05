const routesData=[
    
{id:19,name:"welcome",componentName:"Home",mainMenu:"Welcome",subMenu:"",parentRouteId:1},

{id:20,name:"dashboard",componentName:"Home",mainMenu:"Dashboard",subMenu:"",parentRouteId:1},

{id:21,name:"post",componentName:"Home",mainMenu:"Dashboard",subMenu:"Post",parentRouteId:20},

{id:23,name:"announcement",componentName:"Home",mainMenu:"Dashboard",subMenu:"Announcement",parentRouteId:20},

{id:25,name:"poll",componentName:"Home",mainMenu:"Dashboard",subMenu:"Poll",parentRouteId:20},

{id:27,name:"praise",componentName:"Home",mainMenu:"Dashboard",subMenu:"Praise",parentRouteId:20},

{id:29,name:"/leave",componentName:"Me",mainMenu:"Leave",subMenu:"",parentRouteId:2},

{id:31,name:"/attendance",componentName:"Me",mainMenu:"Attendance",subMenu:"",parentRouteId:2},

{id:32,name:"/summary",componentName:"My Finances",mainMenu:"SUMMARY",subMenu:"",parentRouteId:5},

{id:33,name:"/mypay",componentName:"My Finances",mainMenu:"MY PAY",subMenu:"",parentRouteId:5},

{id:34,name:"/managetax",componentName:"My Finances",mainMenu:"MANAGE TAX",subMenu:"",parentRouteId:5},

{id:35,name:"/mysalary",componentName:"My Finances",mainMenu:"MY PAY",subMenu:"My Salary",parentRouteId:33},

{id:36,name:"/payslips",componentName:"My Finances",mainMenu:"MY PAY",subMenu:"Pay Slips",parentRouteId:33},

{id:37,name:"/incometax",componentName:"My Finances",mainMenu:"MY PAY",subMenu:"Income Tax",parentRouteId:33},

{id:38,name:"/declaration",componentName:"My Finances",mainMenu:"MANAGE TAX",subMenu:"Declaration",parentRouteId:34},

{id:39,name:"/previousname",componentName:"My Finances",mainMenu:"MANAGE TAX",subMenu:"Previous Name",parentRouteId:34},

{id:40,name:"/form12bb",componentName:"My Finances",mainMenu:"MANAGE TAX",subMenu:"FORM 12BB",parentRouteId:34},

{id:41,name:"/taxfilling",componentName:"My Finances",mainMenu:"MANAGE TAX",subMenu:"Tax Filling",parentRouteId:34},

{id:42,name:"/taxsavinginvestment",componentName:"My Finances",mainMenu:"MANAGE TAX",subMenu:"Tax Saving Investment",parentRouteId:34},

{id:43,name:"/dashboard",componentName:"Organization",mainMenu:"Dashboard",subMenu:"",parentRouteId:6},

{id:44,name:"/employees",componentName:"Organization",mainMenu:"Employees",subMenu:"",parentRouteId:6},

{id:45,name:"/orgstructure",componentName:"Organization",mainMenu:"Org Structure",subMenu:"",parentRouteId:6},

{id:46,name:"/onboarding",componentName:"Organization",mainMenu:"Onboarding",subMenu:"",parentRouteId:6},

{id:47,name:"/exits",componentName:"Organization",mainMenu:"exits",subMenu:"",parentRouteId:6},

{id:48,name:"/expenses&travel",componentName:"Organization",mainMenu:"Expenses & Travel",subMenu:"",parentRouteId:6},

{id:49,name:"/documents",componentName:"Organization",mainMenu:"Documents",subMenu:"",parentRouteId:6},

{id:50,name:"/engage",componentName:"Organization",mainMenu:"Engage",subMenu:"",parentRouteId:6},

{id:51,name:"/assets",componentName:"Organization",mainMenu:"Assets",subMenu:"",parentRouteId:6},

{id:52,name:"/helpdesk",componentName:"Organization",mainMenu:"Helpdesk",subMenu:"",parentRouteId:6},

{id:53,name:"/hiring",componentName:"Organization",mainMenu:"Hiring",subMenu:"",parentRouteId:6},

{id:54,name:"/settings",componentName:"Organization",mainMenu:"Settings",subMenu:"",parentRouteId:6},

{id:55,name:"/summary",componentName:"Organization",mainMenu:"Dashboard",subMenu:"Summary",parentRouteId:43},

{id:56,name:"/analytics",componentName:"Organization",mainMenu:"Dashboard",subMenu:"Analytics",parentRouteId:43},

{id:57,name:"/employeereports",componentName:"Organization",mainMenu:"Dashboard",subMenu:"Employee Reports",parentRouteId:43},

{id:58,name:"/employeedirectory",componentName:"Organization",mainMenu:"Employees",subMenu:"Employee Directory",parentRouteId:44},

{id:59,name:"/organizationtree",componentName:"Organization",mainMenu:"Employees",subMenu:"Organization Tree",parentRouteId:44},

{id:60,name:"/login",componentName:"Organization",mainMenu:"Employees",subMenu:"Login",parentRouteId:44},

{id:61,name:"/contingentstaff",componentName:"Organization",mainMenu:"Employees",subMenu:"Contingent Staff",parentRouteId:44},

{id:62,name:"/profilechanges",componentName:"Organization",mainMenu:"Employees",subMenu:"Profile Changes",parentRouteId:44},

{id:63,name:"/privateprofiles",componentName:"Organization",mainMenu:"Employees",subMenu:"Private Profiles",parentRouteId:44},

{id:64,name:"/probation",componentName:"Organization",mainMenu:"Employees",subMenu:"Probation",parentRouteId:44},

{id:65,name:"/settings",componentName:"Organization",mainMenu:"Employees",subMenu:"Settings",parentRouteId:44},

{id:66,name:"/loginregistrations",componentName:"Organization",mainMenu:"Login",subMenu:"Login Registrations",parentRouteId:60},

{id:67,name:"/loginhistory",componentName:"Organization",mainMenu:"Login",subMenu:"Login History",parentRouteId:60},

{id:68,name:"/loginfailed",componentName:"Organization",mainMenu:"Login",subMenu:"Login Failed",parentRouteId:60},

{id:69,name:"/summary",componentName:"Organization",mainMenu:"Contingent Staff",subMenu:"Summary",parentRouteId:61},

{id:70,name:"/worktypes",componentName:"Organization",mainMenu:"Contingent Staff",subMenu:"Work Types",parentRouteId:61},

{id:71,name:"/profileapprovals",componentName:"Organization",mainMenu:"Profile Changes",subMenu:"profileapprovals",parentRouteId:62},

{id:72,name:"/pastchanges",componentName:"Organization",mainMenu:"Profile Changes",subMenu:"Past Changes",parentRouteId:62},

{id:73,name:"/inprobation",componentName:"Organization",mainMenu:"Probation",subMenu:"In Probation",parentRouteId:64},

{id:74,name:"/evaluationinprogress",componentName:"Organization",mainMenu:"Probation",subMenu:"Evaluation In Progress",parentRouteId:64},

{id:75,name:"/completedprobationactions",componentName:"Organization",mainMenu:"Probation",subMenu:"Completed Probation Actions",parentRouteId:64},

{id:76,name:"/probationpolicy",componentName:"Organization",mainMenu:"Probation",subMenu:"Probation Policy",parentRouteId:64},

{id:77,name:"/probationfeedbackform",componentName:"Organization",mainMenu:"Probation",subMenu:"Probation Feedback Form",parentRouteId:64},

{id:78,name:"/employeedefaults",componentName:"Organization",mainMenu:"Settings",subMenu:"Employee Defaults",parentRouteId:65},

{id:79,name:"/jobtitles",componentName:"Organization",mainMenu:"Settings",subMenu:"Job Titles",parentRouteId:65},

{id:80,name:"/employeenumber",componentName:"Organization",mainMenu:"Settings",subMenu:"Employee Number",parentRouteId:65},

{id:81,name:"/timeline",componentName:"Organization",mainMenu:"Settings",subMenu:"Timeline",parentRouteId:65},

{id:82,name:"/wall",componentName:"Organization",mainMenu:"Settings",subMenu:"Wall",parentRouteId:65},

{id:83,name:"/personalinfo",componentName:"Organization",mainMenu:"Settings",subMenu:"Personal Info",parentRouteId:65},

{id:84,name:"/idcard",componentName:"Organization",mainMenu:"Settings",subMenu:"ID Card",parentRouteId:65},

{id:85,name:"/dottedlinemanager",componentName:"Organization",mainMenu:"Settings",subMenu:"Dotted Line Manager",parentRouteId:65},

{id:86,name:"/summary",componentName:"Organization",mainMenu:"Onboarding",subMenu:"Summary",parentRouteId:46},

{id:87,name:"/initiateonboarding",componentName:"Organization",mainMenu:"Onboarding",subMenu:"Initiate Onboarding",parentRouteId:46},

{id:88,name:"/onboardinggroups",componentName:"Organization",mainMenu:"Onboarding",subMenu:"Onboarding Groups",parentRouteId:46},

{id:89,name:"/tasks",componentName:"Organization",mainMenu:"Onboarding",subMenu:"Tasks",parentRouteId:46},

{id:90,name:"/settings",componentName:"Organization",mainMenu:"Onboarding",subMenu:"Settings",parentRouteId:46},

{id:91,name:"/exitdashboard",componentName:"Organization",mainMenu:"Exits",subMenu:"Exit dashboard",parentRouteId:47},

{id:92,name:"/pendingapprovals",componentName:"Organization",mainMenu:"Exits",subMenu:"Pending Approvals",parentRouteId:47},

{id:93,name:"/full&final",componentName:"Organization",mainMenu:"Exits",subMenu:"Full & Final",parentRouteId:47},

{id:94,name:"/revertedexits",componentName:"Organization",mainMenu:"Exits",subMenu:"Reverted Exits",parentRouteId:47},

{id:95,name:"/exitedemployees",componentName:"Organization",mainMenu:"Exits",subMenu:"Exited Employees",parentRouteId:47},

{id:96,name:"/tasks",componentName:"Organization",mainMenu:"Exits",subMenu:"Tasks",parentRouteId:47},

{id:97,name:"/exitsurvey",componentName:"Organization",mainMenu:"Exits",subMenu:"Exit Survey",parentRouteId:47},

{id:98,name:"/settings",componentName:"Organization",mainMenu:"Exits",subMenu:"settings",parentRouteId:47},

{id:99,name:"/bulkactions",componentName:"Organization",mainMenu:"Exits",subMenu:"Bulk Actions",parentRouteId:47},

{id:100,name:"/department",componentName:"Manage Access",mainMenu:"Department",subMenu:"",parentRouteId:18},

{id:101,name:"/rolecreation",componentName:"Manage Access",mainMenu:"Role Creation",subMenu:"",parentRouteId:18},

{id:102,name:"/routes",componentName:"Manage Access",mainMenu:"Routes",subMenu:"",parentRouteId:18},

{id:103,name:"/managingaccess",componentName:"Manage Access",mainMenu:"Managing Access",subMenu:"",parentRouteId:18},

{id:104,name:"/mydeclaration",componentName:"My Finances",mainMenu:"Declaration",subMenu:"My Declaration",parentRouteId:38},

{id:105,name:"/lacdeduction",componentName:"My Finances",mainMenu:"Declaration",subMenu:"1.5 Lac Deduction",parentRouteId:38},

{id:106,name:"/otherdeductions",componentName:"My Finances",mainMenu:"Declaration",subMenu:"Other Deductions",parentRouteId:38},

{id:107,name:"/taxsavingallowances",componentName:"My Finances",mainMenu:"Declaration",subMenu:"Tax Saving Allowances",parentRouteId:38},

{id:108,name:"/houseproperty",componentName:"My Finances",mainMenu:"Declaration",subMenu:"House Property",parentRouteId:38},

{id:109,name:"/incomefromothersources",componentName:"My Finances",mainMenu:"Declaration",subMenu:"Income From Other Sources",parentRouteId:38},

{id:110,name:"/dashboard",componentName:"Project Management",mainMenu:"Dashboard",subMenu:"",parentRouteId:8},

{id:111,name:"/allteams",componentName:"Project Management",mainMenu:"All Teams",subMenu:"",parentRouteId:8},

{id:112,name:"/allprojects",componentName:"Project Management",mainMenu:"All Projects",subMenu:"",parentRouteId:8},

{id:113,name:"/tasks",componentName:"Project Management",mainMenu:"Tasks",subMenu:"",parentRouteId:8},

{id:114,name:"/timeline",componentName:"Project Management",mainMenu:"Tasks",subMenu:"Timeline",parentRouteId:113},

{id:115,name:"/sprints",componentName:"Project Management",mainMenu:"Tasks",subMenu:"Sprints",parentRouteId:113},

{id:116,name:"/boards",componentName:"Project Management",mainMenu:"Tasks",subMenu:"Boards",parentRouteId:113},

{id:117,name:"/issues",componentName:"Project Management",mainMenu:"Tasks",subMenu:"Issues",parentRouteId:113},

{id:118,name:"/dashboard",componentName:"Time and Attendance",mainMenu:"Dashboard",subMenu:"",parentRouteId:9},

{id:119,name:"/approvals",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"",parentRouteId:9},

{id:120,name:"/weeklyoffs&holidays",componentName:"Time and Attendance",mainMenu:"Shifts/weekly offs & holidays",subMenu:"",parentRouteId:9},

{id:121,name:"/attendancetracking",componentName:"Time and Attendance",mainMenu:"Attendance Tracking",subMenu:"",parentRouteId:9},

{id:122,name:"/overtime",componentName:"Time and Attendance",mainMenu:"Overtime",subMenu:"",parentRouteId:9},

{id:123,name:"/leave",componentName:"Time and Attendance",mainMenu:"Leave",subMenu:"",parentRouteId:9},

{id:124,name:"/reports",componentName:"Time and Attendance",mainMenu:"Reports",subMenu:"",parentRouteId:9},

{id:125,name:"/settings",componentName:"Time and Attendance",mainMenu:"Settings",subMenu:"",parentRouteId:9},

{id:126,name:"/attendancesummary",componentName:"Time and Attendance",mainMenu:"Dashboard",subMenu:"Attendance Summary",parentRouteId:118},

{id:127,name:"/attendanceanalytics",componentName:"Time and Attendance",mainMenu:"Dashboard",subMenu:"Attendance Analytics",parentRouteId:118},

{id:128,name:"/leavesummary",componentName:"Time and Attendance",mainMenu:"Dashboard",subMenu:"Leave Summary",parentRouteId:118},

{id:129,name:"/leaveanalytics",componentName:"Time and Attendance",mainMenu:"Dashboard",subMenu:"Leave Analytics",parentRouteId:118},

{id:130,name:"/leave",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"Leave",parentRouteId:119},

{id:131,name:"/leaveencashment",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"Leave Encashment",parentRouteId:119},

{id:132,name:"/campoffs",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"Camp Offs",parentRouteId:119},

{id:133,name:"/regularizations",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"Regularizations",parentRouteId:119},

{id:134,name:"/wfh/od",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"WFH/OD",parentRouteId:119},

{id:135,name:"/webclockin",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"Web Clock-in",parentRouteId:119},

{id:136,name:"/partialday",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"Partial Day",parentRouteId:119},

{id:137,name:"/overtime",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"Overtime",parentRouteId:119},

{id:138,name:"/shift&weeklyoff",componentName:"Time and Attendance",mainMenu:"Approvals",subMenu:"Shift & Weekly off",parentRouteId:119},

{id:139,name:"/shift&weeklyoffs",componentName:"Time and Attendance",mainMenu:"Shifts/weekly offs & holidays",subMenu:"Shift & Weekly offs",parentRouteId:120},

{id:140,name:"/shiftallowance",componentName:"Time and Attendance",mainMenu:"Shifts/weekly offs & holidays",subMenu:"Shift Allowances",parentRouteId:120},

{id:141,name:"/assignments",componentName:"Time and Attendance",mainMenu:"Shifts/weekly offs & holidays",subMenu:"Assignments",parentRouteId:120},

{id:142,name:"/scheduler",componentName:"Time and Attendance",mainMenu:"Shifts/weekly offs & holidays",subMenu:"Scheduler",parentRouteId:120},

{id:143,name:"/holidays",componentName:"Time and Attendance",mainMenu:"Shifts/weekly offs & holidays",subMenu:"Holidays",parentRouteId:120},

{id:144,name:"/shifts",componentName:"Time and Attendance",mainMenu:"Shift & Weekly Offs",subMenu:"Shifts",parentRouteId:139},

{id:145,name:"/weeklyoffs",componentName:"Time and Attendance",mainMenu:"Shift & Weekly Offs",subMenu:"Weekly Offs",parentRouteId:139},

{id:146,name:"/shift&weeklyoffrules",componentName:"Time and Attendance",mainMenu:"Shift & Weekly Offs",subMenu:"Shift & Weekly off Rules",parentRouteId:139},

{id:147,name:"/shiftallowancepolicy",componentName:"Time and Attendance",mainMenu:"Shift Allowances",subMenu:"Shift Allowance Policy",parentRouteId:140},

{id:148,name:"/shiftallowancecode",componentName:"Time and Attendance",mainMenu:"Shift Allowances",subMenu:"Shift Allowance Code",parentRouteId:140},

{id:149,name:"/shift&weeklyoffassignments",componentName:"Time and Attendance",mainMenu:"Assignments",subMenu:"Shift & Weekly Off Assignments",parentRouteId:141},

{id:150,name:"/shiftallowanceassignments",componentName:"Time and Attendance",mainMenu:"Assignments",subMenu:"Shift Allowance Assignments",parentRouteId:141},

{id:151,name:"/shift&weeklyoffrulesassignments",componentName:"Time and Attendance",mainMenu:"Assignments",subMenu:"Shift & Weekly Off Rules Assignments",parentRouteId:141},

{id:152,name:"/shiftboard",componentName:"Time and Attendance",mainMenu:"Scheduler",subMenu:"Shift Board",parentRouteId:142},

{id:153,name:"/shiftrotation",componentName:"Time and Attendance",mainMenu:"Scheduler",subMenu:"Shift Rotation",parentRouteId:142},

{id:154,name:"/payrollanalytics",componentName:"Payroll",mainMenu:"Payroll Analytics",subMenu:"",parentRouteId:10},

{id:155,name:"/runpayroll",componentName:"Payroll",mainMenu:"Run Payroll",subMenu:"",parentRouteId:10},

{id:156,name:"/payrolladmin",componentName:"Payroll",mainMenu:"Payroll Admin",subMenu:"",parentRouteId:10},

{id:157,name:"/loans",componentName:"Payroll",mainMenu:"Loans",subMenu:"",parentRouteId:10},

{id:158,name:"/perks",componentName:"Payroll",mainMenu:"Perks",subMenu:"",parentRouteId:10},

{id:159,name:"/reports",componentName:"Payroll",mainMenu:"Reports",subMenu:"",parentRouteId:10},

{id:160,name:"/settings",componentName:"Payroll",mainMenu:"Settings",subMenu:"",parentRouteId:10},

{id:161,name:"/analytics",componentName:"Payroll",mainMenu:"Payroll Analytics",subMenu:"Analytics",parentRouteId:154},

{id:162,name:"/compensationplanning",componentName:"Payroll",mainMenu:"Payroll Analytics",subMenu:"Compensation Planning",parentRouteId:154},

{id:163,name:"/budgetestimation",componentName:"Payroll",mainMenu:"Payroll Analytics",subMenu:"Budget Estimation",parentRouteId:154},

{id:164,name:"/comparecompensationstat",componentName:"Payroll",mainMenu:"Payroll Analytics",subMenu:"Compare Compensation Stat",parentRouteId:154},

{id:165,name:"/employeecompetitiveness",componentName:"Payroll",mainMenu:"Payroll Analytics",subMenu:"Employee Competitiveness",parentRouteId:154},

{id:166,name:"/budgetestimation",componentName:"Payroll",mainMenu:"Payroll Analytics",subMenu:"Budget Estimation",parentRouteId:154},

{id:200,name:"/operations",componentName:"Payroll",mainMenu:"Payroll Admin",subMenu:"Operations",parentRouteId:156},

{id:201,name:"/accounting",componentName:"Payroll",mainMenu:"Payroll Admin",subMenu:"Accounting",parentRouteId:156},

{id:202,name:"/incometax&tdsmanagement",componentName:"Payroll",mainMenu:"Payroll Admin",subMenu:"Income Tax & TDS Management",parentRouteId:156},

{id:203,name:"/form16",componentName:"Payroll",mainMenu:"Payroll Admin",subMenu:"Form 16",parentRouteId:156},
]

export default routesData