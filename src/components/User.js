const User = (props) => {
    const {name, phone, website} = props;
    return (
        <div className="User">
            <div>{name}</div>
            <div>{phone}</div>
            <div>{website}</div>
        </div>
    );
};
export default User;