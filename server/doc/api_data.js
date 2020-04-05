define({ "api": [
  {
    "type": "post",
    "url": "/space/create",
    "title": "Create default space",
    "name": "EverPresent",
    "group": "Space",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "space",
            "description": "<p>User info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"Space successfully created.\",\n  \"space\": {\n      \"moderator\": {\n          \"approved\": true,\n          \"verified\": true,\n          \"user\": \"5c7fd6c230a5dd501e5ef065\"\n      },\n      \"memories\": [],\n      \"_id\": \"5c7fd6dc30a5dd501e5ef067\",\n      \"owner\": \"5c7fd6c230a5dd501e5ef065\",\n      \"readers\": [],\n      \"createdAt\": \"2019-03-06T14:19:08.260Z\",\n      \"updatedAt\": \"2019-03-06T14:19:08.260Z\",\n      \"__v\": 0\n  },\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  error: \"DatabaseError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/space.controller.js",
    "groupTitle": "Space"
  },
  {
    "type": "post",
    "url": "/space/processInvitation/:hash",
    "title": "Process invitation.",
    "name": "EverPresent",
    "group": "Space",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "verified",
            "description": "<p>Verify user which accepted invitation.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>New user object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link for invitation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "space",
            "description": "<p>User info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"Successfully process invitation.\",\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidLink",
            "description": "<p>There is no invitation link with this hash.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User which try to process invitation is not the user who created it.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  error: \"DatabaseError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/space.controller.js",
    "groupTitle": "Space"
  },
  {
    "type": "post",
    "url": "/space/memory/save",
    "title": "Route to save memory to space",
    "name": "EverPresent",
    "group": "Space",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "video",
            "description": "<p>File with memory video.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "description",
            "description": "<p>Description for memory.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "space",
            "description": "<p>Space to save memory in.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Info about memory space and user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"message\": \"Successfully save memory\",\n   \"data\": {\n       \"memory\": {\n           \"_id\": \"5c80f9b9575a33190803e85e\",\n           \"url\": \"sfo2.digitaloceanspaces.com/evrprsntspace/fee2547437869874bf7b3ebeb315e703-Story-Flow.mp4\",\n           \"description\": \"Some video description.\",\n           \"createdAt\": \"2019-03-07T11:00:09.410Z\",\n           \"updatedAt\": \"2019-03-07T11:00:09.410Z\",\n           \"__v\": 0\n       },\n       \"space\": {\n           \"moderator\": {\n               \"approved\": true,\n               \"verified\": true,\n               \"user\": \"5c80f21c5f985b13d160fba3\"\n           },\n           \"memories\": [],\n           \"_id\": \"5c80f2c95f985b13d160fba5\",\n           \"owner\": \"5c80f21c5f985b13d160fba3\",\n           \"readers\": [\n               {\n                   \"approved\": false,\n                   \"verified\": false,\n                   \"_id\": \"5c80f3545f985b13d160fba7\",\n                   \"user\": \"5c80f3545f985b13d160fba6\",\n                   \"roleName\": \"Mother\"\n               }\n           ],\n           \"createdAt\": \"2019-03-07T10:30:33.245Z\",\n           \"updatedAt\": \"2019-03-07T10:32:52.091Z\",\n           \"__v\": 1\n       },\n       \"user\": {\n           \"_id\": \"5c80f21c5f985b13d160fba3\",\n           \"name\": \"Someonse\",\n           \"email\": \"ssosmseone@ssomemail.com\",\n           \"password\": \"$2b$10$V96G4KqVqHdZvXOzECRZMe50QKIM.q8yjYL3Mh8FZHfOvvWBi9j3i\",\n           \"tokens\": [],\n           \"createdAt\": \"2019-03-07T10:27:40.848Z\",\n           \"updatedAt\": \"2019-03-07T10:27:40.848Z\",\n           \"__v\": 0,\n           \"id\": \"5c80f21c5f985b13d160fba3\"\n       }\n   },\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SpaceInvalid",
            "description": "<p>Space doesnt exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>You are not owner of requested space.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoFile",
            "description": "<p>No video fle provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TooLarge",
            "description": "<p>Video file too large.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectFormat",
            "description": "<p>Only .avi, .flv, .wmv, .mov, .mp4 extensions are allowed.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidType",
            "description": "<p>Only video type is available now.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  error: \"DatabaseError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/space.controller.js",
    "groupTitle": "Space"
  },
  {
    "type": "get",
    "url": "/:spaceId/:memoryId",
    "title": "Route to get memory.",
    "name": "EverPresent",
    "group": "Space",
    "version": "1.0.0",
    "description": "<p>If memoryId === 'all' returns all memories for space.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "memories",
            "description": "<p>Requested memories array.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"Successfully get memories\",\n  \"memories\": [\n      {\n          \"_id\": \"5c80f9b9575a33190803e85e\",\n          \"url\": \"sfo2.digitaloceanspaces.com/evrprsntspace/fee2547437869874bf7b3ebeb315e703-Story-Flow.mp4\",\n          \"description\": \"Some video description.\",\n          \"createdAt\": \"2019-03-07T11:00:09.410Z\",\n         \"updatedAt\": \"2019-03-07T11:00:09.410Z\",\n         \"__v\": 0\n      }\n  ],\n \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SpaceInvalid",
            "description": "<p>Space doesnt exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>You are not owner of requested space.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MemoryInvalid",
            "description": "<p>Memory doesnt exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  error: \"DatabaseError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/space.controller.js",
    "groupTitle": "Space"
  },
  {
    "type": "get",
    "url": "/space/verifyInvitation",
    "title": "Route to verify invitation.",
    "name": "EverPresent",
    "group": "Space",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "space",
            "description": "<p>Space id where you want to approve user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>User id you want to approve.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "approved",
            "description": "<p>Approve or decline user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"Successfully verified user.\",\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SpaceInvalid",
            "description": "<p>Space doesnt exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>You are not owner of requested space.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserInvalid",
            "description": "<p>User with this id doesnt take part in this space.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  error: \"DatabaseError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/space.controller.js",
    "groupTitle": "Space"
  },
  {
    "type": "get",
    "url": "/space/:id",
    "title": "Route to get space.",
    "name": "EverPresent",
    "group": "Space",
    "version": "1.0.0",
    "description": "<p>If id === 'all' return all user spaces.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "spaces",
            "description": "<p>All requested spaces.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"message\": \"Successfully get spaces.\",\n   \"spaces\": [\n       {\n           \"moderator\": {\n               \"approved\": true,\n               \"verified\": true,\n               \"user\": {\n                   \"_id\": \"5c80f21c5f985b13d160fba3\",\n                   \"name\": \"Someonse\",\n                   \"email\": \"ssosmseone@ssomemail.com\",\n                   \"password\": \"$2b$10$V96G4KqVqHdZvXOzECRZMe50QKIM.q8yjYL3Mh8FZHfOvvWBi9j3i\",\n                   \"tokens\": [],\n                   \"createdAt\": \"2019-03-07T10:27:40.848Z\",\n                   \"updatedAt\": \"2019-03-07T10:27:40.848Z\",\n                   \"__v\": 0\n               }\n           },\n           \"memories\": [\n               {\n                   \"_id\": \"5c80f9b9575a33190803e85e\",\n                   \"url\": \"sfo2.digitaloceanspaces.com/evrprsntspace/fee2547437869874bf7b3ebeb315e703-Story-Flow.mp4\",\n                   \"description\": \"Some video description.\",\n                   \"createdAt\": \"2019-03-07T11:00:09.410Z\",\n                   \"updatedAt\": \"2019-03-07T11:00:09.410Z\",\n                   \"__v\": 0\n               }\n           ],\n           \"_id\": \"5c80f2c95f985b13d160fba5\",\n           \"owner\": {\n               \"_id\": \"5c80f21c5f985b13d160fba3\",\n               \"name\": \"Someonse\",\n               \"email\": \"ssosmseone@ssomemail.com\",\n               \"password\": \"$2b$10$V96G4KqVqHdZvXOzECRZMe50QKIM.q8yjYL3Mh8FZHfOvvWBi9j3i\",\n               \"tokens\": [],\n               \"createdAt\": \"2019-03-07T10:27:40.848Z\",\n               \"updatedAt\": \"2019-03-07T10:27:40.848Z\",\n               \"__v\": 0\n           },\n           \"readers\": [\n               {\n                   \"approved\": true,\n                   \"verified\": false,\n                   \"_id\": \"5c80f3545f985b13d160fba7\",\n                   \"user\": {\n                       \"_id\": \"5c80f3545f985b13d160fba6\",\n                       \"tokens\": [],\n                       \"createdAt\": \"2019-03-07T10:32:52.085Z\",\n                       \"updatedAt\": \"2019-03-07T10:32:52.085Z\",\n                       \"__v\": 0\n                   },\n                   \"roleName\": \"Mother\"\n               }\n           ],\n           \"createdAt\": \"2019-03-07T10:30:33.245Z\",\n           \"updatedAt\": \"2019-03-07T11:30:17.422Z\",\n           \"__v\": 1\n       }\n   ],\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SpaceInvalid",
            "description": "<p>Space doesnt exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>You are not owner of requested space or space doesn't exist.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"success\": false,\n \"error\": \"DatabaseError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/space.controller.js",
    "groupTitle": "Space"
  },
  {
    "type": "post",
    "url": "/space/invite",
    "title": "Invite user to space.",
    "name": "EverPresent",
    "group": "Space",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "space",
            "description": "<p>Space id for invitation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>Role name for invited user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Phone number to send notification.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email address to send invitation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "permission",
            "description": "<p>Permissions for user(moderator/reader)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>New user object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link for invitation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "space",
            "description": "<p>User info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"message\": \"Successfully generate invitation link\",\n   \"link\": \"http://evrprsnt.com/v1/space/processInvitation/e1ad40e51a2e699dc9551c877feda3f5\",\n   \"user\": {\n       \"_id\": \"5c80f3545f985b13d160fba6\",\n       \"tokens\": [],\n       \"createdAt\": \"2019-03-07T10:32:52.085Z\",\n       \"updatedAt\": \"2019-03-07T10:32:52.085Z\",\n       \"__v\": 0\n   },\n   \"space\": {\n       \"moderator\": {\n           \"approved\": true,\n           \"verified\": true,\n           \"user\": \"5c80f21c5f985b13d160fba3\"\n       },\n       \"memories\": [],\n       \"_id\": \"5c80f2c95f985b13d160fba5\",\n       \"owner\": \"5c80f21c5f985b13d160fba3\",\n       \"readers\": [\n           {\n               \"approved\": false,\n               \"verified\": false,\n               \"_id\": \"5c80f3545f985b13d160fba7\",\n               \"user\": {\n                   \"_id\": \"5c80f3545f985b13d160fba6\",\n                   \"tokens\": [],\n                   \"createdAt\": \"2019-03-07T10:32:52.085Z\",\n                   \"updatedAt\": \"2019-03-07T10:32:52.085Z\",\n                   \"__v\": 0\n               },\n               \"roleName\": \"Mother\"\n           }\n       ],\n       \"createdAt\": \"2019-03-07T10:30:33.245Z\",\n       \"updatedAt\": \"2019-03-07T10:32:52.091Z\",\n       \"__v\": 1\n   },\n   \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DatabaseError",
            "description": "<p>Database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SpaceInvalid",
            "description": "<p>Space doesnt exist yet.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>You are not owner of requested space.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPermission",
            "description": "<p>Invalid user permission(use moderator/reader only).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  error: \"DatabaseError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/space.controller.js",
    "groupTitle": "Space"
  },
  {
    "type": "post",
    "url": "/user/logout",
    "title": "Route to clear token after logout.",
    "name": "EverPresent",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Status message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"Successfully remove token.\",\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\": \"DataBaseError\",\n  \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login user account",
    "name": "EverPresent",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content..</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tokens",
            "description": "<p>Access and Refresh tokens.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  tokens: {\n      \"refresh_token\": \"Bearer 5c7d5a630...69e09a3adc\",\n      \"access_token\": \"Bearer eyJhbG...sPiD73Xcc\"\n  },\n  user: {\n      _id: \"5c7d27d56b03c73b73b4362b\",\n      name: \"Someone\",\n      email: \"someone@somemail.com\",\n      password: \"$2b$10$JY...MVx6WgCSyq\",\n      tokens: [],\n      createdAt: \"2019-03-04T13:27:49.764Z\",\n      updatedAt: \"2019-03-04T13:27:49.764Z\",\n      __v: 0,\n      id: \"5c7d27d56b03c73b73b4362b\"\n  },\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmail",
            "description": "<p>Enter email for registration.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPassword",
            "description": "<p>Enter password for registration.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoEmail",
            "description": "<p>Email for this account doesn't set.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoPassword",
            "description": "<p>Password for this account doesn't set.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>Invalid email or password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  error: \"InvalidEmail\",\n  success: false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/oauth/facebook",
    "title": "Login and registration via facebook oauth.",
    "name": "EverPresent",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content..</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook oauth flow token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Invited user id from deeplink data.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tokens",
            "description": "<p>Access and Refresh tokens.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"tokens\": {\n     \"refresh_token\": \"Bearer 5c7fbc...2073a35f\",\n     \"access_token\": \"Bearer eyJh....i8cW33YOhH6I\"\n  },\n  \"user\": {\n      \"_id\": \"5c7fbc0ed1f8ab3e2073a35e\",\n      \"name\": \"Some One\",\n      \"email\": \"\",\n      \"tokens\": [],\n      \"createdAt\": \"2019-03-06T12:24:46.346Z\",\n      \"updatedAt\": \"2019-03-06T12:24:46.346Z\",\n      \"__v\": 0,\n      \"id\": \"5c7fbc0ed1f8ab3e2073a35e\"\n  },\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalOAuthError",
            "description": "<p>Inactive oauth token provided.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidLink",
            "description": "<p>Invalid invitation link.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataBaseError",
            "description": "<p>Database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Server error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\": \"InternalOAuthError\",\n  \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get user info.",
    "name": "EverPresent",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"user\": {\n      \"_id\": \"5c7fbeb30c48a75b0e25a7a9\",\n      \"name\": \"Someonse\",\n      \"email\": \"sosmseone@ssomemail.com\",\n      \"password\": \"$2b$10$6l3S.kfyIE75toMcJlm2zOqUU9IiTwh3joZBGSbG59HxUlQjx83pC\",\n      \"tokens\": [],\n      \"createdAt\": \"2019-03-06T12:36:03.535Z\",\n      \"updatedAt\": \"2019-03-06T12:36:03.535Z\",\n      \"__v\": 0,\n      \"id\": \"5c7fbeb30c48a75b0e25a7a9\"\n  },\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataBaseError",
            "description": "<p>Database error.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Server error.</p>"
          }
        ]
      }
    },
    "filename": "controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/refresh/:token",
    "title": "Refresh user token.",
    "name": "EverPresent",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tokens",
            "description": "<p>User new tokens.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"tokens\": {\n      \"refresh_token\": \"Bearer 5c7fbc...2073a35f\",\n      \"access_token\": \"Bearer eyJh....i8cW33YOhH6I\"\n  },\n  \"user\": {\n      \"_id\": \"5c7fbeb30c48a75b0e25a7a9\",\n      \"name\": \"Someonse\",\n      \"email\": \"sosmseone@ssomemail.com\",\n      \"password\": \"$2b$10$6l3S.kfyIE75toMcJlm2zOqUU9IiTwh3joZBGSbG59HxUlQjx83pC\",\n      \"tokens\": [],\n      \"createdAt\": \"2019-03-06T12:36:03.535Z\",\n      \"updatedAt\": \"2019-03-06T12:36:03.535Z\",\n      \"__v\": 0,\n      \"id\": \"5c7fbeb30c48a75b0e25a7a9\"\n  },\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/setToken",
    "title": "Add firebase token to user.",
    "name": "EverPresent",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        },
        {
          "title": "Authorization-Example:",
          "content": "{ \"Authorization\": \"Barear df2s124f4sa4fsa...jksa32452f\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tokens",
            "description": "<p>User new tokens.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"user\": {\n      \"_id\": \"5c7fbeb30c48a75b0e25a7a9\",\n      \"name\": \"Someonse\",\n      \"email\": \"sosmseone@ssomemail.com\",\n      \"password\": \"$2b$10$6l3S.kfyIE75toMcJlm2zOqUU9IiTwh3joZBGSbG59HxUlQjx83pC\",\n      \"tokens\": [],\n      \"createdAt\": \"2019-03-06T12:36:03.535Z\",\n      \"updatedAt\": \"2019-03-06T12:36:03.535Z\",\n      \"__v\": 0,\n      \"id\": \"5c7fbeb30c48a75b0e25a7a9\"\n  },\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\": \"DataBaseError\",\n  \"success\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Register user account",
    "name": "EverPresent",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Type of body content.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Content-Type-Example:",
          "content": "{ \"Content-Type\": \"application/json }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Users email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Users name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User info.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "tokens",
            "description": "<p>Access and Refresh tokens.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success indicator.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  message: \"Registration is successful\",\n  user: {\n      _id: \"5c7d27d56b03c73b73b4362b\",\n      name: \"someone\",\n      email: \"example@example.com\",\n      password: \"$2b$10$JYsMYrIYiRqiA0yopgyipusLAQ5c9a4TcHSoZ.MrEOVMVx6WgCSyq\",\n      tokens: [],\n      createdAt: \"2019-03-04T13:27:49.764Z\",\n      updatedAt: \"2019-03-04T13:27:49.764Z\",\n      __v: 0,\n      id: \"5c7d27d56b03c73b73b4362b\"\n  },\n  tokens: {\n      refresh_token: \"Bearer 5c7sd...b03c73b73c\",\n      access_token: \"Bearer eyJhb...tPtLSalWkk\"\n  },\n  success: true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidEmail",
            "description": "<p>Enter email for registration</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidName",
            "description": "<p>Enter name for registration</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidPassword",
            "description": "<p>Enter password for registration</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  error: \"InvalidEmail\",\n  success: false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/user.controller.js",
    "groupTitle": "User"
  }
] });
