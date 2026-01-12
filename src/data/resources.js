import codeIcon from "../icons/code.svg";
import scholarshipIcon from "../icons/scholarship.svg";
import communityIcon from "../icons/community.svg";
import learningIcon from "../icons/learning.svg";

export const resourceCategories = [
  {
    title: "Coding Platforms",
    icon: codeIcon,
    resources: [
      { name: "freeCodeCamp", link: "https://www.freecodecamp.org" },
      { name: "Codecademy", link: "https://www.codecademy.com" },
      { name: "LeetCode", link: "https://leetcode.com" }
    ]
  },
  {
    title: "Scholarships",
    icon: scholarshipIcon,
    resources: [
      {
        name: "Google Generation Scholarship",
        link: "https://buildyourfuture.withgoogle.com/scholarships"
      },
      {
        name: "Women Techmakers Scholars",
        link: "https://www.womentechmakers.com/scholars"
      }
    ]
  },
  {
    title: "Communities",
    icon: communityIcon,
    resources: [
      { name: "Women Who Code", link: "https://www.womenwhocode.com" },
      { name: "Girls Who Code", link: "https://girlswhocode.com" },
      { name: "She Codes", link: "https://www.shecodes.io" }
    ]
  },
  {
    title: "Learning Resources",
    icon: learningIcon,
    resources: [
      { name: "MDN Web Docs", link: "https://developer.mozilla.org" },
      { name: "Coursera", link: "https://www.coursera.org" },
      { name: "Udemy", link: "https://www.udemy.com" }
    ]
  }
];
