interface Params {
    initialHtml: string;
    backgroundColor: string;
    fontSize: number;
    placeholder: string;
    placeholderColor: string;
}

export const getRichEditorHtml = ({
    initialHtml,
    backgroundColor,
    fontSize,
    placeholder,
    placeholderColor,
}: Params): string => {
    return `<html>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
          <style>
              html {
                  background-color: ${backgroundColor};
                  font-family: sans-serif;
                  font-size: ${fontSize}px;
              }

              #content {
                  white-space: pre-line;
                  outline: none;
                  padding-left: 5px;
                  padding-right: 5px;
                  padding-top: 10px;
                  padding-bottom: 25px;
              }

              [contenteditable][placeholder]:empty:before {
                  content: attr(placeholder);
                  position: absolute;
                  color: ${placeholderColor};
              }
          </style>
      </head>

      <body>
          <div contenteditable id="content" placeholder="${placeholder}">${initialHtml}</div>

          <script>
              const emitData = function () {
                  const data = {
                      height: editor.scrollHeight,
                      content: editor.innerHTML
                  };

                  window.ReactNativeWebView.postMessage(JSON.stringify(data))
              }

              const editor = document.querySelector("#content")
              editor.addEventListener("input", emitData)

              emitData()
          </script>
      </body>
  </html>`;
};
