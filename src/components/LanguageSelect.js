import Select from 'react-select';
import {languages} from '../constants/languages'

const LanguageSelect = ({onChange}) => {
    return (
        <div>
            <Select 
                options={languages}
                defaultValue={languages[0]}
                onChange ={ (selectedLanguage) => {
                    onChange(selectedLanguage)
                }}
            />
        </div>
    )
}

export default LanguageSelect;