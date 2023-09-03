const User = (props) => {
    const {name, phone, website} = props.user;
    return (
        <div>
            <div>{name}</div>
            <div>{phone}</div>
            <div>{website}</div>
        </div>
    );
};
export default User;