import React from "react";

const Blog = () => {
  return (
    <div className="bg-zinc-600 my-20 py-20">
      <div className="text-white p-5">
        <h1 className="text-4xl">Diffence Between SQL And NoSQL</h1>
        <p>
          <div>
            <h1 className="text-2xl">SQL</h1>
            <p>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
          </div>
          <div>
            <h1 className="text-2xl">NoSQL</h1>
            <p>
              NoSQL is a non-relational DMS, that does not require a fixed
              schema, avoids joins, and is easy to scale. NoSQL database is used
              for distributed data stores with humongous data storage needs.
              NoSQL is used for Big data and real-time web apps. For example
              companies like Twitter, Facebook, Google that collect terabytes of
              user data every single day.
            </p>
          </div>
        </p>
        <p className="text-center mt-4">
          -----------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <div className="text-white p-5">
        <h1 className="text-4xl">What is JWT? How does it work?</h1>
        <p>
          <h1 className="text-2xl">JWT Token</h1>
          <p>
            JWT or JSON Web Tokens are the new industry standards for securing
            APIs to and from the server. But what exactly is JWT? How does it
            work? Let us understand it more in detail.
          </p>
          <h1 className="text-2xl">How does it work</h1>
          <p>
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
          </p>
        </p>
        <p className="text-center mt-4">
          -----------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <div className="text-white p-5">
        <h1 className="text-4xl">
          What is the difference between javascript and NodeJS
        </h1>
        <p>
          <h1 className="text-2xl">What is Node.js?</h1>
          <p>
            For executing JavaScript on the server, Node.js is a bridge,
            open-source Js runtime environment. JavaScript code can now execute
            outside of the browser, thanks to Node.js. Node.js has many
            components and is primarily used for web development. It may run on
            various operating systems, including Windows, Linux, and Mac OS. It
            provides a cross-platform runtime environment for developing highly
            scalable server-side JavaScript applications with event-driven,
            non-blocking (asynchronous) I/O. Ryan Dahl invented and popularised
            Node.js in 2009. Web apps, command-line apps, real-time chat apps,
            and REST API servers are just a few applications that can be built
            using Node.js. It is, however, mainly used to create network
            programs like web servers—Node.js’s standard filename extension
            is.js. You can enroll in the best node js course online if you find
            helpful node js.
          </p>
          <h1 className="text=2xl">What is JavaScript?</h1>
          <p>
            Javascript is a simple object-oriented programming language for
            building interactive HTML pages. JavaScript is also commonly used in
            the development of games and mobile applications. The program can
            only be executed and run in an internet browser because it is
            interpreted as scripting. To run and execute the code outside the
            browser, we can utilize Node.js. It's also known as a browser
            settings language because it may be used for client-side and
            server-side programming. Brendan Eich of Netscape designed it, and
            it was first released in 1995. Before being renamed JavaScript, the
            language was known as LiveScript. The programming language C has a
            significant influence on JavaScript's syntax. The filename extension
            for JavaScript is.js. Angular js node js are both also based on
            JavaScript.
          </p>
        </p>
        <p className="text-center mt-4">
          -----------------------------------------------------------------------------------------------------------
        </p>
      </div>
      <div className="text-white p-5">
        <h1 className="text-4xl">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <p>
          Given a NodeJS application, since Node is single threaded, say if
          processing involves a Promise.all that takes 8 seconds, does this mean
          that the client request that comes after this request would need to
          wait for eight seconds? No. NodeJS event loop is single threaded. The
          entire server architecture for NodeJS is not single threaded. Before
          getting into the Node server architecture, to take a look at typical
          multithreaded request response model, the web server would have
          multiple threads and when concurrent requests get to the webserver,
          the webserver picks threadOne from the threadPool and threadOne
          processes requestOne and responds to clientOne and when the second
          request comes in, the web server picks up the second thread from the
          threadPool and picks up requestTwo and processes it and responds to
          clientTwo. threadOne is responsible for all kinds of operations that
          requestOne demanded including doing any blocking IO operations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
