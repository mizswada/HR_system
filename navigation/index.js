export default [
  {
    "header": "",
    "description": "",
    "child": [
      {
        "title": "Dashboard",
        "path": "/dashboard",
        "icon": "ic:outline-dashboard",
        "child": [],
        "meta": {}
      }
    ]
  },
  {
    "header": "Naim Works",
    "description": "",
    "child": [
      {
        title: "Qualification",
        icon:"healthicons:i-exam-qualification-outline",
        child: [
          {
            title: "Skills",
            path: "/admin/qualifications/skills",
          },
          {
            title: "Education",
            path: "/admin/qualifications/educations",
          },
          {
            title: "Licenses",
            path: "/admin/qualifications/licenses",
          },
          {
            title: "Languages",
            path: "/admin/qualifications/languages",
          },
          {
            title: "Memberships",
            path: "/admin/qualifications/memberships",
          },
        ],
      },
      {
        title: "Race & Religion",
        icon:"ic:baseline-settings",
        path: "/admin/raceReligion",
      },
      {
        title: "Coparate Branding",
        icon:"streamline:interface-text-formatting-paragraph-bullets-points-bullet-align-paragraph-formatting-bullets-text",
        path: "/admin/coparateBranding",
      },
      {
        title: "Leave",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Apply",
            path: "/leave/apply",
          },
          {
            title: "My Leave",
            path: "/leave/myLeave",
          },
          {
            title: "Entitlements",
            child: [
              {
                title: "Add Entitlement",
                path: "/leave/entitlement/addEntitlement",
              },
              {
                title: "Employee Entitlement",
                path: "/leave/entitlement/employeeEntitlement",
              },
              {
                title: "My Entitlement",
                path: "/leave/entitlement/myEntitlement",
              },
            ],
          },
          {
            title: "Report",
            path: "/leave/report",
          },
          {
            title: "Configuration",
            child: [
              {
                title: "Leave period",
                path: "/leave/configuration/leavePeriod",
              },
              {
                title: "Leave type",
                path: "/leave/configuration/leaveType",
              },
              {
                title: "Work week",
                path: "/leave/configuration/workWeek",
              },
              {
                title: "Holidays",
                path: "/leave/configuration/holidays",
              },
            ],
          },
          {
            title: "Leave list",
            path: "/leave/leaveList",
          },
          {
            title: "Assign leave",
            path: "/leave/assignLeave",
          },
        ],
      },
      {
        title: "Claim",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Configuration",
            child: [
              {
                title: "Events",
                path: "/claim/configuration/events",
              },
              {
                title: "Expense Types",
                path: "/claim/configuration/expenseTypes",
              },
            ],
          },
          {
            title: "Create Claim",
            path: "/claim/createClaim",
          },
          {
            title: "My Claims",
            path: "/claim/myClaims",
          },
          {
            title: "Employee Claims",
            path: "/claim/employeeClaims",
          },
          {
            title: "Assign Claim",
            path: "/claim/assignClaim",
          },
        ],
      },
      {
        title: "My Info",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Personal Details",
            path: "/myInfo/personalDetails",
          },
          {
            title: "Contact Details",
            path: "/myInfo/contactDetails",
          },
          {
            title: "Emergency Contacts",
            path: "/myInfo/emergencyContact",
          },
          {
            title: "Dependents",
            path: "/myInfo/dependents",
          },
          {
            title: "Immigration",
            path: "/myinfo/immigration",
          },
        ],
      },
    ],
  },
  {
    "header": "Aqib Works",
    "description": "",
    "child": [
          {
            "title": "Job",
            "path": "/orangeHR/jobtitles",
            "icon": "ic:sharp-list-alt",
            "child": [
              {
                "title": "Job Title",
                "path": "/orangeHR/jobtitles/job-title",
                "icon": "",
                "child": []
              },
              {
                "title": "Pay Grades",
                "path": "/orangeHR/jobtitles/pay-grades",
                "icon": "",
                "child": []
              },
              {
                "title": "Employment Status",
                "path": "/orangeHR/jobtitles/employmentstat",
                "icon": "",
                "child": []
              },
              {
                "title": "Job Categories",
                "path": "/orangeHR/jobtitles/jobcategories",
                "icon": "",
                "child": []
              },
              {
                "title": "Work Shifts",
                "path": "/orangeHR/jobtitles/workshifts",
                "icon": "",
                "child": []
              }
            ]
          },
          {
            "title": "Organization",
            "path": "/orangeHR/organization",
            "icon": "ri:organization-chart",
            "child": [
              {
                "title": "General Information",
                "path": "/orangeHR/organization/generalinfo",
                "icon": "",
                "child": []
              },
              {
                "title": "Locations",
                "path": "/orangeHR/organization/locations",
                "icon": "",
                "child": []
              },
              {
                "title": "Structure",
                "path": "/orangeHR/organization/structure",
                "icon": "",
                "child": []
              },
              {
                "title": "Human Resources SOP",
                "path": "/orangeHR/organization/hrsop",
                "icon": "",
                "child": []
              },

              {
                "title": "PIM",
                "path": "/orangeHR/PIM",
                "icon": "ph:user-circle-gear",
                "child": [
                  {
                    "title": "Configuration",
                    "path": "/orangeHR/PIM/configuration",
                    "icon": "",
                    "child": [
                      {
                        "title": "Optional Fields",
                        "path": "/orangeHR/PIM/configuration/optionalfield",
                        "icon": "",
                        "child": []
                      },
                      {
                        "title": "Data Import",
                        "path": "/orangeHR/PIM/configuration/dataimport",
                        "icon": "",
                        "child": []
                      },
                      {
                        "title": "Reporting Methods",
                        "path": "/orangeHR/PIM/configuration/reportingmethods",
                        "icon": "",
                        "child": []
                      },
                      {
                        "title": "Termination Reasons",
                        "path": "/orangeHR/PIM/configuration/terminationreasons",
                        "icon": "",
                        "child": []
                      },
                    ]
                  },
                  {
                    "title": "Employee List",
                    "path": "/orangeHR/PIM/employeelist",
                    "icon": "ph:user-circle-gear",
                    "child": []
                  },
                  {
                    "title": "Add Employee",
                    "path": "/orangeHR/PIM/addemployee",
                    "icon": "ph:user-circle-gear",
                    "child": []
                  },
                  {
                    "title": "Employee Report",
                    "path": "/orangeHR/PIM/report",
                    "icon": "ph:user-circle-gear",
                    "child": []
                  }
                ]
              },
        
            ]
          }
        ]
  },
    
  // {
  //   "header": "Help",
  //   "description": "Help and documentation",
  //   "child": [
  //     {
  //       "title": "Documentation",
  //       "icon": "solar:book-bookmark-minimalistic-bold",
  //       "path": "https://manual.corrad.ai",
  //       "external": true
  //     },
  //     {
  //       "title": "UI Components",
  //       "icon": "material-symbols:settings-input-component-outline-rounded",
  //       "path": "https://ui.corrad.ai",
  //       "external": true
  //     }
  //   ],
  //   "meta": {
  //     "auth": {
  //       "role": [
  //         "Developer"
  //       ]
  //     }
  //   }
  // }
];