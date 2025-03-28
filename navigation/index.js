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
    "header": "Administration",
    "description": "Manage your application",
    "child": [
      {
        "title": "Configuration",
        "icon": "ic:outline-settings",
        "child": [
          {
            "title": "Environment",
            "path": "/devtool/config/environment"
          }
        ]
      },
      {
        "title": "Menu Editor",
        "icon": "ci:menu-alt-03",
        "path": "/devtool/menu-editor",
        "child": []
      },
      {
        "title": "Manage Users",
        "path": "/devtool/user-management",
        "icon": "ph:user-circle-gear",
        "child": [
          {
            "title": "User List",
            "path": "/devtool/user-management/user",
            "icon": "",
            "child": []
          },
          {
            "title": "Role List",
            "path": "/devtool/user-management/role",
            "icon": "",
            "child": []
          }
        ]
      },
      {
        title: "Admin",
        icon: "ic:outline-insert-drive-file",
        child: [
          {
            title: "Qualification",
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
            path: "/admin/raceReligion",
          },
          {
            title: "Coparate Branding",
            path: "/admin/coparateBranding",
          },
        ],
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
    "meta": {
      "auth": {
        "role": [
          "Developer"
        ]
      }
    }
  },
  {
    "header": "Help",
    "description": "Help and documentation",
    "child": [
      {
        "title": "Documentation",
        "icon": "solar:book-bookmark-minimalistic-bold",
        "path": "https://manual.corrad.ai",
        "external": true
      },
      {
        "title": "UI Components",
        "icon": "material-symbols:settings-input-component-outline-rounded",
        "path": "https://ui.corrad.ai",
        "external": true
      }
    ],
    "meta": {
      "auth": {
        "role": [
          "Developer"
        ]
      }
    }
  }
];