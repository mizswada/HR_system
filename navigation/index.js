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
        "title": "Admin",
        "path": "/orangeHR/jobtitles",
        "icon": "ph:user-circle-gear",
        "child": [
          {
            "title": "Job",
            "path": "/orangeHR/jobtitles",
            "icon": "",
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
            "icon": "ph:user-circle-gear",
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