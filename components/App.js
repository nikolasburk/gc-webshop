export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: Open Sans;
      }
      body {
        margin: 0;
      }
      a {
        color: #22BAD9;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22BAD9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1B9DB7;
        transition: background-color .3s
      }
      button:focus {
        outline: none;
      }
      .button {
        display: inline-block;
        padding: 12px 16px;
        border-radius: 2px;
        background: rgba(42, 126, 210, 1);
        color: white;
        cursor: pointer;
      }
      .button:hover {
        background: rgba(29, 96, 162, 1);
      }
      .button.red {
        background: rgba(242, 92, 84, 1);
      }
      .button.red:hover {
        background: rgba(242, 92, 84, 1);
      }

    `}</style>
  </main>
)
