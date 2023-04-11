import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mt-24">
        <h1 className="text-2xl font-bold">
          Q.1. When should use context api?
        </h1>
        <p>
          Ans...Context is primarily used when some data needs to be accessible
          by many components at different nesting levels. Apply it sparingly
          because it makes component reuse more difficult. If you only want to
          avoid passing some props through many levels, component composition is
          often a simpler solution than context.
        </p>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-bold">Q.2.What is Custom hooks?</h1>
        <p>
          Ans.... A custom hook is a special JavaScript function whose name
          starts with ‘use’ and can be used to call other hooks. Let’s take a
          look at some major differences between a custom React JS hook and
          React JS components: A custom hook does not require a specific
          signature. A software developer can choose what argument the custom
          hook has and what should the argument return.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">Q.3.what is useRef?</h1>
        <p>
          Ans... useRef is a React Hook that lets you reference a value that’s
          not needed for rendering.The useRef Hook allows you to persist values
          between renders. It can be used to store a mutable value that does not
          cause a re-render when updated. It can be used to access a DOM element
          directly.
        </p>
      </div>
    </div>
  );
};

export default Blog;
