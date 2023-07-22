import CardContext from './CardContext';

const CardState = (props) => {
    const store = {
        name: "shivam"
    }

    return (
        <CardState.Provider store={store}>
            {props.children}
        </CardState.Provider>
    )
}

export default CardState