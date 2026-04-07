import styled from "styled-components";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const RegCircleIcon = FaRegCircle as React.FC;
const RegCheckCircleIcon = FaRegCheckCircle as React.FC;

interface Props {
    isChecked: boolean;
    onCheck: () => void;
}

function CheckIconButton({ isChecked, onCheck }: Props) {
    return (
        <CheckIconButtonStyle onClick={onCheck}>
            {isChecked ? <RegCircleIcon /> : <RegCheckCircleIcon />}
        </CheckIconButtonStyle>
    );
}

const CheckIconButtonStyle = styled.div``;

export default CheckIconButton;
