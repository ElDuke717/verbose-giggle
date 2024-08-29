const axios = require('axios');

const placeholderPosts = [
    {
        title: "The Rise of JavaScript Frameworks",
        content: "In recent years, JavaScript frameworks have taken the development world by storm. From React to Vue, these tools have made it easier to build dynamic, responsive web applications. This post explores the key players and the impact they have had on the industry.",
        author_id: 1
    },
    {
        title: "Understanding RESTful APIs",
        content: "RESTful APIs are the backbone of modern web applications, allowing different systems to communicate seamlessly. In this post, we'll break down what a RESTful API is, how it works, and why it's important in today's development landscape.",
        author_id: 2
    },
    {
        title: "Getting Started with AWS",
        content: "Amazon Web Services (AWS) offers a wide range of services that allow developers to build, deploy, and manage applications in the cloud. This beginner's guide walks you through setting up your first AWS environment.",
        author_id: 1
    },
    {
        title: "A Deep Dive into Node.js",
        content: "Node.js has become a staple for back-end development, offering a non-blocking, event-driven architecture that's perfect for real-time applications. In this post, we'll explore the core concepts of Node.js and how you can get started with it.",
        author_id: 3
    },
    {
        title: "CSS Grid vs. Flexbox: Which Should You Use?",
        content: "When it comes to layout design, CSS Grid and Flexbox are two of the most powerful tools at your disposal. But when should you use one over the other? This post compares the two, highlighting their strengths and ideal use cases.",
        author_id: 1
    },
    {
        title: "The Evolution of Web Design",
        content: "Web design has come a long way since the early days of the internet. From table-based layouts to responsive design, this post looks at how web design has evolved over the years and what trends are shaping the future.",
        author_id: 2
    },
    {
        title: "Mastering Git for Version Control",
        content: "Git is an essential tool for developers, allowing teams to collaborate on projects and keep track of changes. This post covers the basics of Git, including how to commit, branch, and merge your code effectively.",
        author_id: 1
    },
    {
        title: "Why You Should Learn Python",
        content: "Python is one of the most versatile and widely-used programming languages today. Whether you're interested in web development, data science, or automation, Python has something to offer. Here's why you should consider adding Python to your skillset.",
        author_id: 3
    },
    {
        title: "The Basics of Web Accessibility",
        content: "Web accessibility ensures that your website can be used by everyone, including people with disabilities. This post explores the basic principles of web accessibility and how you can implement them in your projects.",
        author_id: 2
    },
    {
        title: "Introduction to Machine Learning",
        content: "Machine learning is transforming industries across the globe, from healthcare to finance. In this post, we'll introduce you to the fundamental concepts of machine learning and discuss some of the most common algorithms used today.",
        author_id: 1
    },
    {
        title: "Building a Responsive Website with Bootstrap",
        content: "Bootstrap is a popular framework for building responsive websites quickly and efficiently. In this post, we'll walk you through the basics of Bootstrap and how you can use it to create a mobile-friendly website.",
        author_id: 1
    },
    {
        title: "Top 10 VS Code Extensions for Developers",
        content: "Visual Studio Code is a powerful code editor with a rich ecosystem of extensions. This post lists the top 10 extensions that can boost your productivity and streamline your development workflow.",
        author_id: 3
    },
    {
        title: "Understanding SQL and Databases",
        content: "SQL is the language of databases, and understanding it is crucial for anyone working with data. This post covers the basics of SQL, including how to write queries, manage databases, and optimize performance.",
        author_id: 2
    },
    {
        title: "Getting Started with React",
        content: "React is a powerful JavaScript library for building user interfaces. Whether you're new to web development or an experienced developer looking to expand your skill set, this post will help you get started with React.",
        author_id: 1
    },
    {
        title: "The Future of Web Development",
        content: "Web development is constantly evolving, with new technologies and frameworks emerging all the time. This post explores the future of web development, including trends like serverless computing, WebAssembly, and AI-driven design.",
        author_id: 3
    }
];

placeholderPosts.forEach(post => {
    axios.post('http://localhost:3000/api/posts', post)  // Update the URL as needed
        .then(response => {
            console.log(`Successfully created post: ${response.data.title}`);
        })
        .catch(error => {
            console.error(`Failed to create post: ${post.title}`, error);
        });
});