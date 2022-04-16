type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

const Greet = (props: GreetProps) => {

    const { messageCount = 0 } = props;
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn
                        ? `Bem vindo ${props.name} você tem ${messageCount} mensagens não lidas!`
                        : 'Bem vindo visitante!'
                }
            </h2>
        </div>
    );
}

export default Greet;