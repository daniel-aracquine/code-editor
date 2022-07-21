import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";

const ThemeSelect = ({onChange, theme }) => {
    const themeOptions = Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
    }))

    themeOptions.push({
        label: "VS-Dark",
        value: "vs-dark",
        key: "vs-dark"
    })

    themeOptions.push({
        label: "Light",
        value: "light",
        key: "light"
    })

    return(
        <div>
            <Select 
                options={themeOptions}
                defaultValue={theme}
                onChange={ (selectedTheme) => {
                    onChange(selectedTheme)
                }}
            />
        </div>
    )
}

export default ThemeSelect;