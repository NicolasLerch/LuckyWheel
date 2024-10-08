import './userForm.css'
export default function UserForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email')
        }
        console.log(data);
        window.location.href = '/lucky-wheel';
    }
    return (
        <div className="user-form-container">
            <h1 className='user-form-title'>REGISTRATE</h1>
            <form className="user-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" name="first_name"/>
                <input type="text" placeholder="Apellido" name="last_name"/>
                <input type="email" placeholder="Email" name="email"/>
                <button className="user-form-submit-button" type="submit">Registrarse</button>
            </form>
        </div>
    )
}