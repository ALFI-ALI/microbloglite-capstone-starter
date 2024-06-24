/* Posts Page JavaScript */

"use strict";
// const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";
fetch('http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts?limit=100&offset=0', {
    headers: {
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsZmlAbWQiLCJpYXQiOjE3MTkyNjgwMDcsImV4cCI6MTcxOTM1NDQwN30.Pb8ZUMHxkCj-GNOqsVF5mlXNIdIW6NVkGNAwQfR7PIk'
    }
  }); 
  console.log(headers);