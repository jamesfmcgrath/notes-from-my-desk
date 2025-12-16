const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'posts');

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir);
}

for (let i = 1; i <= 15; i++) {
  const date = new Date();
  date.setDate(date.getDate() - i);
  const dateStr = date.toISOString().split('T')[0];

  const content = `---
title: "Sample Post ${i}: The Journey of Code"
date: "${dateStr}"
excerpt: "This is a sample post number ${i} to test the pagination and layout of the blog. It explores nothing in particular but fills the space nicely."
coverImage: ""
---

# The Art of Placeholder Text

Content for post ${i}.

## Subheading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

- Item 1
- Item 2
- Item 3

> "Code is poetry." - Anonymous

### Another Section

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
`;

  fs.writeFileSync(path.join(postsDir, `post-${i}.md`), content);
}

console.log('Generated 15 posts.');
