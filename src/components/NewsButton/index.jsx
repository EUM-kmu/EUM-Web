import { ButtonContainer, Icon, Text } from "./styles"

const NewsButton = ({iconSrc, text, onClickEvent}) => {
    return (
        <ButtonContainer
            onClick={ onClickEvent }
        >
            <Icon src={iconSrc} />
            <Text>{text}</Text>
        </ButtonContainer>
    )
}

export default NewsButton;