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
  // {
  //   "header": "Administration",
  //   "description": "Manage your application",
  //   "child": [
  //     {
  //       "title": "Configuration",
  //       "icon": "ic:outline-settings",
  //       "child": [
  //         {
  //           "title": "Environment",
  //           "path": "/devtool/config/environment"
  //         }
  //       ]
  //     },
  //     {
  //       "title": "Menu Editor",
  //       "icon": "ci:menu-alt-03",
  //       "path": "/devtool/menu-editor",
  //       "child": []
  //     },
  //     {
  //       "title": "Manage Users",
  //       "path": "/devtool/user-management",
  //       "icon": "ph:user-circle-gear",
  //       "child": [
  //         {
  //           "title": "User List",
  //           "path": "/devtool/user-management/user",
  //           "icon": "",
  //           "child": []
  //         },
  //         {
  //           "title": "Role List",
  //           "path": "/devtool/user-management/role",
  //           "icon": "",
  //           "child": []
  //         }
  //       ]
  //     },
  //     {
  //       "title": "Content",
  //       "icon": "mdi:pencil-ruler",
  //       "child": [
  //         {
  //           "title": "Editor",
  //           "path": "/devtool/content-editor"
  //         },
  //         {
  //           "title": "Template",
  //           "path": "/devtool/content-editor/template"
  //         }
  //       ]
  //     },
  //     {
  //       "title": "API Editor",
  //       "path": "/devtool/api-editor",
  //       "icon": "material-symbols:api-rounded",
  //       "child": []
  //     },
  //     {
  //       "title": "Code Playground",
  //       "path": "/devtool/code-playground",
  //       "icon": "mdi:code-braces",
  //       "child": []
  //     }
  //   ],
  //   "meta": {
  //     "auth": {
  //       "role": [
  //         "Developer"
  //       ]
  //     }
  //   }
  // },
  {
    "header": "Naim Works",
    "description": "",
    child: [
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
            path: "/apps/ecommerce/products",
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
            title: "Submit Claim",
            path: "/claim/submitClaim",
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
        "title": "Content",
        "icon": "mdi:pencil-ruler",
        "child": [
          {
            "title": "Editor",
            "path": "/devtool/content-editor"
          },
          {
            "title": "Template",
            "path": "/devtool/content-editor/template"
          }
        ]
      },
      {
        "title": "API Editor",
        "path": "/devtool/api-editor",
        "icon": "material-symbols:api-rounded",
        "child": []
      },
      {
        "title": "Code Playground",
        "path": "/devtool/code-playground",
        "icon": "mdi:code-braces",
        "child": []
      }
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
              }
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