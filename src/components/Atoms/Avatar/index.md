# Avatar

## Usage

```javascript
import { Avatar } from "react-native-ios-ui"

const AvatarWithInitials = () => {
    return (
        <Avatar
            firstName="John"
            lastName="Smith"
            backgroundColor="red"
        />
    )
}

const AvatarWithImage = () => {
    return (
        <Avatar url="https://picsum.photos/200" />
    )
}
```

## API

### Props

| Prop | Description | Type | Signature (func) | Default |
| --- | --- | --- | --- | --- |
| `firstName` | The first name of the user | `string` |  |  |
| `lastName` | The last name of the user | `string` |  |  |
| `backgroundColor` | The background name of the user | `string` |  |  |
| `url` | The background name of the user | `string` |  |  |



You can also provide any valid React Native `View` props.
