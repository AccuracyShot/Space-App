const ModalZoom = ({ foto }) => {
    return (
        <>
            <dialog open={!!foto}>
                <p>
                    Teste
                </p>
                <form action="dialog">
                    <button>Fechar</button>
                </form>
            </dialog>
        </>
    )
}

export default ModalZoom