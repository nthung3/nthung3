// Blog posts data
export const blogPosts = [
  {
    title: "Getting Started with Next.js 13 App Router",
    date: "March 1, 2025",
    excerpt: "Learn how to use the new app router in Next.js 13 with this comprehensive guide.",
    slug: "getting-started-nextjs-13",
    tags: ["Next.js", "React", "Tutorial"],
    color: "!bg-neo-purple",
    textColor: "text-white",
    content: [
      "Next.js 13 introduced the App Router, a new paradigm for building React applications that embraces React Server Components and offers improved routing capabilities. In this guide, we'll explore how to leverage these new features to build better web applications.",
      
      "The App Router uses a file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more. This new router works alongside the Pages Router, so you can incrementally adopt it in your application.",
      
      "One of the most powerful features of the App Router is the ability to create nested layouts that preserve state, remain interactive, and don't re-render when users navigate between routes. This creates a much smoother user experience, especially for complex applications.",
      
      "Server Components are a new React feature that allows you to render components on the server and stream them to the client. This can significantly improve performance by reducing the JavaScript bundle size and enabling better streaming and partial rendering.",
      
      "To get started with the App Router, create a new app directory in your project. This directory will contain all your routes, layouts, and components that use the new routing system. The app directory works alongside the pages directory, so you can migrate your application gradually.",
      
      "Next.js 13 also introduces new file conventions: layout.js, page.js, loading.js, error.js, and more. These files have special meanings in the framework and enable powerful new patterns. For example, layout.js defines a UI that is shared between multiple pages, while loading.js creates an instant loading state that appears immediately upon navigation.",
      
      "One thing to keep in mind is that Server Components are the default in the App Router. This means you don't need to fetch data in useEffect or getStaticProps anymore. Instead, you can use async/await directly in your components, which simplifies your code and improves performance.",
      
      "In conclusion, the App Router in Next.js 13 represents a significant step forward for React applications. By embracing Server Components and introducing new routing capabilities, it enables developers to build faster, more responsive, and more maintainable web applications."
    ]
  },
  {
    title: "Neo-Brutalism in Web Design",
    date: "February 15, 2025",
    excerpt: "Exploring the growing trend of neo-brutalism in modern web design and how to implement it.",
    slug: "neo-brutalism-web-design",
    tags: ["Design", "CSS", "Trends"],
    color: "!bg-neo-yellow",
    textColor: "text-black",
    content: [
      "Neo-brutalism has emerged as one of the most distinctive web design trends in recent years, characterized by bold colors, raw elements, and an unapologetically rugged aesthetic. This style is a digital reinterpretation of Brutalist architecture from the 1950s-1970s, which emphasized exposed concrete, geometric shapes, and utilitarian design.",
      
      "What makes neo-brutalism stand out in the digital landscape is its stark contrast to the clean, minimalist designs that have dominated for the past decade. Instead of subtle gradients and rounded corners, neo-brutalist websites feature high-contrast colors, hard shadows, asymmetrical layouts, and deliberately 'unrefined' elements.",
      
      "Key characteristics of neo-brutalist web design include bold typography (often sans-serif fonts with high contrast weights), vibrant and sometimes clashing color schemes, visible borders and structural elements, rotated elements that break the grid, and intentionally raw or unpolished components.",
      
      "From a technical standpoint, implementing neo-brutalism involves embracing CSS features that might have previously been avoided in more refined designs. Hard drop shadows with no blur (box-shadow with 0px blur), thick borders, extreme color contrasts, and transforms for tilted elements are all common techniques.",
      
      "What's particularly interesting about this trend is how it challenges conventional usability wisdom. While it might seem that these designs would create poor user experiences, when implemented thoughtfully, neo-brutalist sites can actually be highly engaging and memorable. The key is balancing the raw aesthetic with functional navigation and readable content.",
      
      "For developers looking to experiment with neo-brutalism, start with a foundation of structural CSS grid layouts, then add rotated elements, high-contrast colors, and visible borders. Consider incorporating simple animations that emphasize the mechanical or raw nature of elements rather than smooth, polished transitions.",
      
      "Neo-brutalism works particularly well for portfolios, creative agencies, and brands that want to convey boldness and originality. It's also an excellent choice for temporary sites like event promotions or campaign pages where making a strong visual impact quickly is essential.",
      
      "As with any trend, the most successful implementations of neo-brutalism don't just copy the surface-level aesthetics but understand the underlying principles. The best neo-brutalist designs embrace imperfection while still maintaining purposeful composition and thoughtful user flows."
    ]
  },
  {
    title: "Animation Principles for Frontend Developers",
    date: "January 28, 2025",
    excerpt: "Understanding animation principles can dramatically improve your UI/UX designs. Here's what you need to know.",
    slug: "animation-principles-frontend",
    tags: ["Animation", "Framer Motion", "UX"],
    color: "!bg-neo-blue",
    textColor: "text-white",
    content: [
      "Animation is far more than just making elements move on a screen. When used properly, it can guide users, provide feedback, express brand personality, and create memorable experiences. To create truly effective animations, frontend developers should understand the core principles that have guided animators for decades.",
      
      "Walt Disney's 12 principles of animation, developed in the 1930s, remain remarkably relevant to digital interfaces today. These principles—including timing, anticipation, follow-through, and squash and stretch—provide a framework for creating animations that feel natural and purposeful rather than random or jarring.",
      
      "One of the most important principles for UI animation is 'ease-in-ease-out.' Objects in the real world don't start and stop instantly; they accelerate and decelerate. By applying this natural motion pattern to interface elements, animations feel more organic and less mechanical. In CSS, this is achieved with cubic-bezier timing functions, while libraries like Framer Motion offer presets that implement this principle automatically.",
      
      "Another crucial concept is 'secondary action'—supplementary movements that reinforce the main animation. For example, when a modal appears, a subtle background blur might fade in simultaneously. These secondary actions add depth to the interaction without competing for attention with the primary movement.",
      
      "For complex animations, frameworks like Framer Motion provide powerful tools that make it easier to implement advanced techniques. Features like staggered animations, gesture recognitions, and variants allow developers to create sophisticated motion systems without writing extensive code.",
      
      "When implementing animations, always consider the purpose: Is it guiding attention? Providing feedback? Expressing brand personality? Purely decorative animations might look impressive, but functional animations improve usability. A button that subtly transforms when clicked provides immediate feedback that the action was registered.",
      
      "Performance is another critical consideration. Animations should target properties that browsers can optimize (transform and opacity) rather than those that trigger repaints (left/top positioning or dimensions). Modern browsers can hardware-accelerate certain animations, resulting in smoother experiences, especially on mobile devices.",
      
      "Ultimately, great UI animation isn't about showing off technical skills—it's about enhancing the user experience in ways that feel natural and intuitive. When users don't consciously notice your animations but feel that the interface is especially responsive and pleasant to use, you've succeeded in applying animation principles effectively."
    ]
  },
  {
    title: "TypeScript Tips and Tricks",
    date: "January 10, 2025",
    excerpt: "Advanced TypeScript patterns and techniques that will improve your code quality.",
    slug: "typescript-tips-tricks",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    color: "!bg-neo-red",
    textColor: "text-white",
    content: [
      "TypeScript has revolutionized JavaScript development by adding static types, making code more predictable, easier to refactor, and better documented. But beyond the basics of type annotations, there are numerous advanced patterns and techniques that can significantly level up your TypeScript skills.",
      
      "One powerful but underused feature is discriminated unions. By including a common property with literal types that discriminate between different shapes, you can create type-safe code that handles variations elegantly. This pattern is particularly useful for state management, API responses, and any scenario where you need to handle multiple related but distinct data structures.",
      
      "TypeScript's utility types provide concise ways to transform existing types. Types like Partial<T>, Pick<T, K>, Omit<T, K>, and Record<K, T> allow you to derive new types from existing ones without duplicating definitions. For example, using Partial<User> creates a type where all properties of User become optional—perfect for update operations.",
      
      "For complex type relationships, conditional types enable you to express type transformations with if/else logic. Combined with the infer keyword, you can extract types from other types, such as extracting the return type of a function or the payload type from a complex generic. These patterns eliminate redundant type declarations and keep your types DRY.",
      
      "When working with external libraries or APIs, TypeScript declaration merging allows you to augment existing types. You can add properties to interfaces defined elsewhere or extend namespace declarations. This is particularly useful when you need to add custom properties to third-party types without modifying the original declarations.",
      
      "For stricter type checking, consider enabling the strictest TypeScript compiler options, including noImplicitAny, strictNullChecks, and strictBindCallApply. While these settings might initially lead to more type errors, they catch potential runtime issues during development and encourage more precise type definitions.",
      
      "Template literal types, introduced in TypeScript 4.1, allow you to create types based on string patterns. This feature is perfect for defining URL paths, event names, or any string-based API with specific formats. Combined with mapped types, you can generate entire type systems from string literals, ensuring type safety even for dynamic string values.",
      
      "Finally, don't underestimate the power of TypeScript's built-in type inference. Often, explicit type annotations are unnecessary and can make code more verbose. Let TypeScript infer types where possible, and add explicit annotations only where necessary for clarity or where inference doesn't provide the precision you need. This balance results in code that's both type-safe and readable."
    ]
  }
];

// Helper function to get all tags from blog posts
export function getAllTags() {
  const allTags = blogPosts.flatMap(post => post.tags);
  return [...new Set(allTags)]; // Remove duplicates
}
