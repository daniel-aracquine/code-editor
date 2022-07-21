const CustomInput = ({customInput, onChange}) => {
    return (
        <div>
            <textarea 
                rows="5"
                value={customInput}
                placeholder="Custom Input"
                onChange={(e) => { 
                    onChange(e.target.value)
                }}
            />
        </div>
    )
}

export default CustomInput