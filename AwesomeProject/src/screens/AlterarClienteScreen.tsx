import TelaAlterarCliente from "../layouts/TelaAlterarCliente";
import { AlterarClienteProps } from "../types";


const AlterarClienteScreen = ({ navigation, route }: AlterarClienteProps) => {
    return (
        <TelaAlterarCliente navigation={navigation} route={route} />
    );
};

export default AlterarClienteScreen;