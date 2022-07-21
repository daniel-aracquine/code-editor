import Editor from "@monaco-editor/react";

const EditorWindow = ({language = "javascript", theme = "vs-dark" }) => {
    return <div>
        <Editor 
            height = "40vh"
            width = "100%"
            language = {language}
            theme = {theme}
            defaultValue = "//Let's Code"
        />
    </div>
}

export default EditorWindow;