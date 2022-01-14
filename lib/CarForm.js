export default function CarForm() {

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = new FormData(event.target)
        const formData = Object.fromEntries(form.entries())

        console.log( formData)

        const res = await fetch('/api/cars', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })

        const result = await res.json()
        console.log(result)
    }

    return(
        <form onSubmit={handleSubmit} className="form">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Make</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <p className="control">
                        <input name="make" className="input" type="text"/>
                    </p>
                    </div>
                </div>
            </div>
            <input name="model" type="text" className="input" />
            <input name="image" type="text" className="input" />
            <textarea name="description" type="text" />

            <button type="submit" className="button">Create Car</button>
        </form>
    )
}