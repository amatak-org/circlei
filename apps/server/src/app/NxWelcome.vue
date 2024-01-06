<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div id="welcome">
        <h1>
         <!--  Server Start   ---->

          <span> Amatak Server</span>
          Welcome {{ title }} 👋
        </h1>
      </div>

      <div id="hero" class="rounded">
        <div class="text-container">
          <h2>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span>Your app is running...!</span>
          </h2>

          <!--     ---->
          <a href="/admin"> Login</a>
        </div>
        <div class="logo-container">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="150"
          height="149">
          <g>
              <image x="0" y="0" width="150" height="149"
                xlink:href="data:image/png;base64,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"/>
          </g>
          </svg>

        </div>
      </div>

        <!--     ---->

      <div id="middle-content">
        <div id="learning-materials" class="rounded shadow">
          <h2>Get Started.</h2>
          <a
            href="https://amatak.org"
            target="_blank"
            rel="noreferrer"
            class="list-item-link"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>
              Documentation
              <span> Everything is in there </span>
            </span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/amatak.io"
            target="_blank"
            rel="noreferrer"
            class="list-item-link"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <span>
              Faccebook Page
              <span> Changelog, features & events </span>
            </span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="list-item-link"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>YouTube</title>
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
            <span>
              YouTube channel
              <span> Nx Show, talks & tutorials </span>
            </span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="list-item-link"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            <span>
              Join Us At Slack
              <span> Create an app, step-by-step </span>
            </span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="list-item-link"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <span>
              Video courses
              <span> Amatak courses </span>
            </span>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
        <div id="other-links">
          <a
            id="nx-console"
            class="button-pill rounded shadow"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>double ledger accounting</title>
              <path
                d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
              />
            </svg>
            <span>
              Available both macOS & Windows
              <span>Offline Application.</span>
            </span>
          </a>
          <a
            id="nx-console-jetbrains"
            class="button-pill rounded shadow"
            href="https://plugins.jetbrains.com/plugin/21060-nx-console"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              height="48"
              width="48"
              viewBox="20 20 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m22.5 22.5h60v60h-60z" />
              <g fill="#fff">
                <path d="m29.03 71.25h22.5v3.75h-22.5z" />
                <path
                  d="m28.09 38 1.67-1.58a1.88 1.88 0 0 0 1.47.87c.64 0 1.06-.44 1.06-1.31v-5.98h2.58v6a3.48 3.48 0 0 1 -.87 2.6 3.56 3.56 0 0 1 -2.57.95 3.84 3.84 0 0 1 -3.34-1.55z"
                />
                <path
                  d="m36 30h7.53v2.19h-5v1.44h4.49v2h-4.42v1.49h5v2.21h-7.6z"
                />
                <path d="m47.23 32.29h-2.8v-2.29h8.21v2.27h-2.81v7.1h-2.6z" />
                <path
                  d="m29.13 43.08h4.42a3.53 3.53 0 0 1 2.55.83 2.09 2.09 0 0 1 .6 1.53 2.16 2.16 0 0 1 -1.44 2.09 2.27 2.27 0 0 1 1.86 2.29c0 1.61-1.31 2.59-3.55 2.59h-4.44zm5 2.89c0-.52-.42-.8-1.18-.8h-1.29v1.64h1.24c.79 0 1.25-.26 1.25-.81zm-.9 2.66h-1.57v1.73h1.62c.8 0 1.24-.31 1.24-.86 0-.5-.4-.87-1.27-.87z"
                />
                <path
                  d="m38 43.08h4.1a4.19 4.19 0 0 1 3 1 2.93 2.93 0 0 1 .9 2.19 3 3 0 0 1 -1.93 2.89l2.24 3.27h-3l-1.88-2.84h-.87v2.84h-2.56zm4 4.5c.87 0 1.39-.43 1.39-1.11 0-.75-.54-1.12-1.4-1.12h-1.44v2.26z"
                />
                <path
                  d="m49.59 43h2.5l4 9.44h-2.79l-.67-1.69h-3.63l-.67 1.69h-2.71zm2.27 5.73-1-2.65-1.06 2.65z"
                />
                <path d="m56.46 43.05h2.6v9.37h-2.6z" />
                <path
                  d="m60.06 43.05h2.42l3.37 5v-5h2.57v9.37h-2.26l-3.53-5.14v5.14h-2.57z"
                />
                <path
                  d="m68.86 51 1.45-1.73a4.84 4.84 0 0 0 3 1.13c.71 0 1.08-.24 1.08-.65 0-.4-.31-.6-1.59-.91-2-.46-3.53-1-3.53-2.93 0-1.74 1.37-3 3.62-3a5.89 5.89 0 0 1 3.86 1.25l-1.26 1.84a4.63 4.63 0 0 0 -2.62-.92c-.63 0-.94.25-.94.6 0 .42.32.61 1.63.91 2.14.46 3.44 1.16 3.44 2.91 0 1.91-1.51 3-3.79 3a6.58 6.58 0 0 1 -4.35-1.5z"
                />
              </g>
            </svg>
            <span>
              Install Visa NPM or Yarn
              <span>
                Opensource / Enterprise
              </span>
            </span>
          </a>
          <div id="nx-cloud" class="rounded shadow">
            <div>
              <svg
                id="nx-cloud-logo"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="transparent"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  d="M23 3.75V6.5c-3.036 0-5.5 2.464-5.5 5.5s-2.464 5.5-5.5 5.5-5.5 2.464-5.5 5.5H3.75C2.232 23 1 21.768 1 20.25V3.75C1 2.232 2.232 1 3.75 1h16.5C21.768 1 23 2.232 23 3.75Z"
                />
                <path
                  strokeWidth="2"
                  d="M23 6v14.1667C23 21.7307 21.7307 23 20.1667 23H6c0-3.128 2.53867-5.6667 5.6667-5.6667 3.128 0 5.6666-2.5386 5.6666-5.6666C17.3333 8.53867 19.872 6 23 6Z"
                />
              </svg>
              <h2>
                Amatak Cloud.
                <span>Enable faster CI & better DX</span>
              </h2>
            </div>
          </div>
          <a
            id="nx-repo"
            class="button-pill rounded shadow"
            href="https://github.com/amatak-io/amatak"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            <span>
              Check out.
              <span> Love Amatak? Give us a star! </span>
            </span>
          </a>
        </div>
      </div>

      <div id="commands" class="rounded shadow">
        <h2>Installation.</h2>
        <p>On your terminal or any code editor:</p>
        <details>
          <summary>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            npx amatak@last
          </summary>
          <pre>
            <span>Npm / Yarn</span>
            cd to amatak
            <span># Add a component</span>
            nx g @nx/vue:component ui/src/lib/button
          </pre>
        </details>
        <details>
          <summary>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            View interactive project graph
          </summary>
          <pre>nx graph</pre>
        </details>
        <details>
          <summary>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Run affected commands
          </summary>
          <pre>
            <span># see what&apos;s been affected by changes</span>
            nx affected:graph
            <span># run tests for current changes</span>
            nx affected:test
            <span># run e2e tests for current changes</span>
            nx affected:e2e
          </pre>
        </details>
      </div>

      <p id="love">
        Built With Amatak.
        <svg
          fill="currentColor"
          stroke="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </p>
    </div>
  </div>
</template>

<style scoped>
svg {
  display: block;
  vertical-align: middle;
  shape-rendering: auto;
  text-rendering: optimizeLegibility;
}
pre {
  background-color: rgba(55, 65, 81, 1);
  border-radius: 0.25rem;
  color: rgba(229, 231, 235, 1);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  overflow: scroll;
  padding: 0.5rem 0.75rem;
}

.shadow {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.rounded {
  border-radius: 1.5rem;
}
.wrapper {
  width: 100%;
}
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color:##3f4f78;
  width: 100%;
}
#welcome {
  margin-top: 2.5rem;
}
#welcome h1 {
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1;
}
#welcome span {
  display: block;
  font-size: 1.875rem;
  font-weight: 300;
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
}
#hero {
  align-items: center;
  background-color:#3f4f78;
  border: none;
  box-sizing: border-box;
  color: rgba(55, 65, 81, 1);
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3.5rem;
}
#hero .text-container {
  color:#8e95a2;
  padding: 3rem 2rem;
}
#hero .text-container h2 {
  font-size: 1.5rem;
  line-height: 2rem;
  position: relative;
}
#hero .text-container h2 svg {
  color:#8e95a2;
  height: 2rem;
  left: -0.25rem;
  position: absolute;
  top: 0;
  width: 2rem;
}
#hero .text-container h2 span {
  margin-left: 2.5rem;
}
#hero .text-container a {
  background-color:#f7f8f8;
  border-radius: 0.75rem;
  color: rgba(55, 65, 81, 1);
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  text-decoration: inherit;
}
#hero .logo-container {
  display: none;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
}
#hero .logo-container svg {
  color: rgba(255, 255, 255, 1);
  width: 66.666667%;
}
#middle-content {
  align-items: flex-start;
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr;
  margin-top: 3.5rem;
}
#learning-materials {
  padding: 2.5rem 2rem;
}
#learning-materials h2 {
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: -0.025em;
  line-height: 1.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.list-item-link {
  align-items: center;
  border-radius: 0.75rem;
  display: flex;
  margin-top: 1rem;
  padding: 1rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  width: 100%;
}
.list-item-link svg:first-child {
  margin-right: 1rem;
  height: 1.5rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  width: 1.5rem;
}
.list-item-link > span {
  flex-grow: 1;
  font-weight: 400;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.list-item-link > span > span {
  color: rgba(107, 114, 128, 1);
  display: block;
  flex-grow: 1;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.list-item-link svg:last-child {
  height: 1rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  width: 1rem;
}
.list-item-link:hover {
  color: rgba(255, 255, 255, 1);
  background-color: hsla(162, 47%, 50%, 1);
}
.list-item-link:hover > span {
}
.list-item-link:hover > span > span {
  color: rgba(243, 244, 246, 1);
}
.list-item-link:hover svg:last-child {
  transform: translateX(0.25rem);
}
#other-links {
}
.button-pill {
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  transition-duration: 300ms;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  align-items: center;
  display: flex;
}
.button-pill svg {
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  flex-shrink: 0;
  width: 3rem;
}
.button-pill > span {
  letter-spacing: -0.025em;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.button-pill span span {
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.25rem;
}
.button-pill:hover svg,
.button-pill:hover {
  color: rgba(255, 255, 255, 1) !important;
}
#nx-console:hover {
  background-color: rgba(0, 122, 204, 1);
}
#nx-console svg {
  color: rgba(0, 122, 204, 1);
}
#nx-console-jetbrains {
  margin-top: 2rem;
}
#nx-console-jetbrains:hover {
  background-color: rgba(255, 49, 140, 1);
}
#nx-console-jetbrains svg {
  color: rgba(255, 49, 140, 1);
}
#nx-repo:hover {
  background-color: rgba(24, 23, 23, 1);
}
#nx-repo svg {
  color: rgba(24, 23, 23, 1);
}
#nx-cloud {
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 2.5rem 2rem;
}
#nx-cloud > div {
  align-items: center;
  display: flex;
}
#nx-cloud > div svg {
  border-radius: 0.375rem;
  flex-shrink: 0;
  width: 3rem;
}
#nx-cloud > div h2 {
  font-size: 1.125rem;
  font-weight: 400;
  letter-spacing: -0.025em;
  line-height: 1.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
#nx-cloud > div h2 span {
  display: block;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.25rem;
}
#nx-cloud p {
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1rem;
}
#nx-cloud pre {
  margin-top: 1rem;
}
#nx-cloud a {
  color: rgba(107, 114, 128, 1);
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 1.5rem;
  text-align: right;
}
#nx-cloud a:hover {
  text-decoration: underline;
}
#commands {
  padding: 2.5rem 2rem;
  margin-top: 3.5rem;
}
#commands h2 {
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: -0.025em;
  line-height: 1.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
#commands p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
details {
  align-items: center;
  display: flex;
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
}
details pre > span {
  color: rgba(181, 181, 181, 1);
  display: block;
}
summary {
  border-radius: 0.5rem;
  display: flex;
  font-weight: 400;
  padding: 0.5rem;
  cursor: pointer;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
summary:hover {
  background-color: rgba(243, 244, 246, 1);
}
summary svg {
  height: 1.5rem;
  margin-right: 1rem;
  width: 1.5rem;
}
#love {
  color: rgba(107, 114, 128, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 3.5rem;
  opacity: 0.6;
  text-align: center;
}
#love svg {
  color: rgba(252, 165, 165, 1);
  width: 1.25rem;
  height: 1.25rem;
  display: inline;
  margin-top: -0.25rem;
}
@media screen and (min-width: 768px) {
  #hero {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  #hero .logo-container {
    display: flex;
  }
  #middle-content {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
