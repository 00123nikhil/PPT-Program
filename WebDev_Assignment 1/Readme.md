# Assignment no 1 | Web Development

## Q1.<!DOCTYPE html> is it a tag of html? If not, what is it and why do we use it?

- `<!DOCTYPE html>` is not a tag of HTML; it is known as the Document Type Declaration (DTD) or Document Type Definition. It is used to specify the version and type of HTML that the document conforms to.

- The `<!DOCTYPE html>` declaration is used in HTML5 documents as the shortest and simplest DOCTYPE declaration. It informs the browser that the document is written in HTML5 syntax. The purpose of the DOCTYPE declaration is to ensure that the browser renders the document correctly by using the appropriate rendering mode.

- The DOCTYPE declaration is placed at the very beginning of an HTML document, before the `<html>` tag. It is not an HTML tag itself, but rather an instruction to the browser about how to interpret the document. The DOCTYPE declaration is required in HTML documents to trigger standards mode rendering in modern browsers.


## Q2.Explain Semantic tags in html? And why do we need it?
Semantic tags in HTML are specific HTML elements that carry meaningful information about the content they wrap. These tags provide structural and contextual meaning to the content, making it more accessible, understandable, and meaningful for both humans and machines (such as search engines and screen readers).

- `<header>`: Represents the introductory content or a group of introductory content in a document or section.
- `<nav>`: Represents a section of navigation links.
- `<main>`: Represents the main content of a document.
- `<article>`: Represents a self-contained composition that can be independently distributed or syndicated.
- `<section>`: Represents a thematic grouping of content within a document.
- `<aside>`: Represents content that is tangentially related to the main content, such as sidebars or callout boxes.
- `<footer>`: Represents the footer of a document or section, typically containing information about the author, copyright, or related links.
- `<figure>` and `<figcaption>`: Represent self-contained content, such as images or illustrations, along with their captions.

Benefits of semantic tags : 

1. **Improved Accessibility**: Semantic tags help screen readers and assistive technologies understand the structure and meaning of the content, making it easier for users with disabilities to navigate and comprehend the page.

2. **Search Engine Optimization (SEO)**: Search engines rely on the structure and context provided by semantic tags to better understand and index web pages. Using semantic tags can improve the visibility and ranking of a website in search engine results.

3. **Maintainable and Readable Code**: Semantic tags make the HTML code more descriptive and self-explanatory, enhancing the readability and maintainability of the codebase. Developers can quickly understand the structure and purpose of different sections within the document.

4. **Future Compatibility**: Semantic tags are designed to be forward-compatible, meaning they are less likely to become obsolete or have their meaning changed in future HTML versions. By using semantic tags, your code is more likely to remain valid and functional in future updates.



## Q3.Differentiate between HTML Tags and Elements?

**HTML Tags:**
- HTML tags are the markup components used to define the structure and elements within an HTML document. They are represented by angle brackets `< >` and are written as opening and closing tags. 
- For example, `<p>` is an opening tag for a paragraph, and `</p>` is a closing tag. 
- HTML tags define the start and end of an element, and they can have attributes to provide additional information or functionality.

**HTML Elements:**
- HTML elements, on the other hand, are made up of HTML tags, their content, and any attributes associated with them. 
- They represent the actual components and building blocks of an HTML document. 
= An HTML element consists of an opening tag, content (if applicable), and a closing tag. For example, the `<p>` element represents a paragraph and includes the opening tag `<p>`, the content (text or other elements), and the closing tag `</p>`.


## Q6.What are some of the advantages of HTML5 over its previous versions?

- Improved Semantics: HTML5 introduced new elements and attributes that provide better semantic meaning to web content. Elements like `<header>`, `<nav>`, `<section>`, `<article>`, and `<footer>` allow developers to structure their web pages more meaningfully, making it easier for search engines, assistive technologies, and developers to understand and manipulate the content.

- Multimedia Support: HTML5 offers native support for multimedia elements, eliminating the need for third-party plugins like Adobe Flash. With HTML5, developers can embed audio and video content directly into web pages using the `<audio>` and `<video>` tags. This provides better compatibility, improved performance, and reduced security vulnerabilities.

- Canvas Element: HTML5 introduced the `<canvas>` element, which allows dynamic rendering of graphics, animations, and visualizations using JavaScript. This feature is especially useful for creating interactive games, data visualization, and other visually rich applications without relying on external plugins.

- Mobile Device Support: HTML5 was designed to address the needs of mobile devices and responsive web design. It introduced features like the viewport meta tag, which allows developers to optimize their web pages for different screen sizes and orientations. Additionally, HTML5 includes form enhancements, offline storage, and geolocation capabilities that enhance the mobile browsing experience.

- Enhanced Forms and Input Types: HTML5 introduced new form input types and attributes, such as `<input type="email">`, `<input type="url">`, `<input type="number">`, and `<input type="date">`. These input types offer better user experience and enable browsers to provide input validation and specialized on-screen keyboards, making form handling more accessible and user-friendly.

- Local Storage and Offline Capabilities: HTML5 introduced the localStorage and sessionStorage APIs, allowing web applications to store data locally on the client-side. This enables developers to build offline-capable web applications that can continue functioning even without an internet connection, providing a more seamless user experience.

- Geolocation API: HTML5 includes a Geolocation API that allows web applications to request and access a user's geographic location. This API enables location-aware services and applications, such as mapping, local search, and location-based recommendations.

- Web Workers: HTML5 introduced Web Workers, which are separate JavaScript threads that run in the background without blocking the main user interface thread. This feature enables developers to perform computationally intensive tasks, such as data processing or image manipulation, without affecting the responsiveness of the web page.




## Q8.What is the difference between `<figure>` tag and `<img>` tag?

- The `<img>` tag is used to embed an image into an HTML document. It is a self-closing tag and requires the `src` attribute to specify the source URL of the image. The `<img>` tag is primarily focused on the visual representation of the image and does not provide any additional semantic information or context.

```html
<img src="image.jpg" alt="Image">
```

- On the other hand, the `<figure>` tag is used to encapsulate and provide semantic meaning to a self-contained content block, often including an image or illustration. It is typically used to associate a caption or explanatory text with the content it wraps. The `<figure>` tag can contain various types of content, including images, videos, audio, code snippets, diagrams, etc.

```html
<figure>
  <img src="image.jpg" alt="image">
  <figcaption>Caption describing the image.</figcaption>
</figure>
```

- In the example above, the `<figure>` element wraps both the `<img>` tag and the `<figcaption>` tag. The `<figcaption>` tag is used to provide a caption or description for the content within the `<figure>` element.

- The use of the `<figure>` tag helps to convey the relationship between the image and its associated content, providing better accessibility and improved semantic structure for the document. It also allows search engines and assistive technologies to understand the relationship between the image and its caption or description.



## Q9. What’s the difference between html tag and attribute and give example of some global attributes?

- Tags: HTML tags define the structure and semantics of the content within an HTML document. They are enclosed in angle brackets ("<" and ">") and usually come in pairs with an opening tag and a closing tag. Tags are used to mark up and organize different elements of a web page, such as headings, paragraphs, links, images, lists, etc.

```html
<p>This is a paragraph.</p>
<a href="https://example.com">Visit Example</a>
```

In the examples above, `<p>` and `<a>` are tags that define a paragraph and a link, respectively.

- Attributes: HTML attributes provide additional information or properties to the HTML tags. They are added to the opening tag of an element and consist of a name-value pair, separated by an equals sign ("="). Attributes help modify the behavior, appearance, or functionality of an element.

```html
<a href="https://example.com" target="_blank">Click here</a>
<img src="image.jpg" alt="image">
```

In the examples above, `href` and `target` are attributes of the `<a>` tag, specifying the URL and the target window for the link. Similarly, `src` and `alt` are attributes of the `<img>` tag, specifying the image source URL and an alternative text description.

Global attributes are attributes that can be used with any HTML tag, regardless of its specific function. Some common global attributes include:

- `class`: Specifies one or more CSS classes to apply to an element.
- `id`: Specifies a unique identifier for an element.
- `style`: Allows inline CSS styling for an element.
- `title`: Provides additional information or a tooltip for an element.
- `lang`: Specifies the language of the element's content.
- `data-*`: Custom data attributes for storing extra information.
- `aria-*`: Attributes for defining accessible roles, properties, and states.

```html
<p class="highlight" id="my-paragraph" style="color: red;" title="Important">This is a highlighted paragraph.</p>
<button data-action="submit">Submit</button>
<input type="text" aria-label="Enter your name" />
```

Global attributes provide a way to add common functionality or styling to HTML elements, making them versatile and flexible in terms of customization and interactivity.