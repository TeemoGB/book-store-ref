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

const CheckIconButtonStyle = styled.div`
    background: none;
    border: 0;
    cursor: pointer;

    svg {
        width: 24px;
        height: 24px;
    }
`;

export default CheckIconButton;
