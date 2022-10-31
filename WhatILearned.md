1. slug is a human readable sentence without white space and special characters, simply seperated with dashes
2. When you want to use Image component put the images in puclic folder and the path to the image in src doesn't need '/public/' because the public folder will be the root level after build.
3. You can use react-markdown package to render markdown into JSX
   npm install react-markdown
4. gray matter package is used to read a markdown file and split it into markdown and actual metadata content
   npm i gray-matter
5. const postSlug = fileName.replace(/\.md$/, "")
   for writing regex you don't need to put it in strings
6. To overwrite how certain elements are rendered we can give ReactMarkdown special props called components. components accept an object where you tell ReactMarkdown how certain elements should be rendered.
   this is an example of what the image props from markdown lookslike:

```
{
  src: 'nextjs-file-based-routing.png',
  alt: 'Create routes via your file + folder structure',
  node: {
    type: 'element',
    tagName: 'img',
    properties: {
      src: 'nextjs-file-based-routing.png',
      alt: 'Create routes via your file + folder structure'
    },
    children: [],
    position: { start: [Object], end: [Object] }
  }
}
```
